/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const theme = {
  screens: {
    xs: '0rem', // 0px
    sm: '36rem', // 576px
    md: '48rem', // 768px
    lg: '62rem', // 992px
    xl: '75rem', // 1200px
    '2xl': '87.5rem', // 1400px
  },
  fontSize: {
    28: '1.75rem',
    24: '1.5rem',
    18: '1.125rem',
    16: '1rem',
    14: '0.875rem',
    12: '0.75rem',
    10: '0.625rem',
  },
  extend: {},
}
export const plugins = []
