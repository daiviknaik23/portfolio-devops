import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GitBranch, Workflow, Package, Hammer, TestTube, Cloud, Zap, Globe,
  CheckCircle2, XCircle, Clock, ArrowRight, Server, Shield, RefreshCw
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { pipelineStages, deploymentHistory } from '../data/personalData';

const iconMap = { GitBranch, Workflow, Package, Hammer, TestTube, Cloud, Zap, Globe, Server, Shield, RefreshCw };

function PipelineVisualization() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">CI/CD Pipeline Flow</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {pipelineStages.map((stage, i) => {
          const Icon = iconMap[stage.icon] || Zap;
          return (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="text-center group"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                    stage.status === 'success'
                      ? 'bg-neon-green/10 border-neon-green/30 text-neon-green'
                      : stage.status === 'running'
                      ? 'bg-primary/10 border-primary/30 text-primary-light animate-pulse'
                      : 'bg-error/10 border-error/30 text-error'
                  }`}
                >
                  <Icon size={24} />
                </motion.div>
                {stage.status === 'success' && (
                  <CheckCircle2 size={14} className="absolute -top-1 -right-1 text-neon-green" />
                )}
              </div>
              <p className="text-xs text-text-secondary mt-2 font-medium">{stage.name}</p>
              <p className="text-xs text-text-muted">{stage.duration}</p>
            </motion.div>
          );
        })}
      </div>
      {/* Connecting lines */}
      <div className="hidden lg:flex items-center justify-center mt-4 gap-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: i * 0.1 + 0.5 }}
            className="w-12 h-0.5 bg-gradient-to-r from-neon-green to-accent origin-left"
          />
        ))}
      </div>
    </div>
  );
}

function DeploymentStatus() {
  const statuses = [
    { name: 'Jenkins Server', status: 'Online', icon: Workflow, color: 'text-neon-green' },
    { name: 'AWS S3 Bucket', status: 'Active', icon: Cloud, color: 'text-neon-green' },
    { name: 'CloudFront CDN', status: 'Distributed', icon: Zap, color: 'text-neon-green' },
    { name: 'Route 53 DNS', status: 'Resolving', icon: Globe, color: 'text-neon-green' },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-text-primary mb-8">Live Status</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statuses.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card"
          >
            <s.icon size={24} className="text-primary-light mb-3" />
            <h3 className="text-sm font-medium text-text-primary mb-1">{s.name}</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              <span className={`text-xs font-medium ${s.color}`}>{s.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BuildHistory() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-text-primary mb-8">Build History</h2>
      <div className="glass rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 text-text-muted font-medium">Build</th>
                <th className="text-left px-6 py-4 text-text-muted font-medium">Branch</th>
                <th className="text-left px-6 py-4 text-text-muted font-medium">Status</th>
                <th className="text-left px-6 py-4 text-text-muted font-medium hidden md:table-cell">Commit</th>
                <th className="text-left px-6 py-4 text-text-muted font-medium hidden sm:table-cell">Duration</th>
                <th className="text-left px-6 py-4 text-text-muted font-medium hidden lg:table-cell">Date</th>
              </tr>
            </thead>
            <tbody>
              {deploymentHistory.map((d) => (
                <tr key={d.id} className="border-b border-border/50 hover:bg-surface-hover transition-colors">
                  <td className="px-6 py-4 font-mono text-primary-light">{d.id}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-text-secondary">
                      <GitBranch size={12} /> {d.branch}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                      d.status === 'success'
                        ? 'bg-neon-green/10 text-neon-green'
                        : 'bg-error/10 text-error'
                    }`}>
                      {d.status === 'success' ? <CheckCircle2 size={12} /> : <XCircle size={12} />}
                      {d.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-secondary hidden md:table-cell">{d.commit}</td>
                  <td className="px-6 py-4 text-text-muted hidden sm:table-cell">
                    <span className="flex items-center gap-1"><Clock size={12} /> {d.duration}</span>
                  </td>
                  <td className="px-6 py-4 text-text-muted hidden lg:table-cell">{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  const layers = [
    { name: 'Developer', items: ['Git Push', 'GitHub Repo'], color: 'from-white/10 to-white/5' },
    { name: 'CI/CD', items: ['Jenkins Server', 'Build & Test'], color: 'from-red-500/10 to-red-500/5' },
    { name: 'Cloud', items: ['S3 Bucket', 'CloudFront CDN', 'Route 53'], color: 'from-amber-500/10 to-amber-500/5' },
    { name: 'Users', items: ['HTTPS', 'Global CDN', 'Low Latency'], color: 'from-green-500/10 to-green-500/5' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-text-primary mb-8">Cloud Architecture</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`card bg-gradient-to-b ${layer.color}`}
          >
            <h3 className="text-sm font-semibold text-primary-light mb-3 uppercase tracking-wider">{layer.name}</h3>
            <div className="space-y-2">
              {layer.items.map((item) => (
                <div key={item} className="flex items-center gap-2 text-text-secondary text-sm">
                  <ArrowRight size={12} className="text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function DevOpsDashboardPage() {
  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            All Systems Operational
          </div>
          <h1 className="section-title text-gradient">DevOps Dashboard</h1>
          <p className="section-subtitle">Real-time CI/CD pipeline monitoring and deployment status</p>
        </div>

        <PipelineVisualization />
        <DeploymentStatus />
        <BuildHistory />
        <ArchitectureDiagram />
      </SectionWrapper>
    </div>
  );
}
