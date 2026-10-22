import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function Cursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target as HTMLElement;
      setHovering(
        !!el.closest('a, button, [role="button"], input, .cursor-grow'),
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.body.classList.add('cursor-none');

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.body.classList.remove('cursor-none');
    };
  }, [x, y]);

  return (
    <div className="custom-cursor hidden md:block" aria-hidden>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border border-forest/60"
        style={{ x: sx, y: sy }}
        animate={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering ? 'rgba(192,106,62,0.12)' : 'rgba(247,243,234,0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-terracotta"
        style={{ x, y }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 600, damping: 28 }}
      />
    </div>
  );
}
