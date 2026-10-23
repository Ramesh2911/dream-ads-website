'use client';

import { useEffect } from 'react';

/** Tracks pointer position over .glow-card elements to drive their radial glow. */
export default function GlowTracker() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.('.glow-card') as HTMLElement | null;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);
  return null;
}
