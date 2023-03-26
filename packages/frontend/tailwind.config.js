/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-in': 'slide-in 7s linear alternate forwards',
      },
      fontFamily: {
        dmsans: 'DM Sans, sans-serif',
      },

      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },

          ' 1%': {
            transform: 'translateY(0%)',
            opacity: 1,
          },

          '99%': {
            transform: 'translateY(0%)',
            opacity: 1,
          },

          '100%': {
            opacity: '0',
            transform: 'translateY(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
