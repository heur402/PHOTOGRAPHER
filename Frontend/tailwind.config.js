/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF0000', // The bright red
          light: '#FFF0F0',   // The soft red for sidebar active states
        }
      }
    },
  },
  plugins: [],
}