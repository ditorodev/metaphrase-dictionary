const theme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    './pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'
  ],
  presets: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...theme,
    colors:{
      ...colors,
      linkaccent: colors.blue[300],
      maintext: colors.gray[200],
      secondarytext: colors.gray[400],
    },
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      serif: ['DM Serif Text', 'serif'],
    }
  },
  variants: {
    textColor: ['hover'],
    textDecoration: ['hover'],
  },
  plugins: [],
}
