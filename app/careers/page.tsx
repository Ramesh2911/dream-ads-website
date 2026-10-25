import type { Metadata } from 'next';
import { Mail, Users, Zap, BookOpen } from 'lucide-react';
import Reveal from '../../components/Reveal';
import CareerApplyLink from '../../components/CareerApplyLink';
import CTASection from '../../components/CTASection';
import { JOBS } from '../../lib/data';
import { COMPANY } from '../../lib/company';

export const metadata: Metadata = {
  title: 'Careers — Open Roles',
  description:
    'Open roles at Dream Ads Multi Solutions — game, full-stack, Flutter, DevOps, design and intern positions. Remote-friendly.',
};

const PERKS = [
  { icon: Users, t: 'Small squad ownership', d: 'You own modules end-to-end with direct client exposure.' },
  { icon: Zap, t: 'Modern stacks', d: 'TypeScript, Unity, Flutter, Node, cloud — no legacy maintenance traps.' },
  { icon: BookOpen, t: 'Learning budget', d: 'Courses, assets and conference tickets sponsored for growth roles.' },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-12 pb-14 md:pt-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Careers
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Build production systems with us
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Remote-friendly roles across game, product, mobile and infrastructure engineering. Ship real work for real clients from week one.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-14 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-5">
          {PERKS.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="corp-card corp-card-hover p-6 h-full">
                <span className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center mb-3">
                  <p.icon className="w-5 h-5" />
                </span>
                <p className="font-bold text-slate-900 text-sm">{p.t}</p>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Open Roles · {JOBS.length}
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-slate-900">Current openings</h2>
            </div>
          </div>

          <div className="space-y-4">
            {JOBS.map((j, i) => (
              <Reveal key={j.id} delay={i * 60}>
                <article className="corp-card corp-card-hover p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 font-display">{j.title}</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {j.department} · {j.location} · {j.experience}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-corp-blue text-[11px] font-semibold">{j.type}</span>
                      <CareerApplyLink title={j.title} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5 pt-4 border-t border-slate-100">
                    <div>
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Responsibilities</p>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {j.responsibilities.map((r) => (
                          <li key={r} className="flex items-start gap-2"><span className="text-corp-blue mt-0.5">•</span>{r}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Requirements</p>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {j.requirements.map((r) => (
                          <li key={r} className="flex items-start gap-2"><span className="text-emerald-600 mt-0.5">✓</span>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-10 corp-card p-8 text-center">
              <h3 className="font-display text-xl font-extrabold text-slate-900">Don&apos;t see your role?</h3>
              <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
                We hire exceptional engineers year-round. Send an open application with your portfolio or GitHub.
              </p>
              <a
                href={`mailto:${COMPANY.email}?subject=Open%20application`}
                className="btn-corp mt-5 inline-flex !py-3 text-[13px]"
              >
                <Mail className="w-4 h-4" /> Email an open application
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Prefer to hire us instead?" />
    </>
  );
}
