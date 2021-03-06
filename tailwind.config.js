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
        "red-door": "url('/red-door.jpg')",
        palmtree: "url('/palmtree.png')",
        metro: "url('/metro.png')",
        berlin: "url('/berlin.jpg')",
        "everything-ok": "url('/everything-ok.jpg')",
        pool: "url('/pool.jpg')",
        pool2: "url('/pool-2.png')",
        "pool-gradient":
          "linear-gradient(to right bottom, rgba(38, 38, 39, 0.52), rgba(110, 107, 109, 0.73)), url('/pool-2.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
