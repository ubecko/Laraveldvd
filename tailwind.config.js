/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/resources/**/*.blade.php",
    "/resources/**/*.js",
    "/resources/**/*.vue",
  ],
  theme: {
    screens: {
      // => @media (min-width: 320px) { ... }
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },

    extend: {
      colors: {

      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
    plugins: [],
  }
}