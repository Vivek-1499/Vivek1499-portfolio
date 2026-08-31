import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, Move } from 'lucide-react';

export interface LightboxImage {
  src: string;
  title: string;
  desc?: string;
  alt?: string;
}

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: LightboxImage[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  projectTitle?: string;
}

export function ImageLightboxModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  projectTitle,
}: ImageLightboxModalProps) {
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [touchStartPos, setTouchStartPos] = useState<{ x: number; y: number } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const currentImage = images[currentIndex] || images[0];
  const total = images.length;

  // Reset zoom & pan when image changes or modal opens
  const resetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    if (isOpen) {
      resetZoom();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, resetZoom]);

  // Navigate functions
  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    const nextIdx = (currentIndex - 1 + total) % total;
    onNavigate(nextIdx);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    const nextIdx = (currentIndex + 1) % total;
    onNavigate(nextIdx);
  }, [currentIndex, total, onNavigate]);

  // Zoom controls
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.35, 4));
  };

  const handleZoomOut = () => {
    setZoom((prev) => {
      const next = Math.max(prev - 0.35, 0.6);
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  };

  // Keyboard navigation & zoom
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        handleZoomOut();
      } else if (e.key === '0') {
        e.preventDefault();
        resetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose, resetZoom]);

  // Native non-passive mouse wheel zoom listener to allow e.preventDefault() without browser warnings
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isOpen) return;

    const handleWheelEvent = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) {
        setZoom((prev) => Math.min(prev + 0.25, 4));
      } else {
        setZoom((prev) => {
          const next = Math.max(prev - 0.25, 0.6);
          if (next <= 1) setPan({ x: 0, y: 0 });
          return next;
        });
      }
    };

    container.addEventListener('wheel', handleWheelEvent, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheelEvent);
    };
  }, [isOpen]);

  // Mouse drag panning
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoom <= 1) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch drag & swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      setTouchStartPos({ x: touch.clientX, y: touch.clientY });
      if (zoom > 1) {
        setIsDragging(true);
        setDragStart({ x: touch.clientX - pan.x, y: touch.clientY - pan.y });
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (zoom > 1 && isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      setPan({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (zoom <= 1 && touchStartPos && e.changedTouches.length === 1) {
      const touch = e.changedTouches[0];
      const diffX = touch.clientX - touchStartPos.x;
      const diffY = touch.clientY - touchStartPos.y;
      if (Math.abs(diffX) > 50 && Math.abs(diffY) < 60) {
        if (diffX > 0) handlePrev();
        else handleNext();
      }
    }
    setIsDragging(false);
    setTouchStartPos(null);
  };

  const handleDoubleClick = () => {
    if (zoom > 1) {
      resetZoom();
    } else {
      setZoom(2);
    }
  };

  if (!isOpen || !currentImage || typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 top-0 left-0 w-screen h-screen z-[99999] flex flex-col justify-between bg-black/95 backdrop-blur-xl select-none"
        onClick={(e) => {
          if (e.target === containerRef.current) onClose();
        }}
      >
        {/* --- TOP TOOLBAR --- */}
        <div className="z-20 flex items-center justify-between px-4 md:px-8 py-3.5 border-b border-white/10 bg-black/60 backdrop-blur-md">
          {/* Project & Frame Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-studio-amber uppercase tracking-widest px-2 py-0.5 rounded bg-studio-amber/10 border border-studio-amber/30">
                SCENE 0{currentIndex + 1} / 0{total}
              </span>
              {projectTitle && (
                <span className="text-xs font-serif font-medium text-studio-cream truncate max-w-[200px] md:max-w-md">
                  {projectTitle}
                </span>
              )}
            </div>
            <span className="text-xs md:text-sm font-mono text-studio-cream font-semibold tracking-wide mt-0.5">
              {currentImage.title}
            </span>
          </div>

          {/* Zoom & Action Controls */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Zoom Percentage Pill */}
            <div className="hidden sm:flex items-center px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-studio-muted">
              {Math.round(zoom * 100)}%
            </div>

            {/* Zoom Out Button */}
            <button
              onClick={handleZoomOut}
              title="Zoom Out (-)"
              className="p-2 rounded-md bg-white/5 hover:bg-white/15 text-studio-cream hover:text-studio-amber transition-colors border border-white/10"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            {/* Zoom In Button */}
            <button
              onClick={handleZoomIn}
              title="Zoom In (+)"
              className="p-2 rounded-md bg-white/5 hover:bg-white/15 text-studio-cream hover:text-studio-amber transition-colors border border-white/10"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            {/* Reset Zoom Button */}
            {zoom !== 1 && (
              <button
                onClick={resetZoom}
                title="Reset Zoom (0)"
                className="p-2 rounded-md bg-studio-amber/20 hover:bg-studio-amber/30 text-studio-amber transition-colors border border-studio-amber/40"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              title="Close (Esc)"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-white transition-colors border border-red-500/30 ml-2"
            >
              <X className="w-4 h-4" />
              <span className="hidden md:inline text-xs font-mono">ESC</span>
            </button>
          </div>
        </div>

        {/* --- MAIN STAGE (ZOOM & PAN CONTAINER) --- */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDoubleClick={handleDoubleClick}
          className={`relative flex-1 flex items-center justify-center overflow-hidden p-4 md:p-10 ${
            zoom > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
          }`}
        >
          {/* Navigation Arrow Left */}
          {total > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              title="Previous Image (← Left Arrow)"
              className="absolute left-4 md:left-8 z-30 p-3 rounded-full bg-black/60 hover:bg-studio-amber hover:text-black text-studio-cream transition-all duration-300 border border-white/15 hover:border-studio-amber shadow-2xl backdrop-blur-md group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Rendered Image with Zoom & Pan Transforms */}
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative flex items-center justify-center max-w-full max-h-full"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: 'center center',
              transition: isDragging ? 'none' : 'transform 0.15s ease-out',
            }}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt || currentImage.title}
              draggable={false}
              className="max-h-[72vh] max-w-[90vw] object-contain rounded-md shadow-2xl border border-white/10 select-none pointer-events-auto"
            />
          </motion.div>

          {/* Navigation Arrow Right */}
          {total > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              title="Next Image (→ Right Arrow)"
              className="absolute right-4 md:right-8 z-30 p-3 rounded-full bg-black/60 hover:bg-studio-amber hover:text-black text-studio-cream transition-all duration-300 border border-white/15 hover:border-studio-amber shadow-2xl backdrop-blur-md group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          )}

          {/* Zoom hint overlay when zoom > 1 */}
          {zoom > 1 && (
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 border border-white/15 text-[10px] font-mono text-studio-muted pointer-events-none">
              <Move className="w-3 h-3 text-studio-amber" />
              <span>Drag to pan • Double-click to reset</span>
            </div>
          )}
        </div>

        {/* --- BOTTOM THUMBNAIL FILMSTRIP & CAPTION --- */}
        <div className="z-20 px-4 md:px-8 py-3 border-t border-white/10 bg-black/70 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Caption text */}
          <div className="text-center md:text-left">
            <p className="text-xs text-studio-muted font-sans">
              {currentImage.desc || 'High-resolution architectural still / schematic.'}
            </p>
          </div>

          {/* Filmstrip thumbnails */}
          {total > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
              {images.map((img, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => onNavigate(idx)}
                    className={`relative w-20 h-12 md:w-24 md:h-14 rounded overflow-hidden transition-all duration-300 flex-shrink-0 border-2 ${
                      isActive
                        ? 'border-studio-amber ring-2 ring-studio-amber/30 scale-105 shadow-lg'
                        : 'border-white/15 opacity-50 hover:opacity-90 hover:border-white/40'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-end p-1">
                      <span className="text-[7px] font-mono text-white font-bold leading-none bg-black/80 px-1 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
