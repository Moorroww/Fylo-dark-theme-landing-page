/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        "background-dark": "#1B2330",
        "btn-grad-from": "#63E1D9",
        "btn-grad-to": "#34A0CD",
        "highlight-cyan": "#62e0d9",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway"],
      },
      margin: {
        "7.3px": "73px",
      },
      maxWidth: {
        "web-lg": "1440px",
        "394px": "394px",
      },
      width: {
        "web-lg": "1440px",
      },
      borderRadius: {
        "28px": "28px",
      },
    },
  },
  plugins: [],
};
