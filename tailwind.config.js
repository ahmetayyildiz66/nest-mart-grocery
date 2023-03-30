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
            450: "#7E7E7E"
          }
        }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }