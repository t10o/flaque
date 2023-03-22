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
        up: "4px 4px 4px rgba(0,0,0,.1), inset 4px 4px 8px hsla(0,0%,100%,.6), inset -4px -4px 8px rgba(0,0,0,.05)",
      },
      colors: {
        main: "#eeeef1",
        primary: "#1e90ff",
      },
    },
  },
};
