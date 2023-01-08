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
        "brand-dark-charcoal-2": "#7E8079",
        "brand-olive": "79806B",
        "brand-lilac": "#775E80",
        "brand-chocolate": "#323033",
      },
      boxShadow: {
        lilac: "0 0 3px 3px #775E80 ",
      },
    },
  },
  plugins: [],
};
