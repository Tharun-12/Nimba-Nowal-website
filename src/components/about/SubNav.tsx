import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { aboutSections } from '@/data/about';

export function SubNav() {
  const [active, setActive] = useState('mantra');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 400);
      const offset = 140;
      let current = aboutSections[0].id;
      for (const sec of aboutSections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top - offset <= 0) current = sec.id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`sticky top-[64px] z-[100] transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-xl shadow-sm' : 'bg-cream/80 backdrop-blur-md'
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-3">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-charcoal/50 hover:text-terracotta transition-colors whitespace-nowrap pr-4 border-r border-forest/10 mr-2"
          >
            <Leaf size={12} />
            Home
          </Link>
          {aboutSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollTo(sec.id)}
              className={`relative whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === sec.id
                  ? 'text-cream'
                  : 'text-charcoal/60 hover:text-forest'
              }`}
            >
              {active === sec.id && (
                <motion.div
                  layoutId="subnav-pill"
                  className="absolute inset-0 rounded-full bg-forest"
                  transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10">{sec.label}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
