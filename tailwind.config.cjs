/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        yellowBg:'#F0EADA',
        greenText:'#054F48'
      },
      spacing:{
        'spacing':'12rem'
      }
    },
  },
  plugins: [],
};
