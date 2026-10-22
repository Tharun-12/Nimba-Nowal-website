import { images } from './imagePrompts';

export interface CycleStep {
  num: number;
  title: string;
  desc: string;
  image: string;
  icon: string;
}

export const healingCycle: CycleStep[] = [
  {
    num: 1,
    title: 'Join',
    desc: 'Arrive at Sattva and settle into seventy acres of orchard, lake and quiet. A warm welcome begins your journey.',
    image: images.cycle_1_join,
    icon: 'DoorOpen',
  },
  {
    num: 2,
    title: 'Test Healing Age',
    desc: 'Our naturopaths measure your healing age — a composite of vitality, sleep, digestion and stress markers.',
    image: images.cycle_2_test,
    icon: 'Activity',
  },
  {
    num: 3,
    title: 'Talk to Healing Expert',
    desc: 'Sit with a dedicated healer who reads your body, history and goals to shape a plan around you.',
    image: images.cycle_3_expert,
    icon: 'HeartPulse',
  },
  {
    num: 4,
    title: 'Start Healing',
    desc: 'Naturopathy, Ayurveda, yoga, therapies and nourishment come together in a daily rhythm of care.',
    image: images.cycle_4_healing,
    icon: 'Leaf',
  },
  {
    num: 5,
    title: 'Measure Healing Benefits',
    desc: 'We track your progress against your healing age and adjust every therapy as your body responds.',
    image: images.cycle_5_measure,
    icon: 'BarChart3',
  },
  {
    num: 6,
    title: 'Avail Follow-up',
    desc: 'Go home with a plan, a healer on call, and regular follow-ups to keep your healing on track.',
    image: images.cycle_6_followup,
    icon: 'PhoneCall',
  },
];

export interface Technique {
  num: string;
  title: string;
  desc: string;
  image: string;
}

export const techniques: Technique[] = [
  {
    num: '01',
    title: 'Naturopathy',
    desc: 'Mud, water, sunlight and air — the elemental medicines of the body.',
    image: images.naturopathy,
  },
  {
    num: '02',
    title: 'Ayurveda',
    desc: 'Time-tested herbal and oil therapies tuned to your constitution.',
    image: images.ayurveda,
  },
  {
    num: '03',
    title: 'Yoga & Meditation',
    desc: 'Breath, movement and stillness to calm the mind and open the body.',
    image: images.yoga,
  },
  {
    num: '04',
    title: 'Physiotherapy',
    desc: 'Gentle, modern rehabilitation that restores movement and strength.',
    image: images.physiotherapy,
  },
  {
    num: '05',
    title: 'Holistic Therapies',
    desc: 'Acupuncture, reflexology and energy work for deep, lasting balance.',
    image: images.holistic,
  },
];

export interface TourTab {
  key: string;
  label: string;
  image: string;
  desc: string;
}

export const tourTabs: TourTab[] = [
  { key: 'campus', label: 'Campus', image: images.tour_campus, desc: 'Seventy acres of orchard, lawns and a private lake.' },
  { key: 'therapy', label: 'Therapy Block', image: images.tour_therapy, desc: 'A modern healing space wrapped in greenery.' },
  { key: 'villas', label: 'Retreat Villas', image: images.tour_villas, desc: 'Minimal eco villas with private patios and linen beds.' },
  { key: 'amenities', label: 'Amenities', image: images.tour_amenities, desc: 'Infinity pool, meditation cave and quiet lounges.' },
  { key: 'night', label: 'Night Views', image: images.tour_night, desc: 'Lantern light on water as the campus quiets down.' },
];

export interface Package {
  num: string;
  title: string;
  tagline: string;
  desc: string;
  image: string;
}

export const packages: Package[] = [
  {
    num: '01',
    title: 'Immune Advantage',
    tagline: 'Build resilience, naturally',
    desc: 'A focused programme of naturopathy, diet and herbs to strengthen your immune system from within.',
    image: images.package_immune,
  },
  {
    num: '02',
    title: 'DNA Advantage',
    tagline: 'Care written in your genes',
    desc: 'Genetic insights shape a personalised plan of therapies, nutrition and lifestyle for your body.',
    image: images.package_dna,
  },
  {
    num: '03',
    title: 'Neuro Advantage',
    tagline: 'Calm the mind, restore sleep',
    desc: 'Shirodhara, meditation and breathwork to ease stress, anxiety and restore deep rest.',
    image: images.package_neuro,
  },
  {
    num: '04',
    title: 'Musculoskeletal Advantage',
    tagline: 'Move without pain',
    desc: 'Physiotherapy, yoga and hydrotherapy to rebuild strength, posture and joint health.',
    image: images.package_musculoskeletal,
  },
  {
    num: '05',
    title: 'Cardiac Advantage',
    tagline: 'A strong, steady heart',
    desc: 'A heart-centred programme of diet, exercise, stress care and gentle therapies.',
    image: images.package_cardiac,
  },
];

export interface Method {
  num: string;
  title: string;
  desc: string;
  image: string;
}

export const methods: Method[] = [
  { num: '01', title: 'Nature & Healing', desc: 'Seventy acres of orchard, lake and quiet — the foundation of everything we do.', image: images.method_1 },
  { num: '02', title: 'Personalized Care', desc: 'A dedicated healer who reads your body and shapes a plan around you alone.', image: images.method_2 },
  { num: '03', title: 'Ayurveda & Therapies', desc: 'Daily oil, herbal and hydro therapies tuned to your constitution and goals.', image: images.method_3 },
  { num: '04', title: 'Nourishment & Lifestyle', desc: 'Wholesome plant-based meals and a rhythm of rest that you take home with you.', image: images.method_4 },
];

export interface TeamMember {
  name: string;
  designation: string;
  image: string;
}

export const team: TeamMember[] = [
  { name: 'Dr. Ananya Iyer', designation: 'Chief Naturopath', image: images.team_1 },
  { name: 'Dr. Rohan Mehta', designation: 'Ayurvedic Physician', image: images.team_3 },
  { name: 'Dr. Kavya Nair', designation: 'Yoga & Meditation Lead', image: images.team_2 },
  { name: 'Dr. Arjun Rao', designation: 'Physiotherapist', image: images.team_5 },
  { name: 'Dr. Meera Krishnan', designation: 'Clinical Dietician', image: images.team_4 },
  { name: 'Dr. Siddharth Joshi', designation: 'Holistic Therapist', image: images.team_6 },
];

export interface BlogArticle {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export const blog: BlogArticle[] = [
  { category: 'Retreat', date: 'Sep 2026', title: 'A week at a holistic retreat: what actually happens', excerpt: 'A day-by-day account of how naturopathy, Ayurveda and yoga come together in a single stay.', image: images.blog_1 },
  { category: 'Ayurveda', date: 'Aug 2026', title: 'Shirodhara: the quiet therapy for a loud mind', excerpt: 'How a steady stream of warm oil on the forehead calms the nervous system.', image: images.blog_2 },
  { category: 'Mental Health', date: 'Jul 2026', title: 'Early intervention in mental health, naturally', excerpt: 'Why gentle, natural approaches belong at the start of a mental health journey.', image: images.blog_3 },
  { category: 'Naturopathy', date: 'Jun 2026', title: 'Naturopathy for diabetes: what the evidence says', excerpt: 'Diet, hydrotherapy and lifestyle as complements to conventional diabetes care.', image: images.blog_4 },
  { category: 'Ayurveda', date: 'May 2026', title: 'Nasya therapy: clearing the channels', excerpt: 'A look at the Ayurvedic practice of nasal administration and its everyday benefits.', image: images.blog_5 },
  { category: 'Women\'s Health', date: 'Apr 2026', title: 'Herbs for PCOS: a gentle, guided approach', excerpt: 'How common herbs, diet and routine can support women with PCOS.', image: images.blog_6 },
];

export interface StoryVideo {
  title: string;
  guest: string;
  city: string;
  thumb: string;
}

export const storyVideos: StoryVideo[] = Array.from({ length: 9 }).map((_, i) => ({
  title: ['Finding calm again', 'Six kilos lighter, naturally', 'Sleep like a child', 'My migraines stopped', 'A new lease on life', 'Pain-free for the first time', 'Reversing my diabetes', 'Healing after burnout', 'A quiet mind'][i],
  guest: ['Anita S.', 'Rajesh K.', 'Sunitha M.', 'Vikram P.', 'Lakshmi R.', 'Arvind T.', 'Deepa N.', 'Karthik V.', 'Priya G.'][i],
  city: ['Bengaluru', 'Mumbai', 'Chennai', 'Pune', 'Hyderabad', 'Delhi', 'Kochi', 'Ahmedabad', 'Jaipur'][i],
  thumb: [
    images.method_1, images.yoga, images.tour_amenities, images.ayurveda,
    images.naturopathy, images.physiotherapy, images.holistic, images.tour_villas,
    images.cycle_5_measure,
  ][i],
}));

export interface NavLink {
  label: string;
  href: string;
  thumbnail?: string;
}

export interface MegaMenuGroup {
  label: string;
  href: string;
  items: NavLink[];
}

export const megaMenuPackages: MegaMenuGroup = {
  label: 'Healing Packages',
  href: '/packages',
  items: [
    { label: 'Healing Abode', href: '/packages', thumbnail: images.tour_villas },
    { label: 'Recreation Spaces', href: '/tour', thumbnail: images.tour_amenities },
    { label: 'Meditation Caves', href: '/tour', thumbnail: images.tour_night },
    { label: 'Cardio Gym', href: '/methods', thumbnail: images.physiotherapy },
  ],
};

export const megaMenuGallery: MegaMenuGroup = {
  label: 'Gallery',
  href: '/tour',
  items: [
    { label: 'Virtual Tour', href: '/tour', thumbnail: images.tour_campus },
    { label: 'Images', href: '/tour', thumbnail: images.tour_villas },
    { label: 'Events', href: '/blog', thumbnail: images.offer_banner },
  ],
};

export interface TechniqueDetail {
  overview: string;
  therapies: string[];
  duration: string;
  benefits: string[];
}

export const techniqueDetails: Record<string, TechniqueDetail> = {
  Naturopathy: {
    overview:
      'Naturopathy harnesses the five elements — earth, water, fire, air and ether — to help the body heal itself. At Sattva, mud packs, hydrotherapy baths, sun baths and fresh-air walks form the backbone of detoxification and vitality restoration.',
    therapies: ['Mud Therapy', 'Hydrotherapy', 'Sun Bath', 'Air Bath', 'Fasting Therapy', 'Diet Therapy'],
    duration: '7–21 days',
    benefits: ['Deep detoxification', 'Improved digestion', 'Stronger immunity', 'Better circulation'],
  },
  Ayurveda: {
    overview:
      'Ayurveda treats the root cause of imbalance rather than its symptoms. Our Ayurvedic physicians read your doshic constitution and prescribe oils, herbs and therapies that restore harmony to body and mind.',
    therapies: ['Abhyangam', 'Shirodhara', 'Nasya', 'Kati Basti', 'Udvartana', 'Herbal Decoctions'],
    duration: '10–28 days',
    benefits: ['Balanced doshas', 'Relieved joint pain', 'Calm nervous system', 'Glowing skin'],
  },
  'Yoga & Meditation': {
    overview:
      'Yoga and meditation at Sattva are not exercise classes — they are a daily practice of breath, movement and stillness, tuned to your body and your healing goals. Sunrise sessions happen on a wooden deck above the lake.',
    therapies: ['Hatha Yoga', 'Pranayama', 'Guided Meditation', 'Yoga Nidra', 'Sound Healing', 'Chakra Balancing'],
    duration: 'Daily, throughout stay',
    benefits: ['Mental clarity', 'Flexibility', 'Reduced stress', 'Deeper sleep'],
  },
  Physiotherapy: {
    overview:
      'Our physiotherapy team blends modern rehabilitation with mindful movement. Whether you are recovering from injury, surgery or years of sedentary life, we rebuild strength, posture and range of motion gently and precisely.',
    therapies: ['Manual Therapy', 'Posture Correction', 'Gait Training', 'Hydrotherapy Exercises', 'Stretching', 'Strength Building'],
    duration: '5–14 days',
    benefits: ['Pain relief', 'Restored mobility', 'Better posture', 'Injury prevention'],
  },
  'Holistic Therapies': {
    overview:
      'Holistic therapies work on the subtle layers of the body — energy, breath and emotion. Acupuncture, reflexology and sound healing complement the physical therapies and bring a deep sense of balance and release.',
    therapies: ['Acupuncture', 'Reflexology', 'Sound Healing', 'Aromatherapy', 'Reiki', 'Crystal Therapy'],
    duration: '3–10 days',
    benefits: ['Emotional release', 'Energy balance', 'Deep relaxation', 'Inner stillness'],
  },
};

export interface PackageDetail {
  overview: string;
  inclusions: string[];
  duration: string;
  idealFor: string;
}

export const packageDetails: Record<string, PackageDetail> = {
  'Immune Advantage': {
    overview:
      'A focused programme that combines naturopathic detox, immune-boosting diet, herbal supplements and daily yoga to build your body\u2019s natural defences from the ground up.',
    inclusions: ['Daily naturopathy sessions', 'Immune-boosting meal plan', 'Herbal supplements', 'Yoga & pranayama', 'Consultation with naturopath', 'Progress tracking'],
    duration: '14 days',
    idealFor: 'Those who fall ill frequently, feel fatigued, or want to strengthen their immune system naturally.',
  },
  'DNA Advantage': {
    overview:
      'Using genetic insights, we craft a plan of therapies, nutrition and lifestyle that is uniquely yours. This is the most personalized programme we offer, down to the molecular level.',
    inclusions: ['Genetic assessment', 'Personalized therapy plan', 'Custom nutrition plan', 'Lifestyle coaching', 'Follow-up genetic review', 'Dedicated healer'],
    duration: '21 days',
    idealFor: 'Those who want precision care based on their unique genetic profile.',
  },
  'Neuro Advantage': {
    overview:
      'A calming programme of Shirodhara, meditation, breathwork and nervine herbs designed to quiet the mind, ease anxiety and restore the deep, restorative sleep your brain needs.',
    inclusions: ['Shirodhara sessions', 'Meditation & breathwork', 'Nervine herbal therapy', 'Sleep hygiene coaching', 'Stress assessment', 'Follow-up support'],
    duration: '10 days',
    idealFor: 'Those struggling with stress, anxiety, insomnia or mental fatigue.',
  },
  'Musculoskeletal Advantage': {
    overview:
      'A structured programme of physiotherapy, therapeutic yoga, hydrotherapy and Ayurvedic oil treatments to rebuild strength, ease joint pain and restore freedom of movement.',
    inclusions: ['Physiotherapy sessions', 'Therapeutic yoga', 'Ayurvedic oil massage', 'Hydrotherapy', 'Posture assessment', 'Home exercise plan'],
    duration: '14 days',
    idealFor: 'Those with chronic pain, joint issues, postural problems or recovering from injury.',
  },
  'Cardiac Advantage': {
    overview:
      'A heart-centred programme that combines a heart-healthy diet, gentle exercise, stress management and supportive therapies to strengthen your cardiovascular system naturally.',
    inclusions: ['Heart-healthy meal plan', 'Gentle exercise programme', 'Stress management', 'Cardiac-supportive herbs', 'Regular monitoring', 'Lifestyle coaching'],
    duration: '21 days',
    idealFor: 'Those with heart health concerns, high blood pressure or a family history of cardiac issues.',
  },
};

export const healthTestQuestions = [
  {
    id: 'age',
    question: 'How old are you?',
    options: ['18–30', '31–45', '46–60', '60+'],
  },
  {
    id: 'sleep',
    question: 'How well do you sleep?',
    options: ['Deeply, 7–8 hrs', 'Restless most nights', 'Often wake tired', 'Rarely sleep well'],
  },
  {
    id: 'stress',
    question: 'How would you rate your daily stress?',
    options: ['Calm and steady', 'Occasionally tense', 'Often overwhelmed', 'Constantly stressed'],
  },
  {
    id: 'digestion',
    question: 'How is your digestion?',
    options: ['Regular and easy', 'Sometimes bloated', 'Often irregular', 'Frequently uncomfortable'],
  },
  {
    id: 'activity',
    question: 'How active is your day?',
    options: ['Daily exercise', 'A few times a week', 'Occasional walks', 'Mostly seated'],
  },
];

export const contact = {
  address: 'Sattva Nature Cure, 70 Acres Orchard Road, Coonoor, Tamil Nadu 643101, India',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@sattvanaturecure.in',
};

export const footerLinks = {
  'The Experience': [
    { label: 'About Us', path: '/about' },
    { label: 'Healing Cycle', path: '/' },
    { label: 'Healing Techniques', path: '/techniques' },
    { label: 'Virtual Tour', path: '/tour' },
    { label: 'Healing Methods', path: '/methods' },
  ],
  Wellness: [
    { label: 'Healing Packages', path: '/packages' },
    { label: 'Healing Stories', path: '/stories' },
    { label: 'Healing Team', path: '/team' },
    { label: 'Insights', path: '/blog' },
  ],
  Treatments: [
    { label: 'Naturopathy', path: '/techniques' },
    { label: 'Ayurveda', path: '/techniques' },
    { label: 'Yoga & Meditation', path: '/techniques' },
    { label: 'Physiotherapy', path: '/techniques' },
  ],
  'Get In Touch': [
    { label: 'Take a Health Test', path: '/contact' },
    { label: 'Book a Consultation', path: '/contact' },
    { label: 'Downloads', path: '/downloads' },
    { label: 'Ask on WhatsApp', path: '/contact' },
  ],
};
