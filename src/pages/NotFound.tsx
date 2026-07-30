import { Link } from 'react-router-dom';
import { Film, RotateCcw } from 'lucide-react';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <div className="relative min-h-screen bg-studio-black flex flex-col items-center justify-center px-6 text-center page-enter-opacity">
      <SEO
        title="Scene Not Found"
        description="The requested scene or portfolio section could not be located in this chapter reel."
      />

      {/* Film grain overlay */}
      <div className="film-grain-container" />

      {/* Cinematic Spotlight backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-studio-amber/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-sm">
        <Film className="w-16 h-16 text-studio-amber mb-6 animate-pulse" />
        <span className="mono-code text-[10px] text-studio-amber uppercase tracking-widest font-semibold block mb-2">
          ERROR 404 // INTERRUPTED
        </span>
        <h1 className="title-serif text-3xl md:text-4xl font-bold text-studio-cream mb-4">
          Scene Not Found
        </h1>
        <p className="text-xs text-studio-muted leading-relaxed font-sans mb-8">
          The chapter you are looking for has been cut from the final theatrical release, or the reel has drifted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-studio-amber text-studio-black font-semibold text-xs tracking-widest uppercase rounded hover:bg-studio-gold transition-colors duration-300 interactive-hover"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Return to Studio</span>
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
