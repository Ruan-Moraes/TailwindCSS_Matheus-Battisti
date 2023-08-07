/** @type {import('tailwindcss').Config} */

const { colors } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/index.html"],
  theme: {
    screens: {
      "tablet": "60rem", 
      "cel": {max: "25rem"}
    },
    extend: {
      colors: {
        "new-blue": "#243c5a",
        "red-alterado": "#1f4578",
        "blue-alterado": "#474592",
        gray: {
          ...colors.gray,
          "900": "#999"
        }
      },
      spacing: {
        "50": "20rem"
      }
    },
  },
  plugins: [],
}

