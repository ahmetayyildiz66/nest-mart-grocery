  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        colors: {
          green: {
            750: "#3BB77E"
          },
          gray: {
            450: "#7E7E7E",
            950: "#F0E8D5"
          },
          pink: {
            75: "#F3E8E8"
          },
          orange: {
            350: "#FDC040"
          },
          blue: {
            950: "253D4E"
          }
        }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }