/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Poster.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },

    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#D1D5DB',
      "detail-menu": "rgba(0, 0, 0, 0.30)",
      "play-games": "rgba(190, 18, 60, 0.70)",
      'genre': '#F8E7EB '
      
    }),

    backgroundColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#BE123C',
      'favorite': 'rgba(243, 244, 246, 0.50)',
      'danger': '#e3342f',
      'play': 'rgba(190, 18, 60, 0.20)',
      'video-play': 'rgba(255, 255, 255, 0.35)'
    }),

    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#BE123C',
      'series-font': '#111827',
      'poster-grey': '#9CA3AF',
      'white': '#FFF',
      'rating': '#111827',
      'copyright': '#6B7280',
      'genre': '#B91C1C'
    },
  },
  plugins: [],
}

