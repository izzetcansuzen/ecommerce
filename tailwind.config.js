/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      boxShadow: {
        "8xl": "0 35px 60px -15px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
