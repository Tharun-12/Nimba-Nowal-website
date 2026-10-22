import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Leaf, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Reveal, SectionHeading } from '@/components/Reveal';
import { LeafDivider } from '@/components/Botanical';
import { rooms, type Room } from '@/data/about';
import { contact } from '@/data/content';

function RoomCard({ room, index }: { room: Room; index: number }) {
  const [activeImg, setActiveImg] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <Reveal delay={(index % 2) * 0.1}>
      <div className="bg-white rounded-3xl shadow-[0_10px_50px_rgba(31,61,43,0.08)] overflow-hidden">
        <div className="grid lg:grid-cols-[1.3fr_1fr]">
          {/* Left: text content */}
          <div className="p-8 md:p-10 order-2 lg:order-1">
            <h3 className="serif text-2xl md:text-3xl text-forest">
              {room.name} – {room.type}
            </h3>
            <p className="mt-4 text-charcoal/70 leading-relaxed">{room.description}</p>

            {/* Room area */}
            <div className="mt-6">
              <span className="eyebrow flex items-center gap-1.5">
                <Leaf size={12} /> Room Area
              </span>
              <p className="mt-2 text-charcoal/75">{room.area}</p>
            </div>

            {/* Ideal for */}
            <div className="mt-6">
              <span className="eyebrow">Ideal For</span>
              <ul className="mt-2 grid sm:grid-cols-2 gap-1.5">
                {room.idealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <Leaf size={12} className="flex-shrink-0 mt-1 text-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Concept highlights */}
            <div className="mt-6">
              <span className="eyebrow">Concept Highlights</span>
              <ul className="mt-2 grid sm:grid-cols-2 gap-1.5">
                {room.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <Leaf size={12} className="flex-shrink-0 mt-1 text-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div className="mt-6">
              <span className="eyebrow">Amenities</span>
              <ul className="mt-2 grid sm:grid-cols-2 gap-1.5">
                {room.amenities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <Leaf size={12} className="flex-shrink-0 mt-1 text-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="btn-sweep inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-cream font-semibold hover:bg-forest-2 transition-colors">
                Book This Room <ArrowRight size={16} />
              </button>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-1.5 text-terracotta font-medium text-sm"
              >
                <MessageCircle size={14} /> Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Right: images */}
          <div className="relative order-1 lg:order-2 p-4 lg:p-6">
            <button
              onClick={() => setLightbox(true)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden w-full block group"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={room.images[activeImg]}
                  alt={`${room.name} view ${activeImg + 1}`}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors" />
            </button>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-3">
              {room.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    i === activeImg ? 'border-forest' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${room.name} thumbnail ${i + 1}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <div className="absolute inset-0 bg-forest-3/90 backdrop-blur-sm" />
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(false)}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-cream/80 flex items-center justify-center text-forest hover:bg-cream transition-colors"
                aria-label="Close lightbox"
              >
                <X size={20} />
              </button>
              <img
                src={room.images[activeImg]}
                alt={`${room.name} large view`}
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

export function AccommodationSection() {
  const scrollToRoom = (id: string) => {
    const el = document.getElementById(`room-${id}`);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="accommodation" className="bg-cream py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-10">
        {/* Overview card */}
        <SectionHeading eyebrow="Stay at Sattva" title="Accommodation" center />
        <LeafDivider className="mt-8" />

        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_10px_40px_rgba(31,61,43,0.08)] p-8 md:p-10 mt-10 text-center">
            <h3 className="serif text-2xl md:text-3xl text-forest">Accommodation Categories at Sattva</h3>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              The rooms at Sattva are arranged in a clear hierarchy, beginning with the most premium category and moving toward simple essential accommodation.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => scrollToRoom(room.id)}
                  className="text-left rounded-2xl p-5 bg-[#EEF0E2] hover:bg-[#e3e6d2] transition-colors group"
                >
                  <span className="inline-block rounded-full bg-forest px-3 py-1 text-[0.6rem] font-semibold tracking-wide text-cream uppercase">
                    {room.badge}
                  </span>
                  <h4 className="serif text-xl text-forest mt-3">{room.name}</h4>
                  <p className="font-semibold text-charcoal/80 text-sm mt-0.5">{room.type}</p>
                  <p className="text-xs text-charcoal/60 mt-2 leading-relaxed">{room.description.split('.')[0]}.</p>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Room detail cards */}
        <div className="space-y-8 mt-12">
          {rooms.map((room, i) => (
            <div key={room.id} id={`room-${room.id}`}>
              <RoomCard room={room} index={i} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="btn-sweep group inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-cream font-semibold hover:bg-terracotta-2 transition-colors"
            >
              Book your stay
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
