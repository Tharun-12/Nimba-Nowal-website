import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LeafDivider, CurveBottom } from '@/components/Botanical';

const mantraHero = 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1920';
const healThBg = 'https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function MantraSection() {
  const healRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: healRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.1]);

  const thLetters = '(th)'.split('');

  return (
    <section id="mantra" className="relative">
      {/* Mantra Hero */}
      <div className="relative h-[44vh] min-h-[340px] w-full overflow-hidden flex items-end">
        <img
          src={mantraHero}
          alt="Healing ritual with lattice window"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-3/90 via-forest/50 to-forest-3/40" />
        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-10 pb-12 w-full">
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Leaf size={14} className="text-sage-light" />
            <Link to="/" className="text-sm text-sage-light/70 hover:text-cream transition-colors">
              Home
            </Link>
          </motion.div>
          <Reveal delay={0.15}>
            <h1 className="serif text-5xl md:text-7xl lg:text-8xl text-cream">The Mantra</h1>
          </Reveal>
        </div>
        <CurveBottom from="#1F3D2B" to="#F7F3EA" />
      </div>

      {/* Intro block */}
      <div className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <LeafDivider className="mb-10" />
          <Reveal>
            <h2 className="serif text-4xl md:text-5xl text-forest">A Health Retreat With Natural Therapies</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="serif italic text-xl md:text-2xl text-charcoal/70 mt-6 leading-relaxed">
              In the hurried nature of life, it is the transient phase of accepting the power of healing and health that makes the world more wholesome.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-charcoal/75 leading-relaxed text-lg">
              In the truest sense, Sattva&apos;s mantra is very clear: health and healing always come first. We strongly believe that prevention is better than cure, and that the body carries within it the intelligence to restore itself when given the right conditions. Through natural therapies, mindful nourishment and the quiet of seventy acres, we help you reconnect with that intelligence — so healing is not something done to you, but something remembered.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Heal(th) parallax */}
      <div ref={healRef} className="relative h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <img src={healThBg} alt="Lush green garden with walking path" className="h-full w-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-forest-3/50" />

        <motion.h2
          style={{ scale: textScale }}
          className="relative z-10 serif text-cream text-7xl md:text-9xl lg:text-[12rem] flex"
        >
          <span>Heal</span>
          {thLetters.map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className={i === 0 || i === thLetters.length - 1 ? 'text-sage-light/70' : 'text-cream/80'}
            >
              {ch}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Overlapping card */}
      <div className="bg-cream -mt-20 md:-mt-24 relative z-10">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(31,61,43,0.12)] p-8 md:p-12 grid md:grid-cols-2 gap-8 md:gap-12">
            <Reveal>
              <p className="serif text-2xl md:text-3xl text-forest leading-snug italic">
                &ldquo;A perfect harmony of greenery, serenity and positivity, every corner at Sattva will speak to your inner peace.&rdquo;
              </p>
            </Reveal>
            <div className="space-y-4">
              {[
                'Here, at Sattva, we take your hand and walk you through the truth of life i.e. that health is under our control, always.',
                'In our holistic haven, healing and health are interlinked.',
                'Our entire process of healing and elevating your health is by an impeccable amalgamation of modern science, traditional practices and ancient wisdom.',
                'So, to experience the holistic force of wellness, trace your steps to Sattva. Your body already knows the way — we simply walk beside you.',
              ].map((p, i) => (
                <Reveal key={i} delay={0.15 + i * 0.1}>
                  <p className="text-charcoal/75 leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <div className="h-20 md:h-24" />
      </div>
    </section>
  );
}
