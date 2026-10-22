// Image prompts for AI generation. Stock photo URLs are used directly.
// Suffix: "photorealistic, soft natural morning light, warm earthy tones, shallow depth of field, premium wellness magazine photography, no text, no watermark."

export const imagePrompts: Record<string, string> = {
  hero_poster:
    'misty Indian neem and mango orchard at sunrise beside a calm lake, golden light through trees',
  cycle_1_join:
    'warm welcome at a serene wellness reception with wooden decor and plants',
  cycle_2_test:
    "doctor checking a guest's pulse and health metrics on a tablet in a calm clinic",
  cycle_3_expert:
    'naturopathy doctor in consultation with a guest in a bright plant-filled room',
  cycle_4_healing:
    'guest receiving Ayurvedic oil massage (Abhyangam), warm lamps, herbs',
  cycle_5_measure:
    'wellness team reviewing progress charts with a smiling guest',
  cycle_6_followup:
    'guest on a video call with a healer at home, healthy kitchen background',
  naturopathy: 'mud therapy, hydrotherapy tub, sunlight, banana leaves',
  ayurveda: 'Shirodhara warm oil stream on forehead, brass vessel',
  yoga: 'group yoga at sunrise on a wooden deck above a lake',
  physiotherapy: 'therapist guiding gentle rehabilitation in a modern airy studio',
  holistic: 'acupuncture needles with candles and stones, zen mood',
  tour_campus: 'wide aerial view of a luxury eco wellness campus with villas, lawns and a lake',
  tour_therapy: 'modern therapy block exterior with greenery',
  tour_villas: 'minimal luxury eco villa, private patio, linen bed, morning light',
  tour_amenities: 'infinity pool, lounge and meditation cave with a glowing Om symbol',
  tour_night: 'campus at dusk with warm lantern lights reflecting on water',
  package_immune: 'citrus, turmeric and herbs on wood',
  package_dna: 'abstract DNA helix over green leaves',
  package_neuro: 'calm lake with soft mist suggesting mental stillness',
  package_musculoskeletal: 'balanced stacked stones by a stream',
  package_cardiac: 'heart-shaped leaf floating on clear water',
  offer_banner: 'joyful guests in light summer clothing on a green lawn, sunny',
  method_1: 'dawn nature walk',
  method_2: 'personalised consultation',
  method_3: 'therapy treatment',
  method_4: 'wholesome vegetarian thali meal',
  team_1: 'professional Indian doctor portrait, white coat, blurred green background, 3:4',
  team_2: 'professional Indian doctor portrait, kurta, blurred green background, 3:4',
  team_3: 'professional Indian doctor portrait, white coat, blurred green background, 3:4',
  team_4: 'professional Indian doctor portrait, kurta, blurred green background, 3:4',
  team_5: 'professional Indian doctor portrait, white coat, blurred green background, 3:4',
  team_6: 'professional Indian doctor portrait, kurta, blurred green background, 3:4',
  blog_1: 'editorial retreat pool',
  blog_2: 'editorial Shirodhara',
  blog_3: 'editorial mental wellbeing',
  blog_4: 'editorial diabetic-friendly meal',
  blog_5: 'editorial Nasya therapy',
  blog_6: 'editorial PCOS herbs',
};

const SUFFIX =
  'photorealistic, soft natural morning light, warm earthy tones, shallow depth of field, premium wellness magazine photography, no text, no watermark.';

export const fullPrompts: Record<string, string> = Object.fromEntries(
  Object.entries(imagePrompts).map(([k, v]) => [k, `${v}. ${SUFFIX}`]),
);

// Curated stock photo URLs (Pexels) used directly for every image slot.
export const images: Record<string, string> = {
  hero_poster:
    'https://images.pexels.com/photos/27664945/pexels-photo-27664945.jpeg?auto=compress&cs=tinysrgb&w=1920',
  cycle_1_join:
    'https://images.pexels.com/photos/16571736/pexels-photo-16571736.jpeg?auto=compress&cs=tinysrgb&w=940',
  cycle_2_test:
    'https://images.pexels.com/photos/34159000/pexels-photo-34159000.jpeg?auto=compress&cs=tinysrgb&w=940',
  cycle_3_expert:
    'https://images.pexels.com/photos/7578797/pexels-photo-7578797.jpeg?auto=compress&cs=tinysrgb&w=940',
  cycle_4_healing:
    'https://images.pexels.com/photos/6628606/pexels-photo-6628606.jpeg?auto=compress&cs=tinysrgb&w=940',
  cycle_5_measure:
    'https://images.pexels.com/photos/9034740/pexels-photo-9034740.jpeg?auto=compress&cs=tinysrgb&w=940',
  cycle_6_followup:
    'https://images.pexels.com/photos/5957098/pexels-photo-5957098.jpeg?auto=compress&cs=tinysrgb&w=940',
  naturopathy:
    'https://images.pexels.com/photos/19695729/pexels-photo-19695729.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ayurveda:
    'https://images.pexels.com/photos/32306093/pexels-photo-32306093.jpeg?auto=compress&cs=tinysrgb&w=1200',
  yoga:
    'https://images.pexels.com/photos/4971848/pexels-photo-4971848.jpeg?auto=compress&cs=tinysrgb&w=1200',
  physiotherapy:
    'https://images.pexels.com/photos/20860622/pexels-photo-20860622.jpeg?auto=compress&cs=tinysrgb&w=1200',
  holistic:
    'https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=1200',
  tour_campus:
    'https://images.pexels.com/photos/16116225/pexels-photo-16116225.jpeg?auto=compress&cs=tinysrgb&w=1600',
  tour_therapy:
    'https://images.pexels.com/photos/10610733/pexels-photo-10610733.jpeg?auto=compress&cs=tinysrgb&w=1600',
  tour_villas:
    'https://images.pexels.com/photos/34811443/pexels-photo-34811443.jpeg?auto=compress&cs=tinysrgb&w=1600',
  tour_amenities:
    'https://images.pexels.com/photos/40037503/pexels-photo-40037503.jpeg?auto=compress&cs=tinysrgb&w=1600',
  tour_night:
    'https://images.pexels.com/photos/31108473/pexels-photo-31108473.jpeg?auto=compress&cs=tinysrgb&w=1600',
  package_immune:
    'https://images.pexels.com/photos/6416553/pexels-photo-6416553.jpeg?auto=compress&cs=tinysrgb&w=1000',
  package_dna:
    'https://images.pexels.com/photos/33438211/pexels-photo-33438211.jpeg?auto=compress&cs=tinysrgb&w=1000',
  package_neuro:
    'https://images.pexels.com/photos/244139/pexels-photo-244139.jpeg?auto=compress&cs=tinysrgb&w=1000',
  package_musculoskeletal:
    'https://images.pexels.com/photos/26888383/pexels-photo-26888383.jpeg?auto=compress&cs=tinysrgb&w=1000',
  package_cardiac:
    'https://images.pexels.com/photos/20099425/pexels-photo-20099425.png?auto=compress&cs=tinysrgb&w=1000',
  offer_banner:
    'https://images.pexels.com/photos/9579320/pexels-photo-9579320.jpeg?auto=compress&cs=tinysrgb&w=1600',
  method_1:
    'https://images.pexels.com/photos/27534765/pexels-photo-27534765.jpeg?auto=compress&cs=tinysrgb&w=940',
  method_2:
    'https://images.pexels.com/photos/7578806/pexels-photo-7578806.jpeg?auto=compress&cs=tinysrgb&w=940',
  method_3:
    'https://images.pexels.com/photos/6628606/pexels-photo-6628606.jpeg?auto=compress&cs=tinysrgb&w=940',
  method_4:
    'https://images.pexels.com/photos/32797056/pexels-photo-32797056.jpeg?auto=compress&cs=tinysrgb&w=940',
  team_1:
    'https://images.pexels.com/photos/14797861/pexels-photo-14797861.jpeg?auto=compress&cs=tinysrgb&w=800',
  team_2:
    'https://images.pexels.com/photos/36665076/pexels-photo-36665076.jpeg?auto=compress&cs=tinysrgb&w=800',
  team_3:
    'https://images.pexels.com/photos/27298085/pexels-photo-27298085.jpeg?auto=compress&cs=tinysrgb&w=800',
  team_4:
    'https://images.pexels.com/photos/7904406/pexels-photo-7904406.jpeg?auto=compress&cs=tinysrgb&w=800',
  team_5:
    'https://images.pexels.com/photos/5888144/pexels-photo-5888144.jpeg?auto=compress&cs=tinysrgb&w=800',
  team_6:
    'https://images.pexels.com/photos/15319037/pexels-photo-15319037.jpeg?auto=compress&cs=tinysrgb&w=800',
  blog_1:
    'https://images.pexels.com/photos/3763788/pexels-photo-3763788.jpeg?auto=compress&cs=tinysrgb&w=900',
  blog_2:
    'https://images.pexels.com/photos/32306093/pexels-photo-32306093.jpeg?auto=compress&cs=tinysrgb&w=900',
  blog_3:
    'https://images.pexels.com/photos/6962655/pexels-photo-6962655.jpeg?auto=compress&cs=tinysrgb&w=900',
  blog_4:
    'https://images.pexels.com/photos/11852051/pexels-photo-11852051.jpeg?auto=compress&cs=tinysrgb&w=900',
  blog_5:
    'https://images.pexels.com/photos/5480193/pexels-photo-5480193.jpeg?auto=compress&cs=tinysrgb&w=900',
  blog_6:
    'https://images.pexels.com/photos/5480035/pexels-photo-5480035.jpeg?auto=compress&cs=tinysrgb&w=900',
};

// Pexels stock video for hero background (nature / forest / mist)
export const heroVideoUrl =
  'https://videos.pexels.com/video-files/1409899/1409899-uhd_2560_1440_30fps.mp4';
