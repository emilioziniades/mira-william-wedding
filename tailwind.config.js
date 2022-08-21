/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helv: "HelveticaNeue",
        times: "TimesNewRomanRegular",
        sser: "SourceSerifVariable-Roman",
      },
      colors: {
        wblue: "#333366",
        mblue: "#818CA5",
        ash: "#414042",
        cream: "#F5F1EB",
      },
      letterSpacing: {
        widest: ".2em",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
