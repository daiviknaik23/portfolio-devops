import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../data/personalData';

const categoryMeta = {
  frontend: { label: 'Frontend', gradient: 'from-blue-500 to-cyan-400' },
  backend: { label: 'Backend', gradient: 'from-green-500 to-emerald-400' },
  database: { label: 'Database', gradient: 'from-orange-500 to-yellow-400' },
  cloud: { label: 'Cloud (AWS)', gradient: 'from-amber-500 to-orange-400' },
  devops: { label: 'DevOps & CI/CD', gradient: 'from-red-500 to-pink-400' },
  cybersecurity: { label: 'Cybersecurity', gradient: 'from-purple-500 to-violet-400' },
};

function CircularProgress({ level, size = 80 }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(99,102,241,0.1)" strokeWidth="4" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="url(#grad)" strokeWidth="4" strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        strokeDasharray={circumference}
      />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SkillBar({ name, level, delay }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-text-primary">{name}</span>
        <span className="text-xs text-primary-light font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-surface-light rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="text-center mb-16">
          <h1 className="section-title text-gradient">Skills & Expertise</h1>
          <p className="section-subtitle">Technologies and tools I use to build amazing things</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], catIdx) => {
            const meta = categoryMeta[category];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{meta.label.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">{meta.label}</h3>
                </div>
                <div className="space-y-4">
                  {items.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Circular indicators */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold text-text-primary mb-12">Core Competencies</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { name: 'Cloud', level: 88 },
              { name: 'DevOps', level: 85 },
              { name: 'Frontend', level: 92 },
              { name: 'Backend', level: 82 },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="relative inline-block">
                  <CircularProgress level={item.level} size={100} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-light">{item.level}%</span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm mt-3 font-medium">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
