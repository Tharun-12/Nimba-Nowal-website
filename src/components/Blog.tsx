import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading, Reveal } from './Reveal';
import { blog } from '@/data/content';

export function Blog() {
  return (
    <Section id="blog" className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        <SectionHeading eyebrow="Insights" title="Guidance for living well, naturally" />
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-10 mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.map((article, i) => (
          <Reveal key={article.title} delay={(i % 3) * 0.1}>
            <motion.a
              href="#blog"
              className="group block rounded-2xl overflow-hidden bg-cream-2/30 hover:shadow-[0_20px_50px_rgba(31,61,43,0.12)] transition-shadow"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-terracotta">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-charcoal/50 uppercase tracking-wide">{article.date}</p>
                <h3 className="serif text-xl text-forest mt-2 group-hover:text-terracotta transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{article.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terracotta">
                  Discover more
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
