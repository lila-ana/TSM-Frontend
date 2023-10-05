/** @type {import('tailwindcss').Config} */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js,jsx,ts,tsx}",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: "#F5F5F5",
        secondary: "#F2EAD3",
        third: "#DFD7BF",
        fourth: "#3F2305",
        fifth: "#3F2305",
        sixth: "#d99000",
        seventh: "AD8317",
        white: "#ffffff"
      },

      fontFamily: {
        singleUse: ["Lobster", "cursive"],
        main: ['Varela Round', "sans-serif"],
        detail: ['Montserrat', "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        dela: ["Dela Gothic One", "cursive"],
        abril:["Abril Fatface", "cursive"]

        // Nunito: "'Nunito', sansSerif",
        // Nunito: "'Nunito Sans', sansSerif",
        // Varela:"'Varela Round', sansSerif"
      }
    },
  },
  plugins: [require('@shrutibalasa/tailwind-grid-auto-fit'),],
}

