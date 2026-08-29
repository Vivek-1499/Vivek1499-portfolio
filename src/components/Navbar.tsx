import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-studio-black/92 py-4 border-b border-studio-border/50 backdrop-blur-md'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="title-serif text-sm tracking-widest text-studio-cream font-semibold group flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-studio-amber group-hover:scale-125 transition-transform" />
          <span>VIVEK PANDIT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase transition-colors duration-200 hover:text-studio-amber ${isActive ? 'text-studio-amber font-semibold' : 'text-studio-cream/70'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* AI Assistant Direct Access Button */}
          {personalInfo.aiAssistantUrl && (
            <a
              href={personalInfo.aiAssistantUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-studio-amber/10 border border-studio-amber/50 rounded text-xs tracking-widest uppercase text-studio-amber hover:bg-studio-amber hover:text-studio-black hover:border-studio-amber transition-all duration-300 font-semibold group shadow-sm shadow-studio-amber/5"
              title="Chat with Vivek's AI Portfolio Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-studio-amber group-hover:text-studio-black group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
              <span>AI Assistant</span>
            </a>
          )}

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-1.5 px-3 py-1.5 border border-studio-border/70 rounded text-xs tracking-widest uppercase text-studio-cream hover:bg-studio-cream hover:text-studio-black hover:border-studio-cream transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </nav>

        <div className="flex items-center gap-2.5 md:hidden">
          {personalInfo.aiAssistantUrl && (
            <a
              href={personalInfo.aiAssistantUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 border border-studio-amber/60 bg-studio-amber/10 rounded text-studio-amber flex items-center gap-1 text-[11px] font-mono tracking-wider font-semibold"
              aria-label="AI Assistant"
              title="AI Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>AI</span>
            </a>
          )}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="p-2 border border-studio-amber/40 rounded text-studio-amber"
            aria-label="Download resume"
          >
            <FileText className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-studio-cream hover:text-studio-amber focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[60px] bg-studio-black/95 z-40 transition-transform duration-300 md:hidden flex flex-col justify-start py-8 px-6 border-t border-studio-border/50 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm tracking-widest uppercase border-b border-studio-border/30 pb-2 ${isActive ? 'text-studio-amber font-semibold' : 'text-studio-cream/80'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {personalInfo.aiAssistantUrl && (
            <a
              href={personalInfo.aiAssistantUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-studio-amber/15 border border-studio-amber/60 text-studio-amber rounded text-xs tracking-widest uppercase font-semibold hover:bg-studio-amber hover:text-studio-black transition-colors mt-2"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Ask AI Assistant (Live)</span>
            </a>
          )}

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-studio-amber text-studio-black rounded text-xs tracking-widest uppercase font-semibold hover:bg-studio-gold transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
