'use client';

import { useRef, ReactNode, MouseEvent } from 'react';

/** Button/link that magnetically follows the cursor within a small radius. */
export default function Magnetic({
  children,
  className = '',
  strength = 0.28,
  as = 'a',
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: 'a' | 'button';
  href?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLElement>(null);

  const move = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const leave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0px, 0px)';
  };

  const props = {
    ref: ref as never,
    className,
    onMouseMove: move,
    onMouseLeave: leave,
    onClick,
    style: { transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)', display: 'inline-flex' } as React.CSSProperties,
  };

  if (as === 'button') return <button {...props} type="button">{children}</button>;
  return <a {...props} href={href}>{children}</a>;
}
