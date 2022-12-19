/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#00B2EE",
        green: "#71C72F",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
