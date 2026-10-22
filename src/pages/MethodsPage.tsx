import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading, Reveal } from '@/components/Reveal';
import { methods } from '@/data/content';
import { images } from '@/data/imagePrompts';

export function MethodsPage() {
  return (
    <>
      <PageHero
        eyebrow="What Makes Us Different"
        title="Healing Methods"
        intro="Four foundations that shape every stay at Sattva — from the land itself to the food on your plate."
        image={images.method_1}
        crumb="Healing Methods"
      />

      <Section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          {methods.map((m, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={m.num}>
                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 ${reversed ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(31,61,43,0.15)] lg:[direction:ltr]">
                    <img src={m.image} alt={m.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute top-5 left-5">
                      <span className="serif text-6xl text-cream/50">{m.num}</span>
                    </div>
                  </div>
                  <div className="lg:[direction:ltr]">
                    <span className="eyebrow text-terracotta">Method {m.num}</span>
                    <h2 className="serif text-4xl md:text-5xl text-forest mt-3">{m.title}</h2>
                    <p className="mt-4 text-charcoal/75 leading-relaxed text-lg">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section dark className="py-20 text-center grain">
        <div className="max-w-2xl mx-auto px-5">
          <SectionHeading eyebrow="Ready to Begin?" title="Experience it yourself" light center />
          <Reveal delay={0.2}>
            <Link
              to="/packages"
              className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-cream font-semibold hover:bg-terracotta-2 transition-colors mt-6"
            >
              Explore packages
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
