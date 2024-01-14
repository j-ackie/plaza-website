/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#D77272",
        "secondary": "#45597C",
        "accent": "#FADF8E",
        "text": "#000000"
      },
      fontFamily: {
        "heading": ["Poppins", "sans-serif"],
        "regular": ['Roboto Condensed', "sans-serif"]
      },
      fontSize: {
        "regular": "28px",
        "subheading": "56px",
        "heading": "64px"
      }
    },
  },
  plugins: [],
}

