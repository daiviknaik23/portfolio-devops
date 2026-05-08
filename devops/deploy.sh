#!/bin/bash
# =============================================================
# Portfolio Deployment Script
# Deploys React Vite build to AWS S3 + CloudFront
# =============================================================

set -euo pipefail

# Configuration
S3_BUCKET="${S3_BUCKET:-daivik-portfolio-website}"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-EXXXXXXXXXX}"
AWS_REGION="${AWS_REGION:-ap-south-1}"
BUILD_DIR="dist"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info()  { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
log_warn()  { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Verify prerequisites
check_prerequisites() {
    log_info "Checking prerequisites..."
    
    command -v aws >/dev/null 2>&1 || { log_error "AWS CLI not found"; exit 1; }
    command -v node >/dev/null 2>&1 || { log_error "Node.js not found"; exit 1; }
    command -v npm >/dev/null 2>&1 || { log_error "npm not found"; exit 1; }
    
    if [ ! -d "$BUILD_DIR" ]; then
        log_warn "Build directory not found. Building project..."
        npm ci
        npm run build
    fi
    
    log_success "All prerequisites met"
}

# Deploy to S3
deploy_to_s3() {
    log_info "Deploying to S3 bucket: $S3_BUCKET"
    
    # Sync static assets with long cache
    aws s3 sync "$BUILD_DIR/" "s3://$S3_BUCKET/" \
        --region "$AWS_REGION" \
        --delete \
        --cache-control "public, max-age=31536000, immutable" \
        --exclude "index.html" \
        --exclude "*.json" \
        --exclude "*.xml"
    
    # Upload index.html with no cache
    aws s3 cp "$BUILD_DIR/index.html" "s3://$S3_BUCKET/index.html" \
        --region "$AWS_REGION" \
        --cache-control "public, max-age=0, must-revalidate" \
        --content-type "text/html"
    
    log_success "Files deployed to S3"
}

# Invalidate CloudFront
invalidate_cloudfront() {
    log_info "Invalidating CloudFront distribution: $CLOUDFRONT_DISTRIBUTION_ID"
    
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)
    
    log_info "Invalidation created: $INVALIDATION_ID"
    
    # Wait for invalidation to complete
    log_info "Waiting for invalidation to complete..."
    aws cloudfront wait invalidation-completed \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
        --id "$INVALIDATION_ID"
    
    log_success "CloudFront cache invalidated"
}

# Main execution
main() {
    echo "============================================"
    echo "  Portfolio Deployment Script"
    echo "  $(date '+%Y-%m-%d %H:%M:%S')"
    echo "============================================"
    
    check_prerequisites
    deploy_to_s3
    invalidate_cloudfront
    
    echo ""
    log_success "🚀 Deployment complete!"
    echo ""
}

main "$@"
