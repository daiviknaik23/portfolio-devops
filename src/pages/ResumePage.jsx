import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink, Mail, MapPin } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/BrandIcons';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, skills, education, experience, certifications } from '../data/personalData';

export default function ResumePage() {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="text-center mb-12">
          <h1 className="section-title text-gradient">Resume</h1>
          <p className="section-subtitle">My professional background at a glance</p>
          <a href="/resume.pdf" className="btn-primary mt-4 inline-flex">
            <Download size={18} /> Download PDF
          </a>
        </div>

        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-8 pb-8 border-b border-border">
            <h2 className="text-3xl font-bold text-text-primary mb-2">{personalInfo.name}</h2>
            <p className="text-primary-light text-lg mb-4">{personalInfo.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-text-secondary text-sm">
              <span className="flex items-center gap-1"><Mail size={14} /> {personalInfo.email}</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {personalInfo.location}</span>
              <a href={personalInfo.social.github} className="flex items-center gap-1 hover:text-primary-light"><Github size={14} /> GitHub</a>
              <a href={personalInfo.social.linkedin} className="flex items-center gap-1 hover:text-primary-light"><Linkedin size={14} /> LinkedIn</a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
              <FileText size={18} className="text-primary-light" /> Professional Summary
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">{personalInfo.bio}</p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="mb-4 pl-4 border-l-2 border-primary/30">
                <h4 className="font-medium text-text-primary">{edu.degree}</h4>
                <p className="text-text-secondary text-sm">{edu.institution} | {edu.year}</p>
                <p className="text-primary-light text-sm">{edu.grade}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Experience</h3>
            {experience.map((exp, i) => (
              <div key={i} className="mb-4 pl-4 border-l-2 border-accent/30">
                <h4 className="font-medium text-text-primary">{exp.title}</h4>
                <p className="text-accent text-sm">{exp.company} | {exp.period}</p>
                <p className="text-text-secondary text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(skills).map(([cat, items]) => (
                <div key={cat}>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-2">{cat}</p>
                  <div className="flex flex-wrap gap-1">
                    {items.map((s) => (
                      <span key={s.name} className="text-xs px-2 py-1 rounded bg-surface-light text-text-secondary border border-border">{s.name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-text-secondary">{cert.title} — <span className="text-text-muted">{cert.date}</span></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
