/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-20": "#39CDCC",
        "blue-50": "#213F7D",  
        "white-20": "#FFFFFF",
      }
    },
  },
  plugins: [],
}