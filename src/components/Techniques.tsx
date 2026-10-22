import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Section, SectionHeading, Reveal } from './Reveal';
import { techniques } from '@/data/content';

export function Techniques() {
  const [hovered, setHovered] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 300, damping: 30, mass: 0.5 });
  const y = useSpring(my, { stiffness: 300, damping: 30, mass: 0.5 });
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left - 160);
    my.set(e.clientY - rect.top - 100);
  };

  return (
    <Section id="techniques" className="py-20 md:py-28 bg-cream">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <SectionHeading
          eyebrow="Five Disciplines, One Plan"
          title="Healing Techniques"
        />
      </div>

      <div
        ref={ref}
        onMouseMove={onMove}
        className="max-w-8xl mx-auto px-5 md:px-10 mt-12 relative"
      >
        {techniques.map((tech, i) => (
          <Reveal key={tech.num} delay={i * 0.08}>
            <a
              href="#techniques"
              className="group block border-t border-forest/15 last:border-b py-7 md:py-8 px-2 md:px-4 hover:bg-cream-2/40 transition-colors rounded-xl"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8">
                <span className="serif text-2xl md:text-3xl text-terracotta/60 group-hover:text-terracotta transition-colors">
                  {tech.num}
                </span>
                <div className="overflow-hidden">
                  <motion.h3
                    className="serif text-3xl md:text-5xl lg:text-6xl text-forest"
                    animate={{ x: hovered === i ? 12 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {tech.title}
                  </motion.h3>
                  <p className="mt-2 text-charcoal/60 text-sm md:text-base max-w-md">
                    {tech.desc}
                  </p>
                </div>
                <motion.div
                  animate={{
                    rotate: hovered === i ? 0 : -45,
                    scale: hovered === i ? 1.1 : 1,
                  }}
                  className="h-11 w-11 rounded-full border border-forest/20 flex items-center justify-center text-forest group-hover:bg-terracotta group-hover:border-terracotta group-hover:text-cream transition-colors"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </div>
            </a>
          </Reveal>
        ))}

        {/* floating image */}
        <motion.div
          className="hidden lg:block pointer-events-none fixed z-40 h-64 w-80 rounded-2xl overflow-hidden shadow-2xl"
          style={{ x, y, left: 0, top: 0, position: 'fixed' }}
          animate={{
            opacity: hovered !== null ? 1 : 0,
            scale: hovered !== null ? 1 : 0.85,
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {hovered !== null && (
            <img
              src={techniques[hovered].image}
              alt={techniques[hovered].title}
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>

        <div className="mt-10">
          <a href="#techniques" className="link-underline inline-flex items-center gap-1 text-terracotta font-medium text-sm">
            See all healing techniques <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </Section>
  );
}
