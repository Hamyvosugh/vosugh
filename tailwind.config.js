// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette that matches your creative director identity
        primary: {
          50: '#eef2ff',
          100: '#dfe6ff',
          200: '#c4d0ff',
          300: '#a2b0ff',
          400: '#7c87fc',
          500: '#5b5ef7',
          600: '#4642eb',
          700: '#3b34d1',
          800: '#322ea9',
          900: '#2d2d85',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f5e8ff',
          200: '#ead5ff',
          300: '#ddb5ff',
          400: '#ca8afd',
          500: '#b358f7',
          600: '#9e35ea',
          700: '#8626cc',
          800: '#7122a6',
          900: '#5e1f85',
        },
        dark: {
          DEFAULT: '#0a0a0c',
          50: '#f6f6f7',
          100: '#e3e3e5',
          200: '#c7c7cb',
          300: '#a0a0a8',
          400: '#7b7b85',
          500: '#606069',
          600: '#4d4d55',
          700: '#3e3e44',
          800: '#2f2f33',
          900: '#1a1a1e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float-slow 12s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
        'spin-reverse': 'spin 20s linear infinite reverse',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': 'url("/noise.png")',
        'grid': 'linear-gradient(to right, rgba(79, 70, 229, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(79, 70, 229, 0.05) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(79, 70, 229, 0.45)',
        'glow-secondary': '0 0 40px -10px rgba(158, 53, 234, 0.45)',
        'inner-glow': 'inset 0 0 20px rgba(79, 70, 229, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'bounce-sm': 'cubic-bezier(0.18, 0.89, 0.32, 1.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      blur: {
        xs: '2px',
      },
      zIndex: {
        '-1': '-1',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
}