/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
      width:{
        '50': '50%',
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: [],
}
