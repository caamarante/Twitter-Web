/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 13,
      sm: 14,
      md: 15, 
      lg: 16,
      xl: 19,
      '2xl': 20,
    },
    colors: {
      'black': '#0F1419',
      'dark-100': '#17202A',
      'dark-200': '#1C2733',
      'dark-300': '#283340',
      'dark-400': '#3A444C',
      'dark-500': '#5B7083',
      'dark-600': '#8899A6',
      'dark-700': '#EBEEF0',
      'dark-800': '#F7F9FA',
      'primary-blue': '#1DA1F2',
      'primary-blue-opacity': '#1DA1F280',
      'dark-blue': '#0073BF',
      'white': '#FFFFFF',
      'transparent': 'transparent',
    },
    extend: {
      fontFamily : { 
        sans: 'Poppins, sans-serif'
      },
    },
  },
  plugins: [],
}
