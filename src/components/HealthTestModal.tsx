import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ArrowRight, CheckCircle2, Activity } from 'lucide-react';
import { useModal } from './ModalContext';
import { healthTestQuestions } from '@/data/content';

export function HealthTestModal() {
  const { isHealthTestOpen, closeHealthTest } = useModal();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const total = healthTestQuestions.length;

  useEffect(() => {
    if (isHealthTestOpen) {
      setStep(0);
      setAnswers([]);
      setDone(false);
    }
  }, [isHealthTestOpen]);

  useEffect(() => {
    document.body.style.overflow = isHealthTestOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isHealthTestOpen]);

  const score = answers.reduce((sum, a) => sum + (4 - a), 0);
  const maxScore = total * 3;
  const pct = Math.round((score / maxScore) * 100);

  const pick = (i: number) => {
    const next = [...answers];
    next[step] = i;
    setAnswers(next);
    if (step < total - 1) {
      setTimeout(() => setStep((s) => s + 1), 200);
    } else {
      setTimeout(() => setDone(true), 200);
    }
  };

  return (
    <AnimatePresence>
      {isHealthTestOpen && (
        <motion.div
          className="fixed inset-0 z-[300] bg-forest-3/80 backdrop-blur flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeHealthTest}
        >
          <motion.div
            className="relative w-full max-w-lg rounded-3xl bg-cream overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeHealthTest}
              className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-cream-2 flex items-center justify-center hover:bg-sage/30 transition-colors"
              aria-label="Close"
            >
              <X size={18} className="text-forest" />
            </button>

            {!done ? (
              <div className="p-7 md:p-10">
                <div className="flex items-center gap-2 text-terracotta mb-2">
                  <Activity size={18} />
                  <span className="eyebrow">Health Test</span>
                </div>
                <p className="text-sm text-charcoal/60 mb-6">
                  Question {step + 1} of {total}
                </p>

                {/* progress */}
                <div className="h-1.5 bg-forest/10 rounded-full overflow-hidden mb-7">
                  <motion.div
                    className="h-full bg-terracotta"
                    animate={{ width: `${((step + 1) / total) * 100}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h3 className="serif text-2xl md:text-3xl text-forest mb-5">
                      {healthTestQuestions[step].question}
                    </h3>
                    <div className="space-y-2.5">
                      {healthTestQuestions[step].options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => pick(i)}
                          className={`w-full text-left rounded-xl border px-5 py-3.5 text-sm font-medium transition-all ${
                            answers[step] === i
                              ? 'border-terracotta bg-terracotta/10 text-terracotta'
                              : 'border-forest/15 text-charcoal hover:border-forest/40 hover:bg-cream-2/50'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="mt-6 inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-forest transition-colors"
                  >
                    <ChevronLeft size={15} /> Back
                  </button>
                )}
              </div>
            ) : (
              <ResultCard pct={pct} onClose={closeHealthTest} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ResultCard({ pct, onClose }: { pct: number; onClose: () => void }) {
  const status =
    pct >= 75 ? 'Excellent vitality' : pct >= 50 ? 'Good, with room to grow' : 'Your body is asking for care';
  const color = pct >= 75 ? '#1F3D2B' : pct >= 50 ? '#C06A3E' : '#a85a30';

  return (
    <div className="p-7 md:p-10 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
        className="mx-auto h-16 w-16 rounded-full bg-terracotta/15 flex items-center justify-center"
      >
        <CheckCircle2 size={32} className="text-terracotta" />
      </motion.div>

      <p className="eyebrow text-terracotta mt-5">Your Healing Score</p>
      <motion.div
        className="serif text-7xl md:text-8xl my-2"
        style={{ color }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
      >
        {pct}
        <span className="text-3xl">%</span>
      </motion.div>
      <p className="serif text-xl text-forest">{status}</p>
      <p className="text-sm text-charcoal/60 mt-3 max-w-sm mx-auto leading-relaxed">
        Our naturopaths can turn this score into a personalized healing plan. Book a free consultation to begin.
      </p>

      <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onClose}
          className="btn-sweep group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-cream font-semibold hover:bg-terracotta-2 transition-colors"
        >
          Book a consultation
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={onClose}
          className="rounded-full border border-forest/20 px-6 py-3.5 text-forest font-semibold hover:bg-cream-2/50 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
