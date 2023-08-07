// Importa o TailwindCSSForms
const plugin = require('tailwindcss/plugin')

// Todas as cores que o TailwindCSS oferece já estão todas no BUILD inicial. Ou seja, não é necessário adicionar as cores já existentes.
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // O tailwind por pardão já está em DarkMode "media".
  // "media" = Preferência do sistema
  // "class" = Controle do usuário (manual) - Necessário javaScript
  darkMode: "class",
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        rose: colors.rose
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

