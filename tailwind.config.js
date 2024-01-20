/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'carousel': 'rgba(231, 111, 81, 0.10)',
      }
    },
  },
  plugins: [require("daisyui")],
}

