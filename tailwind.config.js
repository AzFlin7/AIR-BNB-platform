/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      'xs': '540px',
      // => @media (min-width: 540px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'mobile': '750px',
      // => @media (min-width: 744px) { ... }

      'md': '850px',
      // => @media (min-width: 800px) { ... }
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg2': '1200px',
      // => @media (min-width: 1200px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1654px',
      // => @media (min-width: 1654px) { ... }

      '4xl': '1954px',
      // => @media (min-width: 1954px) { ... }
    },
    extend: {
      width: {
        '100':"30rem",
        '110':"40rem",
      },
      keyframes: {
        ping2: {
          '0%, 100% ':{
            transform: 'scale(1.2)',
            opacity:.9
          },
        },
        
        Jump:{
          '0%, 100%' :{
            transform: 'translateY(10px)',
      
          },
          '50%' :{
            transform: 'translateY(8px)',
      
          },

        },
        customFade:{
          '0%, 100%' :{
            opacity: 1
          },
          '50%' :{
            opacity: .4
          },

        },
        pulse2:{
          '0%, 100%' :{
            transform: 'scale(1)',
            opacity: 1
          },
          '50%' :{
            transform: 'scale(1.2)',
            opacity: .5
          },

        },
        bounce2:{
          '0%' :{
            transform: 'translateY(0px)',
            boxShadow: '15px 35px 60px -15px rgba(0,0,0,.6)',
          },
          '50%' :{
            transform: 'translateY(20px)',
            boxShadow: '15px 35px 60px -15px rgba(0,0,0,.3)',
          },
          '100%' :{
            transform: 'translateY(0px)',
            boxShadow: '15px 35px 60px -15px rgba(0,0,0,.6)',
          },
        }
      },
      animation: {
      'spin-slow': 'spin 15s linear infinite',
      'ping-nofade': 'customFade 2.2s linear infinite',
      'pulseLong':'pulse2 5s ease-in-out infinite',
      'pulseC':'pulse2 5s ease-in infinite',
      'Hover':'bounce2 6s ease-in-out infinite',
      'Jump':'Jump 2s ease-in-out infinite'
    },
    },
  },
  plugins: [
            require('tailwind-scrollbar')({ nocompatible: true }),
           ],
}
