import type { Metadata } from 'next';
import Reveal from '../../components/Reveal';
import EstimatorWidget from '../../components/EstimatorWidget';
import CTASection from '../../components/CTASection';
import { PLATFORMS } from '../../lib/estimator';

export const metadata: Metadata = {
  title: 'Cost Calculator — Instant Project Estimate',
  description:
    'Instant indicative cost and timeline range for web apps, mobile apps, games, enterprise software and cloud architecture.',
};

export default function CalculatorPage() {
  return (
    <>
      <section className="relative pt-12 pb-14 md:pt-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Cost Calculator
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Estimate your project in seconds
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Pick a platform, toggle features and choose a delivery pace — get an indicative budget and timeline instantly, no signup.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <EstimatorWidget />
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PLATFORMS.map((p) => (
                <div key={p.id} className="corp-card p-5">
                  <p className="text-sm font-bold text-slate-900">{p.label}</p>
                  <p className="text-xs text-slate-600 mt-1">{p.blurb}</p>
                  <p className="mt-3 font-mono text-[11px] text-corp-blue font-semibold">
                    Base from ₹{new Intl.NumberFormat('en-IN').format(p.base)}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Want an exact quote instead?" />
    </>
  );
}
