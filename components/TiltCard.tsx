'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Interactive 3D tilt card — tilts toward cursor on sm+ screens (>=640px).
 * Below sm the card stays flat for clean mobile readability.
 */
export default function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const card = cardRef.current;
    if (!stage || !card) return;
    const mq = window.matchMedia('(min-width: 640px)');

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
    const onChange = () => {
      if (mq.matches) {
        card.style.transform = 'rotateY(-7deg) rotateX(4deg)';
        stage.addEventListener('mousemove', onMove);
        stage.addEventListener('mouseleave', onLeave);
      } else {
        card.style.transform = 'none';
        stage.removeEventListener('mousemove', onMove);
        stage.removeEventListener('mouseleave', onLeave);
      }
    };

    onChange();
    mq.addEventListener('change', onChange);
    return () => {
      mq.removeEventListener('change', onChange);
      stage.removeEventListener('mousemove', onMove);
      stage.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className="perspective-stage">
      <div ref={cardRef} className={`card-3d ${className}`}>
        {children}
      </div>
    </div>
  );
}
