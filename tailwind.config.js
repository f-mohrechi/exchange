/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        main: "box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      },

      colors: {
        primary: {
          400: "#070F2B",
          300: "#343A59",
          200: "#64698B",
          100: "#1B1A55",
        },

        secondary: {
          100: "#F3F3F3",
          200: "#a0a0a0",
          300: "#6D6D6D",
        },
      },
    },
  },
  plugins: [],
};
