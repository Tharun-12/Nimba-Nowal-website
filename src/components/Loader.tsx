import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-forest"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          aria-label="Loading"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8FA68A"
              strokeWidth="0.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 14.8 19 18.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
              <motion.path
                d="M2.1 14.8A8 8 0 0 1 8 21"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
              />
              <motion.path
                d="M5 21a16 16 0 0 1 0-18 16 16 0 0 1 6 18"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
              />
            </motion.svg>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center"
            >
              <p className="serif text-2xl text-cream">Sattva</p>
              <p className="eyebrow text-sage mt-1">Nature Cure</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
