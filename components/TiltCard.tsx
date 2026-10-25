'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Interactive 3D tilt card — tilts toward cursor within a perspective stage.
 * Usage: <TiltCard> …content… </TiltCard> inside a perspective container,
 * or rely on the built-in .perspective-stage wrapper.
 */
export default function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const card = cardRef.current;
    if (!stage || !card) return;

    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      const rotY = px * 16;
      const rotX = -py * 12;
      card.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(-4px)`;
    };
    const onLeave = () => {
      card.style.transform = 'rotateY(-7deg) rotateX(4deg)';
    };

    stage.addEventListener('mousemove', onMove);
    stage.addEventListener('mouseleave', onLeave);
    return () => {
      stage.removeEventListener('mousemove', onMove);
      stage.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className="perspective-stage">
      <div
        ref={cardRef}
        className={`card-3d ${className}`}
        style={{ transform: 'rotateY(-7deg) rotateX(4deg)' }}
      >
        {children}
      </div>
    </div>
  );
}
