import type { Metadata } from 'next';
import { ShieldCheck, Target, Users, Lightbulb, Landmark, CalendarDays, MapPin, Mail, Phone } from 'lucide-react';
import Reveal from '../../components/Reveal';
import CountUp from '../../components/CountUp';
import CTASection from '../../components/CTASection';
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
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.08),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
          <Reveal>
            <p className="chip bg-cyan/10 text-cyan border border-cyan/25 mb-4">ABOUT US</p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
              A new company with an <span className="grad-text">enterprise-grade charter</span>
            </h1>
            <p className="mt-5 text-lg text-body leading-relaxed">
              Dream Ads Multi Solutions Private Limited is an Indian technology company incorporated to build
              production software — games, office systems and platforms — with the discipline enterprises expect
              and the pace founders need.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              We operate from Murshidabad, West Bengal and deliver remotely across India. Our leadership combines
              product engineering, game development and infrastructure operations under one accountable team.
            </p>
          </Reveal>

          {/* Statutory card */}
          <Reveal delay={120}>
            <div className="glass p-6">
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                <span className="w-11 h-11 rounded-xl bg-grad-cyan flex items-center justify-center shadow-glow-cyan">
                  <Landmark className="w-5 h-5 text-obsidian" />
                </span>
                <div>
                  <p className="font-display font-bold text-white text-sm leading-tight">Corporate Facts</p>
                  <p className="text-[11px] text-body/70">MCA registered entity</p>
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
                    <dt className="text-body/70 shrink-0">{k}</dt>
                    <dd className="text-white font-medium text-right font-mono text-[13px]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <Reveal className="max-w-2xl mb-10">
          <p className="chip bg-indigo/15 text-indigo border border-indigo/30 mb-4">WHAT WE STAND FOR</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Principles baked into the codebase</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 80}>
              <div className="glow-card glass p-6 h-full">
                <span className="w-11 h-11 rounded-xl bg-cyan/15 text-cyan flex items-center justify-center mb-4 shadow-glow-cyan">
                  <v.icon className="w-5 h-5" />
                </span>
                <p className="font-display font-bold text-white">{v.t}</p>
                <p className="mt-2 text-sm text-body leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-white/[0.07] bg-[#080B12]/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <Reveal className="mb-10">
            <p className="chip bg-cyan/10 text-cyan border border-cyan/25 mb-4">OUR STORY</p>
            <h2 className="font-display text-3xl font-extrabold">Short history, long horizon</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.t} delay={i * 90}>
                <div className="glow-card glass p-6 h-full relative">
                  <div className="flex items-center gap-2.5 mb-3">
                    <CalendarDays className="w-4 h-4 text-cyan" />
                    <span className="font-mono text-xs text-cyan">{t.y}</span>
                  </div>
                  <p className="font-display font-bold text-white">{t.t}</p>
                  <p className="mt-2 text-sm text-body leading-relaxed">{t.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <Reveal className="max-w-2xl mb-10">
          <p className="chip bg-indigo/15 text-indigo border border-indigo/30 mb-4">LEADERSHIP</p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Board of directors</h2>
          <p className="mt-3 text-body">The directors registered with the Ministry of Corporate Affairs for this company.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {COMPANY.directors.map((d, i) => (
            <Reveal key={d.name} delay={i * 90}>
              <div className="glow-card glass p-7 h-full flex items-start gap-5">
                <span className="w-16 h-16 rounded-2xl bg-grad-indigo flex items-center justify-center font-display font-extrabold text-white text-xl shrink-0 shadow-glow-indigo">
                  {d.name.split(' ').map((x) => x[0]).join('')}
                </span>
                <div>
                  <p className="font-display font-bold text-white text-lg">{d.name}</p>
                  <p className="text-cyan text-sm font-medium">{d.role}</p>
                  <p className="mt-3 text-sm text-body leading-relaxed">
                    Registered director of the company, accountable for governance, strategy and statutory compliance.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Office */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16">
        <Reveal>
          <div className="glass p-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, k: 'Registered office', v: COMPANY.address },
              { icon: Mail, k: 'Email', v: COMPANY.email },
              { icon: Phone, k: 'Phone', v: COMPANY.phone },
              { icon: CalendarDays, k: 'Incorporated', v: COMPANY.incorporated },
            ].map((x) => (
              <div key={x.k}>
                <span className="w-9 h-9 rounded-lg bg-cyan/12 text-cyan flex items-center justify-center mb-3">
                  <x.icon className="w-4 h-4" />
                </span>
                <p className="text-xs uppercase tracking-wider text-body/70 font-semibold mb-1">{x.k}</p>
                <p className="text-sm text-white leading-relaxed">{x.v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Stats strip */}
      <section className="border-t border-white/[0.07] bg-[#080B12]/50">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-3 gap-4 text-center">
          {[
            { to: 5, s: '', l: 'Engineering verticals' },
            { to: 2, s: '', l: 'Registered directors' },
            { to: 1, s: ' entity', l: 'MCA incorporated' },
          ].map((m, i) => (
            <Reveal key={m.l} delay={i * 90}>
              <p className="font-display font-extrabold text-white text-4xl">
                <CountUp to={m.to} suffix={m.s} />
              </p>
              <p className="mt-1.5 text-sm text-body">{m.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Build with an accountable partner." />
    </>
  );
}
