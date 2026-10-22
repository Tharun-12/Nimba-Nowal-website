import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, UserCircle, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading, Reveal } from '@/components/Reveal';
import { team } from '@/data/content';
import { images } from '@/data/imagePrompts';

export function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Your Care Team"
        title="Healing Team"
        intro="Naturopaths, physiotherapists, yoga teachers and dieticians who stay with your case from first consultation to the day you go home."
        image={images.team_2}
        crumb="Healing Team"
      />

      <Section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <SectionHeading eyebrow="Meet the Experts" title="Dedicated to your healing" center />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.1}>
                <motion.div
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.designation}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-3/95 via-forest/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="serif text-2xl text-cream">{member.name}</h3>
                    <p className="text-sage-light text-sm mt-1">{member.designation}</p>
                    <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-cream/90 px-3 py-1.5 text-xs font-medium text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                      <UserCircle size={14} /> View profile
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section dark className="py-20 md:py-28 grain">
        <div className="max-w-3xl mx-auto px-5 md:px-10 text-center">
          <Sparkles size={28} className="text-sage mx-auto mb-4" />
          <SectionHeading
            eyebrow="Our Approach"
            title="One team, one plan, one you"
            light
            center
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-sage-light/90 leading-relaxed text-lg">
              Every guest is assigned a lead healer who coordinates with naturopaths, therapists, yoga
              teachers and dieticians. Your case is reviewed together, weekly. No one works in isolation —
              your healing is a shared commitment, from the first morning to the day you go home.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/contact"
              className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-cream font-semibold hover:bg-terracotta-2 transition-colors mt-8"
            >
              Meet your healer
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
