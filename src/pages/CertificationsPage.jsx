import { motion } from 'framer-motion';
import { Award, Calendar, Cloud, Server, Shield, Brain, Tag, BadgeCheck } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { certifications } from '../data/personalData';

const categoryIcons = {
  'Cloud & DevOps': Cloud,
  'CI/CD & Automation': Server,
  'Containerization': Server,
  'Linux & Infrastructure': Server,
  'Infrastructure Automation': Server,
  'Artificial Intelligence': Brain,
  'Machine Learning': Brain,
  'Cybersecurity': Shield,
  'Data Science & AI': Brain,
};

export default function CertificationsPage() {
  return (
    <div className="pt-20">
      <SectionWrapper>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-light text-sm font-medium mb-6"
          >
            <BadgeCheck size={16} />
            <span>Verified Credentials</span>
          </motion.div>
          <h1 className="section-title text-gradient mb-4">10+ Professional Certifications</h1>
          <p className="section-subtitle max-w-2xl mx-auto">
            Industry-recognized certifications in Cloud, DevOps, AI/ML, and Cybersecurity from leading organizations
          </p>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {[
              { label: 'Cloud & DevOps', count: 5, color: '#FF9900' },
              { label: 'AI & ML', count: 3, color: '#00A4EF' },
              { label: 'Cybersecurity', count: 1, color: '#34A853' },
              { label: 'Data Science', count: 1, color: '#054ADA' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2 text-sm text-text-muted">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: stat.color }} />
                <span>{stat.label}</span>
                <span className="font-semibold text-text-primary">({stat.count})</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, i) => {
            const CategoryIcon = categoryIcons[cert.category] || Award;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                {/* Glow border effect on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{ background: `linear-gradient(135deg, ${cert.color}30, transparent, ${cert.color}20)` }}
                />

                <div className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-2xl p-6 h-full flex flex-col group-hover:border-transparent transition-all duration-300"
                  style={{ '--hover-border': `${cert.color}40` }}
                >
                  {/* Top: Icon + Category */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        backgroundColor: `${cert.color}12`,
                        border: `1px solid ${cert.color}25`,
                        boxShadow: `0 0 0 0 ${cert.color}00`,
                      }}
                    >
                      <CategoryIcon size={26} style={{ color: cert.color }} />
                    </div>
                    <span
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full tracking-wide"
                      style={{
                        backgroundColor: `${cert.color}12`,
                        color: cert.color,
                        border: `1px solid ${cert.color}20`,
                      }}
                    >
                      {cert.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] font-semibold text-text-primary mb-2 leading-snug group-hover:text-white transition-colors duration-300 flex-grow">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm font-medium mb-4" style={{ color: cert.color }}>
                    {cert.issuer}
                  </p>

                  {/* Bottom: Year + Badge */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    {cert.date ? (
                      <div className="flex items-center gap-1.5 text-xs text-text-muted">
                        <Calendar size={12} />
                        <span>{cert.date}</span>
                      </div>
                    ) : (
                      <div className="text-xs text-text-muted">—</div>
                    )}
                    <div className="flex items-center gap-1 text-xs text-text-muted group-hover:text-primary-light transition-colors">
                      <BadgeCheck size={14} />
                      <span>Certified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
