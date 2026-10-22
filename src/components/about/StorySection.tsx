import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { LeafDivider, CurveBottom } from '@/components/Botanical';

const storyHero = 'https://images.pexels.com/photos/31108473/pexels-photo-31108473.jpeg?auto=compress&cs=tinysrgb&w=1920';
const visionPhoto = 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1200';

const storyParagraphs = [
  'Stemming from the ancient Indian scriptures, Sattva is a proverbial tree that houses unparalleled health benefits and is the symbol of wholesome and perennial health. One of the largest naturopathy centres in India, Sattva Nature Cure & Holistic Health Centre is the repository of the beneficial synergies of the mind, body and soul. Gifted with lush greenery and its serenity, the centre promotes and enhances the power of nature. We are committed to bring back in a body the crucial equilibrium of the five basic elements of life: Earth, Water, Fire, Air, and Space within you. At Sattva, you have the chance to explore the realms and depths of physical, psychological and spiritual health with gentle guidance by professionals.',
  'Established by The Oswal Group back in 2015, Sattva Nature Cure & Holistic Health Centre saw the organization\u2019s visionary endeavors come to life, with a distinguished staycation dedicated to refreshing and rejuvenating everyday life. This health and wellness sanctuary stands as a testament to the group\u2019s commitment to holistic living and marks a significant milestone in their journey towards fostering well-being.',
  'Our entire process of healing and enhancing your health is through a unique amalgamation of modern science, traditional practices and ancient medical wisdom of Ayurveda, Naturopathy and Yoga. To experience and share the force of attaining all the aspects of holistic health and wellbeing, trace your steps to Sattva. We are just the catalyst for life-altering healing and preventive care for you with all the magic of organic and natural wonders that come from within you.',
];

export function StorySection() {
  const visionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: visionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="story" className="relative">
      {/* Story Hero */}
      <div className="relative h-[40vh] min-h-[320px] w-full overflow-hidden flex items-end">
        <img
          src={storyHero}
          alt="Sattva building at night"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-3/90 via-forest/60 to-forest-3/40" />
        <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-10 pb-12 w-full">
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Leaf size={14} className="text-sage-light" />
            <Link to="/" className="text-sm text-sage-light/70 hover:text-cream transition-colors">Home</Link>
          </motion.div>
          <Reveal delay={0.15}>
            <h2 className="serif text-5xl md:text-7xl lg:text-8xl text-cream">The Story of Sattva</h2>
          </Reveal>
        </div>
        <CurveBottom from="#1F3D2B" to="#F7F3EA" />
      </div>

      {/* Story text */}
      <div className="bg-cream py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <LeafDivider className="mb-10" />
          <Reveal>
            <h3 className="serif text-3xl md:text-5xl text-forest">Good health is the testament of a full life.</h3>
          </Reveal>
          <div className="mt-8 space-y-6 text-left">
            {storyParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-charcoal/75 leading-relaxed text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Ayurveda / Asana block */}
      <div className="bg-cream pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-5 md:px-10 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <Reveal>
            <p className="text-charcoal/75 leading-relaxed text-lg">
              The Ayurvedic concepts of <em>Rasa</em> (taste), <em>Guna</em> (quality), <em>Virya</em> (potency) and <em>Vipaka</em> (post-digestive effect) guide every meal, every oil and every herb we choose for you. Together with the rhythm of yoga and the stillness of meditation, these principles teach us to provide you with utmost relaxation and energy. You are our <strong className="text-forest">Humsafars</strong>, our companions, and we welcome you to an exquisite journey of health and healing.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col items-center">
              <svg viewBox="0 0 120 200" className="w-32 h-48" fill="none" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round">
                <motion.path
                  d="M60 190 Q 55 160 60 130 Q 65 100 58 75 Q 52 50 60 25 Q 63 15 60 5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M60 25 Q 75 20 80 10"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <motion.path
                  d="M60 25 Q 45 22 40 12"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.path
                  d="M60 75 Q 78 70 85 60"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
                <motion.path
                  d="M60 75 Q 42 72 35 62"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.path
                  d="M58 130 Q 72 125 78 115"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
                <motion.path
                  d="M58 130 Q 44 127 38 117"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1.0 }}
                />
                <circle cx="60" cy="5" r="4" fill="#2E7D32" stroke="none" />
              </svg>
              <span className="eyebrow text-forest/70 mt-2">Asana</span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="bg-cream-2/30 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div ref={visionRef} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(31,61,43,0.15)]">
            <motion.img
              style={{ y: imgY }}
              src={visionPhoto}
              alt="Woman in yoga pose under a rock arch"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover scale-110"
            />
          </div>
          <div className="space-y-8">
            <Reveal>
              <div>
                <h4 className="serif text-2xl text-forest font-semibold">Our vision :</h4>
                <p className="mt-3 text-charcoal/75 leading-relaxed">
                  Our vision is to help and inspire people to live a healthier, longer and better life by following a lifestyle that is natural, so that their innate immunity is enhanced and they are better prepared to face lifestyle related, non-infectious, preventable diseases.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <h4 className="serif text-2xl text-forest font-semibold">Our mission :</h4>
                <p className="mt-3 text-charcoal/75 leading-relaxed">
                  Our mission is to introduce and implement a regimen of drugless, natural, prophylactic treatments and promote related lifestyle so that the society at large may lead a healthier life naturally.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
