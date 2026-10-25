import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CircleCheck, ArrowUpRight } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';
import CTASection from '../../components/CTASection';
import { SERVICES } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Services — Enterprise IT, Apps, Games & Cloud',
  description:
    'Custom ERP/CRM, Next.js web platforms, native mobile apps, 3D games, multiplayer netcode, OTT streaming, AdMob yield, Meta AN and technical SEO/ASO.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-12 pb-14 md:pt-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Enterprise Engineering &amp; Solutions
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Core enterprise services
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Nine delivery verticals — from bespoke ERPs to battle-royale netcode — each with defined SLAs, milestone gates and 100% IP transfer.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={i * 50}>
                  <article className="corp-card corp-card-hover p-6 h-full flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-200/60 flex items-center justify-center text-corp-blue group-hover:bg-corp-blue group-hover:text-white transition-colors duration-200 shadow-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-semibold">{s.chip}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-corp-blue transition-colors font-display">
                        {s.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{s.short}</p>
                      <div className="pt-3 pb-4 border-t border-slate-100">
                        <ul className="space-y-2 text-xs text-slate-700 font-medium">
                          {s.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2">
                              <CircleCheck className="w-3.5 h-3.5 text-corp-blue mt-0.5 shrink-0" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {s.stack.slice(0, 4).map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 border border-slate-200 text-slate-600">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                      <div className="min-w-0">
                        <p className="text-[11px] font-mono font-bold text-corp-blue">{s.price}</p>
                        <p className="text-[10px] text-slate-500">{s.timeline} · {s.deployments}</p>
                      </div>
                      <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-corp-blue hover:text-corp-blueHover group/link shrink-0 ml-3">
                        Details <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 corp-card p-8 text-center">
              <h3 className="font-display text-2xl font-extrabold text-slate-900">Not sure which service fits?</h3>
              <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
                Run the instant cost estimator or schedule a 30-minute discovery call with an engineering lead.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/calculator" className="btn-corp">
                  Estimate cost <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-outline">Book a call</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
