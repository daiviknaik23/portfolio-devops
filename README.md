# 🚀 Portfolio Website Deployment with CI/CD Pipeline

## Using AWS S3, Route 53, CloudFront & Jenkins

[![Deploy Status](https://img.shields.io/badge/deploy-success-brightgreen)]()
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)]()
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)]()
[![AWS](https://img.shields.io/badge/AWS-S3%20%7C%20CloudFront%20%7C%20Route53-FF9900?logo=amazonaws)]()
[![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D33833?logo=jenkins)]()

A production-ready personal portfolio website with a fully automated CI/CD pipeline. Push code to GitHub and watch it deploy automatically to AWS.

---

## 📋 Table of Contents

- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [AWS Setup](#-aws-setup)
- [Jenkins Setup](#-jenkins-setup)
- [CI/CD Workflow](#-cicd-workflow)
- [Project Structure](#-project-structure)
- [Deployment Guide](#-deployment-guide)
- [Future Scope](#-future-scope)

---

## 🏗 Architecture

```
Developer → GitHub → Jenkins → Build → S3 → CloudFront → Users
                ↑                              ↓
          Webhook Trigger              Route 53 DNS
```

### CI/CD Flow:
1. Developer pushes code to GitHub
2. GitHub webhook triggers Jenkins
3. Jenkins pulls code, installs deps, builds project
4. Build artifacts uploaded to AWS S3
5. CloudFront cache invalidated
6. Website goes live globally via CDN

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, Vite 5, Tailwind CSS 4, Framer Motion |
| **UI** | Lucide Icons, Chart.js, Typed.js |
| **CI/CD** | Jenkins, GitHub Actions, GitHub Webhooks |
| **Cloud** | AWS S3, CloudFront, Route 53, ACM, IAM |
| **IaC** | Terraform, Docker, Kubernetes |
| **Utilities** | EmailJS, React Router, React Hot Toast |

---

## ✨ Features

### Website Pages
- **Home** – Hero section, typing animation, GitHub stats, tech stack
- **About** – Bio, education timeline, experience, achievements
- **Skills** – Categorized skills with animated progress bars
- **Projects** – Filterable project cards with GitHub/demo links
- **Certifications** – Professional credentials display
- **Resume** – Formatted resume with PDF download
- **DevOps Dashboard** – Live CI/CD pipeline visualization
- **Monitoring** – Deployment metrics, charts, and analytics
- **Blog** – Searchable articles with category filters
- **Contact** – Form with EmailJS integration

### Design
- 🌙 Dark mode default
- 💎 Glassmorphism effects
- 🎨 Neon gradients
- ✨ Framer Motion animations
- 📱 Fully responsive (mobile-first)
- 🔮 Animated particle background
- 🎯 Scroll-reveal animations

### DevOps
- 🔄 Automated CI/CD pipeline
- 📦 Docker containerization
- ☸️ Kubernetes manifests
- 🏗 Terraform infrastructure as code
- 🔐 IAM security policies
- ⚡ CloudFront CDN distribution

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+
- AWS CLI configured
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/daiviknaik/portfolio-devops.git
cd portfolio-devops

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## ☁️ AWS Setup

### 1. S3 Bucket
```bash
# Create bucket
aws s3 mb s3://daivik-portfolio-website --region ap-south-1

# Enable static website hosting
aws s3 website s3://daivik-portfolio-website \
    --index-document index.html \
    --error-document index.html

# Apply bucket policy
aws s3api put-bucket-policy \
    --bucket daivik-portfolio-website \
    --policy file://devops/aws/s3-bucket-policy.json
```

### 2. CloudFront Distribution
- Create distribution pointing to S3 bucket
- Enable HTTPS redirect
- Set custom error page for SPA routing
- Configure cache behaviors

### 3. Route 53
- Create hosted zone for your domain
- Add A record aliased to CloudFront distribution
- Validate ACM certificate via DNS

### 4. IAM
- Create deployment user with policy from `devops/aws/iam-policy.json`
- Generate access keys for Jenkins/GitHub Actions

---

## 🔧 Jenkins Setup

### 1. Install Jenkins
```bash
# Docker method
docker run -d -p 8080:8080 -p 50000:50000 \
    -v jenkins_home:/var/jenkins_home \
    jenkins/jenkins:lts
```

### 2. Configure Jenkins
1. Install plugins: Git, Pipeline, AWS Credentials, NodeJS
2. Add AWS credentials (Access Key + Secret Key)
3. Add GitHub webhook URL: `http://jenkins-server:8080/github-webhook/`
4. Create Pipeline job pointing to `devops/Jenkinsfile`

### 3. GitHub Webhook
- Go to GitHub repo → Settings → Webhooks
- Payload URL: `http://your-jenkins-url:8080/github-webhook/`
- Content type: `application/json`
- Events: `Just the push event`

---

## 🔄 CI/CD Workflow

```
┌──────────┐    ┌──────────┐    ┌──────────┐
│  GitHub   │───▶│ Jenkins  │───▶│  Build   │
│   Push    │    │  Trigger │    │  (Vite)  │
└──────────┘    └──────────┘    └──────────┘
                                      │
                                      ▼
┌──────────┐    ┌──────────┐    ┌──────────┐
│   Live   │◀───│CloudFront│◀───│  S3      │
│ Website  │    │ Invalidate│    │ Deploy   │
└──────────┘    └──────────┘    └──────────┘
```

---

## 📁 Project Structure

```
portfolio-devops-project/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ParticleBackground.jsx
│   │   ├── SectionWrapper.jsx
│   │   ├── ErrorBoundary.jsx
│   │   └── LoadingScreen.jsx
│   ├── pages/            # Route pages
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── SkillsPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── CertificationsPage.jsx
│   │   ├── ResumePage.jsx
│   │   ├── DevOpsDashboardPage.jsx
│   │   ├── MonitoringPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── BlogPage.jsx
│   ├── data/             # Static data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── devops/
│   ├── Jenkinsfile
│   ├── deploy.sh
│   ├── nginx.conf
│   ├── aws/
│   │   ├── s3-bucket-policy.json
│   │   └── iam-policy.json
│   ├── scripts/
│   │   └── setup-aws.sh
│   ├── terraform/
│   │   └── main.tf
│   └── k8s/
│       └── deployment.yaml
├── .github/workflows/
│   └── deploy.yml
├── Dockerfile
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 📦 Deployment Guide

### Option 1: Jenkins (Primary)
Configured via `devops/Jenkinsfile`. Push to main branch triggers automatic deployment.

### Option 2: GitHub Actions
Configured via `.github/workflows/deploy.yml`. Alternative CI/CD pipeline.

### Option 3: Manual
```bash
npm run build
bash devops/deploy.sh
```

### Option 4: Docker
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

### Option 5: Terraform
```bash
cd devops/terraform
terraform init
terraform plan
terraform apply
```

---

## 🔮 Future Scope

- [ ] Progressive Web App (PWA) support
- [ ] Server-side rendering with Next.js
- [ ] AI chatbot integration
- [ ] Admin dashboard for content management
- [ ] Automated testing with Cypress
- [ ] Multi-region deployment
- [ ] A/B testing infrastructure
- [ ] Real-time visitor analytics
- [ ] Automated performance monitoring
- [ ] Blue/Green deployment strategy

---

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio!

---

**Built with ❤️ by Daivik Naik using React + AWS**
