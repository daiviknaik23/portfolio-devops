import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { GithubIcon as Github } from '../components/BrandIcons';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/personalData';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="text-center mb-12">
          <h1 className="section-title text-gradient">Projects</h1>
          <p className="section-subtitle">A showcase of my work across different domains</p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-surface-light text-text-secondary border border-border hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="card group relative overflow-hidden"
              >
                {/* Image area */}
                <div className="h-44 rounded-xl bg-gradient-to-br from-primary/20 via-accent/10 to-neon-purple/20 mb-5 flex items-center justify-center relative overflow-hidden">
                  <Layers size={40} className="text-primary-light/50" />
                  {project.featured && (
                    <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-neon-green/20 text-neon-green border border-neon-green/30 font-medium">
                      Featured
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-surface/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-surface-light border border-border flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary/30 transition-all">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-surface-light border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-all">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="tag text-xs">{project.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-surface-light text-text-muted border border-border">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </SectionWrapper>
    </div>
  );
}
