/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: {'min': '1px', 'max': '480px'},
    },
    extend: {},
  },
  plugins: [],
}
