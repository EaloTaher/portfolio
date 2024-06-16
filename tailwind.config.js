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
        
        primary : "var(--primary)",
        secondary : "rgb(var(--secondary))",
        borderPrimary : "rgba(var(--secondary))",
        title: "rgba(var(--title))",
        subtitle : "rgba(var(--subtitle))",
        header : 'rgb(var(--header))',
        specialBlue: "rgb(var(--specialBlue))",
        specialCyan: "rgb(var(--specialCyan))",
        iconHover: "var(--iconHover)",
        cardBorder: "rgb(var(--cardBorder))",
        cardBorderColor: "rgba(var(--cardBorderColor))",
        inputText: "var(--inputText)",
        projectCardBg: "rgba(var(--projectCardBg))",
        hrBorderColor: "rgba(var(--hrBorderColor))",
        buttonBg : "rgba(var(--buttonBg))",
        buttonText : "var(--buttonText)"
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
