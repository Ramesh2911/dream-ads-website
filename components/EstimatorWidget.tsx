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
    <div className="corp-card p-5 sm:p-7">
      <div className="flex items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4" />
          </span>
          <div>
            <p className="font-display font-bold text-slate-900 text-[15px]">Project Cost Estimator</p>
            <p className="text-[11px] text-slate-500">Instant scope range — no signup</p>
          </div>
        </div>
        <span className="px-2.5 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-[11px] font-semibold">{est.tier}</span>
      </div>

      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">Platform type</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-5">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            onClick={() => setPlatform(p.id)}
            className={`text-left p-3 rounded-xl border text-[13px] font-medium transition-all duration-200 ${
              platform === p.id
                ? 'border-blue-400 bg-blue-50 text-slate-900 ring-1 ring-blue-100'
                : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-slate-50/70'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">Features</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {FEATURES.map((f) => (
          <button
            key={f.id}
            onClick={() => toggle(f.id)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all duration-200 ${
              features.includes(f.id)
                ? 'border-blue-400 bg-blue-50 text-corp-blue'
                : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700'
            }`}
          >
            {features.includes(f.id) ? '✓ ' : '+ '}
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-6">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">Timeline</p>
          <div className="flex gap-2">
            {TIMELINES.map((t) => (
              <button
                key={t.id}
                onClick={() => setTimeline(t.id)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                  timeline === t.id
                    ? 'border-indigo-400 bg-indigo-50 text-indigo-800'
                    : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50/70'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">Complexity</p>
          <div className="flex gap-2">
            {([1, 2, 3] as const).map((c) => (
              <button
                key={c}
                onClick={() => setComplexity(c)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                  complexity === c
                    ? 'border-blue-400 bg-blue-50 text-corp-blue'
                    : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50/70'
                }`}
              >
                {['Lean', 'Standard', 'Advanced'][c - 1]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
            <IndianRupee className="w-3.5 h-3.5 text-corp-blue" /> Estimated range
          </p>
          <p className="font-display font-extrabold text-slate-900 text-2xl sm:text-3xl tracking-tight stat-number-3d">
            {formatINR(est.low)} <span className="text-slate-400 font-medium text-lg">–</span> {formatINR(est.high)}
          </p>
        </div>
        <div className="flex-1 sm:border-x border-blue-200 sm:px-5">
          <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-1">
            <Clock className="w-3.5 h-3.5 text-indigo-600" /> Timeline
          </p>
          <p className="font-display font-bold text-slate-900 text-xl">{est.weeksLow}–{est.weeksHigh} weeks</p>
        </div>
        {!compact && (
          <Link href={`/contact?${query}`} className="btn-corp shrink-0">
            Get exact quote <ArrowUpRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      <p className="mt-3 text-[11px] text-slate-500 leading-relaxed">
        Ranges are indicative based on typical scopes. Final quotes follow a discovery call and requirements review.
      </p>
    </div>
  );
}
