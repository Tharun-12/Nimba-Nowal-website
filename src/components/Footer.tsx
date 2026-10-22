import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import { useModal } from './ModalContext';
import { contact, footerLinks } from '@/data/content';

const social = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'X' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: MessageCircle, label: 'Tripadvisor' },
];

export function Footer() {
  const { openHealthTest } = useModal();

  return (
    <footer id="footer" className="bg-forest-2 text-cream relative grain">
      <div className="max-w-8xl mx-auto px-5 md:px-10 py-16 md:py-24 relative z-10">
        {/* top */}
        <div className="grid lg:grid-cols-[1.3fr_2fr] gap-12 lg:gap-20">
          {/* brand + contact */}
          <div>
            <Link to="/" className="flex items-center gap-3 w-fit">
              <Leaf size={32} strokeWidth={1.3} className="text-sage" />
              <div>
                <p className="serif text-2xl">Sattva</p>
                <p className="text-[0.6rem] tracking-[0.3em] uppercase text-sage-light">Nature Cure</p>
              </div>
            </Link>
            <p className="mt-5 text-sage-light/85 leading-relaxed max-w-sm">
              A luxury naturopathy &amp; holistic healing retreat on seventy acres of orchard, lake and quiet.
              Nature heals best.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3 text-sage-light/90">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-terracotta" />
                <span>{contact.address}</span>
              </div>
              <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-sage-light/90 hover:text-cream transition-colors">
                <Phone size={18} className="text-terracotta" />
                <span>{contact.phone}</span>
              </a>
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sage-light/90 hover:text-cream transition-colors">
                <MessageCircle size={18} className="text-terracotta" />
                <span>Chat on WhatsApp</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sage-light/90 hover:text-cream transition-colors">
                <Mail size={18} className="text-terracotta" />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="eyebrow text-sage-light mb-4">{title}</p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.label === 'Take a Health Test' ? (
                        <button
                          onClick={openHealthTest}
                          className="link-underline text-sm text-sage-light/80 hover:text-cream transition-colors text-left"
                        >
                          {link.label}
                        </button>
                      ) : link.label === 'Ask on WhatsApp' ? (
                        <a
                          href={`https://wa.me/${contact.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-sm text-sage-light/80 hover:text-cream transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="link-underline text-sm text-sage-light/80 hover:text-cream transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* social + badge */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-sage/15 pt-8">
          <div className="flex items-center gap-3 flex-wrap">
            {social.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="h-10 w-10 rounded-full border border-sage/30 flex items-center justify-center text-sage-light hover:bg-terracotta hover:border-terracotta hover:text-cream transition-colors"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-sage/25 px-4 py-3">
            <div className="h-8 w-8 rounded-full bg-[#00AA5B] flex items-center justify-center text-white text-xs font-bold">
              T
            </div>
            <div className="leading-tight">
              <p className="text-xs text-sage-light">Travellers' Choice</p>
              <p className="text-[0.65rem] text-sage-light/60">2026 Award Winner</p>
            </div>
          </div>
        </div>

        {/* legal */}
        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-sage-light/60">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="#" className="link-underline hover:text-cream">Right of Use</a>
            <a href="#" className="link-underline hover:text-cream">Disclaimer</a>
            <a href="#" className="link-underline hover:text-cream">Privacy Policy</a>
            <a href="#" className="link-underline hover:text-cream">Rules &amp; Regulations</a>
          </div>
          <p>© {new Date().getFullYear()} Sattva Nature Cure. All rights reserved.</p>
        </div>

        {/* medical disclaimer */}
        <p className="mt-8 text-xs text-sage-light/50 leading-relaxed max-w-3xl">
          The information and therapies at Sattva Nature Cure are intended to support general wellbeing and
          are not a substitute for professional medical advice, diagnosis or treatment. Always consult your
          physician before beginning any new health programme.
        </p>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[120] h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} className="text-white" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
}

export function MobileBottomBar() {
  const { openHealthTest } = useModal();
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[110] bg-cream/95 backdrop-blur border-t border-forest/10 p-3">
      <button
        onClick={openHealthTest}
        className="w-full rounded-full bg-terracotta py-3.5 text-cream font-semibold text-sm"
      >
        Take a Health Test
      </button>
    </div>
  );
}
