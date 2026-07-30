import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Custom Hooks
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { usePortfolioPreferences } from './context/PortfolioPreferences';

// Layout & Common Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { ScrollToTop } from './components/ScrollToTop';
import { CinematicLoader } from './components/CinematicLoader';
import { DirectorConsole } from './components/DirectorConsole';

// Lazy Loaded Pages for performance code-splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Skills = lazy(() => import('./pages/Skills'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Inner wrapper to handle location-based conditional footer rendering
function AppContent() {
  const location = useLocation();
  useSmoothScroll();
  const { prefersReducedMotion } = usePortfolioPreferences();

  const isContactPage = location.pathname.toLowerCase() === '/contact';

  return (
    <div className="flex flex-col min-h-screen relative z-10 lg:px-5">
      {!prefersReducedMotion && (
        <>
          <div className="hidden lg:block vertical-film-strip" />
          <div className="hidden lg:block vertical-film-strip-right" />
        </>
      )}

      <div className="film-grain-container" />

      {/* Custom Desktop Focus Cursor */}
      <CustomCursor />

      {/* Global Floating Director Console customizing deck */}
      <DirectorConsole />

      {/* Stage Wrapper for content filters (Console remains fixed and un-filtered!) */}
      <div id="stage-wrapper" className="flex flex-col flex-grow min-h-screen">
        {/* Global Scroll Reading Progress */}
        <ScrollProgress />

        {/* Reset Scroll position on page routing change */}
        <ScrollToTop />

        {/* Navigation header */}
        <Navbar />

        {/* Main Page Content wrapper */}
        <main className="flex-grow">
          <Suspense
            fallback={
              <div className="min-h-screen bg-studio-black flex items-center justify-center">
                <span className="mono-code text-[11px] text-studio-amber uppercase tracking-widest animate-pulse">
                  Loading Chapter Scene...
                </span>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Page Footer (Hidden on Contact credits) */}
        {!isContactPage && <Footer />}
      </div>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading ? (
        <CinematicLoader onComplete={() => setIsLoading(false)} />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}

export default App;
