import type { Metadata } from 'next';
import { ShieldCheck, Target, Users, Lightbulb, Landmark, CalendarDays, MapPin, Mail, Phone } from 'lucide-react';
import Reveal from '../../components/Reveal';
import CountUp from '../../components/CountUp';
import CTASection from '../../components/CTASection';
import SectionHead from '../../components/SectionHead';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import { COMPANY } from '../../lib/company';

export const metadata: Metadata = {
  title: 'About — MCA-Registered Engineering Company',
  description:
    'Dream Ads Multi Solutions Private Limited (CIN U62011WR2026PTC295658) — incorporated 28 July 2026 in West Bengal. Games, enterprise software, mobile, web and cloud engineering.',
};

const VALUES = [
  { icon: ShieldCheck, t: 'Engineering integrity', d: 'RBAC and audit trails by default; no hidden ads, dark patterns or shortcuts that erode trust.' },
  { icon: Target, t: 'Outcome ownership', d: 'We measure success by what runs in production — uptime, adoption and business metrics.' },
  { icon: Lightbulb, t: 'Architecture first', d: 'Every engagement starts with system design so scale never forces a rewrite.' },
  { icon: Users, t: 'Transparent delivery', d: 'Weekly demos, open estimates and direct access to the engineers building your product.' },
];

const TIMELINE = [
  { y: '2026', t: 'Incorporated', d: 'Registered with the Ministry of Corporate Affairs on 28 July 2026 as a private limited company in West Bengal.' },
  { y: '2026', t: 'Multi-vertical charter', d: 'Formed to deliver across five engineering verticals: games, enterprise software, mobile, web and cloud.' },
  { y: 'Next', t: 'Your project', d: 'We are built for our first wave of long-term clients — early partners get founding-team attention.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-14 md:pt-16 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <Reveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              About Us
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              A new company with an <span className="text-corp-blue">enterprise-grade charter</span>
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Dream Ads Multi Solutions Private Limited is an Indian technology company incorporated to build
              production software — games, office systems and platforms — with the discipline enterprises expect
              and the pace founders need.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We operate from Murshidabad, West Bengal and deliver remotely across India. Our leadership combines
              product engineering, game development and infrastructure operations under one accountable team.
            </p>
          </Reveal>

          {/* Statutory card */}
          <Reveal delay={120}>
            <div className="corp-card p-6 shadow-corp-card">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
                <span className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center shadow-sm">
                  <Landmark className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-slate-900 text-sm leading-tight">Corporate Facts</p>
                  <p className="text-[11px] text-slate-500">MCA registered entity</p>
                </div>
              </div>
              <dl className="space-y-3 text-sm">
                {[
                  ['Legal name', COMPANY.legalName],
                  ['CIN', COMPANY.cin],
                  ['PAN', COMPANY.pan],
                  ['GSTIN', COMPANY.gstin],
                  ['Incorporated', COMPANY.incorporated],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-slate-500 shrink-0">{k}</dt>
                    <dd className="text-slate-900 font-medium text-right font-mono text-[13px]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHead
          eyebrow="What We Stand For"
          title="Principles baked into the codebase"
          align="center"
        />
        <div className="grid sm:grid-cols-2 gap-5">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div className="corp-card corp-card-hover p-6 h-full">
                <span className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center mb-4 shadow-sm">
                  <v.icon className="w-5 h-5" />
                </span>
                <p className="font-display font-bold text-slate-900">{v.t}</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <SectionHead eyebrow="Our Story" title="Short history, long horizon" />
          <div className="grid md:grid-cols-3 gap-5">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.t} delay={i * 90}>
                <div className="corp-card corp-card-hover p-6 h-full">
                  <div className="flex items-center gap-2.5 mb-3">
                    <CalendarDays className="w-4 h-4 text-corp-blue" />
                    <span className="font-mono text-xs text-corp-blue font-semibold">{t.y}</span>
                  </div>
                  <p className="font-display font-bold text-slate-900">{t.t}</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHead
          eyebrow="Leadership"
          title="Board of directors"
          lede="The directors registered with the Ministry of Corporate Affairs for this company."
        />
        <div className="grid sm:grid-cols-2 gap-5">
          {COMPANY.directors.map((d, i) => (
            <Reveal key={d.name} delay={i * 90}>
              <div className="corp-card corp-card-hover p-7 h-full flex items-start gap-5">
                <span className="w-16 h-16 rounded-2xl bg-corp-blue text-white font-display font-extrabold text-xl shrink-0 shadow-md flex items-center justify-center">
                  {d.name.split(' ').map((x) => x[0]).join('')}
                </span>
                <div className="min-w-0">
                  <p className="font-display font-bold text-slate-900 text-lg">{d.name}</p>
                  <p className="text-corp-blue text-sm font-semibold">{d.role}</p>
                  <p className="text-[11px] font-mono text-slate-400 mt-0.5">{d.din}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Registered director of the company, accountable for governance, strategy and statutory compliance.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-slate-200 bg-slate-50/70 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead
            eyebrow="Client Voices"
            title="What partners say about working with us"
            align="center"
          />
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Office */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="corp-card p-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, k: 'Registered office', v: COMPANY.address },
              { icon: Mail, k: 'Email', v: COMPANY.email },
              { icon: Phone, k: 'Phone', v: COMPANY.phone },
              { icon: CalendarDays, k: 'Incorporated', v: COMPANY.incorporated },
            ].map((x) => (
              <div key={x.k}>
                <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center mb-3">
                  <x.icon className="w-4 h-4" />
                </span>
                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">{x.k}</p>
                <p className="text-sm text-slate-900 leading-relaxed">{x.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Stats strip */}
      <section className="border-t border-slate-200 bg-slate-50/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-3 gap-4 text-center">
          {[
            { to: 5, s: '', l: 'Engineering verticals' },
            { to: 2, s: '', l: 'Registered directors' },
            { to: 1, s: ' entity', l: 'MCA incorporated' },
          ].map((m, i) => (
            <Reveal key={m.l} delay={i * 90}>
              <p className="font-display font-extrabold text-slate-900 text-4xl stat-number-3d">
                <CountUp to={m.to} suffix={m.s} />
              </p>
              <p className="mt-1.5 text-sm text-slate-600">{m.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Build with an accountable partner." />
    </>
  );
}
