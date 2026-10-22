import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, UserCircle } from 'lucide-react';
import { Section, SectionHeading, Reveal } from './Reveal';
import { team } from '@/data/content';

export function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <Section id="team" className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <SectionHeading
          eyebrow="Your Care Team"
          title="Healing Team"
          intro="Naturopaths, physiotherapists, yoga teachers and dieticians who stay with your case from first consultation to the day you go home."
        />
      </div>

      <div className="relative mt-12 max-w-8xl mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory px-5 md:px-10 pb-4"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="snap-start flex-shrink-0 w-[260px] md:w-[300px] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.designation}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-3/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="serif text-xl text-cream">{member.name}</h3>
                  <p className="text-sage-light text-sm">{member.designation}</p>
                  <motion.div
                    className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1.5 text-xs font-medium text-forest opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <UserCircle size={14} /> View profile
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6 px-5 md:px-10 max-w-8xl mx-auto">
          <a href="#team" className="link-underline inline-flex items-center gap-1 text-terracotta font-medium text-sm">
            Meet the whole team <ArrowRight size={15} />
          </a>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="h-10 w-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="h-10 w-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
