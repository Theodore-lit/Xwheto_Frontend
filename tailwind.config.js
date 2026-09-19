/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'hsl(var(--color-brand-primary) / <alpha-value>)',
          accent: 'hsl(var(--color-brand-accent) / <alpha-value>)',
          dark: 'hsl(var(--color-brand-dark) / <alpha-value>)',
          deep: 'hsl(var(--color-brand-deep) / <alpha-value>)',
          tint: 'hsl(var(--color-brand-tint) / <alpha-value>)',
        },
        app: 'hsl(var(--color-bg-app) / <alpha-value>)',
        card: 'hsl(var(--color-bg-card) / <alpha-value>)',
        main: 'hsl(var(--color-text-main) / <alpha-value>)',
        muted: 'hsl(var(--color-text-muted) / <alpha-value>)',
        line: 'hsl(var(--color-border) / <alpha-value>)',
        accent: 'hsl(var(--color-text-accent) / <alpha-value>)',
        tint: 'hsl(var(--color-bg-tint) / <alpha-value>)',
        btn: 'hsl(var(--color-btn-primary) / <alpha-value>)',
        'on-btn': 'hsl(var(--color-on-btn-primary) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};