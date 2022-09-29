/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        "my-color": "#5EAFAA",
        "color-2": "#141F1E",
      },
    },
  },
  plugins: [],
};
