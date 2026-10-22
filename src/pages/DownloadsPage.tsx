import { Link } from 'react-router-dom';
import { Download, FileText, ArrowRight, BookOpen, HeartPulse, Leaf } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading, Reveal } from '@/components/Reveal';
import { images } from '@/data/imagePrompts';

const downloads = [
  { title: 'Sattva Brochure', desc: 'A complete guide to our retreat, therapies and packages.', size: '4.2 MB', icon: BookOpen, format: 'PDF' },
  { title: 'Healing Packages Guide', desc: 'Detailed breakdown of all five healing programmes.', size: '2.8 MB', icon: HeartPulse, format: 'PDF' },
  { title: 'Diet & Recipe Booklet', desc: 'Wholesome plant-based recipes from our kitchen.', size: '6.1 MB', icon: Leaf, format: 'PDF' },
  { title: 'Yoga & Meditation Guide', desc: 'Simple daily practices you can begin at home.', size: '3.5 MB', icon: FileText, format: 'PDF' },
];

export function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Downloads"
        intro="Take Sattva home with you. Browse our brochures, guides and recipe booklets — all free to download."
        image={images.method_4}
        crumb="Downloads"
      />

      <Section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-10">
          <SectionHeading eyebrow="Free Resources" title="Guides & brochures" center />

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {downloads.map((d, i) => (
              <Reveal key={d.title} delay={(i % 2) * 0.1}>
                <div className="group flex items-start gap-5 p-6 rounded-2xl bg-cream-2/40 hover:bg-cream-2/70 hover:shadow-[0_15px_40px_rgba(31,61,43,0.08)] transition-all">
                  <div className="h-14 w-14 rounded-2xl bg-terracotta/15 flex items-center justify-center flex-shrink-0">
                    <d.icon size={26} className="text-terracotta" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="serif text-xl text-forest">{d.title}</h3>
                      <span className="rounded-full bg-sage/20 px-2 py-0.5 text-[0.65rem] font-semibold text-forest/70">{d.format}</span>
                    </div>
                    <p className="mt-1.5 text-sm text-charcoal/65 leading-relaxed">{d.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-charcoal/45">{d.size}</span>
                      <button className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta group-hover:gap-2.5 transition-all">
                        <Download size={15} /> Download
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal delay={0.2}>
            <div className="mt-16 text-center p-10 rounded-3xl bg-forest text-cream grain relative">
              <h3 className="serif text-3xl text-cream">Have a question?</h3>
              <p className="mt-3 text-sage-light/90 max-w-md mx-auto">
                Our team is happy to help you choose the right programme or plan your visit.
              </p>
              <Link
                to="/contact"
                className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-cream font-semibold hover:bg-terracotta-2 transition-colors mt-6"
              >
                Get in touch
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
