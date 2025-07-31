/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cultura: {
          // Primary brand colors
          primary: {
            50: '#e0f7fa',
            100: '#b2ebf2',
            200: '#80deea',
            300: '#4dd0e1',
            400: '#26c6da',
            500: '#00bcd4',
            600: '#00acc1',
            700: '#0097a7',
            800: '#00838f',
            900: '#006064',
          },
          // Secondary accent colors
          accent: {
            50: '#e8f5e9',
            100: '#c8e6c9',
            200: '#a5d6a7',
            300: '#81c784',
            400: '#66bb6a',
            500: '#4caf50',
            600: '#43a047',
            700: '#388e3c',
            800: '#2e7d32',
            900: '#1b5e20',
          },
          // Cultural gradient colors
          gradient: {
            from: '#2196F3', // Blue 500
            via: '#03A9F4',  // Light Blue 500
            to: '#00BCD4',   // Cyan 500
          },
          // Neutral colors with cultural warmth
          neutral: {
            50: '#fdfdfd',
            100: '#f8f8f8',
            200: '#f0f0f0',
            300: '#e8e8e8',
            400: '#d0d0d0',
            500: '#b8b8b8',
            600: '#a0a0a0',
            700: '#888888',
            800: '#707070',
            900: '#585858',
          }
        }
      },
      fontFamily: {
        'cultura': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(157, 92, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(157, 92, 255, 0.6)' },
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'cultura': '0 25px 50px -12px rgba(0, 188, 212, 0.25)',
        'cultura-lg': '0 35px 60px -12px rgba(0, 188, 212, 0.35)',
      }
    },
  },
  plugins: [],
};
