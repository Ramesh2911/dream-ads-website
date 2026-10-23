/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        4.5: '1.125rem',
      },
      colors: {
        obsidian: '#0B0F17',
        surface: 'rgba(18, 24, 38, 0.75)',
        cyan: { DEFAULT: '#00E5FF', dim: '#38BDF8' },
        indigo: { DEFAULT: '#6366F1' },
        body: '#94A3B8',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 32px rgba(0, 229, 255, 0.25)',
        'glow-indigo': '0 0 32px rgba(99, 102, 241, 0.3)',
        card: '0 10px 40px -20px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'grad-cyan': 'linear-gradient(135deg, #00E5FF 0%, #38BDF8 100%)',
        'grad-indigo': 'linear-gradient(135deg, #6366F1 0%, #00E5FF 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'marquee-x': 'marqueeX 34s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(26px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        marqueeX: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pulseDot: { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.4', transform: 'scale(0.8)' } },
        shimmer: { from: { backgroundPosition: '200% 0' }, to: { backgroundPosition: '-200% 0' } },
      },
    },
  },
  plugins: [],
};
