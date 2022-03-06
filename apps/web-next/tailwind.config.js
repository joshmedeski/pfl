const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        cta: colors.yellow,
        green: colors.emerald,
        yellow: colors.amber
      }
    }
  },
  plugins: [require('postcss-100vh-fix'), require('@tailwindcss/forms')]
}
