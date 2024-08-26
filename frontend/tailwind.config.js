/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
      colors:{
        'primary': 'rgba(60,114,252,0.1)',
        'primary1':'#f8f9fa',
        'primary2':'#e9ecef',
        'primary3':'#ced4da',
        'primary4':'#0d6efd',
        'mydark':'#343a40',
        'yellow':'#ffc107',
        'lien':'#0d6efd'

      }
    },
    
  },
  plugins: [],
}