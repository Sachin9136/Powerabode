/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-peach": "#fff7ed",
        "background-color":"#06B13D"
      },
    },
  },
  plugins: [],
};
