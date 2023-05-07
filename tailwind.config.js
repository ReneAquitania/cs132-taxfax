/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'md': '840px',
    },
    extend: {
      colors: {
        taxfaxblue: {
          200: '#25c4e8',
          300: '#01afdb',
        },
        taxfaxred: {
          300: '#c52127',
        },
      },
    },
  },
  plugins: [],
}
