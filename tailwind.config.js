/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ... other plugins ...
    function ({ addComponents }) {
      addComponents({
        '@keyframes slideInFromBottom': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        '.slide-in-bottom': {
          animation: 'slideInFromBottom 0.5s ease-out forwards',
        },
      });
    },
  ],
}

