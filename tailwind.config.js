/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
  theme: {
    extend: {
      boxShadow: {
        down: "1px 1px 2px hsl(0deg 0% 100% / 69%), -1px -1px 2px rgb(0 0 0 / 10%), inset -2px -2px 3px hsl(0deg 0% 100% / 69%), inset 2px 2px 6px rgb(0 0 0 / 12%)",
      },
      colors: {
        "text-base": "#333333",
      },
    },
  },
};
