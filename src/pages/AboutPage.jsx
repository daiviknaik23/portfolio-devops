import { motion } from 'framer-motion';
import { MapPin, Calendar, Target, Rocket, Award, GraduationCap } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, education, achievements } from '../data/personalData';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h1 className="section-title text-gradient mb-4">About Me</h1>
            <p className="text-text-secondary leading-relaxed mb-6">{personalInfo.bio}</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: 'Location', value: personalInfo.location },
                { icon: Calendar, label: 'Experience', value: '0 Years' },
                { icon: Target, label: 'Focus', value: 'Cloud & DevOps' },
                { icon: Rocket, label: 'Goal', value: 'SDE / DevOps Engineer' },
              ].map((item) => (
                <div key={item.label} className="card flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">{item.label}</div>
                    <div className="text-sm font-medium text-text-primary">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative">
            <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-neon-purple/20 border border-primary/20 flex items-center justify-center overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Daivik Naik"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="section-title text-gradient">My Journey</h2>
          <p className="section-subtitle">Education and academic milestones</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-text-primary mb-6 flex items-center gap-2">
            <GraduationCap size={20} className="text-accent" /> Education
          </h3>
          <div className="space-y-6 mb-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />
            {education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="relative pl-16">
                <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary border-2 border-surface z-10" />
                <div className="card">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-text-primary">{edu.degree}</h4>
                    {edu.year && <span className="tag">{edu.year}</span>}
                  </div>
                  <p className="text-text-secondary text-sm mb-1">{edu.institution}</p>
                  <p className="text-primary-light text-sm font-medium">{edu.grade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Achievements */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="section-title text-gradient">Achievements</h2>
        </div>
        <div className="max-w-2xl mx-auto grid gap-4">
          {achievements.map((ach, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="card flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-green/20 to-accent/20 flex items-center justify-center shrink-0">
                <Award size={20} className="text-neon-green" />
              </div>
              <span className="text-text-secondary">{ach}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
