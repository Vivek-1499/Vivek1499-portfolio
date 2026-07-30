import { useState, useEffect } from 'react';
import { Sliders, Eye, Camera } from 'lucide-react';

export function DirectorConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'default' | 'noir' | 'sepia' | 'neon'>('default');

  useEffect(() => {
    const stage = document.getElementById('stage-wrapper');
    if (!stage) return;

    switch (activeFilter) {
      case 'noir':
        stage.style.filter = 'grayscale(95%) contrast(125%) brightness(95%)';
        break;
      case 'sepia':
        stage.style.filter = 'sepia(75%) contrast(90%) brightness(90%)';
        break;
      case 'neon':
        stage.style.filter = 'hue-rotate(245deg) saturate(160%)';
        break;
      case 'default':
      default:
        stage.style.filter = 'none';
        break;
    }

    return () => {
      stage.style.filter = 'none';
    };
  }, [activeFilter]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono text-[10px] select-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-studio-card border border-studio-border hover:border-studio-amber rounded-full flex items-center justify-center text-studio-cream hover:text-studio-amber cursor-pointer shadow-2xl transition-all duration-300 interactive-hover"
        aria-label="Toggle Director Console Panel"
      >
        <Sliders className={`w-5 h-5 ${isOpen ? 'rotate-90' : ''} transition-transform duration-300`} />
      </button>

      {isOpen && (
        <div className="absolute bottom-14 right-0 w-64 bg-studio-card border border-studio-border p-4 rounded-lg shadow-2xl flex flex-col gap-4 animate-page-enter">
          <div className="border-b border-studio-border pb-2 flex items-center justify-between">
            <span className="text-studio-amber uppercase tracking-widest font-semibold flex items-center gap-1">
              <Camera className="w-3.5 h-3.5" />
              Director Console
            </span>
            <span className="text-[8px] text-studio-muted">v0.1</span>
          </div>

          <div className="space-y-1.5">
            <span className="text-studio-cream flex items-center gap-1 text-[9px] uppercase tracking-wider font-semibold">
              <Eye className="w-3.5 h-3.5" /> Camera Filters:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {(['default', 'noir', 'sepia', 'neon'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`py-1 border text-[9px] rounded uppercase cursor-pointer transition-colors ${activeFilter === filter
                    ? 'bg-studio-amber border-studio-amber text-studio-black font-semibold'
                    : 'bg-studio-black border-studio-border text-studio-muted hover:border-studio-amber/55'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default DirectorConsole;
