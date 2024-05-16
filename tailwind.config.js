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
        borderPrimary : "rgba(63, 63, 70, 0.4)",
        title: "rgb(244,244,245)",
        subtitle : "rgba(161,161,170)",
        header : 'rgb(39,39,42)',
        specialBlue: "rgb(93,188,252)",
        specialCyan: "rgb(93,188,252)",
        iconHover: "#d4d4d8"
      },
      keyframes: {
        popup: {
          '0%': { scale: '0' },
          '50%': { scale: '1.2' },
          '100%': {scale: "1"}
        }
      },
      animation: {
        popup: 'popup 0.78s 1',
      },
      fontSize:{
        h1Title: ["2.85rem","3.3rem"]
        
      }
    },
  },
  plugins: [],
};
