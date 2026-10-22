import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { dinacharya } from '@/data/about';
import { Reveal } from '@/components/Reveal';

function getCurrentSlotIndex(): number {
  const now = new Date();
  const totalMinutes = now.getHours() * 60 + now.getMinutes();
  let best = 0;
  for (let i = 0; i < dinacharya.length; i++) {
    const startStr = dinacharya[i].time.split(' - ')[0];
    const hourMatch = startStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!hourMatch) continue;
    let h = parseInt(hourMatch[1]);
    const m = parseInt(hourMatch[2]);
    const ap = hourMatch[3].toUpperCase();
    if (ap === 'PM' && h !== 12) h += 12;
    if (ap === 'AM' && h === 12) h = 0;
    const slotMin = h * 60 + m;
    if (slotMin <= totalMinutes) best = i;
  }
  return best;
}

export function DinacharyaSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(getCurrentSlotIndex());
  }, []);

  const slot = dinacharya[activeIndex];

  const timelineSlots = useMemo(() => dinacharya.map((d) => d.time), []);

  return (
    <section id="dinacharya" className="relative min-h-screen overflow-hidden bg-forest-3">
      {/* Background */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <img src={slot.image} alt={slot.title} className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-forest-3/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-3/80 via-forest-3/50 to-forest-3/80" />

      {/* Left vine decoration */}
      <div className="absolute left-4 top-0 bottom-0 w-1 hidden md:block opacity-30">
        <svg viewBox="0 0 20 800" className="h-full w-full" fill="none" stroke="#8FA68A" strokeWidth="1.2">
          <path d="M10 0 Q 5 100 10 200 Q 15 300 10 400 Q 5 500 10 600 Q 15 700 10 800" />
          {[100, 220, 340, 460, 580, 700].map((y, i) => (
            <g key={i} transform={`translate(10 ${y})`}>
              <path d={`M0 0 Q ${i % 2 === 0 ? '12' : '-12'} -8 ${i % 2 === 0 ? '14' : '-14'} 0`} />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-10 py-20 md:py-28 min-h-screen flex flex-col">
        <Reveal>
          <span className="eyebrow text-sage-light">A Day at Sattva</span>
          <h2 className="serif text-4xl md:text-6xl text-cream mt-4">Dinacharya</h2>
          <p className="text-sage-light/80 mt-3 max-w-md">
            The daily rhythm at Sattva — timed to the body, the seasons and the elements.
          </p>
        </Reveal>

        <div className="flex-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-8 lg:mt-12">
          {/* Center: active activity */}
          <div className="flex-1 text-center lg:text-left lg:pr-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <p className="serif italic text-xl text-sage-light">{slot.time}</p>
                <h3 className="serif text-4xl md:text-6xl text-cream mt-4 leading-tight">{slot.title}</h3>
                <p className="mt-5 text-sage-light/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {slot.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: timeline */}
          <div className="lg:w-80 flex-shrink-0">
            {/* Mobile: horizontal scroll strip */}
            <div className="lg:hidden flex gap-2 overflow-x-auto no-scrollbar pb-4">
              {timelineSlots.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-all flex-shrink-0 ${
                    i === activeIndex
                      ? 'bg-sage text-forest'
                      : 'bg-cream/10 text-sage-light hover:bg-cream/20'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Desktop: vertical timeline */}
            <div className="hidden lg:block relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-sage/20" />
              <div className="space-y-1 max-h-[420px] overflow-y-auto no-scrollbar pl-1">
                {dinacharya.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`relative flex items-center gap-3 pl-0 pr-3 py-2 w-full text-left rounded-lg transition-all ${
                      i === activeIndex
                        ? 'bg-cream/10'
                        : 'hover:bg-cream/5'
                    }`}
                  >
                    <span
                      className={`relative z-10 h-2.5 w-2.5 rounded-full flex-shrink-0 ml-1.5 transition-colors ${
                        i === activeIndex ? 'bg-sage' : 'bg-sage/40'
                      }`}
                    />
                    <span
                      className={`text-sm transition-colors ${
                        i === activeIndex
                          ? 'italic text-cream font-medium'
                          : 'text-sage-light/60'
                      }`}
                    >
                      {d.time}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
