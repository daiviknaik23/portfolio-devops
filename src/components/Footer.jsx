import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Heart, Code2, Cloud } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from './BrandIcons';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const devopsLinks = [
  { name: 'DevOps Dashboard', path: '/devops-dashboard' },
  { name: 'Monitoring', path: '/monitoring' },
  { name: 'Skills', path: '/skills' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Resume', path: '/resume' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/daiviknaik23', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/daiviknaik23', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/daiviknaik23', label: 'Twitter' },
  { icon: Mail, href: 'mailto:daiviknaik23@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-border">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-lg">
                D
              </div>
              <span className="text-lg font-bold text-text-primary">
                Daivik<span className="text-primary-light">.dev</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Cloud & DevOps Engineer building scalable infrastructure and modern web applications.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-surface-light border border-border flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-secondary hover:text-primary-light transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DevOps */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">DevOps & Cloud</h3>
            <ul className="space-y-3">
              {devopsLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-secondary hover:text-primary-light transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Built With */}
          <div>
            <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">Built With</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Code2 size={14} className="text-accent" />
                <span>React + Vite</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Cloud size={14} className="text-[#FF9900]" />
                <span>AWS S3 + CloudFront</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Github size={14} className="text-white" />
                <span>GitHub + Jenkins CI/CD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Daivik Naik. Built with
            <Heart size={14} className="text-red-500 mx-1" />
            using React + AWS
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-surface-light border border-border flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
