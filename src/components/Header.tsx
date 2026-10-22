import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';
import { megaMenuPackages, megaMenuGallery } from '@/data/content';
import { useModal } from './ModalContext';
import { MegaMenu } from './MegaMenu';
import type { MegaMenuGroup } from '@/data/content';

interface NavItem {
  label: string;
  to: string;
  mega?: MegaMenuGroup;
}

const navItems: NavItem[] = [
  { label: 'About Us', to: '/about' },
  { label: 'Healing Techniques', to: '/techniques' },
  { label: 'Healing Packages', to: '/packages', mega: megaMenuPackages },
  { label: 'Testimonials', to: '/stories' },
  { label: 'Gallery', to: '/tour', mega: megaMenuGallery },
  { label: 'Get In Touch', to: '/contact' },
  { label: 'Downloads', to: '/downloads' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<MegaMenuGroup | null>(null);
  const { openHealthTest } = useModal();
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHome = location.pathname === '/';

  // On non-home pages, header is always solid
  const solid = scrolled || !isHome;

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 60);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${
          solid
            ? 'bg-cream/90 backdrop-blur-xl shadow-[0_2px_30px_rgba(31,61,43,0.08)] py-3'
            : 'bg-transparent py-5'
        }`}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="max-w-8xl mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" onMouseEnter={() => setActiveMega(null)}>
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={solid ? 'text-forest' : 'text-cream'}
            >
              <Leaf size={26} strokeWidth={1.4} />
            </motion.div>
            <div className="leading-none">
              <span className={`serif text-xl tracking-wide block ${solid ? 'text-forest' : 'text-cream'}`}>
                Sattva
              </span>
              <span className={`text-[0.55rem] tracking-[0.3em] uppercase ${solid ? 'text-terracotta' : 'text-sage-light'}`}>
                Nature Cure
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => setActiveMega(item.mega ?? null)}
              >
                <Link
                  to={item.to}
                  className={`link-underline text-sm font-medium tracking-wide transition-colors ${
                    solid ? 'text-charcoal hover:text-terracotta' : 'text-cream/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={openHealthTest}
              className="btn-sweep hidden sm:inline-flex items-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream hover:bg-terracotta-2 transition-colors"
            >
              Take a Health Test
            </button>
            <button
              className={`lg:hidden ${solid ? 'text-forest' : 'text-cream'}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <MegaMenu group={activeMega} scrolled={solid} />
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[200] bg-forest lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="serif text-2xl text-cream">Sattva</span>
              <button className="text-cream" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col px-5 mt-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    to={item.to}
                    className="serif text-3xl text-cream border-b border-sage/20 py-5 block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={() => { setMobileOpen(false); openHealthTest(); }}
                className="mt-8 rounded-full bg-terracotta px-6 py-4 text-cream font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navItems.length * 0.08 }}
              >
                Take a Health Test
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
