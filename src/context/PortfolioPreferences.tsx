import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type PortfolioPreferences = {
  prefersReducedMotion: boolean;
  skipCinematicIntro: boolean;
}

const PortfolioPreferencesContext = createContext<PortfolioPreferences | null>(null);

export function PortfolioPreferencesProvider({ children }: { children: ReactNode }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <PortfolioPreferencesContext.Provider
      value={{
        prefersReducedMotion,
        skipCinematicIntro: prefersReducedMotion,
      }}
    >
      {children}
    </PortfolioPreferencesContext.Provider>
  );
}

export function usePortfolioPreferences() {
  const ctx = useContext(PortfolioPreferencesContext);
  if (!ctx) {
    throw new Error('usePortfolioPreferences must be used within PortfolioPreferencesProvider');
  }
  return ctx;
}
