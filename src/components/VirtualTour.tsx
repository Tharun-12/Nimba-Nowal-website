import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Maximize2, Move } from 'lucide-react';
import { Section, SectionHeading, Reveal } from './Reveal';
import { tourTabs } from '@/data/content';

export function VirtualTour() {
  const [tab, setTab] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState({ x: 0, y: 0 });

  const onDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX - drag.x;
    const startY = e.clientY - drag.y;
    const onMove = (ev: MouseEvent) => setDrag({ x: ev.clientX - startX, y: ev.clientY - startY });
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  return (
    <Section id="tour" className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="Step Inside" title="Get into Sattva" center />
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-10 mt-12">
        {/* hero tour image */}
        <Reveal>
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.img
                key={tab}
                src={tourTabs[tab].image}
                alt={tourTabs[tab].label}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-forest-3/70 via-transparent to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.button
                onClick={() => setLightbox(true)}
                whileHover={{ scale: 1.08 }}
                className="h-20 w-20 md:h-24 md:w-24 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center shadow-2xl"
              >
                <Play size={32} className="text-terracotta ml-1" fill="currentColor" />
              </motion.button>
              <p className="serif text-3xl md:text-5xl text-cream mt-6">Start the tour</p>
              <p className="text-sage-light mt-2 max-w-md text-center">{tourTabs[tab].desc}</p>
            </div>
          </div>
        </Reveal>

        {/* tabs */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tourTabs.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                tab === i
                  ? 'bg-forest text-cream'
                  : 'bg-cream-2/60 text-forest hover:bg-sage/30'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox panorama */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[300] bg-forest-3/95 backdrop-blur flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <motion.div
              className="relative w-full max-w-6xl aspect-[21/9] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div ref={dragRef} className="absolute inset-0 overflow-hidden">
                <img
                  src={tourTabs[tab].image}
                  alt={`${tourTabs[tab].label} panorama`}
                  className="absolute inset-0 h-full w-full object-cover select-none"
                  style={{ transform: `translate(${drag.x}px, ${drag.y}px) scale(1.5)` }}
                  onMouseDown={onDragStart}
                  draggable={false}
                />
              </div>
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-cream/90 px-3 py-1.5 text-xs text-forest font-medium">
                <Move size={14} /> Drag to explore
              </div>
              <button
                onClick={() => setLightbox(false)}
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-cream/90 flex items-center justify-center"
                aria-label="Close tour"
              >
                <X size={20} className="text-forest" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
