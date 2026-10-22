import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import type { MegaMenuGroup } from '@/data/content';

interface MegaMenuProps {
  group: MegaMenuGroup | null;
  scrolled: boolean;
}

export function MegaMenu({ group, scrolled: _scrolled }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {group && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[460px] max-w-[92vw]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl bg-cream shadow-[0_20px_60px_rgba(31,61,43,0.18)] border border-sage/20 overflow-hidden">
            <div className="px-5 pt-4 pb-2">
              <span className="eyebrow">{group.label}</span>
            </div>
            <div className="p-3">
              {group.items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    to={item.href}
                    className="flex items-center gap-4 rounded-xl p-3 hover:bg-cream-2 transition-colors group"
                  >
                    {item.thumbnail && (
                      <div className="h-14 w-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.thumbnail}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <span className="serif text-xl text-forest group-hover:text-terracotta transition-colors">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
