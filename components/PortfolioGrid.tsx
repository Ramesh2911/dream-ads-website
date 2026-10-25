'use client';

import { useState } from 'react';
import { ArrowUpRight, CircleCheck } from 'lucide-react';
import Reveal from '../components/Reveal';
import { PROJECTS } from '../lib/data';

const CATEGORIES = ['All', 'Game Development', 'Mobile Apps', 'Enterprise Systems', 'Web Applications'] as const;

export default function PortfolioGrid() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All');
  const [open, setOpen] = useState<string | null>(null);

  const list = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Reveal className="flex flex-wrap gap-2.5 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
              active === c
                ? 'border-blue-400 bg-blue-50 text-corp-blue ring-1 ring-blue-100'
                : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-slate-900'
            }`}
          >
            {c}
            <span className="ml-2 text-[11px] opacity-60">
              {c === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={i * 70}>
            <article className="corp-card corp-card-hover p-6 sm:p-7 h-full flex flex-col group">
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-corp-blue text-[11px] font-semibold">
                  {p.category}
                </span>
                <span className="font-mono text-[11px] text-slate-400">#{p.id}</span>
              </div>

              <h3 className="font-display font-bold text-slate-900 text-xl group-hover:text-corp-blue transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{p.summary}</p>

              <button
                onClick={() => setOpen(open === p.id ? null : p.id)}
                className="mt-4 self-start text-xs font-semibold text-corp-blue inline-flex items-center gap-1.5 hover:underline"
              >
                {open === p.id ? 'Hide case study' : 'Read case study'}
                <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${open === p.id ? 'rotate-45' : ''}`} />
              </button>

              {open === p.id && (
                <div className="mt-4 space-y-4 rounded-2xl border border-blue-100 bg-blue-50/40 p-5 animate-fade-up">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5">The problem</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{p.problem}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-1.5">Our solution</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{p.solution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-700 text-xs font-medium">
                    <CircleCheck className="w-4 h-4" /> Delivered &amp; in production
                  </div>
                </div>
              )}

              <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 border border-slate-200 text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
