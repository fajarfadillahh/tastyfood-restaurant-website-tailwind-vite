module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1024px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: "#069c54",
      black: "#393939",
      grey: "#707070",
      body: "#fbfefd",
      white: "#fff",
    },
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      title: "130%",
      text: "190%",
    },
  },
  plugins: [],
};
