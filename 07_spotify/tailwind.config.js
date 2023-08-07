/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "black": "#000", 
      "white": "#fff",

      // #1ED760(Verde)
      "color01": "#1ED760",

      // #1D75DE(Azul)
      "color02": "#1D75DE",

      // #1F0D09(Preto-cinza)
      "color03": "#1F0D09",
      
      // EFEFEF(Cinza)
      "color04": "#EFEFEF"
    },
    extend: {
      spacing: {
        "10px": ".625rem",
        "14px": ".875rem",
        "912px": "54rem"
      },
      maxWidth: {
        "400px": "25rem",
      },
      fontSize: {
        "40": "2.5rem",
        "26": "1.625rem",
        "20": "1.25rem",
        "15": ".9375rem",
        "11": ".6875rem",
        "9": ".5625rem",
      },
    }
  },
  plugins: [],
}
