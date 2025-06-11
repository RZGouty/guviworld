/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0b0c10',
        'cyber-gray': '#1f2833',
        'cyber-light': '#c5c6c7',
        'cyber-medium': '#a9b1b9',
        'cyber-teal': '#45a29e',
        'cyber-cyan': '#66fcf1',
        'cyber-card': '#1c262b',
        'cyber-subscribe': '#162022',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #45a29e77' },
          '100%': { boxShadow: '0 0 30px #66fcf1cc, 0 0 40px #45a29e55' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #0b0c10 0%, #1f2833 50%, #45a29e 100%)',
      },
    },
  },
  plugins: [],
};