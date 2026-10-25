import type { Metadata } from 'next';
import PortfolioGrid from '../../components/PortfolioGrid';
import CTASection from '../../components/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio — Delivered Systems',
  description:
    'Case studies across game development, mobile apps, enterprise systems and web applications — shipped and in production.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-12 pb-14 md:pt-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Portfolio
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Systems that shipped — and stayed shipped
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real case studies with the problem, our solution and the stack. Filter by vertical to find work like yours.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50/70">
        <PortfolioGrid />
      </section>

      <CTASection title="Want results like these?" />
    </>
  );
}
