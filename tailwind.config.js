// prettier-ignore

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"]
        
      },
      colors:{
        primary : "#000",
        secondary : "rgb(24,24,27)",
        borderPrimary : "rgba(63, 63, 70, 0.4)"
      }
    },
  },
  plugins: [],
};
