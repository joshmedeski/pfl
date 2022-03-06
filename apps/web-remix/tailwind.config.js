const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.blue
        },
        cta: {
          ...colors.orange
        },
        gray: {
          ...colors.stone
        }
      }
    }
  },
  variants: {},
  plugins: []
}
