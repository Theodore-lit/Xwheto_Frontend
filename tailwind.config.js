/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "hsl(var(--color-brand-primary) / <alpha-value>)", // #96E1E9
          accent: "hsl(var(--color-brand-accent) / <alpha-value>)",   // #AB5563
          dark: "hsl(var(--color-brand-dark) / <alpha-value>)",     // #111827
        },
        glass: {
          bg: "rgba(17, 24, 39, 0.60)",
          border: "rgba(150, 225, 233, 0.2)",
          glow: "rgba(150, 225, 233, 0.15)",
        },
        liquid: {
          bg: "rgba(255, 255, 255, 0.80)",
          border: "rgba(255, 255, 255, 0.9)",
        },
        app: {
          bg: "hsl(var(--color-bg-app) / <alpha-value>)",
          card: "hsl(var(--color-bg-card) / <alpha-value>)",
        },
        content: {
          main: "hsl(var(--color-text-main) / <alpha-value>)",
          muted: "hsl(var(--color-text-muted) / <alpha-value>)",
        },
      },
      boxShadow: {
        'glass-glow': '0 0 20px rgba(150, 225, 233, 0.35)',
        'liquid-soft': '-6px -6px 14px rgba(255, 255, 255, 0.9), 8px 12px 20px rgba(150, 225, 233, 0.25)',
      },
      fontFamily: {
        sora: ["Sora-Regular", "sans-serif"],
        "sora-medium": ["Sora-Medium", "sans-serif"],
        "sora-semibold": ["Sora-SemiBold", "sans-serif"],
        "sora-bold": ["Sora-Bold", "sans-serif"],

        inter: ["Inter-Regular", "sans-serif"],
        "inter-bold": ["Inter-Bold", "sans-serif"],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      }
    },
  },
  plugins: [],
};