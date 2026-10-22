export interface TeamBio {
  name: string;
  designation: string;
  image: string;
  bio: string;
  fullBio: string;
}

export const teamBios: TeamBio[] = [
  {
    name: 'Dr. Shivaraj V. Patil',
    designation: 'Chief Medical Officer',
    image: 'https://images.pexels.com/photos/14797861/pexels-photo-14797861.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Dr. Shivaraj V. Patil, BNYS, MD, is a passionate professional believing in natural healing with a background of 20 years of clinical practice experience focusing on naturopathy, yoga and holistic lifestyle medicine...',
    fullBio:
      'Dr. Shivaraj V. Patil, BNYS, MD, is a passionate professional believing in natural healing with a background of 20 years of clinical practice experience focusing on naturopathy, yoga and holistic lifestyle medicine. He has guided thousands of guests through personalised naturopathic programmes, blending classical techniques with modern diagnostic insight. As Chief Medical Officer at Sattva, he leads the clinical team, oversees treatment protocols and ensures every guest receives care that is both rooted in tradition and informed by evidence. His philosophy is simple: the body knows how to heal — we simply remove the obstacles and support its natural intelligence.',
  },
  {
    name: 'Dr. Shiny Benedict',
    designation: 'Deputy Chief Medical Officer',
    image: 'https://images.pexels.com/photos/36665076/pexels-photo-36665076.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Dr. Shiny Benedict (BNYS, PGDWM) is a qualified Naturopath with over 12 years of experience in the field of health and wellness management. She is a graduate from Rajiv...',
    fullBio:
      'Dr. Shiny Benedict (BNYS, PGDWM) is a qualified Naturopath with over 12 years of experience in the field of health and wellness management. She is a graduate from Rajiv Gandhi University of Health Sciences and has specialised in women\u2019s health, stress management and lifestyle disorders. As Deputy Chief Medical Officer, she works closely with the clinical team to design and review each guest\u2019s treatment plan, bringing warmth, precision and a deep understanding of the mind-body connection to every consultation. She believes that healing begins the moment a person feels truly heard.',
  },
  {
    name: 'Dr. Rashmi Ambastha',
    designation: 'Senior Medical Officer',
    image: 'https://images.pexels.com/photos/27298085/pexels-photo-27298085.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Dr. Rashmi Ambastha brings with her a deep understanding of the root causes of various diseases & body imbalances & using her multidimensional experience helps design a...',
    fullBio:
      'Dr. Rashmi Ambastha brings with her a deep understanding of the root causes of various diseases & body imbalances & using her multidimensional experience helps design a personalised treatment approach for every guest. With over a decade of practice in naturopathy and hydrotherapy, she has a particular interest in metabolic disorders, digestive health and the role of food as medicine. At Sattva, she leads clinical assessments and follows each guest\u2019s progress from arrival to departure, adjusting therapies as the body responds.',
  },
  {
    name: 'Dr. Bhuvaneshwari',
    designation: 'BNYS, MSc CND, PGDND, MD Acupuncture',
    image: 'https://images.pexels.com/photos/7904406/pexels-photo-7904406.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Dr. Bhuvaneshwari holds advanced qualifications in naturopathy, clinical nutrition and acupuncture. She integrates meridian-based therapy with classical naturopathic care...',
    fullBio:
      'Dr. Bhuvaneshwari holds advanced qualifications in naturopathy, clinical nutrition and acupuncture. She integrates meridian-based therapy with classical naturopathic care, offering guests a uniquely layered approach to pain, fatigue and chronic illness. Her sessions are known for their quiet precision — she reads the body with her hands as much as with her training. At Sattva, she leads the acupuncture programme and contributes to nutritional therapy design.',
  },
  {
    name: 'Dr. Sucheta',
    designation: 'Raga Therapist',
    image: 'https://images.pexels.com/photos/5888144/pexels-photo-5888144.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Dr. Sucheta is a certified Raga Therapist who uses the healing vibrations of Indian classical music to restore emotional balance, calm the nervous system...',
    fullBio:
      'Dr. Sucheta is a certified Raga Therapist who uses the healing vibrations of Indian classical music to restore emotional balance, calm the nervous system and open pathways to inner stillness. Trained in both Hindustani and Carnatic traditions, she selects ragas based on the time of day, the season and each guest\u2019s emotional state. Her sessions are a highlight of the Sattva experience — many guests describe them as the moment everything else finally goes quiet.',
  },
  {
    name: 'Rina B.',
    designation: 'HOD of the Department',
    image: 'https://images.pexels.com/photos/15319037/pexels-photo-15319037.jpeg?auto=compress&cs=tinysrgb&w=800',
    bio: 'Rina B. heads the department of therapies and wellness operations, ensuring that every treatment room, every therapy schedule and every guest interaction...',
    fullBio:
      'Rina B. heads the department of therapies and wellness operations, ensuring that every treatment room, every therapy schedule and every guest interaction meets the standard of care Sattva is known for. With a background in wellness hospitality spanning over fifteen years, she bridges the clinical and hospitality sides of the retreat, making sure that healing is not just effective but also warm, seamless and dignified.',
  },
];

export interface DinacharyaSlot {
  time: string;
  title: string;
  description: string;
  image: string;
}

export const dinacharya: DinacharyaSlot[] = [
  {
    time: '07:15 AM - 07:30 AM',
    title: 'Refresh with Hydro-Reflex Walk',
    description: 'Begin the day with a barefoot walk on cool pebbles through shallow water, stimulating reflex points and waking the body gently.',
    image: 'https://images.pexels.com/photos/2406745/pexels-photo-2406745.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    time: '07:30 AM - 08:00 AM',
    title: 'Morning Yoga and Pranayama',
    description: 'Sunrise sessions of breath-led movement and stillness on the deck above the lake, tuned to your body and your healing goals.',
    image: 'https://images.pexels.com/photos/4971848/pexels-photo-4971848.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    time: '08:00 AM - 12:30 PM',
    title: 'Herbal Welcome Drink',
    description: 'A warm herbal infusion chosen for your constitution, sipped slowly as the morning light fills the courtyard.',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    time: '10:00 AM - 11:15 AM',
    title: 'Breakfast and Consultations',
    description: 'A nourishing plant-based breakfast followed by a consultation with your lead healer to review the day\u2019s therapies.',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    time: '12:00 PM - 01:30 PM',
    title: 'Therapies and Treatments',
    description: 'Your personalised sequence of naturopathy, Ayurveda and holistic therapies unfolds across the late morning.',
    image: 'https://images.pexels.com/photos/6628606/pexels-photo-6628606.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    time: '01:30 PM - 02:00 PM',
    title: 'Nutritious Lunch',
    description: 'A wholesome, plant-based meal designed by your dietician, eaten slowly and in silence if you wish.',
    image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    time: '02:00 PM - 05:45 PM',
    title: 'Rest and Reflection',
    description: 'A quiet afternoon for rest, journaling or a gentle walk through the orchard — the body integrates the morning\u2019s work.',
    image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    time: '04:30 PM - 05:15 PM',
    title: 'Naturopathy Sessions',
    description: 'A second round of therapies — mud packs, hydrotherapy or reflexology — timed for the body\u2019s afternoon rhythm.',
    image: 'https://images.pexels.com/photos/19695729/pexels-photo-19695729.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    time: '05:45 PM - 06:30 PM',
    title: 'Evening Meditation',
    description: 'Guided meditation or yoga nidra as the sun sets, settling the nervous system before the evening.',
    image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    time: '06:30 PM - 06:45 PM',
    title: 'Light Dinner',
    description: 'A simple, early dinner of soup, grains and steamed vegetables — light enough for restful sleep.',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    time: '08:00 PM - 09:00 PM',
    title: 'Wind-down and Sleep Rituals',
    description: 'A warm herbal bath, a few minutes of breathwork and the campus falling quiet as lanterns dim for the night.',
    image: 'https://images.pexels.com/photos/31108473/pexels-photo-31108473.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

export interface Room {
  id: string;
  badge: string;
  name: string;
  type: string;
  area: string;
  description: string;
  idealFor: string[];
  highlights: string[];
  amenities: string[];
  images: string[];
}

export const rooms: Room[] = [
  {
    id: 'rajmukha',
    badge: 'MOST PREMIUM',
    name: 'Rajmukha',
    type: 'Premium Deluxe Room',
    area: '860 sq. ft. | 1 Room',
    description:
      'Rajmukha is Sattva\u2019s most premium accommodation category, created for guests who seek privacy, spacious comfort, refined interiors, and a superior therapeutic stay. Inspired by nature and designed around the five elements, this room offers a peaceful indoor-outdoor living experience with premium amenities and thoughtful details.',
    idealFor: [
      'Discerning guests seeking privacy and superior comfort',
      'Extended premium therapeutic stays',
      'Couples and distinguished visitors',
      'Guests looking for the best room experience at Sattva',
    ],
    highlights: [
      'Nature-inspired design rooted in the five elements',
      'Seamless indoor-outdoor living with private sit-out spaces',
      'Handcrafted furniture and natural stone finishes',
      'Private garden access with meditation alcove',
    ],
    amenities: [
      'Air conditioning',
      'Wi-Fi',
      'Tea & coffee maker',
      'Premium organic toiletries',
      'In-room dining',
      'Private sit-out garden',
    ],
    images: [
      'https://images.pexels.com/photos/34811443/pexels-photo-34811443.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/10610733/pexels-photo-10610733.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/16116225/pexels-photo-16116225.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
  },
  {
    id: 'pramukha',
    badge: 'PREMIUM',
    name: 'Pramukha',
    type: 'Super Deluxe Room',
    area: '520 sq. ft. | 1 Room',
    description:
      'Pramukha is a high-comfort category designed for longer therapeutic stays. With a generous layout, natural light from three sides and a private balcony overlooking the orchard, it suits couples and privacy-focused guests who want both space and calm during their healing journey.',
    idealFor: [
      'Couples on a shared healing journey',
      'Longer therapeutic stays requiring comfort',
      'Guests who value privacy and quiet',
      'Those transitioning from intensive treatment to follow-up',
    ],
    highlights: [
      'Private balcony with orchard views',
      'Natural light from three sides',
      'Therapy-friendly spacious bathroom',
      'Walking distance to meditation hall',
    ],
    amenities: [
      'Air conditioning',
      'Wi-Fi',
      'Tea & coffee maker',
      'Organic toiletries',
      'In-room dining',
      'Private balcony',
    ],
    images: [
      'https://images.pexels.com/photos/10610733/pexels-photo-10610733.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/34811443/pexels-photo-34811443.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/16116225/pexels-photo-16116225.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
  },
  {
    id: 'sumukha',
    badge: 'DELUXE',
    name: 'Sumukha',
    type: 'Deluxe Room',
    area: '380 sq. ft. | 1 Room',
    description:
      'Sumukha is a spacious and comfortable room category ideal for couples, longer stays and guests who want added room comfort without the premium tier. The room opens to a shared garden courtyard and receives gentle morning light through wide louvered windows.',
    idealFor: [
      'Couples and solo guests on standard stays',
      'Moderate-length therapeutic programmes',
      'Guests who prefer garden-facing rooms',
      'Value-conscious long-stay guests',
    ],
    highlights: [
      'Garden courtyard-facing windows',
      'Wide louvered windows for cross-ventilation',
      'Simple, restful natural-material interiors',
      'Close proximity to dining hall',
    ],
    amenities: [
      'Air conditioning',
      'Wi-Fi',
      'Tea & coffee maker',
      'Organic toiletries',
      'In-room dining on request',
    ],
    images: [
      'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/16116225/pexels-photo-16116225.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/10610733/pexels-photo-10610733.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/34811443/pexels-photo-34811443.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
  },
  {
    id: 'amukha',
    badge: 'STANDARD',
    name: 'Amukha',
    type: 'Standard Room',
    area: '240 sq. ft. | 1 Room',
    description:
      'Amukha is a simple, peaceful and practical stay option with essential facilities for guests whose days are spent mostly in therapies and around the campus. Clean lines, natural light and everything you need — nothing more, nothing less.',
    idealFor: [
      'Solo guests on short stays',
      'Budget-conscious healing journeys',
      'Guests who spend most of the day in therapies',
      'First-time visitors exploring naturopathy',
    ],
    highlights: [
      'Simple, clean and restful interiors',
      'Natural light and cross-ventilation',
      'Walking distance to all therapy blocks',
      'Shared garden seating outside',
    ],
    amenities: [
      'Air conditioning',
      'Wi-Fi',
      'Tea & coffee maker',
      'Organic toiletries',
    ],
    images: [
      'https://images.pexels.com/photos/16116225/pexels-photo-16116225.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/34811443/pexels-photo-34811443.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/10610733/pexels-photo-10610733.jpeg?auto=compress&cs=tinysrgb&w=1600',
    ],
  },
];

export const aboutSections = [
  { id: 'mantra', label: 'Mantra' },
  { id: 'story', label: 'Story' },
  { id: 'team', label: 'Healing Team' },
  { id: 'dinacharya', label: 'Dinacharya' },
  { id: 'accommodation', label: 'Accommodation' },
];
