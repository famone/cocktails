/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
      colors: {
        primary: '#008027',
      },
      fontSize: {
        '7xl': '42px',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1024px',
      lg: '1024px',
      xl: '1024px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
