import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  crumb: string;
}

export function PageHero({ eyebrow, title, intro, image, crumb }: PageHeroProps) {
  return (
    <section className="relative h-[52vh] min-h-[400px] w-full overflow-hidden flex items-end">
      <img
        src={image}
        alt={title}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-3/90 via-forest/50 to-forest-3/40" />

      <div className="relative z-10 max-w-8xl mx-auto px-5 md:px-10 pb-12 md:pb-16 w-full">
        {/* breadcrumb */}
        <motion.nav
          className="flex items-center gap-2 text-sm text-sage-light/70 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/" className="hover:text-cream transition-colors">Home</Link>
          <ChevronRight size={14} />
          <span className="text-cream">{crumb}</span>
        </motion.nav>

        <Reveal delay={0.1}>
          <span className="eyebrow text-sage-light">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.18}>
          <h1 className="serif text-4xl md:text-6xl lg:text-7xl text-cream mt-3">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.26}>
            <p className="mt-4 text-lg text-sage-light/90 max-w-2xl leading-relaxed">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
