import { motion } from 'motion/react';

const leafSvg = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 14.8 19 18.5" />
    <path d="M2.1 14.8A8 8 0 0 1 8 21" />
    <path d="M5 21a16 16 0 0 1 0-18 16 16 0 0 1 6 18" />
  </svg>
);

export function LeafParticles({ count = 8 }: { count?: number }) {
  const leaves = Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: `${(i * 12 + 5) % 95}%`,
    delay: i * 2.2,
    duration: 16 + (i % 4) * 3,
    size: 14 + (i % 3) * 6,
    opacity: 0.25 + (i % 3) * 0.08,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {leaves.map((l) => (
        <motion.div
          key={l.id}
          className="absolute text-sage"
          style={{ left: l.left, top: '-30px', opacity: l.opacity }}
          initial={{ y: -30, x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, 40, -20, 30, 0],
            rotate: [0, 180, 320],
            opacity: [0, l.opacity, l.opacity, 0],
          }}
          transition={{
            duration: l.duration,
            delay: l.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div style={{ transform: `scale(${l.size / 22})` }}>{leafSvg}</div>
        </motion.div>
      ))}
    </div>
  );
}
