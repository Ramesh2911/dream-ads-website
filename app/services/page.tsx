import Link from 'next/link';
import { Gamepad2, Building2, Smartphone, Cloud, Code2, ArrowUpRight, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Reveal from '../../components/Reveal';
import CTASection from '../../components/CTASection';
import { SERVICES } from '../../lib/data';

export const metadata: Metadata = {
  title: 'Services — Game Dev, Enterprise Software, Mobile, Web & Cloud',
  description:
    'Five engineering verticals: game development, custom ERP/CRM enterprise software, mobile applications, web/SaaS platforms and cloud infrastructure.',
};

const ICONS = { game: Gamepad2, software: Building2, mobile: Smartphone, web: Code2, cloud: Cloud };

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.08),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="chip bg-cyan/10 text-cyan border border-cyan/25 mb-4">SERVICES</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-[1.08]">
              Full-stack engineering across <span className="grad-text">five verticals</span>
            </h1>
            <p className="mt-5 text-lg text-body max-w-2xl">
              Each vertical runs the same delivery standard: discovery, architecture, iterative build, hardening and
              operational handover.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  href={`/services/${s.slug}`}
                  className={`glow-card glass p-7 h-full flex flex-col group ${i === 0 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        s.accent === 'cyan' ? 'bg-cyan/15 text-cyan shadow-glow-cyan' : 'bg-indigo/15 text-indigo shadow-glow-indigo'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-body/30 group-hover:text-cyan transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <h2 className="font-display font-bold text-white text-xl">{s.title}</h2>
                  <p className="mt-2.5 text-body leading-relaxed flex-1">{s.short}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.stack.map((t) => (
                      <span key={t} className="chip bg-white/[0.04] border border-white/[0.08] text-body/70 text-[11px] font-mono">{t}</span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-cyan text-sm font-semibold">
                    View details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
