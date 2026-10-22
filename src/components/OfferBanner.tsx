import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal } from './Reveal';
import { images } from '@/data/imagePrompts';
import { contact } from '@/data/content';

export function OfferBanner() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden group">
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <img
                src={images.offer_banner}
                alt="Guests enjoying a summer wellness camp on a green lawn"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-3/85 via-forest/50 to-transparent" />
            </div>

            <div className="absolute inset-0 flex items-center">
              <div className="px-6 md:px-14 max-w-xl">
                <span className="eyebrow text-sage-light">Exclusive Offer</span>
                <h3 className="serif text-3xl md:text-5xl text-cream mt-3">Summer Camp</h3>
                <motion.div
                  className="serif text-7xl md:text-9xl text-terracotta leading-none mt-2"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  10% off
                </motion.div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button className="btn-sweep group/b inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3.5 text-cream font-semibold hover:bg-terracotta-2 transition-colors">
                    Book now
                    <ArrowRight size={17} className="group-hover/b:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-white font-semibold hover:bg-[#1da851] transition-colors"
                  >
                    <MessageCircle size={18} />
                    Ask on WhatsApp
                  </a>
                </div>
                <p className="mt-4 text-xs text-sage-light/70">T&amp;C apply.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
