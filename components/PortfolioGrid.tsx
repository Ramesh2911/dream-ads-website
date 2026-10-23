'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import { PROJECTS } from '../lib/data';

const CATEGORIES = ['All', 'Game Development', 'Mobile Apps', 'Enterprise Systems', 'Web Applications'] as const;

export default function PortfolioGrid() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All');
  const [open, setOpen] = useState<string | null>(null);

  const list = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
      {/* Filters */}
      <Reveal className="flex flex-wrap gap-2.5 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
              active === c
                ? 'border-cyan/50 bg-cyan/12 text-white shadow-glow-cyan'
                : 'border-white/[0.08] bg-white/[0.03] text-body hover:text-white hover:border-white/20'
            }`}
          >
            {c}
            <span className="ml-2 text-[11px] opacity-60">
              {c === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length}
            </span>
          </button>
        ))}
      </Reveal>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {list.map((p, i) => (
          <Reveal key={p.id} delay={i * 70}>
            <article className="glow-card glass p-7 h-full flex flex-col group">
              <div className="flex items-start justify-between gap-3 mb-4">
                <span
                  className={`chip ${
                    p.accent === 'cyan'
                      ? 'bg-cyan/15 text-cyan border border-cyan/30'
                      : 'bg-indigo/15 text-indigo border border-indigo/30'
                  }`}
                >
                  {p.category}
                </span>
                <span className="font-mono text-[11px] text-body/40">#{p.id}</span>
              </div>

              <h3 className="font-display font-bold text-white text-xl group-hover:text-cyan transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-body text-sm leading-relaxed">{p.summary}</p>

              {/* Expandable case study */}
              <button
                onClick={() => setOpen(open === p.id ? null : p.id)}
                className="mt-4 self-start text-xs font-semibold text-cyan inline-flex items-center gap-1.5 hover:underline"
              >
                {open === p.id ? 'Hide case study' : 'Read case study'}
                <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${open === p.id ? 'rotate-45' : ''}`} />
              </button>

              {open === p.id && (
                <div className="mt-4 space-y-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 animate-fade-up">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-body/70 mb-1.5">The problem</p>
                    <p className="text-sm text-body leading-relaxed">{p.problem}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-body/70 mb-1.5">Our solution</p>
                    <p className="text-sm text-body leading-relaxed">{p.solution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#28C840] text-xs font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Delivered &amp; in production
                  </div>
                </div>
              )}

              <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span key={t} className="chip bg-white/[0.04] border border-white/[0.08] text-body/70 text-[11px] font-mono">
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
