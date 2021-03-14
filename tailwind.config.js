module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        fit: 'fit-content',
      },
      maxWidth: {
        '2xs': '14rem',
        '3xs': '10rem',
        '4xs': '6rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
