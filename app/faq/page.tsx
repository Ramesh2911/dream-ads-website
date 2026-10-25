import type { Metadata } from 'next';
import FaqAccordion from '../../components/FaqAccordion';
import CTASection from '../../components/CTASection';
import { FAQS } from '../../lib/data';

export const metadata: Metadata = {
  title: 'FAQs — Compliance, Timelines & Contracts',
  description:
    'Answers on MCA registration, GST/PAN verification, delivery timelines, NDAs, IP transfer, milestone billing and uptime SLAs.',
};

export default function FaqPage() {
  return (
    <>
      <section className="relative pt-12 pb-14 md:pt-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Frequently Asked Questions
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Answers, not fine print
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Statutory compliance, delivery timelines and contract security — grouped so you find what you need fast.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {FAQS.map((group) => (
            <FaqAccordion key={group.title} group={group} />
          ))}
        </div>
      </section>

      <CTASection title="Still have a question?" text="Send it over — we respond to every inquiry within one business day, usually sooner." />
    </>
  );
}
