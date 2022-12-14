const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   darkMode: "class",
   theme: {
      extend: {
         maxHeight: {
            25: "25vh",
            33: "33vh",
         },
         height: {
            5: "5vh",
            10: "10vh",
            11: "11vh",
            12: "12vh",
            13: "13vh",
            14: "14vh",
            15: "15vh",
            33: "33vh",
            95: "95%",
            105: "105%",
         },
         width: {
            5: "5vw",
            10: "10vw",
            11: "11vw",
            12: "12vw",
            13: "13vw",
            14: "14vw",
            15: "15vw",
            33: "33vw",
            95: "95%",
            105: "105%",
         },
      },
      fontFamily: {
         sans: ["Open Sans", "sans-serif"],
         montserrat: ["Montserrat", "sans-serif"],
         nunito: ["Nunito", "sans-serif"],
         poppins: ["Poppins", "sans-serif"],
      },
      colors: {
         bgportfolio: "#D0D0D0",
         bgdark: "#2f2f2f",
         bglight: "#e2e2e2",
         textdark: "#2f2f2f",
         textlight: "#e2e2e2",
         darkshadow: "#2B2B37",
         primary: "#5156B8",
         secondary: "#D478D1",
         input: "#D9D9D9",
      },
   },
   plugins: [require("@tailwindcss/forms")],
});
