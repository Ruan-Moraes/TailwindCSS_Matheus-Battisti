/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        "arial": "monospace, arial, sans"
      },
      fontSize: {
        "12xl": "8rem"
      },
    },
  },
  plugins: [],
}

