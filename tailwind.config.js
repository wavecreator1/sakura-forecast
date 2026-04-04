/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          50: '#fef2f4',
          100: '#fde6ea',
          200: '#fac1cb',
          300: '#f7a0b0',
          400: '#f06e88',
          500: '#e84468',
          600: '#d42a55',
          700: '#b01d45',
          800: '#941b40',
          900: '#7f1b3c',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Noto Serif JP"', 'serif'],
      },
    },
  },
  plugins: [],
}
