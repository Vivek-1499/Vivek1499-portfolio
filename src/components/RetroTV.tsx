import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, projects, skills } from '../data/portfolioData';

interface TvChannel {
  id: number;
  label: string;
  badge: string;
  title: string;
  body: ReactNode;
  footer: string;
}

const channels: TvChannel[] = [
  {
    id: 1,
    label: 'ABOUT',
    badge: 'PROFILE',
    title: personalInfo.name,
    body: (
      <p className="text-[10px] text-studio-muted leading-relaxed font-sans line-clamp-4">
        {personalInfo.introduction}
      </p>
    ),
    footer: `${personalInfo.location} · ${personalInfo.title}`,
  },
  {
    id: 2,
    label: 'SKILLS',
    badge: 'TOOLKIT',
    title: 'Engineering Stack',
    body: (
      <div className="flex flex-wrap gap-1">
        {skills.flatMap((cat) => cat.skills.slice(0, 2).map((s) => s.name)).slice(0, 8).map((name) => (
          <span key={name} className="text-[8px] font-mono bg-studio-black/80 border border-studio-border/60 text-studio-cream/90 px-1.5 py-0.5 rounded">
            {name}
          </span>
        ))}
      </div>
    ),
    footer: 'React · Vue · Node · WebRTC',
  },
  {
    id: 3,
    label: 'PROJECTS',
    badge: 'REELS',
    title: 'Latest Builds',
    body: (
      <ul className="space-y-1.5">
        {projects.map((p) => (
          <li key={p.id} className="text-[10px] text-studio-muted font-sans">
            <span className="text-studio-amber font-mono text-[8px] uppercase">{p.title.split('—')[0].trim()}</span>
            <span className="block text-[9px] mt-0.5">{p.impactMetric}</span>
          </li>
        ))}
      </ul>
    ),
    footer: 'Tap TV to change channel →',
  },
  {
    id: 4,
    label: 'CONTACT',
    badge: 'SIGNAL',
    title: 'Get In Touch',
    body: (
      <div className="space-y-2">
        <p className="text-[10px] text-studio-muted font-mono">{personalInfo.email}</p>
        <p className="text-[10px] text-studio-muted font-mono">{personalInfo.phone}</p>
        <Link to="/contact" className="inline-block text-[9px] text-studio-amber uppercase tracking-widest hover:text-studio-gold transition-colors">
          Open Contact →
        </Link>
      </div>
    ),
    footer: personalInfo.status,
  },
];

export function RetroTV() {
  const [channelIndex, setChannelIndex] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [staticFlash, setStaticFlash] = useState(false);

  const channel = channels[channelIndex];

  const handleTvClick = () => {
    if (isShaking) return;

    setIsShaking(true);
    setStaticFlash(true);

    setTimeout(() => setStaticFlash(false), 180);

    setTimeout(() => {
      setChannelIndex((prev) => (prev + 1) % channels.length);
      setIsShaking(false);
    }, 380);
  };

  const channelNum = String(channel.id).padStart(2, '0');

  return (
    <>
      <style>{`
        @keyframes crtFlicker {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.28; }
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes tvShake {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-6px, 4px) rotate(-2deg); }
          40% { transform: translate(5px, -4px) rotate(2deg); }
          60% { transform: translate(-4px, 3px) rotate(-1deg); }
          80% { transform: translate(4px, 2px) rotate(1deg); }
        }
        @keyframes staticBurst {
          0% { opacity: 0.85; }
          100% { opacity: 0; }
        }
        .crt-flicker-overlay {
          animation: crtFlicker 0.15s infinite;
        }
        .scanline-sweep {
          animation: scanline 6s linear infinite;
        }
        .tv-shaking {
          animation: tvShake 0.38s ease-out;
        }
        .static-burst {
          animation: staticBurst 0.18s ease-out forwards;
        }
      `}</style>

      <div className="mb-4 text-center">
        <span className="mono-code text-[10px] text-studio-muted uppercase tracking-[0.3em]">
          Click the TV to change channel
        </span>
      </div>

      <button
        type="button"
        onClick={handleTvClick}
        aria-label={`Retro TV showing channel ${channelNum}. Click to change channel.`}
        className={`w-full max-w-lg mx-auto block bg-[#2e1d18] border-[14px] border-[#3e2723] rounded-2xl shadow-2xl p-5 cursor-pointer hover:border-[#5d4037] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-amber ${isShaking ? 'tv-shaking' : ''
          }`}
      >
        {/* Channel indicator strip */}
        <div className="flex items-center justify-between mb-3 px-1 font-mono text-[9px]">
          <span className="text-studio-amber bg-studio-black/60 px-2 py-0.5 rounded border border-studio-amber/30 tracking-widest">
            CH {channelNum}
          </span>
          <span className="text-studio-muted uppercase tracking-wider">{channel.label}</span>
          <span className="text-studio-muted flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            ON AIR
          </span>
        </div>

        {/* CRT screen */}
        <div className="bg-[#121115] border-4 border-[#222] rounded-[32px/24px] relative overflow-hidden h-52 flex flex-col p-5 select-none shadow-[inset_0_0_40px_rgba(0,0,0,0.95)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 left-0 right-0 h-[2px] bg-white/10 pointer-events-none z-10 scanline-sweep" />

          {staticFlash && (
            <div
              className="absolute inset-0 z-30 pointer-events-none static-burst crt-flicker-overlay"
              style={{
                backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 1px, transparent 1px, transparent 3px)',
              }}
            />
          )}

          <div className="flex-grow flex flex-col justify-between relative z-0 h-full text-left">
            <div className="flex justify-between items-center text-[7px] font-mono text-studio-muted">
              <span>VIVEK-TV · {channel.badge}</span>
              <span>{channelNum} / {String(channels.length).padStart(2, '0')}</span>
            </div>

            <div className="my-auto py-2">
              <span className="mono-code text-[8px] tracking-[0.2em] text-studio-amber uppercase block mb-1 font-semibold">
                ★ {channel.label} ★
              </span>
              <h3 className="title-serif text-sm font-bold text-studio-cream leading-tight mb-2">
                {channel.title}
              </h3>
              {channel.body}
            </div>

            <div className="text-[7px] font-mono text-studio-muted border-t border-studio-border/30 pt-1.5 truncate">
              {channel.footer}
            </div>
          </div>
        </div>

        {/* Decorative dial knobs — visual only */}
        <div className="flex justify-center gap-8 mt-4 pointer-events-none">
          <div className="flex flex-col items-center gap-1">
            <span className="text-studio-muted uppercase text-[7px] font-mono">Tuning</span>
            <div
              className="w-7 h-7 rounded-full bg-[#18100e] border border-studio-border relative"
              style={{ transform: `rotate(${channelIndex * 45}deg)` }}
            >
              <div className="w-0.5 h-2.5 bg-studio-cream/30 rounded absolute top-1 left-1/2 -translate-x-1/2" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-studio-muted uppercase text-[7px] font-mono">Volume</span>
            <div className="w-7 h-7 rounded-full bg-[#18100e] border border-studio-border relative">
              <div className="w-0.5 h-2.5 bg-studio-cream/30 rounded absolute top-1 left-1/2 -translate-x-1/2 rotate-[-20deg]" />
            </div>
          </div>
        </div>
      </button>
    </>
  );
}

export default RetroTV;
