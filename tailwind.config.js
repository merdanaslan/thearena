/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-purple': {
          DEFAULT: '#9370DB',
          dark: '#483D8B',
          light: '#B19CD9'
        },
        'cyber-blue': {
          DEFAULT: '#4169E1',
          dark: '#191970',
          light: '#6495ED'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(147,112,219,0.2), 0 0 10px rgba(147,112,219,0.1)' },
          '100%': { boxShadow: '0 0 10px rgba(147,112,219,0.4), 0 0 20px rgba(147,112,219,0.2)' }
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(to bottom right, rgba(147,112,219,0.2), rgba(0,0,0,1))',
        'cyber-glow': 'radial-gradient(circle at center, rgba(147,112,219,0.2) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
} 