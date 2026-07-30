import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
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
    { name: 'Reels', path: '/projects', badge: 'Projects' },
    { name: 'Toolkit', path: '/skills' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-studio-black/85 backdrop-blur-md py-4 border-b border-studio-border/50'
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

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              title={link.badge}
              className={({ isActive }) =>
                `text-xs tracking-widest uppercase transition-colors duration-200 hover:text-studio-amber ${isActive ? 'text-studio-amber font-semibold' : 'text-studio-cream/70'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-1.5 px-3 py-1.5 border border-studio-amber/40 rounded text-xs tracking-widest uppercase text-studio-cream hover:bg-studio-amber hover:text-studio-black transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
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
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
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
              {link.badge && (
                <span className="ml-2 text-[9px] text-studio-muted font-mono normal-case">
                  ({link.badge})
                </span>
              )}
            </NavLink>
          ))}

          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 bg-studio-amber text-studio-black rounded text-xs tracking-widest uppercase font-semibold hover:bg-studio-gold transition-colors mt-4"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
