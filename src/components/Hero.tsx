import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, MousePointerClick } from 'lucide-react';
import { useModal } from './ModalContext';
import { LeafParticles } from './LeafParticles';
import { heroVideoUrl, images } from '@/data/imagePrompts';

export function Hero() {
  const { openHealthTest } = useModal();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yOverlay = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ['Nature', 'Heals', 'Best'];
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section id="top" ref={ref} className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <img
          src={images.hero_poster}
          alt="Misty orchard at sunrise beside a calm lake"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          fetchPriority="high"
        />
        {videoLoaded && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover animate-slow-pan"
            poster={images.hero_poster}
          >
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
        )}
        {/* hidden video preloader to trigger load */}
        <video
          src={heroVideoUrl}
          muted
          loop
          onCanPlay={() => setVideoLoaded(true)}
          className="hidden"
          aria-hidden
        />
      </div>

      {/* Gradient overlay */}
      <motion.div
        style={{ y: yOverlay }}
        className="absolute inset-0 bg-gradient-to-b from-forest-3/70 via-forest/50 to-forest-3/80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/60 via-transparent to-forest/30" />

      {/* Floating leaves */}
      <LeafParticles count={10} />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center"
      >
        <motion.span
          className="eyebrow text-sage-light mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Naturopathy &amp; Holistic Healing Retreat
        </motion.span>

        <h1 className="serif text-cream text-6xl md:text-8xl lg:text-9xl leading-[0.95] flex flex-wrap justify-center gap-x-5 gap-y-1">
          {words.map((word, i) => (
            <span key={word} className="overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.18,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mt-7 max-w-xl text-lg md:text-xl text-sage-light/95 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Naturopathy, Ayurveda, yoga and mindful living, shaped around you.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <button
            onClick={openHealthTest}
            className="btn-sweep group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-cream font-semibold hover:bg-terracotta-2 transition-colors"
          >
            Take a Health Test
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#packages"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-8 py-4 text-cream font-semibold hover:bg-cream/10 transition-colors"
          >
            Explore Packages
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        aria-hidden
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase text-sage-light">Scroll</span>
        <div className="h-10 w-6 rounded-full border border-sage-light/50 flex items-start justify-center p-1.5">
          <motion.div
            className="h-2 w-1 rounded-full bg-sage-light"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <MousePointerClick size={0} className="hidden" />
      </motion.div>
    </section>
  );
}
