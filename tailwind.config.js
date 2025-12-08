/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
        'grid-pattern-dark': "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
      colors: {
        // Primary mapped to CSS variables for runtime theming
        primary: {
          50: 'var(--theme-primary-50)',
          100: 'var(--theme-primary-100)',
          200: 'var(--theme-primary-200)',
          300: 'var(--theme-primary-300)',
          400: 'var(--theme-primary-400)',
          500: 'var(--theme-primary-500)',
          600: 'var(--theme-primary-600)',
          700: 'var(--theme-primary-700)',
          800: 'var(--theme-primary-800)',
          900: 'var(--theme-primary-900)',
          950: 'var(--theme-primary-900)',
          DEFAULT: 'var(--theme-primary-500)',
          foreground: 'var(--theme-foreground, #ffffff)',
        },
        // Semantic Colors
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
          DEFAULT: '#22c55e',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
          DEFAULT: '#f59e0b',
        },
        error: {
          50: '#fee2e2',
          100: '#fecaca',
          200: '#fca5a5',
          300: '#f87171',
          400: '#ef4444',
          500: '#d63031', // US Palette - Chi-Gong
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#450a0a',
          950: '#2d0000',
          DEFAULT: '#d63031',
        },
        info: {
          50: '#e0f2fe',
          100: '#bae6fd',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#0ea5e9',
          500: '#0984e3', // US Palette - Electron Blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
          DEFAULT: '#0984e3',
        },
        // Neutral Colors (Flat UI Colors US - Soothing Breeze based)
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#dfe6e9', // US Palette - Soothing Breeze
          300: '#c8d0d4',
          400: '#a8b3b9',
          500: '#88949b',
          600: '#6b757d',
          700: '#52595e',
          800: '#3d4246',
          900: '#2d3134',
          950: '#1a1c1e',
        },
        // Alias Slate to Neutral for consistency
        slate: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#dfe6e9',
          300: '#c8d0d4',
          400: '#a8b3b9',
          500: '#88949b',
          600: '#6b757d',
          700: '#52595e',
          800: '#3d4246',
          900: '#2d3134',
          950: '#1a1c1e',
        },
        // Theme Specific tokens mapped to CSS variables where appropriate
        background: {
          light: 'var(--theme-background-default)',
          dark: 'var(--theme-background-dark, #0f172a)',
          paper: {
            light: 'var(--theme-background-paper)',
            dark: 'var(--theme-background-paper-dark, #1e293b)',
          }
        },
        border: {
          light: 'var(--theme-border)',
          dark: 'var(--theme-border-dark, #52595e)',
        },
        text: {
          primary: {
            light: 'var(--theme-text-primary)',
            dark: 'var(--theme-text-primary-dark, #f8fafc)',
          },
          secondary: {
            light: 'var(--theme-text-secondary)',
            dark: 'var(--theme-text-secondary-dark, #94a3b8)',
          },
          disabled: {
            light: 'var(--theme-text-disabled, #cbd5e1)',
            dark: 'var(--theme-text-disabled-dark, #475569)',
          }
        },
        "input-bg-dark": "var(--theme-input-bg-dark, #1e293b)",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'soft': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'soft-md': '0 6px 10px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'soft-lg': '0 10px 15px -3px rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'soft-xl': '0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-in-bottom': 'slideInBottom 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
