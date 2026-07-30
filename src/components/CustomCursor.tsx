import { useEffect, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { usePortfolioPreferences } from '../context/PortfolioPreferences';

export function CustomCursor() {
  const position = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const { prefersReducedMotion } = usePortfolioPreferences();

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (isTouchDevice || !isDesktop || prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
  }, [prefersReducedMotion]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9998] w-[260px] h-[260px] rounded-full opacity-25 blur-2xl -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(217, 119, 6, 0.1) 40%, rgba(0,0,0,0) 70%)',
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
export default CustomCursor;
