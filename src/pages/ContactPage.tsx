import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading, Reveal } from '@/components/Reveal';
import { contact } from '@/data/content';
import { images } from '@/data/imagePrompts';

export function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Begin your healing journey"
        intro="Reach out with any question, or book a free consultation with one of our healers. We're here to help you take the first step."
        image={images.cycle_3_expert}
        crumb="Get In Touch"
      />

      <Section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          {/* Contact info */}
          <div>
            <SectionHeading eyebrow="Reach Us" title="Contact details" />

            <div className="mt-8 space-y-5">
              <Reveal>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-2/40">
                  <div className="h-11 w-11 rounded-full bg-terracotta/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="eyebrow text-forest/60 mb-1">Address</p>
                    <p className="text-charcoal/80 text-sm leading-relaxed">{contact.address}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <a href={`tel:${contact.phone}`} className="flex items-start gap-4 p-5 rounded-2xl bg-cream-2/40 hover:bg-cream-2/70 transition-colors">
                  <div className="h-11 w-11 rounded-full bg-terracotta/15 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="eyebrow text-forest/60 mb-1">Phone</p>
                    <p className="text-charcoal/80 text-sm">{contact.phone}</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.16}>
                <a href={`mailto:${contact.email}`} className="flex items-start gap-4 p-5 rounded-2xl bg-cream-2/40 hover:bg-cream-2/70 transition-colors">
                  <div className="h-11 w-11 rounded-full bg-terracotta/15 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="eyebrow text-forest/60 mb-1">Email</p>
                    <p className="text-charcoal/80 text-sm">{contact.email}</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.24}>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors">
                  <div className="h-11 w-11 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-[#1da851]" />
                  </div>
                  <div>
                    <p className="eyebrow text-forest/60 mb-1">WhatsApp</p>
                    <p className="text-charcoal/80 text-sm">Chat with us instantly</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-2/40">
                  <div className="h-11 w-11 rounded-full bg-terracotta/15 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-terracotta" />
                  </div>
                  <div>
                    <p className="eyebrow text-forest/60 mb-1">Hours</p>
                    <p className="text-charcoal/80 text-sm">Open all year, 7 days a week</p>
                    <p className="text-charcoal/60 text-xs mt-0.5">Reception: 7 AM – 9 PM</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <div>
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-cream-2/40 rounded-3xl p-7 md:p-10"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <SectionHeading eyebrow="Book a Consultation" title="Send us a message" />

                  <div className="mt-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="First name" name="firstName" type="text" />
                      <Field label="Last name" name="lastName" type="text" />
                    </div>
                    <Field label="Email" name="email" type="email" />
                    <Field label="Phone" name="phone" type="tel" />
                    <div>
                      <label className="eyebrow text-forest/60 block mb-2">I'm interested in</label>
                      <select className="w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-charcoal focus:border-terracotta focus:outline-none transition-colors">
                        <option>General consultation</option>
                        <option>Immune Advantage</option>
                        <option>DNA Advantage</option>
                        <option>Neuro Advantage</option>
                        <option>Musculoskeletal Advantage</option>
                        <option>Cardiac Advantage</option>
                      </select>
                    </div>
                    <div>
                      <label className="eyebrow text-forest/60 block mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-charcoal focus:border-terracotta focus:outline-none transition-colors resize-none"
                        placeholder="Tell us a little about what brings you to Sattva..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-sweep group w-full inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-4 text-cream font-semibold hover:bg-terracotta-2 transition-colors"
                    >
                      Send message
                      <Send size={17} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="bg-cream-2/40 rounded-3xl p-10 md:p-16 text-center flex flex-col items-center justify-center min-h-[400px]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="h-16 w-16 rounded-full bg-terracotta/15 flex items-center justify-center mb-5"
                  >
                    <CheckCircle2 size={32} className="text-terracotta" />
                  </motion.div>
                  <h3 className="serif text-3xl text-forest">Thank you</h3>
                  <p className="mt-3 text-charcoal/70 max-w-sm">
                    Your message is on its way. One of our healers will reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border border-forest/20 px-6 py-3 text-forest font-semibold hover:bg-cream-2/70 transition-colors text-sm"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-forest/60 block mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-sm text-charcoal focus:border-terracotta focus:outline-none transition-colors"
      />
    </div>
  );
}
