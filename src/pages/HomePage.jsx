import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail, Download, ArrowRight, ChevronDown,
  Star, GitFork, Users, Activity, ExternalLink, Cloud, Workflow, GitBranch,
  Server, Zap, Globe, Code2, Shield, Database, Check
} from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from '../components/BrandIcons';
import Typed from 'typed.js';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, techStack, pipelineStages } from '../data/personalData';

function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Cloud Engineer',
        'DevOps Specialist',
        'Full Stack Developer',
        'CI/CD Architect',
        'AWS Enthusiast',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4 tracking-tight text-white">
              Hello, I'm{' '}
              <span className="text-gradient">Daivik Naik</span>
            </h1>

            <div className="text-xl sm:text-2xl text-text-secondary mb-6 h-10">
              <span ref={typedRef} />
            </div>

            <p className="text-text-secondary text-lg mb-8 max-w-lg leading-relaxed">
              {personalInfo.tagline}. Passionate about automating everything and building 
              systems that scale.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <Link to="/contact" className="btn-primary">
                Get In Touch <ArrowRight size={18} />
              </Link>
              <a href="/Resume.pdf" target='_Blank' className="btn-outline">
                <Download size={18} /> Resume
              </a>
            </div>

            {/* ATS Resume Score Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass rounded-2xl p-5 border border-primary/20 backdrop-blur-xl mb-8 max-w-lg relative overflow-hidden group shadow-lg"
            >
              {/* Background accent glow inside the card */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-neon-green/10 rounded-full blur-2xl group-hover:bg-neon-green/20 transition-all duration-500" />
              
              <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                {/* Circular indicator container */}
                <div className="flex-shrink-0 relative flex items-center justify-center w-24 h-24">
                  {/* Glowing background */}
                  <div className="absolute inset-0 rounded-full bg-neon-green/10 blur-md group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* SVG Circle */}
                  <svg className="w-20 h-20 transform -rotate-90">
                    {/* Background Track */}
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      className="stroke-surface-light"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    {/* Foreground Circle Progress */}
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="34"
                      className="stroke-neon-green"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray="213.6"
                      initial={{ strokeDashoffset: 213.6 }}
                      animate={{ strokeDashoffset: 32 }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* Centered Text */}
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-xl font-extrabold text-white">85%</span>
                    <span className="text-[10px] text-neon-green font-semibold tracking-wider uppercase">Score</span>
                  </div>
                </div>

                {/* Info and checklist */}
                <div className="flex-grow text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                    <h3 className="text-lg font-bold text-white tracking-wide">ATS Resume Score</h3>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                    </span>
                  </div>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-text-secondary font-medium">
                    {[
                      "DevOps Keywords Added",
                      "AWS & Docker Skills Included",
                      "CI/CD Project Experience",
                      "Clean ATS-Friendly Resume Format"
                    ].map((point, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green border border-neon-green/20">
                          <Check size={10} strokeWidth={3} />
                        </span>
                        <span className="text-left text-white/90">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="text-text-muted text-sm">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: personalInfo.social.github },
                  { icon: Linkedin, href: personalInfo.social.linkedin },
                  { icon: Twitter, href: personalInfo.social.twitter },
                  { icon: Mail, href: personalInfo.social.email },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-10 h-10 rounded-xl bg-surface-light border border-border flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary/30 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right content - Profile + stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Profile image area */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-neon-purple animate-glow" />
              <div className="absolute inset-1 rounded-full bg-surface flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Daivik Naik"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Floating tech icons */}
              {[
                { icon: Cloud, pos: 'top-0 right-0', color: 'text-[#FF9900]', delay: 0 },
                { icon: GitBranch, pos: 'top-10 -left-6', color: 'text-white', delay: 1 },
                { icon: Server, pos: 'bottom-10 -right-6', color: 'text-accent', delay: 2 },
                { icon: Zap, pos: '-bottom-2 left-8', color: 'text-neon-purple', delay: 3 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: item.delay * 0.5 }}
                  className={`absolute ${item.pos} w-12 h-12 rounded-xl glass flex items-center justify-center ${item.color}`}
                >
                  <item.icon size={22} />
                </motion.div>
              ))}
            </div>

            {/* GitHub stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: Star, label: 'Stars', value: personalInfo.githubStats.stars },
                { icon: GitFork, label: 'Repos', value: personalInfo.githubStats.repos },
                { icon: Activity, label: 'Commits', value: personalInfo.githubStats.contributions },
                { icon: Users, label: 'Followers', value: personalInfo.githubStats.followers },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="glass rounded-xl p-3 text-center hover:border-primary/30 transition-all duration-300"
                >
                  <stat.icon size={16} className="text-primary-light mx-auto mb-1" />
                  <div className="text-lg font-bold text-text-primary">{stat.value}</div>
                  <div className="text-xs text-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-muted"
          >
            <span className="text-xs">Scroll down</span>
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="section-title text-gradient">Tech Stack</h2>
        <p className="section-subtitle">Technologies I work with daily</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="card text-center cursor-default"
          >
            <div
              className="w-10 h-10 rounded-lg mx-auto mb-3 flex items-center justify-center"
              style={{ backgroundColor: `${tech.color}20` }}
            >
              <Code2 size={20} style={{ color: tech.color }} />
            </div>
            <span className="text-sm font-medium text-text-secondary">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function PipelinePreview() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="section-title text-gradient">DevOps Pipeline</h2>
        <p className="section-subtitle">Automated CI/CD workflow powering this portfolio</p>
      </div>

      <div className="relative">
        {/* Pipeline flow */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
          {pipelineStages.slice(0, 6).map((stage, i) => {
            const icons = { GitBranch, Workflow, Zap, Code2, Cloud, Globe, Server, Shield, Database };
            const IconComp = icons[stage.icon] || Zap;
            return (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 md:gap-0 md:flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center text-primary-light">
                  <IconComp size={24} />
                </div>
                <span className="text-xs text-text-secondary mt-2 text-center max-w-[80px]">{stage.name}</span>
                {i < 5 && (
                  <div className="hidden md:block w-12 h-0.5 bg-gradient-to-r from-primary to-accent mt-[-20px]" />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/devops-dashboard"
            className="btn-outline text-sm"
          >
            View Full Pipeline <ExternalLink size={14} />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

function VisitorCounter() {
  const [count, setCount] = useState(1247);
  
  useEffect(() => {
    const stored = localStorage.getItem('visitor_count');
    if (stored) {
      setCount(parseInt(stored) + 1);
    }
    localStorage.setItem('visitor_count', String(count));
  }, []);

  return (
    <SectionWrapper>
      <div className="text-center">
        <div className="glass rounded-2xl p-8 max-w-md mx-auto">
          <div className="text-4xl font-bold text-gradient mb-2">{count.toLocaleString()}</div>
          <p className="text-text-secondary">Portfolio Visitors</p>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TechStackSection />
      <PipelinePreview />
      <VisitorCounter />
    </div>
  );
}
