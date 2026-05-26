/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FBF5EC",
        clay: {
          50: "#FAF1E4",
          100: "#F4E2C8",
          200: "#E8C79A",
          300: "#D9A66B",
          400: "#C68446",
          500: "#A86532",
          600: "#854F26",
          700: "#633A1C",
        },
        leaf: {
          500: "#4A7C2A",
          600: "#3B6321",
        },
        spice: {
          500: "#C0392B",
          600: "#9B2C20",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(99, 58, 28, 0.18)",
      },
    },
  },
  plugins: [],
};
