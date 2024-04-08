/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        VeryDarkBlue: "hsl(243, 87%, 12%)",
        DesaturatedBlue: "hsl(238, 22%, 44%)",
        BrightBlue: "hsl(224, 93%, 58%)",
        ModerateCyan: "hsl(170, 45%, 43%)",
        LightGrayishBlue: "hsl(240, 75%, 98%)",
        LightGray: "hsl(0, 0%, 75%)",
      },
      fontFamily: {
        Header: ["Raleway", "sans-serif"],
        // Body: ["Open-Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
