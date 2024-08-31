/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'main-background': '#0e0d12',
      purple: '#6b2ee3',
      text: {
        primary: '#ffffff',
        secondary: '#6b2ee3',
        tertiary: '#949199',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      secondary: ['Bebas Neue', 'sans-serif'],
    },

    extend: {
      boxShadow: {
        '5xl': '0px 0px 340px 0px rgba(107,46,227,0.70)',
      },
      rotate: {
        20: '20deg',
      },
      fontSize: {
        xxl: '11rem',
        '10xl': '13rem',
      },
    },
  },
  plugins: [],
};
