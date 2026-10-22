import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading, Reveal } from '@/components/Reveal';
import { blog } from '@/data/content';
import { images } from '@/data/imagePrompts';

export function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Guidance for living well, naturally"
        intro="Articles, guides and reflections from our healers — on naturopathy, Ayurveda, mental wellbeing, diet and the everyday practice of mindful living."
        image={images.blog_1}
        crumb="Insights"
      />

      <Section className="py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-10">
          {/* Featured article */}
          <Reveal>
            <Link
              to="/blog"
              className="group grid lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden bg-cream-2/30 hover:shadow-[0_20px_50px_rgba(31,61,43,0.12)] transition-shadow mb-12"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
                <img src={blog[0].image} alt={blog[0].title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 rounded-full bg-terracotta px-3 py-1 text-xs font-semibold text-cream">Featured</span>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="rounded-full bg-sage/15 px-3 py-1 text-xs font-semibold text-terracotta w-fit">{blog[0].category}</span>
                <p className="text-xs text-charcoal/50 uppercase tracking-wide mt-4">{blog[0].date}</p>
                <h2 className="serif text-3xl md:text-4xl text-forest mt-2 group-hover:text-terracotta transition-colors">{blog[0].title}</h2>
                <p className="mt-4 text-charcoal/70 leading-relaxed">{blog[0].excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-terracotta">
                  Discover more <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Rest of articles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blog.slice(1).map((article, i) => (
              <Reveal key={article.title} delay={(i % 3) * 0.1}>
                <motion.a
                  href="#"
                  className="group block rounded-2xl overflow-hidden bg-cream-2/30 hover:shadow-[0_20px_50px_rgba(31,61,43,0.12)] transition-shadow"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={article.image} alt={article.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-terracotta">{article.category}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-charcoal/50 uppercase tracking-wide">{article.date}</p>
                    <h3 className="serif text-xl text-forest mt-2 group-hover:text-terracotta transition-colors">{article.title}</h3>
                    <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">{article.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terracotta">
                      Discover more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
