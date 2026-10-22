import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { DoorOpen, Activity, HeartPulse, Leaf, BarChart3, PhoneCall, ArrowRight } from 'lucide-react';
import { Section, SectionHeading, Reveal } from './Reveal';
import { LeafDivider } from './Botanical';
import { healingCycle } from '@/data/content';
import { useModal } from './ModalContext';

const iconMap: Record<string, typeof DoorOpen> = {
  DoorOpen,
  Activity,
  HeartPulse,
  Leaf,
  BarChart3,
  PhoneCall,
};

interface StepLeafProps {
  num: number;
  title: string;
  icon: string;
  active: boolean;
  index: number;
  progress: MotionValue<number>;
}

function StepLeaf({ num, title, icon, active, index, progress }: StepLeafProps) {
  const Icon = iconMap[icon];
  const y = useTransform(progress, [0.28, 0.62], [36, 0]);
  const opacity = useTransform(progress, [0.25, 0.4], [0, 1]);
  const rotate = useTransform(progress, [0.25, 0.62], [index % 2 === 0 ? -8 : 8, index % 2 === 0 ? -2 : 2]);

  return (
    <motion.div style={{ y, opacity, rotate }} className="w-[150px] md:w-[165px] flex-shrink-0">
      <div className="relative rounded-[22px] bg-white p-2 shadow-[0_8px_25px_rgba(31,61,43,0.12)]">
        <div className="aspect-[1.35/1] overflow-hidden rounded-[15px] bg-cream-2">
          <img src={healingCycle[index].image} alt={title} className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
      <div className={`relative mx-auto -mt-1 min-h-[124px] w-[112px] rounded-b-[48%] rounded-t-[18px] px-3 pt-5 text-center shadow-[0_8px_18px_rgba(31,61,43,0.12)] transition-colors duration-300 ${active ? 'bg-forest' : 'bg-[#2f6944]'}`}>
        <div className="absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-4 border-cream bg-cream text-forest shadow-sm">
          <Icon size={15} strokeWidth={1.7} />
        </div>
        <span className="serif text-lg text-[#E0B84C]">{num}</span>
        <p className="mt-1 text-[0.68rem] font-semibold leading-tight text-cream">{title}</p>
      </div>
    </motion.div>
  );
}

export function HealingCycle() {
  const { openHealthTest } = useModal();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progress = useTransform(scrollYProgress, [0.05, 0.93], [0, 1]);
  const ringOpacity = useTransform(progress, [0, 0.3, 0.42], [1, 1, 0]);
  const ringScale = useTransform(progress, [0, 0.38], [1, 0.78]);
  const rowOpacity = useTransform(progress, [0.28, 0.43, 1], [0, 1, 1]);
  const branchX = useTransform(progress, [0.25, 0.55], ['-35%', '0%']);
  const stepFloat = useTransform(progress, [0.34, 0.8], [0, healingCycle.length - 1]);
  const [idx, setIdx] = useState(0);

  useEffect(() => stepFloat.on('change', (value) => setIdx(Math.round(value))), [stepFloat]);

  return (
    <Section id="cycle" className="py-20 md:py-28 overflow-visible">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="How Healing Works" title="The Healing Cycle" center />
      </div>

      <LeafDivider className="mt-10" />

      <div ref={ref} className="relative h-[245vh] md:h-[285vh]">
        <div className="sticky top-0 relative flex h-screen min-h-[620px] items-center overflow-hidden">
          <div className="relative h-full w-full">
            {/* Stage one: the circular healing wreath */}
            <motion.div style={{ opacity: ringOpacity, scale: ringScale }} className="absolute inset-0 flex items-center justify-center px-5">
              <div className="relative h-[min(72vw,490px)] w-[min(72vw,490px)] max-w-[490px] max-h-[490px]">
                <svg className="absolute inset-[-12%] h-[124%] w-[124%]" viewBox="0 0 500 500" fill="none" aria-hidden="true">
                  <path d="M0 65 C100 175 125 225 215 245" stroke="#8B5E3C" strokeWidth="11" strokeLinecap="round" />
                  <path d="M0 65 C100 175 125 225 215 245" stroke="#B7855C" strokeWidth="3" strokeLinecap="round" opacity=".7" />
                  <path d="M214 245 C250 185 310 172 356 200 C405 228 394 300 354 337 C314 375 245 376 194 340 C146 305 158 239 214 245Z" stroke="#6F8A6A" strokeWidth="3" />
                  <path d="M225 245 C260 210 310 214 335 246 C355 272 338 318 300 331 C258 346 210 322 198 287" stroke="#8FA68A" strokeWidth="2" opacity=".8" />
                  <path d="M72 102 Q87 86 101 99 M103 166 Q119 153 133 166 M378 187 Q394 175 405 191 M373 338 Q390 331 398 346 M151 356 Q165 348 177 359" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round" />
                </svg>
                {healingCycle.map((step, i) => {
                  const angle = (i / healingCycle.length) * Math.PI * 2 - Math.PI / 2;
                  const radius = 44;
                  const left = 50 + radius * Math.cos(angle);
                  const top = 50 + radius * Math.sin(angle);
                  const Icon = iconMap[step.icon];
                  return (
                    <motion.div
                      key={step.num}
                      className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#8FA68A] bg-forest shadow-lg md:h-16 md:w-16"
                      style={{ left: `${left}%`, top: `${top}%` }}
                      animate={{ scale: idx === i ? 1.12 : 1 }}
                    >
                      <div className="text-center">
                        <span className="serif text-lg text-[#E0B84C]">{step.num}</span>
                        <Icon size={15} className="mx-auto text-cream" />
                      </div>
                    </motion.div>
                  );
                })}
                <div className="absolute inset-[24%] flex flex-col items-center justify-center rounded-full bg-[#FAF8F0]/90 text-center shadow-inner">
                  <Leaf size={42} strokeWidth={1.2} className="text-forest" />
                  <span className="serif mt-2 text-xl text-forest">Your healing journey</span>
                </div>
              </div>
            </motion.div>

            {/* Stage two: the horizontal six-step story */}
            <motion.div style={{ opacity: rowOpacity }} className="relative mx-auto w-full max-w-[1280px] px-5 md:px-10">
              <div className="relative rounded-[22px] border border-[#8FA68A] bg-[#FAF8F0]/80 px-3 pb-8 pt-8 shadow-[0_18px_60px_rgba(31,61,43,0.1)] md:px-8 md:pt-10">
                <motion.div style={{ x: branchX }} className="pointer-events-none absolute left-[-20%] right-[-20%] top-[43%] h-4">
                  <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="h-full w-full">
                    <path d="M0 20 C130 0 210 38 330 19 S560 1 690 20 S930 38 1200 18" fill="none" stroke="#8B5E3C" strokeWidth="8" strokeLinecap="round" />
                    <path d="M0 20 C130 0 210 38 330 19 S560 1 690 20 S930 38 1200 18" fill="none" stroke="#B7855C" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </motion.div>
                <div className="relative flex gap-3 overflow-x-auto px-1 pb-2 pt-1 no-scrollbar md:justify-center md:overflow-visible md:gap-4">
                  {healingCycle.map((step, i) => (
                    <StepLeaf key={step.num} {...step} active={idx === i} index={i} progress={progress} />
                  ))}
                </div>
              </div>
              <div className="mt-5 text-center">
                <p className="eyebrow text-terracotta">Scroll to follow every step</p>
                <p className="mt-2 text-sm text-charcoal/60">From your first welcome to the care that continues at home.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-10 mt-10 text-center">
        <Reveal>
          <button
            onClick={openHealthTest}
            className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-cream font-semibold hover:bg-terracotta-2 transition-colors"
          >
            Take a Health Test
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </Reveal>
      </div>
    </Section>
  );
}
