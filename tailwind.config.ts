import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/client/**/*.{js,ts,jsx,tsx}',
    './src/client/index.html',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--color-bg) / <alpha-value>)',
        surface: 'hsl(var(--color-surface) / <alpha-value>)',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        text: 'hsl(var(--color-text) / <alpha-value>)',
        muted: 'hsl(var(--color-muted) / <alpha-value>)',
        danger: 'hsl(var(--color-danger) / <alpha-value>)',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 hsl(220, 13%, 90%)',
        md: '0 2px 8px 0 hsl(220, 13%, 85%)',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        12: '48px',
        16: '64px',
      },
    },
  },
  plugins: [],
} satisfies Config;
