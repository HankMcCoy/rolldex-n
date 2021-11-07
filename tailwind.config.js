const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./pages/**/*.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
