/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#99f6e4',
        secondary: '#0284c7'
      },
      fontFamily: {
        nunito: ['Nunito']
      }
    },
  },
  plugins: [],
}
