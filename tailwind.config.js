/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '0rem', // 0px
      sm: '36rem', // 576px
      md: '48rem', // 768px
      lg: '62rem', // 992px
      xl: '75rem', // 1200px
      '2xl': '96rem', // 1400px
    },
    fontSize: {
      '2xs': '0.5rem', // 8px
      xs: '0.625rem', // 10px
      sm: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.5rem', // 24px
      xl: '1.75rem', // 28px
      '2xl': '3rem', // 48px
      '3xl': '3.875rem', // 62px
      '4xl': '5.125rem', // 82px
    },
    extend: {},
  },
  plugins: [],
}
