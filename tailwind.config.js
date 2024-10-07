// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        customColorofHeader: '#403d39'
      },
      width:{
        width: '539px',
        contentWidth: '962px',
        mywidth: '100vw'
      },
      height:{
        height: '450px'
      },
      margin:{
        mymargin: '0 calc(-50vw +)'
      }
    },
  },
  plugins: [],
};