/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // black: "#2D283E",
      // silver: "#D1D7E0",
      // dessert: "#802BB1",
      // lightBlue: "#564F6F",
      // glass: "#6b6e70",
      // errorRed: "#B11226",
      // transparent: "transparent",

      black: "#222629",
      silver: "#D1D7E0",
      dessert: "#86C232",
      lightBlue: "#61892F",
      glass: "#6b6e70a2",
      errorRed: "#B11226",
      transparent: "transparent",
    },
    fontFamily: {
      merriweather: '"Merriweather", serif',
      garamond: '"EB Garamond", serif',
    },
    extend: {
      boxShadow: {
        top: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        bottom: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      width: {
        25: "100px",
      },
      height: {
        25: "100px",
      },
      screens: {
        xs: { max: "640px" },
      },
    },
  },
  plugins: [],
};
