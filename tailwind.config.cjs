/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './App.vue', './main.ts', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    boxShadow: {
      turn: "0px 0px 5px 5px #93C5FD"
    }
  },
  plugins: [],
}
