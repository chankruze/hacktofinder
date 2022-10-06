/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#222831",
          secondary: "#393E46",
          accent: "#FFD369",
          light: "#EEEEEE",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

// dark: https://colorhunt.co/palette/222831393e46ffd369eeeeee
