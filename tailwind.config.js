/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#96E1E9',
          accent: '#485563',
          dark: '#111827',
        },
      },
      fontFamily: {
        sora: ['Sora-Bold', 'sans-serif'],
        inter: ['Inter-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
