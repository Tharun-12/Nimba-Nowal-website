/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1F3D2B',
        'forest-2': '#163024',
        'forest-3': '#0f2018',
        sage: '#8FA68A',
        'sage-2': '#6f8a6a',
        'sage-light': '#b8c8b4',
        cream: '#F7F3EA',
        'cream-2': '#efe8d8',
        terracotta: '#C06A3E',
        'terracotta-2': '#a85a30',
        charcoal: '#1E1E1E',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slow-pan': 'slowPan 24s ease-in-out infinite alternate',
        'ken-burns': 'kenBurns 20s ease-out forwards',
        'drift-leaf': 'driftLeaf 18s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowPan: {
          '0%': { transform: 'scale(1.08) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.15) translate3d(-2%, -1%, 0)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate3d(0,0,0)' },
          '100%': { transform: 'scale(1.12) translate3d(-1.5%, -1%, 0)' },
        },
        driftLeaf: {
          '0%': { transform: 'translate3d(0,0,0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.55' },
          '90%': { opacity: '0.35' },
          '100%': { transform: 'translate3d(60px, 80vh, 0) rotate(220deg)', opacity: '0' },
        },
        pulseSoft: {
          '0%,100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.03)', opacity: '0.92' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
