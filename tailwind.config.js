module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: { white: { A700: "#ffffff", A700_51: "#ffffff51" }, gray: { 900: "#2a2a2a" }, black: { 900: "#000000" } },
      boxShadow: { xs: "0px 4px 61px 0px #000000" },
      fontFamily: { raleway: "Raleway", inter: "Inter", ramabhadra: "Ramabhadra" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
