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
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),

    backgroundColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      'primary': '#BE123C',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#BE123C',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    },
  },
  plugins: [],
}

