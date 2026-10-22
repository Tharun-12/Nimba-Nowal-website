import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Check, Clock, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading, Reveal } from '@/components/Reveal';
import { LeafDivider } from '@/components/Botanical';
import { techniques, techniqueDetails } from '@/data/content';
import { images } from '@/data/imagePrompts';

export function TechniquesPage() {
  return (
    <>
      <PageHero
        eyebrow="Five Disciplines, One Plan"
        title="Healing Techniques"
        intro="Naturopathy, Ayurveda, yoga, physiotherapy and holistic therapies — each a complete science, woven into a single plan shaped around you."
        image={images.ayurveda}
        crumb="Healing Techniques"
      />

      <Section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          {techniques.map((tech, i) => {
            const detail = techniqueDetails[tech.title];
            const reversed = i % 2 === 1;
            return (
              <div key={tech.num}>
                <Reveal>
                  <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reversed ? 'lg:[direction:rtl]' : ''}`}>
                    <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(31,61,43,0.15)] lg:[direction:ltr]`}>
                      <img src={tech.image} alt={tech.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute top-5 left-5">
                        <span className="serif text-6xl text-cream/50">{tech.num}</span>
                      </div>
                    </div>

                    <div className="lg:[direction:ltr]">
                      <span className="eyebrow text-terracotta">Technique {tech.num}</span>
                      <h2 className="serif text-4xl md:text-5xl text-forest mt-3">{tech.title}</h2>
                      <p className="mt-2 text-lg text-charcoal/60">{tech.desc}</p>

                      {detail && (
                        <>
                          <p className="mt-5 text-charcoal/75 leading-relaxed">{detail.overview}</p>

                          <div className="mt-6 flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-sm text-charcoal/70">
                              <Clock size={16} className="text-terracotta" />
                              <span>{detail.duration}</span>
                            </div>
                          </div>

                          <div className="mt-6">
                            <p className="eyebrow text-forest/60 mb-3">Therapies Included</p>
                            <div className="flex flex-wrap gap-2">
                              {detail.therapies.map((t) => (
                                <span key={t} className="rounded-full bg-sage/15 px-3.5 py-1.5 text-sm text-forest font-medium">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6">
                            <p className="eyebrow text-forest/60 mb-3">Benefits</p>
                            <ul className="grid sm:grid-cols-2 gap-2">
                              {detail.benefits.map((b) => (
                                <li key={b} className="flex items-center gap-2 text-sm text-charcoal/75">
                                  <Check size={16} className="text-terracotta flex-shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}

                      <Link
                        to="/contact"
                        className="btn-sweep group mt-8 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-cream font-semibold hover:bg-terracotta-2 transition-colors text-sm"
                      >
                        Book this therapy
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
                {i < techniques.length - 1 && <LeafDivider className="my-16" />}
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="py-20 text-center grain">
        <div className="max-w-2xl mx-auto px-5">
          <Sparkles size={28} className="text-sage mx-auto mb-4" />
          <SectionHeading
            eyebrow="Not Sure Which Path?"
            title="Talk to a healing expert"
            light
            center
          />
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-cream font-semibold hover:bg-terracotta-2 transition-colors mt-6"
            >
              Book a consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
