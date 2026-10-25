'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Return to top"
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white border border-slate-300 text-corp-blue shadow-md hover:bg-corp-blue hover:text-white transition-all duration-200 ${
        show ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-3'
      }`}
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
