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
      
    }),

    backgroundColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#BE123C',
      'favorite': 'rgba(243, 244, 246, 0.50)',
      'danger': '#e3342f',
    }),

    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#BE123C',
      'series-font': '#111827',
      'poster-grey': '#9CA3AF',
      'white': '#FFF',
      'rating': '#111827',
      'copyright': '#6B7280',
    },
  },
  plugins: [],
}

