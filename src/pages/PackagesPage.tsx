import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, Target, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading, Reveal } from '@/components/Reveal';
import { LeafDivider } from '@/components/Botanical';
import { packages, packageDetails } from '@/data/content';
import { images } from '@/data/imagePrompts';
import { useModal } from '@/components/ModalContext';

export function PackagesPage() {
  const { openHealthTest } = useModal();

  return (
    <>
      <PageHero
        eyebrow="Programmes for Every Body"
        title="Healing Packages"
        intro="Five structured programmes, each designed around a specific health goal — from immunity and heart health to mental calm and pain-free movement."
        image={images.package_neuro}
        crumb="Healing Packages"
      />

      <Section dark className="py-20 md:py-28 grain">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          {packages.map((pkg, i) => {
            const detail = packageDetails[pkg.title];
            return (
              <div key={pkg.num}>
                <Reveal>
                  <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
                    {/* image card */}
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] lg:sticky lg:top-28">
                      <img src={pkg.image} alt={pkg.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-3/90 to-transparent" />
                      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                        <span className="text-cream/70 text-sm tabular-nums">{pkg.num} / 05</span>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-sage-light text-sm">{pkg.tagline}</p>
                        <h2 className="serif text-3xl text-cream mt-1">{pkg.title}</h2>
                      </div>
                    </div>

                    {/* detail */}
                    <div>
                      <span className="eyebrow text-sage-light">Package {pkg.num}</span>
                      <h3 className="serif text-3xl md:text-4xl text-cream mt-2">{pkg.title}</h3>
                      <p className="text-sage-light mt-1">{pkg.tagline}</p>

                      {detail && (
                        <>
                          <p className="mt-5 text-sage-light/90 leading-relaxed">{detail.overview}</p>

                          <div className="mt-6 flex flex-wrap gap-5">
                            <div className="flex items-center gap-2 text-sm text-sage-light">
                              <Clock size={16} className="text-terracotta" />
                              <span>{detail.duration}</span>
                            </div>
                          </div>

                          <div className="mt-6">
                            <p className="eyebrow text-sage-light/60 mb-3">Ideal For</p>
                            <div className="flex items-start gap-2">
                              <Target size={18} className="text-terracotta flex-shrink-0 mt-0.5" />
                              <p className="text-sage-light/90 text-sm leading-relaxed">{detail.idealFor}</p>
                            </div>
                          </div>

                          <div className="mt-6">
                            <p className="eyebrow text-sage-light/60 mb-3">What's Included</p>
                            <ul className="grid sm:grid-cols-2 gap-2">
                              {detail.inclusions.map((inc) => (
                                <li key={inc} className="flex items-center gap-2 text-sm text-sage-light/90">
                                  <Check size={16} className="text-terracotta flex-shrink-0" />
                                  {inc}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}

                      <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={openHealthTest}
                          className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-cream font-semibold hover:bg-terracotta-2 transition-colors text-sm"
                        >
                          Explore journey
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <Link
                          to="/contact"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-sage/40 px-6 py-3 text-cream font-semibold hover:bg-sage/20 transition-colors text-sm"
                        >
                          Enquire now
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
                {i < packages.length - 1 && <LeafDivider className="my-16" color="#8FA68A" />}
              </div>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-5">
          <Sparkles size={28} className="text-terracotta mx-auto mb-4" />
          <SectionHeading
            eyebrow="Still Deciding?"
            title="Take the health test"
            intro="Answer five quick questions and we'll recommend the right programme for your body."
            center
          />
          <Reveal delay={0.2}>
            <button
              onClick={openHealthTest}
              className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-cream font-semibold hover:bg-terracotta-2 transition-colors mt-6"
            >
              Take a Health Test
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
