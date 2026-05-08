import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterIcon as Twitter } from '../components/BrandIcons';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data/personalData';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate EmailJS send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setSending(false);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  const socials = [
    { icon: Github, label: 'GitHub', href: personalInfo.social.github, value: '@daiviknaik23' },
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.social.linkedin, value: 'Daivik Naik' },
    { icon: Twitter, label: 'Twitter / X', href: personalInfo.social.twitter, value: '@daiviknaik23' },
    { icon: Mail, label: 'Email', href: personalInfo.social.email, value: personalInfo.email },
  ];

  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="text-center mb-12">
          <h1 className="section-title text-gradient">Get In Touch</h1>
          <p className="section-subtitle">Have a project in mind? Let's talk about it.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Let's Connect</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin size={20} className="text-primary-light" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Location</p>
                  <p className="text-text-primary font-medium">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Email</p>
                  <p className="text-text-primary font-medium">{personalInfo.email}</p>
                </div>
              </div>
            </div>

            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Social Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-3 hover:border-primary/30"
                >
                  <s.icon size={18} className="text-primary-light" />
                  <div>
                    <p className="text-xs text-text-muted">{s.label}</p>
                    <p className="text-sm text-text-secondary">{s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="input-field" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className="input-field" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
                <input name="subject" value={form.subject} onChange={handleChange} required className="input-field" placeholder="Project inquiry" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="input-field resize-none" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" disabled={sending} className="btn-primary w-full justify-center">
                {sending ? (
                  <span className="flex items-center gap-2">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2"><Send size={16} /> Send Message</span>
                )}
              </button>
            </form>

            {/* Status popup */}
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`mt-4 p-4 rounded-xl flex items-center gap-3 ${
                    status === 'success' ? 'bg-neon-green/10 border border-neon-green/20 text-neon-green' : 'bg-error/10 border border-error/20 text-error'
                  }`}
                >
                  {status === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                  <span className="text-sm font-medium">
                    {status === 'success' ? 'Message sent successfully! I\'ll get back to you soon.' : 'Something went wrong. Please try again.'}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}
