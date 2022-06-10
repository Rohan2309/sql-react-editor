module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-dark": "#000000",
        "secondary-dark": "#000000",
        "primary-light": "#E8F1F5",
        "secondary-light": "#FAFAFA",
      },
      gridTemplateColumns: {
        "layout-desktop": "18rem 1fr",
      },
      gridTemplateRows: {
        "layout-desktop": "4rem 300px 1fr 4rem",
      },
      screens: {
        xs: "424px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
