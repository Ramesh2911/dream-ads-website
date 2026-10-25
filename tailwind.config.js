/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        4.5: '1.125rem',
      },
      colors: {
        corp: {
          blue: '#1D4ED8',
          blueHover: '#1E40AF',
          cyan: '#0284C7',
          indigo: '#4F46E5',
          dark: '#0F172A',
          muted: '#475569',
          border: '#E2E8F0',
          off: '#F8FAFC',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'corp-card': '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'corp-card-hover': '0 20px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'corp-3d': '0 25px 50px -12px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(226, 232, 240, 0.8)',
        corp: '0 4px 24px rgba(15, 23, 42, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fadeIn 0.5s ease-out both',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float-soft': 'floatSoft 5s ease-in-out infinite',
        'beacon-pulse': 'liveBeaconPulse 2s cubic-bezier(0,0,.2,1) infinite',
        'bullish-glow': 'greenGlowPulse 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(26px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        pulseDot: { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.4', transform: 'scale(0.8)' } },
        floatSoft: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        liveBeaconPulse: { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.5', transform: 'scale(1.35)' } },
        greenGlowPulse: { '0%,100%': { filter: 'drop-shadow(0 0 8px rgba(16,185,129,0.35))' }, '50%': { filter: 'drop-shadow(0 0 18px rgba(16,185,129,0.65))' } },
        shimmer: { from: { backgroundPosition: '200% 0' }, to: { backgroundPosition: '-200% 0' } },
      },
    },
  },
  plugins: [],
};
