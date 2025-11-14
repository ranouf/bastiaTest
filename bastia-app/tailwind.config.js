/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF4400',
          dark: '#E63D00'
        }
      },
      boxShadow: {
        sm: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)'
      },
      borderRadius: {
        xl: '0.625rem'
      }
    }
  },
  plugins: []
};
