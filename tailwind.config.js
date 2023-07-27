/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        custom: "100% ",
      },
      backgroundImage: {
        light: "url('/src/assets/bg-desktop-light.jpg')",
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      letterSpacing: {
        custom: "15px",
      },
      fontSize: {
        title: "40px",
      },
      width: {
        custom: "540px",
      },
      boxShadow: {
        custom: "0px 35px 50px -15px rgba(194, 195, 214, 0.50)",
        customdark: "0px 35px 50px -15px rgba(0, 0, 0, 0.50)",
      },
      minHeight: {
        imageCustom: "300px",
      },
      backgroundColor: {
        customdark: "#25273D",
      },
      borderColor: {
        customdark: "#25273D",
      },
    },
  },
  plugins: [],
};
