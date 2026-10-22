import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { LeafDivider } from '@/components/Botanical';
import { teamBios, type TeamBio } from '@/data/about';

export function TeamSection() {
  const [selected, setSelected] = useState<TeamBio | null>(null);

  return (
    <section id="team" className="bg-cream py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="Meet Your Healers" title="Healing Team" center />
      </div>

      <LeafDivider className="mt-10" />

      <div className="max-w-8xl mx-auto px-5 md:px-10 mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamBios.map((member, i) => (
          <Reveal key={member.name} delay={(i % 3) * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(31,61,43,0.06)] cursor-pointer h-full flex flex-col"
              onClick={() => setSelected(member)}
            >
              <div className="relative w-28 h-28 mx-auto mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover rounded-full ring-4 ring-cream shadow-[0_8px_24px_rgba(31,61,43,0.15)]"
                />
              </div>
              <h3 className="serif text-xl text-forest text-center">{member.name}</h3>
              <p className="text-[0.65rem] tracking-[0.2em] uppercase text-terracotta text-center mt-1">
                {member.designation}
              </p>
              <p className="mt-4 text-sm text-charcoal/65 leading-relaxed line-clamp-4">
                {member.bio}
              </p>
              <button className="mt-4 link-underline inline-flex items-center gap-1 text-terracotta font-medium text-sm self-start">
                Read More <ArrowRight size={14} />
              </button>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-forest-3/80 backdrop-blur-sm" />
            <motion.div
              className="relative bg-cream rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-cream/80 backdrop-blur flex items-center justify-center text-forest hover:bg-forest hover:text-cream transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <div className="p-8 md:p-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-28 h-28 object-cover rounded-full ring-4 ring-white shadow-[0_8px_24px_rgba(31,61,43,0.15)] flex-shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <h3 className="serif text-2xl text-forest">{selected.name}</h3>
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-terracotta mt-1">
                      {selected.designation}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-charcoal/75 leading-relaxed">{selected.fullBio}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
