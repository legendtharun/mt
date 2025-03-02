/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        atkinson: ["Atkinson Hyperlegible Next", "sans-serif"], // Custom font
      },
      screens: {
        xs: { max: "349px" },
        xsl: { max: "445px" },
        xsxl: { max: "500px" },
        xsxxl: { max: "935px" },
        ms: { max: "978px" },
        ps: "350px",
        psl: "445px",
        psxl: "500px",
      },
    },
  },

  plugins: [],
};
