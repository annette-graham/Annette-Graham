module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    textColor: theme => ({
      ...theme("colors"),
      primary: "#645F6B",
      primaryDark: "#282c34",
      primaryLight: "#b1afb5",
    }),
    screens: {
      "xs": "480px",
      "sm": "576",
      "md": "768",
      "lg": "992",
      "xl": "1200",
      "xxl": "1460"
    }
  },
  variants: {},
  plugins: [],
}