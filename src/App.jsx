import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingScreen from './components/LoadingScreen';

// Lazy loaded pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const DevOpsDashboardPage = lazy(() => import('./pages/DevOpsDashboardPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const MonitoringPage = lazy(() => import('./pages/MonitoringPage'));

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="relative min-h-screen">
          <ParticleBackground />
          <Navbar />
          <main className="relative z-10">
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/certifications" element={<CertificationsPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/devops-dashboard" element={<DevOpsDashboardPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/monitoring" element={<MonitoringPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1a1a2e',
                color: '#f8fafc',
                border: '1px solid #1e293b',
                borderRadius: '12px',
              },
            }}
          />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
