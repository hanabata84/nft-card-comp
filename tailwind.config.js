/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'outer2xl': '0px 15px 10px 50px rgba(0, 0, 0, 0.06), 0px 20px 10px 20px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
