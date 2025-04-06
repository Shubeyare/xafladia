/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'xafladia-primary': '#5C3AAB', // Purple
        'xafladia-secondary': '#FF8551', // Orange
        'xafladia-accent': '#3EC1CF', // Teal
        'xafladia-light': '#F5F7FA',
        'xafladia-dark': '#2A2A3B',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
