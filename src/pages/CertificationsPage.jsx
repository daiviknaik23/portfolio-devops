import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { certifications } from '../data/personalData';

export default function CertificationsPage() {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="text-center mb-12">
          <h1 className="section-title text-gradient">Certifications</h1>
          <p className="section-subtitle">Professional certifications and credentials</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  <Award size={28} style={{ color: cert.color }} />
                </div>
                <ExternalLink size={16} className="text-text-muted group-hover:text-primary-light transition-colors cursor-pointer" />
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-primary-light transition-colors">
                {cert.title}
              </h3>
              <p className="text-accent text-sm font-medium mb-3">{cert.issuer}</p>
              
              <div className="flex items-center justify-between text-xs text-text-muted">
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{cert.date}</span>
                </div>
                <span className="font-mono">{cert.credentialId}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
