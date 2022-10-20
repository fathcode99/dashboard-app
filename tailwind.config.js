/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#010038',
        secondary: '#5b21b6',
        third:'#dbeafe',
        fourth:'#fafafa'
      },
      fontFamily: {
        nunito: ['Nunito']
      }
    },
  },
  plugins: [],
}
