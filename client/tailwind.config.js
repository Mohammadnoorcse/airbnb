/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true, // Centers the container by default
      padding: '1rem', // Adds padding on all sides
      screens: {
        sm: "100%", // Full width on small screens
        md: "1200px", // Custom max-width for medium screens
        lg: "1400px", // Custom max-width for large screens
        xl: "1700px" // Custom max-width for extra-large screens
      }
    },
  },
  plugins: [],
}