/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      wblue: "#333366",
      mblue: "#818CA5",
      ash: "#414042",
      cream: "#F5F1EB",
    },
    letterSpacing: {
      widest: ".2em",
    },
    extend: {
      fontFamily: {
        helv: "HelveticaNeue",
        times: "TimesNewRomanRegular",
        sser: "SourceSerifVariable-Roman",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
