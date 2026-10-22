import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from './Reveal';
import { CornerFrame } from './Botanical';
import { packages } from '@/data/content';

export function Packages() {
  const [center, setCenter] = useState(2);
  const count = packages.length;
  const dragStart = useRef<number | null>(null);

  const go = useCallback((dir: number) => {
    setCenter((c) => (c + dir + count) % count);
  }, [count]);

  const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (dragStart.current === null) return;
    let endX: number;
    if ('touches' in e) {
      endX = e.changedTouches[0].clientX;
    } else {
      endX = e.clientX;
    }
    const dx = endX - dragStart.current;
    if (Math.abs(dx) > 60) go(dx > 0 ? -1 : 1);
    dragStart.current = null;
  };

  const getPos = (i: number) => {
    const diff = i - center;
    const n = count;
    let d = diff;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <Section id="packages" dark className="py-20 md:py-28 relative grain">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <SectionHeading
          eyebrow="Programmes for Every Body"
          title="Healing Packages"
          light
          center
        />
      </div>

      <div
        className="relative mt-14 h-[480px] md:h-[560px] flex items-center justify-center select-none"
        onMouseDown={(e) => (dragStart.current = e.clientX)}
        onTouchStart={(e) => (dragStart.current = e.touches[0].clientX)}
        onMouseUp={onDragEnd}
        onTouchEnd={onDragEnd}
      >
        {/* ornamental frame */}
        <div className="absolute inset-0 md:inset-8 lg:inset-16 pointer-events-none">
          <CornerFrame color="rgba(143,166,138,0.35)" />
        </div>

        {packages.map((pkg, i) => {
          const pos = getPos(i);
          const isActive = pos === 0;
          const abs = Math.abs(pos);
          return (
            <motion.div
              key={pkg.num}
              className="absolute w-[280px] md:w-[340px] h-[420px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => (isActive ? null : setCenter(i))}
              animate={{
                x: `${pos * 58}%`,
                scale: isActive ? 1 : 0.85 - abs * 0.05,
                rotateY: pos * -12,
                opacity: abs > 2 ? 0 : 1 - abs * 0.3,
                zIndex: 10 - abs,
                filter: isActive ? 'brightness(1)' : `brightness(${0.5 - abs * 0.12})`,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img src={pkg.image} alt={pkg.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-3/95 via-forest/40 to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <span className="text-cream/70 text-sm tabular-nums">{pkg.num} / 05</span>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="eyebrow text-sage-light"
                  >
                    Featured
                  </motion.span>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sage-light text-sm mb-1">{pkg.tagline}</p>
                <h3 className="serif text-2xl md:text-3xl text-cream">{pkg.title}</h3>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sage-light/90 text-sm leading-relaxed">{pkg.desc}</p>
                      <button className="btn-sweep mt-4 inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-cream text-sm font-semibold hover:bg-terracotta-2 transition-colors">
                        Explore journey <ArrowRight size={15} />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => go(-1)}
          className="h-11 w-11 rounded-full border border-sage/40 text-cream flex items-center justify-center hover:bg-sage/20 transition-colors"
          aria-label="Previous package"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go(1)}
          className="h-11 w-11 rounded-full border border-sage/40 text-cream flex items-center justify-center hover:bg-sage/20 transition-colors"
          aria-label="Next package"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </Section>
  );
}
