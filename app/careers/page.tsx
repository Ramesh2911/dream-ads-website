import type { Metadata } from 'next';
import { MapPin, Briefcase, GraduationCap, ArrowUpRight, Users, Zap, Heart } from 'lucide-react';
import Reveal from '../../components/Reveal';
import CTASection from '../../components/CTASection';
import { JOBS } from '../../lib/data';
import CareerApplyLink from '../../components/CareerApplyLink';

export const metadata: Metadata = {
  title: 'Careers — Engineering, Design & Game Roles',
  description:
    'Open roles at Dream Ads Multi Solutions: game developers, full-stack Node/React engineers, Flutter devs, DevOps and designers. Remote-friendly.',
};

const PERKS = [
  { icon: Zap, t: 'Real ownership', d: 'Small teams, direct impact, decisions made close to the code.' },
  { icon: Users, t: 'Remote-friendly', d: 'Async-first workflow with optional hybrid days in Murshidabad.' },
  { icon: Heart, t: 'Learning budget', d: 'Conference tickets, courses and certification support.' },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.10),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="chip bg-indigo/15 text-indigo border border-indigo/30 mb-4">CAREERS</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-[1.08]">
              Ship systems that <span className="grad-text">matter</span> — with people who care how they&apos;re built
            </h1>
            <p className="mt-5 text-lg text-body max-w-2xl">
              We&apos;re a founding-stage engineering company hiring builders who want ownership, sharp colleagues and
              work that reaches production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Perks */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-10">
        <div className="grid sm:grid-cols-3 gap-4">
          {PERKS.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <div className="glow-card glass p-5 h-full">
                <span className="w-10 h-10 rounded-xl bg-cyan/12 text-cyan flex items-center justify-center mb-3.5">
                  <p.icon className="w-5 h-5" />
                </span>
                <p className="font-display font-bold text-white text-sm">{p.t}</p>
                <p className="mt-1.5 text-xs text-body leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <Reveal className="flex items-end justify-between gap-4 mb-8 pt-6">
          <div>
            <p className="chip bg-cyan/10 text-cyan border border-cyan/25 mb-4">OPEN ROLES · {JOBS.length}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Current openings</h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {JOBS.map((j, i) => (
            <Reveal key={j.id} delay={i * 60}>
              <div className="glow-card glass p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-display font-bold text-white text-lg">{j.title}</h3>
                      <span className="chip bg-indigo/15 text-indigo border border-indigo/30 text-[11px]">{j.type}</span>
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-body">
                      <span className="inline-flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-cyan" />{j.department}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan" />{j.location}</span>
                      <span className="inline-flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5 text-cyan" />{j.experience}</span>
                    </div>
                  </div>
                  <CareerApplyLink title={j.title} />
                </div>

                <div className="mt-5 pt-5 border-t border-white/[0.08] grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-body/70 mb-2.5">Responsibilities</p>
                    <ul className="space-y-1.5">
                      {j.responsibilities.map((r) => (
                        <li key={r} className="text-sm text-body flex gap-2"><span className="text-cyan">›</span>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-body/70 mb-2.5">Requirements</p>
                    <ul className="space-y-1.5">
                      {j.requirements.map((r) => (
                        <li key={r} className="text-sm text-body flex gap-2"><span className="text-indigo">✓</span>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-8 glass p-7 text-center">
            <p className="font-display font-bold text-white text-lg">Don&apos;t see your role?</p>
            <p className="mt-2 text-sm text-body max-w-xl mx-auto">
              We&apos;re always interested in strong engineers and designers. Send a note about what you build best.
            </p>
            <a href={`mailto:${'dreamadsmultisolutions@gmail.com'}?subject=Open%20application`} className="btn-primary mt-5 inline-flex !py-3 text-[13px]">
              Open application <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </section>

      <CTASection title="Prefer to hire us instead?" text="If you’re here to build a product rather than join — talk to our team about your project." />
    </>
  );
}
