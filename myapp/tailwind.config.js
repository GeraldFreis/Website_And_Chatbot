/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',      // bright modern blue
        secondary: '#60A5FA',    // lighter blue
        accent: '#93C5FD',       // very light blue
        gradientStart: '#E0F2FE', // very light cyan/blue
        gradientEnd: '#3B82F6',   // deep blue
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        jiggle: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(2deg) scale(1.05)' },
          '50%': { transform: 'rotate(-2deg) scale(1.05)' },
          '75%': { transform: 'rotate(1deg) scale(1.05)' },
          // '95%': { transform: 'rotate(1deg) scale(1.05)' },
        },
      },
      animation: {
        jiggle: 'jiggle 0.6s',
      },
    },
  },
  plugins: [],
}

