/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      colors: {
        'Primary-Pale-Blue': 'hsl(225, 100%, 94%)',
        'Primary-Bright-Blue': 'hsl(245, 75%, 52%)',
        'Neutral-Pale-Blue': 'hsl(225, 100%, 98%)',
        'Neutral-Desaturated-Blue': 'hsl(224, 23%, 55%)',
        'Neutral-Dark-Blue':'hsl(223, 47%, 23%)'
      },
      fontFamily: {
        'Red-Hat-Display': ["Red Hat Display"]
      },
      backgroundImage: {
        'mobile': "url('/images/pattern-background-mobile.svg')",
        'desktop': "url('/images/pattern-background-desktop.svg')"

      }
    },
  },
  plugins: [],
}



