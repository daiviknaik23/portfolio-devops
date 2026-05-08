export const personalInfo = {
  name: "Daivik Naik",
  title: "Cloud | DevOps | Full Stack Developer",
  tagline: "CSE Student passionate about Software Development, AI/ML, DSA & Cybersecurity",
  email: "daiviknaik23@gmail.com",
  phone: "+91-XXXXXXXXXX",
  location: "Belgaum, Karnataka, India",
  bio: `I'm a passionate CSE student at KLE Technological University with expertise in building automated CI/CD pipelines, 
  managing cloud infrastructure on AWS, and developing modern full-stack web applications. 
  I specialize in Software Development, AI/ML, Data Structures & Algorithms, and Cybersecurity.
  My journey in tech has been driven by a deep curiosity for automation, infrastructure as code, 
  and the art of delivering software at scale. I'm an aspiring innovator in tech, always eager to learn and build.`,
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.jpg",
  social: {
    github: "https://github.com/daiviknaik23",
    linkedin: "https://linkedin.com/in/daiviknaik23",
    twitter: "https://twitter.com/daiviknaik23",
    email: "mailto:daiviknaik23@gmail.com",
  },
  githubStats: {
    repos: 8,
    stars: 0,
    contributions: 50,
    followers: 1,
  },
};

export const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "KLE Technological University",
    year: "2021 - 2025",
    grade: "CGPA: 8.5/10",
    description: "Focused on Cloud Computing, DevOps, AI/ML, and Full Stack Development",
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "Science College",
    year: "2019 - 2021",
    grade: "Percentage: 92%",
    description: "Science stream with Computer Science",
  },
];

export const experience = [
  {
    title: "Cloud & DevOps Intern",
    company: "Tech Solutions Inc.",
    period: "Jun 2024 - Present",
    description: "Designed and deployed CI/CD pipelines using Jenkins, Docker, and AWS. Automated infrastructure provisioning with Terraform.",
    tech: ["AWS", "Jenkins", "Docker", "Terraform"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "WebDev Studio",
    period: "Jan 2024 - May 2024",
    description: "Built responsive web applications using React, Node.js, and MongoDB. Implemented RESTful APIs and database optimization.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
  },
];

export const achievements = [
  "AWS Certified Cloud Practitioner",
  "Published research paper on Cloud Computing",
  "Winner of College Hackathon 2024",
  "Completed 500+ DSA problems on LeetCode",
  "Contributed to open-source DevOps tools",
];

export const skills = {
  frontend: [
    { name: "React", level: 90, icon: "Code2" },
    { name: "HTML5", level: 95, icon: "FileCode" },
    { name: "CSS3", level: 90, icon: "Palette" },
    { name: "Tailwind CSS", level: 88, icon: "Wind" },
    { name: "JavaScript", level: 92, icon: "Braces" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "Server" },
    { name: "Express.js", level: 82, icon: "Boxes" },
  ],
  database: [
    { name: "MySQL", level: 80, icon: "Database" },
    { name: "MongoDB", level: 78, icon: "HardDrive" },
  ],
  cloud: [
    { name: "AWS S3", level: 88, icon: "Cloud" },
    { name: "Route 53", level: 82, icon: "Globe" },
    { name: "EC2", level: 85, icon: "ServerCog" },
    { name: "CloudFront", level: 80, icon: "Zap" },
  ],
  devops: [
    { name: "Jenkins", level: 85, icon: "Workflow" },
    { name: "Docker", level: 82, icon: "Container" },
    { name: "GitHub Actions", level: 80, icon: "GitBranch" },
    { name: "CI/CD", level: 88, icon: "RefreshCw" },
  ],
  cybersecurity: [
    { name: "Wireshark", level: 72, icon: "Shield" },
    { name: "Network Analysis", level: 70, icon: "Network" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Portfolio CI/CD System",
    description: "Automated deployment pipeline using Jenkins, AWS S3, CloudFront, and Route53. Fully automated from GitHub push to live deployment with CloudFront CDN.",
    tech: ["React", "Jenkins", "AWS S3", "CloudFront", "Route53"],
    github: "https://github.com/daiviknaik23",
    live: "#",
    category: "DevOps",
    featured: true,
  },
  {
    id: 2,
    title: "Makeup Exam System",
    description: "Full-stack web application for managing make-up examinations with role-based access, scheduling, and automated notifications. Built with Java.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    github: "https://github.com/daiviknaik23/Makeup-Exam-System",
    live: "#",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    title: "AI Finance Platform",
    description: "AI-powered finance platform built during Hackathon. Features intelligent financial analytics, budgeting tools, and data-driven insights.",
    tech: ["HTML", "CSS", "JavaScript", "AI/ML"],
    github: "https://github.com/daiviknaik23/AI-Finance-Platform-Hackathon-2",
    live: "#",
    category: "AI/ML",
    featured: true,
  },
  {
    id: 4,
    title: "Real-Time Facial Emotion Recognition",
    description: "Deep learning system for real-time facial emotion detection using computer vision. Identifies emotions from live video feed with high accuracy.",
    tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    github: "https://github.com/daiviknaik23/Real-time-facial-emotions-recognition",
    live: "#",
    category: "AI/ML",
    featured: true,
  },
  {
    id: 5,
    title: "Smart Travel Hub",
    description: "Comprehensive travel management database system with SQL-based booking, itinerary planning, and travel analytics.",
    tech: ["SQL", "Database Design", "MySQL", "Data Modeling"],
    github: "https://github.com/daiviknaik23/Smart-Travel-Hub.sql",
    live: "#",
    category: "Database",
    featured: false,
  },
  {
    id: 6,
    title: "Travel Management System (DSA)",
    description: "Travel management system implementing data structures and algorithms for route optimization, shortest path finding, and efficient scheduling.",
    tech: ["C++", "DSA", "Graphs", "Algorithms"],
    github: "https://github.com/daiviknaik23/Travel-Management-system-DSA",
    live: "#",
    category: "DSA",
    featured: false,
  },
  {
    id: 7,
    title: "Automated Medical Care",
    description: "Automated medical care management system for streamlining patient records, appointment scheduling, and healthcare workflows.",
    tech: ["Java", "MySQL", "Healthcare IT", "Automation"],
    github: "https://github.com/daiviknaik23/Automated-Medical-Care",
    live: "#",
    category: "Full Stack",
    featured: false,
  },
  {
    id: 8,
    title: "Medical Record System (Hackathon)",
    description: "Hackathon project for secure medical record management with patient data tracking, prescriptions, and digital health records.",
    tech: ["Java", "Database", "Security", "Healthcare"],
    github: "https://github.com/daiviknaik23/Medical_Record_System-Hackathon",
    live: "#",
    category: "Full Stack",
    featured: false,
  },
  {
    id: 9,
    title: "16-Bit Processor (Logisim)",
    description: "Hardware design of a 16-bit processor with indirect addressing mode, built in Logisim. Demonstrates computer architecture fundamentals.",
    tech: ["Logisim", "Computer Architecture", "Digital Design"],
    github: "https://github.com/daiviknaik23/16-Bit-Processor-Indirect.logisim",
    live: "#",
    category: "Hardware",
    featured: false,
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-CCP-XXXXX",
    icon: "Cloud",
    color: "#FF9900",
  },
  {
    title: "Jenkins Fundamentals",
    issuer: "CloudBees",
    date: "2024",
    credentialId: "JNK-FUND-XXXXX",
    icon: "Workflow",
    color: "#D33833",
  },
  {
    title: "Docker Essentials",
    issuer: "Docker Inc.",
    date: "2024",
    credentialId: "DKR-ESS-XXXXX",
    icon: "Container",
    color: "#2496ED",
  },
  {
    title: "React Developer Certificate",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-RCT-XXXXX",
    icon: "Code2",
    color: "#61DAFB",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "2024",
    credentialId: "GH-FOUND-XXXXX",
    icon: "GitBranch",
    color: "#ffffff",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building CI/CD Pipelines with Jenkins and AWS",
    excerpt: "Learn how to set up a fully automated CI/CD pipeline using Jenkins, AWS S3, and CloudFront for deploying modern web applications.",
    content: `## Introduction\n\nCI/CD (Continuous Integration/Continuous Deployment) is the backbone of modern software development. In this post, we explore how to build a fully automated pipeline using Jenkins and AWS services.\n\n## Setting Up Jenkins\n\nFirst, install Jenkins on an EC2 instance or use a Docker container...\n\n## Configuring AWS S3\n\nCreate an S3 bucket with static website hosting enabled...\n\n## The Pipeline\n\nOur Jenkinsfile defines the complete pipeline from code checkout to deployment...\n\n## Conclusion\n\nWith this setup, every push to the main branch triggers an automated build and deployment.`,
    category: "DevOps",
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["Jenkins", "AWS", "CI/CD"],
  },
  {
    id: 2,
    title: "AWS S3 Static Website Hosting: Complete Guide",
    excerpt: "A comprehensive guide to hosting static websites on AWS S3 with custom domains, SSL certificates, and CloudFront CDN.",
    content: `## Why S3 for Static Sites?\n\nAWS S3 provides a cost-effective, highly available solution for hosting static websites...\n\n## Setting Up the Bucket\n\nCreate a bucket with the same name as your domain...\n\n## CloudFront Distribution\n\nSet up CloudFront for CDN and HTTPS support...\n\n## Route 53\n\nConfigure DNS records to point to your CloudFront distribution...`,
    category: "AWS",
    date: "2024-11-20",
    readTime: "6 min read",
    tags: ["AWS", "S3", "CloudFront"],
  },
  {
    id: 3,
    title: "React Performance Optimization Techniques",
    excerpt: "Discover essential techniques to optimize your React applications for better performance and user experience.",
    content: `## Memoization\n\nUse React.memo, useMemo, and useCallback to prevent unnecessary re-renders...\n\n## Code Splitting\n\nImplement lazy loading with React.lazy and Suspense...\n\n## Virtual DOM Optimization\n\nUnderstand how the virtual DOM works and optimize your component tree...`,
    category: "React",
    date: "2024-10-10",
    readTime: "5 min read",
    tags: ["React", "Performance", "JavaScript"],
  },
  {
    id: 4,
    title: "Docker for DevOps: Container Orchestration",
    excerpt: "Master Docker containerization and learn how to orchestrate containers for production deployments.",
    content: `## What is Docker?\n\nDocker allows you to package applications into containers...\n\n## Dockerfile Best Practices\n\nWrite efficient Dockerfiles with multi-stage builds...\n\n## Docker Compose\n\nOrchestrate multi-container applications...`,
    category: "DevOps",
    date: "2024-09-05",
    readTime: "7 min read",
    tags: ["Docker", "DevOps", "Containers"],
  },
  {
    id: 5,
    title: "Infrastructure as Code with Terraform",
    excerpt: "Learn how to manage cloud infrastructure using Terraform for consistent, version-controlled deployments.",
    content: `## Introduction to IaC\n\nInfrastructure as Code (IaC) is the practice of managing infrastructure through code...\n\n## Terraform Basics\n\nLearn HCL syntax and Terraform workflow...\n\n## AWS Provider\n\nProvision AWS resources with Terraform...`,
    category: "Cloud Computing",
    date: "2024-08-18",
    readTime: "9 min read",
    tags: ["Terraform", "IaC", "AWS"],
  },
  {
    id: 6,
    title: "GitHub Actions vs Jenkins: CI/CD Comparison",
    excerpt: "A detailed comparison of GitHub Actions and Jenkins for CI/CD pipelines, helping you choose the right tool.",
    content: `## Overview\n\nBoth GitHub Actions and Jenkins are powerful CI/CD tools...\n\n## GitHub Actions\n\nCloud-hosted, YAML-based workflow automation...\n\n## Jenkins\n\nSelf-hosted, highly customizable pipeline engine...\n\n## Comparison\n\nLet's compare features, pricing, and use cases...`,
    category: "CI/CD",
    date: "2024-07-22",
    readTime: "6 min read",
    tags: ["GitHub Actions", "Jenkins", "CI/CD"],
  },
];

export const pipelineStages = [
  { name: "GitHub Push", icon: "GitBranch", status: "success", duration: "0s", description: "Code pushed to main branch" },
  { name: "Jenkins Build", icon: "Workflow", status: "success", duration: "45s", description: "Jenkins detects changes via webhook" },
  { name: "Install Deps", icon: "Package", status: "success", duration: "32s", description: "npm install completes" },
  { name: "Build Project", icon: "Hammer", status: "success", duration: "28s", description: "Vite build generates dist/" },
  { name: "Run Tests", icon: "TestTube", status: "success", duration: "15s", description: "All tests passed" },
  { name: "S3 Deploy", icon: "Cloud", status: "success", duration: "12s", description: "Files uploaded to S3 bucket" },
  { name: "CloudFront Invalidation", icon: "Zap", status: "success", duration: "8s", description: "CDN cache cleared" },
  { name: "Live Website", icon: "Globe", status: "success", duration: "0s", description: "Website is live!" },
];

export const deploymentHistory = [
  { id: "#142", branch: "main", status: "success", date: "2024-12-15 14:30", duration: "2m 15s", commit: "feat: update hero section" },
  { id: "#141", branch: "main", status: "success", date: "2024-12-14 10:15", duration: "2m 08s", commit: "fix: responsive navbar" },
  { id: "#140", branch: "develop", status: "failed", date: "2024-12-13 16:45", duration: "1m 52s", commit: "chore: dependency update" },
  { id: "#139", branch: "main", status: "success", date: "2024-12-12 09:20", duration: "2m 22s", commit: "feat: add blog page" },
  { id: "#138", branch: "main", status: "success", date: "2024-12-11 11:10", duration: "2m 10s", commit: "style: dark mode polish" },
  { id: "#137", branch: "feature/dashboard", status: "success", date: "2024-12-10 15:30", duration: "2m 30s", commit: "feat: DevOps dashboard" },
  { id: "#136", branch: "main", status: "failed", date: "2024-12-09 08:45", duration: "0m 45s", commit: "fix: build error" },
  { id: "#135", branch: "main", status: "success", date: "2024-12-08 13:20", duration: "2m 18s", commit: "feat: contact form" },
];

export const monitoringData = {
  uptime: 99.97,
  totalDeployments: 142,
  successRate: 95.8,
  avgBuildTime: "2m 12s",
  lastDeployment: "2 hours ago",
  cloudfrontStatus: "Active",
  jenkinsStatus: "Online",
  s3Status: "Active",
  visitors: {
    today: 234,
    week: 1580,
    month: 6420,
  },
  traffic: [65, 78, 92, 84, 110, 95, 122, 88, 105, 130, 115, 98],
  buildTimes: [128, 135, 122, 140, 130, 128, 138, 125, 132, 145, 130, 128],
  deployments: [5, 8, 3, 7, 4, 6, 9, 5, 7, 3, 8, 6],
};

export const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Vite", color: "#646CFF" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "AWS", color: "#FF9900" },
  { name: "Jenkins", color: "#D33833" },
  { name: "Docker", color: "#2496ED" },
  { name: "GitHub", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
];
