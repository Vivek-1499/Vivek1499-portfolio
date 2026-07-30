import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicLoaderProps {
  onComplete: () => void;
}

export function CinematicLoader({ onComplete }: CinematicLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Projector...');

  useEffect(() => {
    // Speed up simulation to keep load time short (500-1000ms max as specified in WORKFLOW.md)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        // Progressively shift status text for immersion
        if (prev > 30 && prev <= 60) {
          setStatusText('Loading Chapter Reels...');
        } else if (prev > 60 && prev <= 85) {
          setStatusText('Focusing Studio Lenses...');
        } else if (prev > 85) {
          setStatusText('Ready...');
        }

        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 400); // Small pause for cinematic transition feel
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-studio-black z-[9999] flex flex-col items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      >
        {/* Cinematic Film Grain inside loader */}
        <div className="film-grain-container" />

        {/* Studio Spotlight backdrop glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-studio-amber/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-xs text-center px-4">
          {/* Film Reel Spinner */}
          <motion.svg
            className="w-16 h-16 text-studio-amber mb-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="7" r="1.5" className="fill-studio-amber" />
            <circle cx="12" cy="17" r="1.5" className="fill-studio-amber" />
            <circle cx="7" cy="12" r="1.5" className="fill-studio-amber" />
            <circle cx="17" cy="12" r="1.5" className="fill-studio-amber" />
          </motion.svg>

          {/* Text Indicators */}
          <h2 className="title-serif text-sm tracking-widest text-studio-cream/80 uppercase mb-2">
            The Director's Studio
          </h2>
          <div className="mono-code text-xs text-studio-amber font-semibold h-4 mb-4">
            {statusText}
          </div>

          {/* Progress Bar Container */}
          <div className="w-48 h-[1px] bg-studio-border relative overflow-hidden mb-2">
            <motion.div
              className="absolute top-0 left-0 h-full bg-studio-amber"
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <span className="mono-code text-[10px] text-studio-muted">
            {Math.min(progress, 100)}%
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
