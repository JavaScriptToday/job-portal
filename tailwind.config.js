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
        // === Main Color Palette STARTS ===
        "brand-dark-charcoal-1": "#323330",
        "brand-dark-charcoal-2": "#7E8079",
        // Colorful:
        "brand-olive": "#79806B",
        "brand-lilac": "#775E80",
        "brand-chocolate": "#323033",
        "brand-green-1": "#137333",
        // === Main Color Palette ENDS ===
        // === Alternative Colors START ==
        "brand-gray-alt-1": "#f8f9fa",
        "brand-gray-alt-2": "#80868b",
        "brand-black": "#000000",
        "brand-red": "#d93025",
        // === Alternative Colors END ===
      },
      boxShadow: {
        lilac: "0 0 3px 3px #775E80 ",
        green: "0 0 3px 3px #137333",
        red: "0 0 3px 3px #d93025",
      },
    },
  },
  plugins: [],
};
