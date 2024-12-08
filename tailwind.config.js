/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      },
      screens: {
        xs: '320px',
        s: '425px',
        x: '1280px',
        xxl: '1440px',
      },
    },
  },
  plugins: [],
};
