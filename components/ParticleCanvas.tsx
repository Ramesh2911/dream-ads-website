'use client';

import { useEffect, useRef } from 'react';

/**
 * Interactive particle/constellation network — cyan & indigo nodes with
 * connection lines, gentle cursor attraction, paused offscreen,
 * disabled under prefers-reduced-motion.
 */
export default function ParticleCanvas({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    let visible = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let particles: { x: number; y: number; vx: number; vy: number; r: number; hue: number }[] = [];

    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.max(36, Math.floor((w * h) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        r: Math.random() * 1.7 + 0.7,
        hue: Math.random() > 0.55 ? 0 : 1, // 0 = cyan, 1 = indigo
      }));
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // cursor attraction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < 26000 && dist2 > 1) {
          const f = 0.00055;
          p.vx += dx * f;
          p.vy += dy * f;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.995;
        p.vy *= 0.995;

        // speed clamp
        const sp = Math.hypot(p.vx, p.vy);
        if (sp > 1.4) {
          p.vx = (p.vx / sp) * 1.4;
          p.vy = (p.vy / sp) * 1.4;
        }

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.hue === 0 ? 'rgba(0,229,255,0.85)' : 'rgba(99,102,241,0.85)';
        ctx.fill();
      }

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.32;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = a.hue === 0 ? `rgba(0,229,255,${alpha})` : `rgba(99,102,241,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    if (reduced) {
      // single static frame
      draw();
      cancelAnimationFrame(raf);
    } else {
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !visible) {
          visible = true;
          raf = requestAnimationFrame(draw);
        } else if (!e.isIntersecting && visible) {
          visible = false;
          cancelAnimationFrame(raf);
        }
      });
      io.observe(canvas);
      raf = requestAnimationFrame(draw);

      return () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener('resize', resize);
        canvas.removeEventListener('mousemove', onMove);
        canvas.removeEventListener('mouseleave', onLeave);
      };
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
