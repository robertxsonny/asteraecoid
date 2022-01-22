const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#def7f0',
          100: '#bdf0e0',
          200: '#7ae1c1',
          300: '#38d2a3',
          400: '#229673',
          500: '#135440',
          600: '#0f4333',
          700: '#0b3226',
          800: '#08221a',
          900: '#04110d',
        },
        orange: {
          50: '#ffdec6',
          100: '#ffd6b8',
          200: '#ffbd8c',
          300: '#ff8a34',
          400: '#ff7108',
          500: '#dc5d00',
          600: '#b04a00',
          700: '#843800',
          800: '#582500',
          900: '#2c1300',
        },
        yellow: {
          50: '#f7ecd5',
          100: '#f5e7ca',
          200: '#eed6a4',
          300: '#e7c57f',
          400: '#d9a334',
          500: '#bc8a23',
          600: '#966f1c',
          700: '#715315',
          800: '#4b370e',
          900: '#261c07',
        }
      },
      fontFamily: {
        serif: ['"IBM Plex Serif"', ...defaultTheme.fontFamily.serif],
        heading: ['Arvo', ...defaultTheme.fontFamily.serif]
      },
    },
  },
  plugins: [],
}
