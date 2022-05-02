module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        sky: {
          DEFAULT: "#0EA5E9",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      zIndex: {
        "-10": "-10",
      },
      backgroundImage: {
        "red-door": "url('/src/assets/red-door.jpg')",
        palmtree: "url('/src/assets/palmtree.png')",
        metro: "url('/src/assets/metro.png')",
        berlin: "url('/src/assets/berlin.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
