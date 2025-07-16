/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'purple-primary': '#5D3FD3',
        'blue-accent': '#00BFFF',
        'text-light': '#C0C0C0',
        'background': '#000000',
        'background-dark': '#0d0d0d',
        'background-light': '#111111',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.3s ease-out',
        'slideInBottom': 'slideInBottom 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInBottom: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text-light'),
            h1: {
              color: theme('colors.purple-primary'),
              fontWeight: '800',
            },
            h2: {
              color: theme('colors.purple-primary'),
              fontWeight: '700',
            },
            h3: {
              color: theme('colors.purple-primary'),
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}