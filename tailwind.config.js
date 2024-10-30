/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBG: '#121212', // Main background color for dark mode
        cardBG: '#1E1E1E',  // Secondary background color
        primaryText: '#E0E0E0',       // Main text color in dark mode
        secondaryText: '#B3B3B3', // Secondary text color
        cta: '#BB86FC',     // Accent color for buttons, links, etc.
        btnBackground: '#03DAC5', // Button background
        borderColor: '#333333', // Border color for elements
        error: '#CF6679',       // Error color for notifications, alerts
        link: '#82b1ff',        // Color for links in dark mode
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);"
      },
      spacing: {
        cont: "1rem"
      }
    },
  },
  plugins: [],
}