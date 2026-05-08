import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Activity, ArrowUp, ArrowDown, Clock, Cloud, Zap, Globe, Workflow,
  BarChart3, Users, TrendingUp, CheckCircle2, Server
} from 'lucide-react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import SectionWrapper from '../components/SectionWrapper';
import { monitoringData } from '../data/personalData';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { backgroundColor: '#1a1a2e', borderColor: '#6366f1', borderWidth: 1 } },
  scales: {
    x: { grid: { color: 'rgba(99,102,241,0.05)' }, ticks: { color: '#64748b', font: { size: 10 } } },
    y: { grid: { color: 'rgba(99,102,241,0.05)' }, ticks: { color: '#64748b', font: { size: 10 } } },
  },
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function MonitoringPage() {
  const trafficData = {
    labels: months,
    datasets: [{
      label: 'Visitors',
      data: monitoringData.traffic,
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99,102,241,0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: '#6366f1',
    }],
  };

  const buildTimeData = {
    labels: months,
    datasets: [{
      label: 'Build Time (s)',
      data: monitoringData.buildTimes,
      backgroundColor: 'rgba(6,182,212,0.3)',
      borderColor: '#06b6d4',
      borderWidth: 1,
      borderRadius: 6,
    }],
  };

  const deployData = {
    labels: months,
    datasets: [{
      label: 'Deployments',
      data: monitoringData.deployments,
      backgroundColor: 'rgba(34,197,94,0.3)',
      borderColor: '#22c55e',
      borderWidth: 1,
      borderRadius: 6,
    }],
  };

  return (
    <div className="pt-20">
      <SectionWrapper>
        <div className="text-center mb-12">
          <h1 className="section-title text-gradient">Deployment Monitoring</h1>
          <p className="section-subtitle">Real-time metrics and analytics for the deployment pipeline</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Uptime', value: `${monitoringData.uptime}%`, icon: Activity, change: '+0.02%', up: true, color: 'text-neon-green' },
            { label: 'Total Deploys', value: monitoringData.totalDeployments, icon: Cloud, change: '+12', up: true, color: 'text-primary-light' },
            { label: 'Success Rate', value: `${monitoringData.successRate}%`, icon: CheckCircle2, change: '+1.2%', up: true, color: 'text-accent' },
            { label: 'Avg Build', value: monitoringData.avgBuildTime, icon: Clock, change: '-3s', up: true, color: 'text-neon-purple' },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-3">
                <kpi.icon size={20} className={kpi.color} />
                <span className={`text-xs flex items-center gap-0.5 ${kpi.up ? 'text-neon-green' : 'text-error'}`}>
                  {kpi.up ? <ArrowUp size={10} /> : <ArrowDown size={10} />}
                  {kpi.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-text-primary">{kpi.value}</div>
              <div className="text-xs text-text-muted mt-1">{kpi.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Service Status */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { name: 'CloudFront', status: monitoringData.cloudfrontStatus, icon: Zap },
            { name: 'Jenkins', status: monitoringData.jenkinsStatus, icon: Workflow },
            { name: 'S3 Bucket', status: monitoringData.s3Status, icon: Cloud },
            { name: 'Route 53', status: 'Active', icon: Globe },
          ].map((service) => (
            <div key={service.name} className="card flex items-center gap-3">
              <service.icon size={18} className="text-primary-light" />
              <div className="flex-1">
                <div className="text-sm font-medium text-text-primary">{service.name}</div>
                <div className="text-xs text-neon-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                  {service.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visitor stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: 'Today', value: monitoringData.visitors.today, icon: Users },
            { label: 'This Week', value: monitoringData.visitors.week, icon: TrendingUp },
            { label: 'This Month', value: monitoringData.visitors.month, icon: BarChart3 },
          ].map((v) => (
            <div key={v.label} className="card text-center">
              <v.icon size={20} className="text-accent mx-auto mb-2" />
              <div className="text-xl font-bold text-text-primary">{v.value.toLocaleString()}</div>
              <div className="text-xs text-text-muted">{v.label}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <div className="card">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Traffic Overview</h3>
            <div className="h-64"><Line data={trafficData} options={chartOptions} /></div>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Build Times</h3>
            <div className="h-64"><Bar data={buildTimeData} options={chartOptions} /></div>
          </div>
        </div>

        <div className="card max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Monthly Deployments</h3>
          <div className="h-64"><Bar data={deployData} options={chartOptions} /></div>
        </div>
      </SectionWrapper>
    </div>
  );
}
