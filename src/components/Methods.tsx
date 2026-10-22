import { motion } from 'motion/react';
import { Section, SectionHeading, Reveal } from './Reveal';
import { methods } from '@/data/content';

export function Methods() {
  return (
    <Section id="methods" className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="What Makes Us Different" title="Healing Methods" />
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-10 mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {methods.map((m, i) => (
          <Reveal key={m.num} delay={i * 0.1}>
            <motion.div
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
              whileHover="hover"
            >
              <img
                src={m.image}
                alt={m.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-3/95 via-forest/30 to-transparent" />

              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6"
                variants={{
                  hover: {},
                }}
              >
                <span className="serif text-5xl text-cream/40">{m.num}</span>
                <h3 className="serif text-2xl text-cream mt-2">{m.title}</h3>
                <motion.p
                  className="text-sage-light/90 text-sm mt-2 leading-relaxed"
                  initial={{ height: 0, opacity: 0 }}
                  variants={{ hover: { height: 'auto', opacity: 1 } }}
                  transition={{ duration: 0.4 }}
                  style={{ overflow: 'hidden' }}
                >
                  {m.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
