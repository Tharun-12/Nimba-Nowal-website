import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-terracotta z-[200] origin-left"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
