#!/bin/bash
# =============================================================
# AWS Infrastructure Setup Script
# Sets up S3, CloudFront, and Route53 for portfolio hosting
# =============================================================

set -euo pipefail

# Configuration
BUCKET_NAME="daivik-portfolio-website"
DOMAIN_NAME="daivik-portfolio.example.com"
REGION="ap-south-1"
ACM_REGION="us-east-1"  # CloudFront requires certs in us-east-1

echo "============================================"
echo "  AWS Infrastructure Setup"
echo "============================================"

# Step 1: Create S3 Bucket
echo "📦 Creating S3 bucket..."
aws s3 mb "s3://$BUCKET_NAME" --region "$REGION" 2>/dev/null || echo "Bucket already exists"

# Step 2: Enable static website hosting
echo "🌐 Enabling static website hosting..."
aws s3 website "s3://$BUCKET_NAME" \
    --index-document index.html \
    --error-document index.html

# Step 3: Apply bucket policy
echo "🔐 Applying bucket policy..."
aws s3api put-bucket-policy \
    --bucket "$BUCKET_NAME" \
    --policy file://aws/s3-bucket-policy.json

# Step 4: Disable block public access
echo "🔓 Configuring public access..."
aws s3api put-public-access-block \
    --bucket "$BUCKET_NAME" \
    --public-access-block-configuration \
    "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# Step 5: Request ACM Certificate (must be in us-east-1 for CloudFront)
echo "📜 Requesting SSL certificate..."
CERT_ARN=$(aws acm request-certificate \
    --domain-name "$DOMAIN_NAME" \
    --validation-method DNS \
    --region "$ACM_REGION" \
    --query 'CertificateArn' \
    --output text)
echo "Certificate ARN: $CERT_ARN"
echo "⚠️  Remember to validate the certificate via DNS!"

# Step 6: Create CloudFront Distribution
echo "⚡ Creating CloudFront distribution..."
cat > /tmp/cf-config.json << EOF
{
    "CallerReference": "portfolio-$(date +%s)",
    "Origins": {
        "Quantity": 1,
        "Items": [{
            "Id": "S3-$BUCKET_NAME",
            "DomainName": "$BUCKET_NAME.s3-website.$REGION.amazonaws.com",
            "CustomOriginConfig": {
                "HTTPPort": 80,
                "HTTPSPort": 443,
                "OriginProtocolPolicy": "http-only"
            }
        }]
    },
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-$BUCKET_NAME",
        "ViewerProtocolPolicy": "redirect-to-https",
        "AllowedMethods": {
            "Quantity": 2,
            "Items": ["HEAD", "GET"]
        },
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": { "Forward": "none" }
        },
        "Compress": true,
        "MinTTL": 0,
        "DefaultTTL": 86400,
        "MaxTTL": 31536000
    },
    "Comment": "Portfolio Website CDN",
    "Enabled": true,
    "DefaultRootObject": "index.html",
    "CustomErrorResponses": {
        "Quantity": 1,
        "Items": [{
            "ErrorCode": 404,
            "ResponseCode": "200",
            "ResponsePagePath": "/index.html",
            "ErrorCachingMinTTL": 300
        }]
    }
}
EOF

CF_ID=$(aws cloudfront create-distribution \
    --distribution-config file:///tmp/cf-config.json \
    --query 'Distribution.Id' \
    --output text 2>/dev/null || echo "Distribution may already exist")

echo "CloudFront Distribution ID: $CF_ID"

echo ""
echo "============================================"
echo "  ✅ Infrastructure Setup Complete!"
echo "============================================"
echo ""
echo "Next steps:"
echo "  1. Validate ACM certificate via DNS"
echo "  2. Update Route 53 with CloudFront domain"
echo "  3. Configure Jenkins credentials"
echo "  4. Run first deployment"
