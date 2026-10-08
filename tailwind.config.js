/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          dark: '#0A0A0C',
          surface: '#121216',
          elevated: '#18181E',
          border: 'rgba(255, 255, 255, 0.08)',
          crimson: '#D92338',
          red: '#E5383B',
          amber: '#F59E0B',
          muted: '#8A8A93'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      transitionTimingFunction: {
        'fluid': 'cubic-bezier(0.32, 0.72, 0, 1)',
      }
    },
  },
  plugins: [],
}
