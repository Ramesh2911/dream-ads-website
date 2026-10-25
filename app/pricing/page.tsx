import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CircleCheck, Clock, IndianRupee } from 'lucide-react';
import Reveal from '../../components/Reveal';
import CTASection from '../../components/CTASection';
import { PRICING } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Pricing — Transparent Engagement Ranges',
  description:
    'Indicative price ranges for custom ERP, web portals, mobile apps, 3D games, multiplayer, OTT streaming, AdMob yield, Meta AN and SEO/ASO.',
};

export default function PricingPage() {
  return (
    <>
      <section className="relative pt-12 pb-14 md:pt-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Transparent Pricing
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Engagement price ranges
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Indicative ranges based on typical scopes. Final quotes follow a discovery call — fixed-scope projects never exceed the agreed quote without a signed change order.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {PRICING.map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <article className="corp-card corp-card-hover p-6 h-full flex flex-col group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-corp-blue text-[11px] font-semibold">
                      {p.chip}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-300">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mb-2 font-display group-hover:text-corp-blue transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{p.blurb}</p>
                  <p className="font-mono font-extrabold text-xl text-slate-900 stat-number-3d mb-1">{p.price}</p>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-5">
                    <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3 text-corp-blue" /> {p.timeline}</span>
                    <span className="inline-flex items-center gap-1"><CircleCheck className="w-3 h-3 text-emerald-600" /> {p.deployments}</span>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link href={`/services/${p.slug}`} className="text-xs font-semibold text-corp-blue hover:underline inline-flex items-center gap-1">
                      Scope details <ArrowRight className="w-3 h-3" />
                    </Link>
                    <Link href={`/contact?service=${encodeURIComponent(p.title)}&subject=project`} className="btn-corp !py-2 !px-4 text-xs">
                      Get quote
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 corp-card p-8 grid md:grid-cols-3 gap-6 text-sm">
              {[
                { icon: IndianRupee, t: 'Milestone billing', d: 'Typical 40/30/30 split across kickoff, mid-milestone and delivery.' },
                { icon: CircleCheck, t: '100% IP transfer', d: 'Custom code, designs and docs are yours upon final payment.' },
                { icon: Clock, t: '24-hour response SLA', d: 'Every inquiry gets a human response within one business day.' },
              ].map((x) => (
                <div key={x.t} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center shrink-0">
                    <x.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{x.t}</p>
                    <p className="text-slate-600 mt-1 leading-relaxed text-xs">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Get an exact quote for your scope." />
    </>
  );
}
