const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        '15': '15vh',
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"], 
      nunito: ["Nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      bgdark: "#2f2f2f",
      bglight: "#e2e2e2",
      textdark: "#2f2f2f",
      textlight: "#e2e2e2",
      darkshadow: "#2B2B37",
      primary: "#5156B8",
      secondary: "#D478D1",
    },
  },
  plugins: [],
});