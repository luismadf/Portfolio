/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
      screens: {
        xl: '1200px',
      },
    },
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      colors: {
        primary: '#2563eb', // Added a primary color for cohesive branding
      },
    },
  },
  plugins: [],
}
