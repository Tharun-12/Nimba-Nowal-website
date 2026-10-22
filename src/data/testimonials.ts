export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  city: string;
}

const names = [
  'Anita Sharma', 'Rajesh Khanna', 'Sunitha Menon', 'Vikram Patel', 'Lakshmi Reddy',
  'Arvind Thakur', 'Deepa Nair', 'Karthik Varma', 'Priya Gupta', 'Suresh Iyer',
  'Meera Joshi', 'Naveen Rao', 'Anjali Desai', 'Sridhar Krishnan', 'Pooja Bhatt',
  'Manish Agarwal', 'Geetha Pillai', 'Rahul Saxena', 'Vidya Murthy', 'Sanjay Kulkarni',
  'Revathi Iyengar', 'Aditya Ghosh', 'Kavita Ramaswamy', 'Vinod Shetty', 'Shalini Verma',
  'Gautam Bhat', 'Nisha Chopra',
];

const roles = [
  'Software Architect', 'Retired Teacher', 'Homemaker', 'Marketing Lead', 'Small Business Owner',
  'Bank Manager', 'Yoga Instructor', 'Engineer', 'Designer', 'Doctor',
  'Journalist', 'Chartered Accountant', 'Photographer', 'Chef', 'HR Consultant',
  'Professor', 'Travel Blogger', 'Architect', 'Pharmacist', 'Entrepreneur',
  'Dentist', 'Pilot', 'Consultant', 'Retail Owner', 'Researcher',
  'Veterinarian', 'Artist',
];

const cities = [
  'Bengaluru', 'Mumbai', 'Chennai', 'Pune', 'Hyderabad', 'Delhi', 'Kochi',
  'Ahmedabad', 'Jaipur', 'Kolkata', 'Surat', 'Lucknow', 'Chandigarh',
  'Indore', 'Bhopal', 'Nagpur', 'Visakhapatnam', 'Patna', 'Vadodara',
  'Ghaziabad', 'Coimbatore', 'Nashik', 'Mysuru', 'Faridabad', 'Rajkot',
  'Varanasi', 'Madurai',
];

const quoteTemplates = [
  'My sleep came back within a week. I did not expect healing to feel this gentle.',
  'I arrived with chronic back pain and left walking pain-free for the first time in years.',
  'The team read my body like a book. Every therapy felt chosen for me alone.',
  'My stress dropped so much that my family noticed before I did.',
  'I lost eight kilos in three weeks, eating the most delicious food of my life.',
  'The Shirodhara sessions quieted a mind that had been loud for a decade.',
  'My sugar levels stabilised and my doctor reduced my medication by half.',
  'I came for rest and found a whole new way to live. I cannot recommend it enough.',
  'The morning walks by the lake alone were worth the journey.',
  'My migraines, which I had for fifteen years, simply stopped after ten days.',
  'The doctors walked with me through every step. I never felt like a number.',
  'My digestion, which had troubled me for years, sorted itself out in days.',
  'The food was so nourishing I have brought the recipes home and cook them daily.',
  'I felt held the entire time. This is what healing should feel like.',
  'My blood pressure is the best it has been in twenty years.',
  'The yoga at sunrise on the deck above the lake is something I will never forget.',
  'My anxiety reduced so much I could finally sleep without medication.',
  'I came skeptical and left a believer. Nature really does heal best.',
  'The physiotherapy team rebuilt my knee after years of pain. I walk freely now.',
  'My skin cleared, my energy returned, and I feel twenty years younger.',
  'The meditation caves gave me a stillness I did not know was possible.',
  'My hormones balanced and my PCOS symptoms eased more than any medicine managed.',
  'The follow-up calls after I went home kept me on track. They genuinely care.',
  'I have been to many retreats. Sattva is the only one that felt truly personal.',
  'My joint pain reduced so much I started gardening again, something I had given up.',
  'The ayurvedic oils and massages melted years of tension from my body.',
  'My breathing, my sleep, my mood — everything shifted. I am deeply grateful.',
];

export const testimonials: Testimonial[] = names.map((name, i) => ({
  quote: quoteTemplates[i % quoteTemplates.length],
  name,
  role: roles[i % roles.length],
  city: cities[i % cities.length],
}));

export const testimonialAvatars = [
  'AS', 'RK', 'SM', 'VP', 'LR', 'AT', 'DN', 'KV', 'PG', 'SI',
  'MJ', 'NR', 'AD', 'SK', 'PB', 'MA', 'GP', 'RS', 'VM', 'SK',
  'RI', 'AG', 'KR', 'VS', 'SV', 'GB', 'NC',
];
