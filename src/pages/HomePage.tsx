import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { HealingCycle } from '@/components/HealingCycle';
import { Stories } from '@/components/Stories';
import { Techniques } from '@/components/Techniques';
import { Packages } from '@/components/Packages';
import { OfferBanner } from '@/components/OfferBanner';
import { Section, SectionHeading, Reveal } from '@/components/Reveal';
import { LeafDivider } from '@/components/Botanical';
import { methods, team, blog } from '@/data/content';
import { motion } from 'motion/react';

export function HomePage() {
  return (
    <>
      <Hero />
      <HealingCycle />
      <Stories />
      <Techniques />

      {/* Methods preview */}
      <Section id="methods" className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading eyebrow="What Makes Us Different" title="Healing Methods" />
            <Reveal delay={0.2}>
              <Link to="/tour" className="link-underline inline-flex items-center gap-1 text-terracotta font-medium text-sm whitespace-nowrap">
                Explore the campus <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {methods.map((m, i) => (
              <Reveal key={m.num} delay={i * 0.1}>
                <motion.div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer" whileHover="hover">
                  <img src={m.image} alt={m.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-3/95 via-forest/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="serif text-5xl text-cream/40">{m.num}</span>
                    <h3 className="serif text-2xl text-cream mt-2">{m.title}</h3>
                    <p className="text-sage-light/90 text-sm mt-2 leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Packages />
      <OfferBanner />

      {/* Team preview */}
      <Section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <SectionHeading
            eyebrow="Your Care Team"
            title="Healing Team"
            intro="Naturopaths, physiotherapists, yoga teachers and dieticians who stay with your case from first consultation to the day you go home."
          />
        </div>
        <LeafDivider className="mt-10" />
        <div className="max-w-8xl mx-auto px-5 md:px-10 mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.slice(0, 3).map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <Link to="/team" className="group block rounded-2xl overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img src={member.image} alt={`${member.name}, ${member.designation}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-3/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="serif text-xl text-cream">{member.name}</h3>
                    <p className="text-sage-light text-sm">{member.designation}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Reveal>
            <Link to="/team" className="link-underline inline-flex items-center gap-1 text-terracotta font-medium text-sm">
              Meet the whole team <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Blog preview */}
      <Section id="blog" className="py-20 md:py-28 bg-cream-2/30">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading eyebrow="Insights" title="Guidance for living well, naturally" />
            <Reveal delay={0.2}>
              <Link to="/blog" className="link-underline inline-flex items-center gap-1 text-terracotta font-medium text-sm whitespace-nowrap">
                Read all articles <ArrowRight size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blog.slice(0, 3).map((article, i) => (
              <Reveal key={article.title} delay={(i % 3) * 0.1}>
                <Link to="/blog" className="group block rounded-2xl overflow-hidden bg-cream hover:shadow-[0_20px_50px_rgba(31,61,43,0.12)] transition-shadow">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={article.image} alt={article.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-terracotta">{article.category}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-charcoal/50 uppercase tracking-wide">{article.date}</p>
                    <h3 className="serif text-xl text-forest mt-2 group-hover:text-terracotta transition-colors">{article.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{article.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
