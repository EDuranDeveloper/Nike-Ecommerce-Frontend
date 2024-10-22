/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Breakpoint para pantallas de 1920px y más grandes
        '4xl': '2560px', // Breakpoint para pantallas de 2560px y más grandes
      },
    },
  },
  plugins: [],
}
