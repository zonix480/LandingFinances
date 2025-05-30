/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
       montserrat: ["Montserrat Alternates", "sans-serif"],
      },
      colors: {
        fintechGreen: '#22C55E',
        fintechBlue: '#3B82F6',
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}