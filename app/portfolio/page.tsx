import type { Metadata } from 'next';
import Reveal from '../../components/Reveal';
import PortfolioGrid from '../../components/PortfolioGrid';
import CTASection from '../../components/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio — Case Studies & Delivered Systems',
  description:
    'Selected case studies across game development, mobile apps, enterprise ERP/CRM systems and SaaS web platforms.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.10),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="chip bg-indigo/15 text-indigo border border-indigo/30 mb-4">PORTFOLIO</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-[1.08]">
              Systems that <span className="grad-text">shipped</span> and stayed shipped
            </h1>
            <p className="mt-5 text-lg text-body max-w-2xl">
              Real deliveries with measurable outcomes — filter by vertical and read the problem/solution behind each build.
            </p>
          </Reveal>
        </div>
      </section>

      <PortfolioGrid />
      <CTASection title="Want results like these?" text="Share your requirements and we’ll map them to an architecture, timeline and budget." />
    </>
  );
}
