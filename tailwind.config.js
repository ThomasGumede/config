module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        heroImage:
          "linear-gradient(0deg, rgba(218, 100, 0, 0.54), rgba(218, 100, 0, 0.54)), url('./img/mall.jpg')",
        homeImage:
          "linear-gradient(0deg, rgba(218, 100, 0, 0.54), rgba(218, 100, 0, 0.54)), url('./img/d1.jpg')",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      sans2: ["Playfair Display", "serif", "Poppins", "sans-serif"],
    },
    screens: {
      xsm: "520px",

      sm: "768px",
      // => @media (min-width: 640px) { ... }

      md: "1024px",
      // => @media (min-width: 768px) { ... }

      lg: "1204px",
      // => @media (min-width: 1204px) { ... }

      xl: "1480px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1636px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};