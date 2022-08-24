/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avenir: "Avenir Next",
        // hallie: "HallieThompsonSerif",
        kannada: "KannadaMN",
      },
      colors: {
        leaf: "#43412d",
        rose: "#d75a5c",
        paper: "#faf1ea",
        vine: "#ccc1a6",
      },
      letterSpacing: {
        widest: ".2em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
