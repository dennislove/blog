/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
