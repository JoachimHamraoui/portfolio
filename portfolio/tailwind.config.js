/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'green': '#2be95ade',
      'white': '#EBEBEB',
      'black': '#111111'
    },
    fontFamily: {
      display: ['Coolvetica', 'sans-serif'],
      mont: ['Montserret', 'sans-serif']
    },
  },
  plugins: [],
}

