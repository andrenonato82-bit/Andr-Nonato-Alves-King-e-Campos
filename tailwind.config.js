/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        'historic-paper': '#f5f5f0',
        'historic-ink': '#2c3e50',
        'sepia-dark': '#5e503f',
        'sepia-light': '#e6dec8',
      }
    },
  },
  plugins: [],
}