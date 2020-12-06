module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        auto: 'auto'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
