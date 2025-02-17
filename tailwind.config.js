/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23c092",
      },
    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
};
