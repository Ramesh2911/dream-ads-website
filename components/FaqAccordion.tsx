import { Scale, Timer, ShieldCheck, ChevronDown } from 'lucide-react';
import type { FaqGroup } from '../lib/data';

const ICONS = {
  scale: Scale,
  stopwatch: Timer,
  shield: ShieldCheck,
} as const;

export default function FaqAccordion({ group }: { group: FaqGroup }) {
  const Icon = ICONS[group.icon];

  return (
    <div>
      {/* column banner */}
      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-start gap-3.5 mb-3">
        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-corp-blue shadow-sm flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5" />
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-bold font-display text-slate-900 leading-tight">{group.title}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{group.sub}</p>
        </div>
      </div>

      <div className="space-y-3">
        {group.items.map((item, i) => (
          <details key={item.q} className="faq-item group" open={i === 0}>
            <summary className="faq-summary">
              <span className="font-semibold text-slate-900 text-sm pr-2">{item.q}</span>
              <span className="w-7 h-7 rounded-full bg-slate-100 group-open:bg-blue-100/70 group-open:text-corp-blue transition-all duration-200 group-open:rotate-180 flex items-center justify-center shrink-0">
                <ChevronDown className="w-4 h-4" />
              </span>
            </summary>
            <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
              {item.a}
              {item.mono && (
                <div className="mt-2.5 pt-2 border-t border-slate-200/60 font-mono text-[11px] text-slate-700">
                  {item.mono}
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
