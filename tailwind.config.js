/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"], // file types tailwind should look for
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      // Adding brand colors to the theme:
      colors: {
        "brand-dark-charcoal-1": "#323330",
        "brand-yellow-js": "#F0DB4F",
      },
    },
  },
  plugins: [],
};
