import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#FAFAF8",
        foreground: "#2D2640",
        primary: {
          DEFAULT: "#845EC2", // purple
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FF6B6B", // coral
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#00C9A7", // teal
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F0EEF9",
          foreground: "#8E8A9B",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2D2640",
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #FF6B6B 0%, #845EC2 50%, #00C9A7 100%)',
        'gradient-soft': 'linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(132, 94, 194, 0.1) 100%)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        card: '20px',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease both',
        'fade-in': 'fade-in 0.5s ease both',
      },
    },
  },
  plugins: [],
}

export default config
