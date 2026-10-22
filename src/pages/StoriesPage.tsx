import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading, Reveal } from '@/components/Reveal';
import { LeafDivider } from '@/components/Botanical';
import { storyVideos } from '@/data/content';
import { testimonials, testimonialAvatars } from '@/data/testimonials';
import { images } from '@/data/imagePrompts';

export function StoriesPage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Guest Journeys"
        title="Healing Stories"
        intro="Discover how personalized care, natural therapies and mindful living have shaped the wellness journeys of our guests."
        image={images.yoga}
        crumb="Healing Stories"
      />

      {/* Featured quote carousel */}
      <Section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-10">
          <SectionHeading eyebrow="Voices of Healing" title="What our guests say" center />

          <Reveal delay={0.15}>
            <div
              className="mt-12 relative bg-cream-2/50 rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[320px]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <Quote size={40} className="text-terracotta/40" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4"
                >
                  <p className="serif text-2xl md:text-3xl text-forest leading-relaxed">
                    "{testimonials[active].quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-terracotta/15 flex items-center justify-center text-terracotta font-semibold text-sm">
                      {testimonialAvatars[active]}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">{testimonials[active].name}</p>
                      <p className="text-sm text-charcoal/60">{testimonials[active].role} · {testimonials[active].city}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
                    className="h-9 w-9 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                    className="h-9 w-9 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <span className="text-sm text-charcoal/60 tabular-nums">
                    {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="mt-4 h-0.5 bg-forest/10 rounded-full overflow-hidden">
                <motion.div
                  key={active + (paused ? 'p' : 'r')}
                  className="h-full bg-terracotta"
                  initial={{ width: '0%' }}
                  animate={{ width: paused ? '0%' : '100%' }}
                  transition={{ duration: paused ? 0 : 6, ease: 'linear' }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <LeafDivider />

      {/* All testimonials grid */}
      <Section className="py-20 md:py-28 bg-cream-2/30">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <SectionHeading eyebrow="All Stories" title="27 healing journeys" />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <motion.div
                  className="bg-cream rounded-2xl p-6 h-full border border-sage/10 hover:shadow-[0_15px_40px_rgba(31,61,43,0.1)] transition-shadow"
                  whileHover={{ y: -4 }}
                >
                  <Quote size={24} className="text-terracotta/30 mb-3" />
                  <p className="serif text-lg text-forest leading-relaxed">"{t.quote}"</p>
                  <div className="mt-4 flex items-center gap-3 pt-4 border-t border-sage/10">
                    <div className="h-10 w-10 rounded-full bg-terracotta/15 flex items-center justify-center text-terracotta font-semibold text-xs">
                      {testimonialAvatars[i]}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                      <p className="text-xs text-charcoal/55">{t.role} · {t.city}</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Video stories */}
      <Section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <SectionHeading eyebrow="Watch" title="Video stories" center />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {storyVideos.map((v, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group relative w-full aspect-video rounded-2xl overflow-hidden block"
                >
                  <img src={v.thumb} alt={v.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-forest/40 group-hover:bg-forest/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-cream/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-terracotta ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="serif text-lg text-cream">{v.title}</p>
                    <p className="text-xs text-sage-light mt-0.5">{v.guest} · {v.city}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Video modal */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            className="fixed inset-0 z-[300] bg-forest-3/90 backdrop-blur flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-forest-2"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={storyVideos[0].thumb} alt="Story video" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-cream/90 flex items-center justify-center">
                  <Play size={36} className="text-terracotta ml-1" fill="currentColor" />
                </div>
              </div>
              <button onClick={() => setVideoOpen(false)} className="absolute top-4 right-4 h-10 w-10 rounded-full bg-cream/90 flex items-center justify-center" aria-label="Close video">
                <X size={20} className="text-forest" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
