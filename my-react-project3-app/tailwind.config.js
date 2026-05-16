/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFEFA',
          100: '#FFF8F0',
          200: '#FAF3EB',
          300: '#F5E6D3',
          400: '#E8D5C4',
          500: '#D4C4A8',
          600: '#C4B090',
          700: '#B49C78',
          800: '#A48860',
          900: '#8C7448',
        },
        gold: {
          50: '#FEF9E7',
          100: '#FDF0C4',
          200: '#F8E0A3',
          300: '#E8D5A3',
          400: '#C9A962',
          500: '#B8954F',
          600: '#A67C3D',
          700: '#8B6532',
          800: '#6B4E28',
          900: '#4A3820',
        },
        charcoal: '#2D2D2D',
      },
    },
  },
  plugins: [],
}
