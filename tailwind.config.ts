import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          dark: '#6F4E37',
          light: '#C4A484',
          cream: '#FAF7F2',
          text: '#1A1A1A',
        },
        premium: {
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          ivory: '#F5F2ED',
          brown: '#6F4E37',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [animate],
};

export default config;
