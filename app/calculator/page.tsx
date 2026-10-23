import type { Metadata } from 'next';
import { Calculator, FileText, PhoneCall, Sparkles } from 'lucide-react';
import Reveal from '../../components/Reveal';
import EstimatorWidget from '../../components/EstimatorWidget';
import CTASection from '../../components/CTASection';

export const metadata: Metadata = {
  title: 'Cost Calculator — Instant Project Estimate',
  description:
    'Instant INR cost and timeline range for web apps, mobile apps, games, enterprise software and cloud projects.',
};

const STEPS = [
  { icon: Calculator, t: '1. Configure scope', d: 'Choose platform, features, timeline and complexity.' },
  { icon: Sparkles, t: '2. Get your range', d: 'Instant budget band and duration — computed live.' },
  { icon: FileText, t: '3. Refine with us', d: 'We validate scope in a discovery call and issue a firm quote.' },
  { icon: PhoneCall, t: '4. Kickoff', d: 'Contract, milestones and architecture sprint begin.' },
];

export default function CalculatorPage() {
  return (
    <>
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.08),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="chip bg-cyan/10 text-cyan border border-cyan/25 mb-4">COST CALCULATOR</p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.08]">
              Estimate your project in <span className="grad-text">under 30 seconds</span>
            </h1>
            <p className="mt-5 text-lg text-body max-w-2xl">
              No forms, no email walls. Configure your scope and get an indicative INR range and timeline instantly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-16">
        <Reveal>
          <EstimatorWidget />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.t} className="glow-card glass p-5">
                <span className="w-10 h-10 rounded-xl bg-indigo/15 text-indigo flex items-center justify-center mb-3.5">
                  <s.icon className="w-5 h-5" />
                </span>
                <p className="font-display font-bold text-white text-sm">{s.t}</p>
                <p className="mt-1.5 text-xs text-body leading-relaxed">{s.d}</p>
                <span className="mt-2 block font-mono text-[10px] text-body/40">step {i + 1}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection
        title="Want a firm quote?"
        text="Send us your scope (or the estimator settings) and we’ll respond with a fixed proposal within 48 hours."
      />
    </>
  );
}
