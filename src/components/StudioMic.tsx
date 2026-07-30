interface StudioMicProps {
  className?: string;
  size?: number;
}

export function StudioMic({ className = '', size = 20 }: StudioMicProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-studio-amber ${className}`}
      aria-hidden="true"
    >
      {/* Mic stand base */}
      <ellipse cx="12" cy="21" rx="5" ry="1.5" fill="currentColor" opacity="0.3" />
      <rect x="11.25" y="16" width="1.5" height="5" fill="currentColor" opacity="0.5" />
      {/* Mic body */}
      <rect x="8" y="4" width="8" height="12" rx="4" fill="currentColor" opacity="0.85" />
      {/* Grille lines */}
      <line x1="9.5" y1="7" x2="14.5" y2="7" stroke="#07050d" strokeWidth="0.6" opacity="0.5" />
      <line x1="9.5" y1="9.5" x2="14.5" y2="9.5" stroke="#07050d" strokeWidth="0.6" opacity="0.5" />
      <line x1="9.5" y1="12" x2="14.5" y2="12" stroke="#07050d" strokeWidth="0.6" opacity="0.5" />
      {/* Shock mount arc */}
      <path
        d="M6 6 Q12 2 18 6"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

export default StudioMic;
