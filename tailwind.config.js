/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '206px',
      // => @media (min-width: 576px) { ... }

      md: '760px',
      // => @media (min-width: 960px) { ... }
      base: '1200px',
      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
      xl: '1920px'
    },
    extend: {
      colors: {
        'light-primary': '#A7E6FF'
      },
      spacing: {
        'clamp-left': 'clamp(10%, 3vw, 20%)',
        'clamp-top': 'clamp(-40%, -31vh, 54%)'
      }
    }
  },
  plugins: []
};
