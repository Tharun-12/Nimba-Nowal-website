import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ChevronLeft, ChevronRight, ArrowRight, Quote } from 'lucide-react';
import { Section, SectionHeading, Reveal } from './Reveal';
import { storyVideos } from '@/data/content';
import { testimonials, testimonialAvatars } from '@/data/testimonials';

export function Stories() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[active];

  return (
    <Section id="stories" className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <SectionHeading
          eyebrow="Guest Journeys"
          title="Healing Stories"
          intro="Discover how personalized care, natural therapies and mindful living have shaped the wellness journeys of our guests."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Video card */}
          <Reveal className="group">
            <button
              onClick={() => setVideoOpen(true)}
              className="relative w-full aspect-video rounded-2xl overflow-hidden block"
            >
              <img
                src={storyVideos[0].thumb}
                alt="Guest healing story video"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-forest/40 group-hover:bg-forest/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="h-20 w-20 rounded-full bg-cream/90 flex items-center justify-center shadow-xl"
                >
                  <Play size={28} className="text-terracotta ml-1" fill="currentColor" />
                </motion.div>
              </div>
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <span className="eyebrow text-sage-light">Featured Story</span>
                <p className="serif text-2xl text-cream mt-1">{storyVideos[0].title}</p>
                <p className="text-sm text-sage-light mt-0.5">{storyVideos[0].guest} · {storyVideos[0].city}</p>
              </div>
            </button>

            {/* thumbnail strip */}
            <div className="mt-4 grid grid-cols-9 gap-2">
              {storyVideos.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setVideoOpen(true)}
                  className="relative aspect-square rounded-lg overflow-hidden group/t hover:ring-2 hover:ring-terracotta transition-all"
                >
                  <img src={v.thumb} alt={v.title} loading="lazy" className="h-full w-full object-cover group-hover/t:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-forest/30 group-hover/t:bg-forest/10 transition-colors flex items-center justify-center">
                    <Play size={12} className="text-cream" fill="currentColor" />
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Quote carousel */}
          <Reveal delay={0.1} className="flex flex-col">
            <div
              className="relative flex-1 bg-cream-2/50 rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[320px]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <Quote size={36} className="text-terracotta/40" />
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
                    "{t.quote}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-terracotta/15 flex items-center justify-center text-terracotta font-semibold text-sm">
                      {testimonialAvatars[active]}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">{t.name}</p>
                      <p className="text-sm text-charcoal/60">{t.role} · {t.city}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
                    className="h-9 w-9 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                    className="h-9 w-9 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-cream transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={16} />
                  </button>
                  <span className="text-sm text-charcoal/60 tabular-nums">
                    {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* progress bar */}
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

            <a href="#stories" className="link-underline mt-5 inline-flex items-center gap-1 text-terracotta font-medium text-sm">
              Read all stories <ArrowRight size={15} />
            </a>
          </Reveal>
        </div>
      </div>

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
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-cream/90 flex items-center justify-center"
                aria-label="Close video"
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
