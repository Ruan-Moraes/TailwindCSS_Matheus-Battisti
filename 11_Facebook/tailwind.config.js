/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "992px": "64rem",
        "656px": "45rem",
        "512px": "32rem",
        "416px": "26rem"
      },
      colors: {
        "green": "#42b72a",
        "green-hover": "#36a420",
        "blue": "#1877F2",
        "blue-hover": "#627aad",
        "input": "#f5f6f7"
      }
    },
  },
  plugins: [],
}

