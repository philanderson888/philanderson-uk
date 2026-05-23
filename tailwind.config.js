/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dd',
          300: '#d5cec3',
          400: '#b3a99a',
          500: '#998c7a',
          600: '#7c6f5d',
          700: '#665b4d',
          800: '#4d4439',
          900: '#332d26',
        },
      },
    },
  },
  plugins: [],
};