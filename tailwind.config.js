/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Rajdhani', 'monospace'],
      },
      colors: {
        primary: '#00f0ff', // 科技青
        secondary: '#7000ff', // 深紫
        accent: '#ff003c', // 强调红
        dark: '#050505', // 极深黑
        surface: '#0a0a0a',
        glass: 'rgba(255, 255, 255, 0.03)',
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(circle at center, #1a1a1a 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

