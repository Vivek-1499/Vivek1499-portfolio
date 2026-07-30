import { usePortfolioPreferences } from '../context/PortfolioPreferences';

interface VinylRecordProps {
  label: string;
  sublabel?: string;
  size?: 'sm' | 'md' | 'lg';
  spinning?: boolean;
  className?: string;
  onClick?: () => void;
}

const sizeMap = {
  sm: 'w-16 h-16',
  md: 'w-28 h-28',
  lg: 'w-36 h-36',
};

const labelSizeMap = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
};

export function VinylRecord({
  label,
  sublabel,
  size = 'md',
  spinning = true,
  className = '',
  onClick,
}: VinylRecordProps) {
  const { prefersReducedMotion } = usePortfolioPreferences();
  const shouldSpin = spinning && !prefersReducedMotion;

  const Wrapper = onClick ? 'button' : 'div';

  return (
    <Wrapper
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`relative ${sizeMap[size]} shrink-0 group ${onClick ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-amber rounded-full' : ''} ${className}`}
      aria-label={onClick ? `Vinyl: ${label}` : undefined}
    >
      {/* Outer disc */}
      <div
        className={`absolute inset-0 rounded-full bg-[#0a0a0c] shadow-[0_4px_20px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.06)] ${shouldSpin ? 'vinyl-spin' : ''} group-hover:shadow-[0_4px_24px_rgba(139,92,246,0.15)] transition-shadow`}
      >
        {/* Grooves */}
        <div className="absolute inset-[3px] rounded-full border border-white/[0.04]" />
        <div className="absolute inset-[8px] rounded-full border border-white/[0.03]" />
        <div className="absolute inset-[14px] rounded-full border border-white/[0.025]" />
        <div className="absolute inset-[20px] rounded-full border border-white/[0.02]" />

        {/* Shine arc */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none" />

        {/* Center label */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${labelSizeMap[size]} rounded-full bg-gradient-to-br from-studio-amber/90 to-[#5b21b6] flex flex-col items-center justify-center text-center p-1 shadow-inner overflow-hidden`}
        >
          <span className="text-[5px] md:text-[6px] font-mono text-studio-black/80 uppercase tracking-wider leading-none truncate max-w-full px-0.5">
            {sublabel || 'VP'}
          </span>
          <span className="text-[6px] md:text-[7px] font-bold text-studio-black leading-tight truncate max-w-full px-0.5 mt-0.5">
            {label}
          </span>
        </div>

        {/* Spindle hole */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-studio-black border border-white/10 z-10" />
      </div>
    </Wrapper>
  );
}

export default VinylRecord;
