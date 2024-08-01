/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       
        'headerFont': ['Eczar', 'serif'],
        'bodyFont': ['DM Sans', 'sans-serif']
      },
      colors: {
        'backgroundColor': '#fffbf4',
        'fontColor': '#70685b',
        'btnColor': '#141414',
        'red': '#fc312f'
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.underline-before': {
          position: 'relative',
        },
        '.underline-before::before':{
          content: '""',
          position: 'absolute',
          bottom: 0, // Adjust the position as needed
          width: '100%',
          height: '1px',
          backgroundColor: '#70685b', // Customize the color as needed
      
        },
        '.dash-before':{
          position: 'relative',
          paddingLeft: '120px',
        },
        '.dash-before::before':{
          content: '""',
          height: '1px',
          width: '112px',
          background: '#70685b',
          display: 'inline-block',
          position: 'absolute',
          left: '0px',
          top: '10px',
        },
        '.text-stroke' : {
          '-webkit-text-stroke': '1px #70685b', /* Apply the stroke color and width */
          color: '#FFF', /* Ensure the text color is visible */
        },
        '.text': {
          margin: 'auto 0',
        },

        '.grid-cols-auto-fill' : {
          'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
        }


       
       
      }, ['responsive', 'hover']);
    },
    
  ],
}

