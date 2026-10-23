'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Clock, IndianRupee } from 'lucide-react';
import { PLATFORMS, FEATURES, TIMELINES, estimate, formatINR, Platform } from '../lib/estimator';

export default function EstimatorWidget({ compact = false }: { compact?: boolean }) {
  const [platform, setPlatform] = useState<Platform>('web-app');
  const [features, setFeatures] = useState<string[]>(['auth', 'admin']);
  const [timeline, setTimeline] = useState<'standard' | 'fast' | 'rush'>('standard');
  const [complexity, setComplexity] = useState<1 | 2 | 3>(2);

  const est = useMemo(() => estimate({ platform, features, timeline, complexity }), [platform, features, timeline, complexity]);

  const toggle = (id: string) =>
    setFeatures((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  const query = new URLSearchParams({
    platform,
    features: features.join(','),
    timeline,
    complexity: String(complexity),
  }).toString();

  return (
    <div className="glass p-5 sm:p-7">
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-grad-cyan flex items-center justify-center shadow-glow-cyan">
            <Sparkles className="w-4.5 h-4.5 text-obsidian" />
          </span>
          <div>
            <p className="font-display font-bold text-white text-[15px]">Project Cost Estimator</p>
            <p className="text-[11px] text-body/70">Instant scope range — no signup</p>
          </div>
        </div>
        <span className="chip bg-indigo/15 text-indigo border border-indigo/30">{est.tier}</span>
      </div>

      {/* Platform */}
      <p className="text-xs font-semibold text-body uppercase tracking-wider mb-2.5">Platform type</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-5">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            onClick={() => setPlatform(p.id)}
            className={`text-left p-3 rounded-xl border text-[13px] font-medium transition-all duration-200 ${
              platform === p.id
                ? 'border-cyan/50 bg-cyan/10 text-white shadow-glow-cyan'
                : 'border-white/[0.08] bg-white/[0.03] text-body hover:border-white/20 hover:text-white'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Features */}
      <p className="text-xs font-semibold text-body uppercase tracking-wider mb-2.5">Features</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {FEATURES.map((f) => (
          <button
            key={f.id}
            onClick={() => toggle(f.id)}
            className={`chip border transition-all duration-200 ${
              features.includes(f.id)
                ? 'border-cyan/50 bg-cyan/15 text-cyan'
                : 'border-white/[0.1] bg-white/[0.03] text-body hover:text-white hover:border-white/25'
            }`}
          >
            {features.includes(f.id) ? '✓ ' : '+ '}
            {f.label}
          </button>
        ))}
      </div>

      {/* Timeline + complexity */}
      <div className="grid sm:grid-cols-2 gap-5 mb-6">
        <div>
          <p className="text-xs font-semibold text-body uppercase tracking-wider mb-2.5">Timeline</p>
          <div className="flex gap-2">
            {TIMELINES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTimeline(t.id)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                  timeline === t.id
                    ? 'border-indigo/50 bg-indigo/15 text-white'
                    : 'border-white/[0.08] bg-white/[0.03] text-body hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-body uppercase tracking-wider mb-2.5">Complexity</p>
          <div className="flex gap-2">
            {([1, 2, 3] as const).map((c) => (
              <button
                key={c}
                onClick={() => setComplexity(c)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                  complexity === c
                    ? 'border-cyan/50 bg-cyan/15 text-white'
                    : 'border-white/[0.08] bg-white/[0.03] text-body hover:text-white'
                }`}
              >
                {['Lean', 'Standard', 'Advanced'][c - 1]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="rounded-2xl border border-cyan/25 bg-gradient-to-r from-cyan/[0.09] to-indigo/[0.09] p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-body/80 flex items-center gap-1.5 mb-1">
            <IndianRupee className="w-3.5 h-3.5 text-cyan" /> Estimated range
          </p>
          <p className="font-display font-extrabold text-white text-2xl sm:text-3xl tracking-tight">
            {formatINR(est.low)} <span className="text-body/60 font-medium text-lg">–</span> {formatINR(est.high)}
          </p>
        </div>
        <div className="flex-1 sm:border-x border-white/10 sm:px-5">
          <p className="text-xs text-body/80 flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5 text-indigo" /> Timeline
          </p>
          <p className="font-display font-bold text-white text-xl">{est.weeksLow}–{est.weeksHigh} weeks</p>
        </div>
        {!compact && (
          <Link href={`/contact?${query}`} className="btn-primary shrink-0">
            Get exact quote <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      <p className="mt-3 text-[11px] text-body/50 leading-relaxed">
        Ranges are indicative based on typical scopes. Final quotes follow a discovery call and requirements review.
      </p>
    </div>
  );
}
