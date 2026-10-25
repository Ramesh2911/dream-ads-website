'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Star, CircleCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../lib/data';

const TONE: Record<string, { badge: string; avatar: string; role: string }> = {
  blue: { badge: 'text-blue-700 bg-blue-50 border-blue-100', avatar: 'bg-blue-700', role: 'text-blue-700' },
  purple: { badge: 'text-purple-700 bg-purple-50 border-purple-100', avatar: 'bg-purple-700', role: 'text-purple-700' },
  emerald: { badge: 'text-emerald-700 bg-emerald-50 border-emerald-100', avatar: 'bg-emerald-700', role: 'text-emerald-700' },
  indigo: { badge: 'text-indigo-700 bg-indigo-50 border-indigo-100', avatar: 'bg-indigo-700', role: 'text-indigo-700' },
};

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const paused = useRef(false);
  const pages = Math.ceil(TESTIMONIALS.length / 2);

  const go = useCallback((next: number) => {
    setIdx((next + pages) % pages);
  }, [pages]);

  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) go(idx + 1);
    }, 6000);
    return () => clearInterval(t);
  }, [idx, go]);

  const visible = [TESTIMONIALS[idx * 2], TESTIMONIALS[idx * 2 + 1]].filter(Boolean);

  return (
    <div>
      <div className="flex justify-end gap-2 mb-6">
        <button onClick={() => go(idx - 1)} aria-label="Previous testimonials"
          className="w-11 h-11 rounded-xl bg-white border border-slate-300 hover:text-corp-blue hover:border-blue-400 shadow-sm active:scale-95 transition-all flex items-center justify-center">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={() => go(idx + 1)} aria-label="Next testimonials"
          className="w-11 h-11 rounded-xl bg-white border border-slate-300 hover:text-corp-blue hover:border-blue-400 shadow-sm active:scale-95 transition-all flex items-center justify-center">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {visible.map((t) => {
            const tone = TONE[t.tone];
            return (
              <article
                key={t.name}
                className="testimonial-card-slide corp-card corp-card-hover p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-semibold ${tone.badge}`}>
                      <CircleCheck className="w-3 h-3" /> Verified
                    </span>
                  </div>
                  <p className="italic text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                    “{t.quote}”
                  </p>
                </div>
                <div className="pt-5 border-t border-slate-100 flex gap-4 items-center">
                  <div className={`w-12 h-12 rounded-xl ${tone.avatar} text-white font-bold shadow-md font-display flex items-center justify-center shrink-0`}>
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className={`text-xs font-semibold ${tone.role}`}>{t.role}</p>
                    <p className="text-[11px] text-slate-500 truncate">{t.company}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to testimonial page ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === idx ? 'w-8 bg-corp-blue' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
