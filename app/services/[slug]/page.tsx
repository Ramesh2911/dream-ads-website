import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Gamepad2, Building2, Smartphone, Cloud, Code2, ArrowUpRight, ArrowRight, CheckCircle2, Cpu, Workflow, Rocket } from 'lucide-react';
import type { Metadata } from 'next';
import Reveal from '../../../components/Reveal';
import CTASection from '../../../components/CTASection';
import { SERVICES } from '../../../lib/data';

const ICONS = { game: Gamepad2, software: Building2, mobile: Smartphone, web: Code2, cloud: Cloud };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) return {};
  return { title: s.title, description: s.short };
}

const PROCESS_ICONS = [Workflow, Cpu, CheckCircle2, Rocket];

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const Icon = ICONS[s.icon];
  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className={`absolute inset-0 ${s.accent === 'cyan' ? 'bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.09),transparent_55%)]' : 'bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_55%)]'}`} />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <nav className="flex items-center gap-2 text-sm text-body/70 mb-6">
              <Link href="/services" className="hover:text-cyan transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{s.title}</span>
            </nav>
            <div className="flex items-center gap-4 mb-5">
              <span className={`w-16 h-16 rounded-2xl flex items-center justify-center ${s.accent === 'cyan' ? 'bg-cyan/15 text-cyan shadow-glow-cyan' : 'bg-indigo/15 text-indigo shadow-glow-indigo'}`}>
                <Icon className="w-8 h-8" />
              </span>
              <span className={`chip ${s.accent === 'cyan' ? 'bg-cyan/10 text-cyan border border-cyan/25' : 'bg-indigo/15 text-indigo border border-indigo/30'}`}>{s.title}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight max-w-3xl leading-[1.1]">
              {s.headline}
            </h1>
            <p className="mt-5 text-lg text-body max-w-2xl">{s.description}</p>
          </Reveal>
        </div>
      </section>

      {/* Deliverables + Stack */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-14 grid lg:grid-cols-[1.2fr_0.8fr] gap-4">
        <Reveal>
          <div className="glass p-7 h-full">
            <h2 className="font-display font-bold text-white text-xl mb-5">What you get</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-body text-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 text-cyan shrink-0 mt-0.5" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass p-7 h-full">
            <h2 className="font-display font-bold text-white text-xl mb-5">Technology</h2>
            <div className="flex flex-wrap gap-2">
              {s.stack.map((t) => (
                <span key={t} className="chip bg-white/[0.04] border border-white/[0.1] text-white/85 font-mono text-xs">{t}</span>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/[0.08]">
              <p className="text-xs text-body/70 uppercase tracking-wider font-semibold mb-3">Typical engagements</p>
              <p className="text-sm text-body">Fixed-scope builds, dedicated squads, or architecture consulting with implementation support.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20">
        <Reveal className="mb-8">
          <p className="chip bg-indigo/15 text-indigo border border-indigo/30 mb-4">DELIVERY PROCESS</p>
          <h2 className="font-display text-3xl font-extrabold">How {s.title.toLowerCase()} gets delivered</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {s.process.map((p, i) => {
            const PIcon = PROCESS_ICONS[i % PROCESS_ICONS.length];
            return (
              <Reveal key={p.step} delay={i * 90}>
                <div className="glow-card glass p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-cyan/12 text-cyan flex items-center justify-center"><PIcon className="w-5 h-5" /></span>
                    <span className="font-mono text-xs text-body/50">0{i + 1}</span>
                  </div>
                  <p className="font-display font-bold text-white">{p.step}</p>
                  <p className="mt-1.5 text-sm text-body leading-relaxed">{p.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-white/[0.07] bg-[#080B12]/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <Reveal className="flex items-end justify-between gap-4 mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold">Explore other verticals</h2>
            <Link href="/services" className="text-cyan text-sm font-semibold hover:underline inline-flex items-center gap-1">All services <ArrowRight className="w-4 h-4" /></Link>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((o, i) => {
              const OIcon = ICONS[o.icon];
              return (
                <Reveal key={o.slug} delay={i * 70}>
                  <Link href={`/services/${o.slug}`} className="glow-card glass p-5 h-full flex flex-col group">
                    <span className="w-11 h-11 rounded-xl bg-white/[0.05] text-cyan flex items-center justify-center mb-3.5 group-hover:bg-cyan/12 transition-colors"><OIcon className="w-5 h-5" /></span>
                    <p className="font-display font-bold text-white text-sm">{o.title}</p>
                    <p className="mt-1.5 text-xs text-body leading-relaxed flex-1 line-clamp-3">{o.short}</p>
                    <span className="mt-3 text-cyan text-xs font-semibold inline-flex items-center gap-1">Details <ArrowUpRight className="w-3.5 h-3.5" /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title={`Ready to start ${s.title.toLowerCase()}?`} />
    </>
  );
}
