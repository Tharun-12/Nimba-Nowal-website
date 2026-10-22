import { useState, useEffect, useRef, type ReactNode, type ElementType } from 'react';
import { motion, useInView, type Variants } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: ElementType;
  once?: boolean;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  as = 'div',
  once = true,
}: RevealProps) {
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: '-80px' });

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`serif text-4xl md:text-5xl lg:text-6xl mt-4 ${light ? 'text-cream' : 'text-forest'}`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? 'text-sage-light/90' : 'text-charcoal/75'}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function Section({ id, children, className = '', dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${dark ? 'bg-forest text-cream' : 'bg-cream text-charcoal'} ${className}`}
    >
      {children}
    </section>
  );
}

// Blur-up image with fixed aspect ratio
interface SmartImageProps {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function SmartImage({
  src,
  alt,
  aspect = 'aspect-[4/5]',
  className = '',
  imgClassName = '',
  priority = false,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (priority) setLoaded(true);
  }, [priority]);

  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover img-blur ${loaded ? 'loaded' : ''} ${imgClassName}`}
      />
    </div>
  );
}
