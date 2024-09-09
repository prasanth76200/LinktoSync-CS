/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mochiy': ['"Mochiy Pop P One"', 'sans-serif'],
        'roboto': ["Roboto Slab", 'serif'],
      },
    },
  },
  plugins: [],
};
