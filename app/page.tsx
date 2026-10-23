import Link from 'next/link';
import {
  Gamepad2, Building2, Smartphone, Cloud, Code2, ArrowUpRight, ArrowRight,
  ShieldCheck, Gauge, Users, Server, Terminal, Layers,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import Magnetic from '../components/Magnetic';
import ParticleCanvas from '../components/ParticleCanvas';
import EstimatorWidget from '../components/EstimatorWidget';
import { SERVICES, PROJECTS } from '../lib/data';

export default function Home() {
  return (
    <>
      <Hero />
      <TechTicker />
      <BentoGrid />
      <Metrics />
      <EstimatorSection />
      <FeaturedWork />
      <ProcessStrip />
      <CTA />
    </>
  );
}

/* ============ HERO ============ */
function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <ParticleCanvas className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0B0F17_78%)]" />
        <div className="absolute -top-40 left-1/4 w-[520px] h-[520px] rounded-full bg-cyan/10 blur-[130px]" />
        <div className="absolute bottom-0 right-1/5 w-[460px] h-[460px] rounded-full bg-indigo/15 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/25 text-cyan text-xs font-semibold mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
              MCA Incorporated · 28 July 2026 · West Bengal, India
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-[2.4rem] leading-[1.07] sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight">
              Architecting Next-Generation{' '}
              <span className="grad-text">Digital Experiences</span> &amp; Scalable{' '}
              <span className="grad-text">Enterprise Software.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-lg sm:text-xl text-body max-w-2xl leading-relaxed">
              Multi-disciplinary tech execution across <span className="text-white font-medium">games</span>,{' '}
              <span className="text-white font-medium">mobile apps</span> and{' '}
              <span className="text-white font-medium">custom office solutions</span> — engineered by Dream Ads
              Multi Solutions Private Limited for teams that need enterprise-grade delivery.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Magnetic href="/contact" className="btn-primary !px-7 !py-4">
                Request a Quote <ArrowUpRight className="w-4 h-4" />
              </Magnetic>
              <Magnetic href="/portfolio" className="btn-ghost !px-7 !py-4">
                View our work <ArrowRight className="w-4 h-4" />
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-11 grid grid-cols-3 gap-3 max-w-lg">
              {[
                { icon: Gauge, l: 'Crash-free', v: '99.5%', s: 'sessions' },
                { icon: Users, l: 'CCU shipped', v: '50K', s: 'peak' },
                { icon: ShieldCheck, l: 'Audited', v: 'RBAC', s: 'by default' },
              ].map((s) => (
                <div key={s.l} className="glass p-3.5 text-center">
                  <s.icon className="w-4 h-4 text-cyan mx-auto mb-1.5" />
                  <p className="font-display font-bold text-white text-lg leading-none">{s.v}</p>
                  <p className="text-[10px] text-body/70 mt-1">{s.l} · {s.s}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Console / terminal card */}
        <Reveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-5 bg-grad-indigo/25 blur-3xl rounded-full" />
            <div className="relative glass p-0 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-2 text-[11px] font-mono text-body/60">dreamads — deploy.sh</span>
              </div>
              <div className="p-5 font-mono text-[12.5px] leading-relaxed space-y-2.5">
                <p className="text-body/70">$ dream-ads build --target <span className="text-cyan">all-platforms</span></p>
                <p className="text-[#28C840]">✓ compiling game engine modules ......... 1,204 files</p>
                <p className="text-[#28C840]">✓ bundling enterprise ERP suite ......... 892 files</p>
                <p className="text-[#28C840]">✓ mobile pipelines (android/ios) ......... passed</p>
                <p className="text-[#28C840]">✓ infra: nginx + docker + backups ........ healthy</p>
                <p className="text-indigo">→ deploying to production cluster ......... <span className="text-cyan">live</span></p>
                <p className="text-body/70 pt-1">
                  $ <span className="inline-block w-2 h-4 bg-cyan align-middle animate-pulse-dot" />
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ TECH TICKER ============ */
function TechTicker() {
  const items = ['Unity', 'Three.js', 'Next.js', 'React Native', 'Flutter', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'Nginx', 'WebRTC', 'TypeScript', 'AWS'];
  return (
    <div className="relative border-y border-white/[0.07] bg-[#080B12]/70 py-4 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div className="flex w-max animate-marquee-x gap-10 whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-sm font-mono text-body/50 hover:text-cyan transition-colors">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ============ SERVICES BENTO ============ */
const ICONS = { game: Gamepad2, software: Building2, mobile: Smartphone, web: Code2, cloud: Cloud };

function BentoGrid() {
  return (
    <section id="services" className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28">
      <Reveal className="max-w-2xl mb-12">
        <p className="chip bg-cyan/10 text-cyan border border-cyan/25 mb-4">CORE SERVICES</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          Five verticals. <span className="grad-text">One engineering standard.</span>
        </h2>
        <p className="mt-4 text-body text-lg">
          Games, enterprise software, mobile, web and cloud — delivered with the same architecture discipline.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          const big = i === 0 || i === 3;
          return (
            <Reveal key={s.slug} delay={i * 70} className={big ? 'lg:row-span-1 lg:col-span-1' : ''}>
              <Link
                href={`/services/${s.slug}`}
                className={`glow-card glass p-6 h-full flex flex-col group ${big ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                      s.accent === 'cyan' ? 'bg-cyan/15 text-cyan shadow-glow-cyan' : 'bg-indigo/15 text-indigo shadow-glow-indigo'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-body/30 group-hover:text-cyan transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-body leading-relaxed flex-1">{s.short}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.stack.slice(0, 4).map((t) => (
                    <span key={t} className="chip bg-white/[0.04] border border-white/[0.08] text-body/70 text-[10.5px]">{t}</span>
                  ))}
                </div>
              </Link>
            </Reveal>
          );
        })}

        {/* CTA cell */}
        <Reveal delay={340}>
          <div className="glow-card glass p-6 h-full flex flex-col justify-center items-start bg-gradient-to-br from-cyan/[0.08] to-indigo/[0.08]">
            <Layers className="w-7 h-7 text-cyan mb-3" />
            <h3 className="font-display font-bold text-white">Not sure where to start?</h3>
            <p className="mt-2 text-sm text-body flex-1">Run the instant cost estimator and get a scope range in seconds.</p>
            <Link href="/calculator" className="btn-primary mt-4 !py-2.5 text-[13px]">Open Calculator <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ METRICS ============ */
function Metrics() {
  const items = [
    { icon: Terminal, to: 128, suffix: '+', label: 'Projects delivered', sub: 'across 5 verticals' },
    { icon: Server, to: 99, suffix: '%', label: 'System uptime', sub: 'monitored fleets' },
    { icon: Code2, to: 2, suffix: 'M+', label: 'Lines of code', sub: 'maintained' },
    { icon: ShieldCheck, to: 40, suffix: '+', label: 'Cloud architectures', sub: 'verified & documented' },
  ];
  return (
    <section className="relative border-y border-white/[0.07] bg-[#080B12]/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((m, i) => (
          <Reveal key={m.label} delay={i * 90}>
            <div className="glow-card glass p-6 text-center h-full">
              <m.icon className="w-5 h-5 text-cyan mx-auto mb-3" />
              <p className="font-display font-extrabold text-white text-3xl sm:text-4xl tracking-tight">
                <CountUp to={m.to} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-white/90">{m.label}</p>
              <p className="text-xs text-body/60 mt-0.5">{m.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============ ESTIMATOR ============ */
function EstimatorSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
      <Reveal>
        <p className="chip bg-indigo/15 text-indigo border border-indigo/30 mb-4">LIVE ESTIMATOR</p>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight">
          Know your <span className="grad-text">scope range</span> before you talk to sales.
        </h2>
        <p className="mt-4 text-body leading-relaxed">
          Pick a platform, stack on features, choose your timeline — the estimator returns an instant budget band and
          duration so your planning starts with real numbers.
        </p>
        <ul className="mt-6 space-y-3 text-sm">
          {[
            { icon: IndianRupeeIcon(), t: 'Transparent INR ranges', d: 'Based on delivered project data' },
            { icon: ClockIcon(), t: 'Duration modeling', d: 'Adjusted by pace & complexity' },
            { icon: ShieldCheck, t: 'No obligation', d: 'Instant — no email required' },
          ].map((x) => (
            <li key={x.t} className="flex items-start gap-3 text-body">
              <span className="mt-0.5 w-6 h-6 rounded-lg bg-cyan/15 flex items-center justify-center shrink-0">
                <span className="text-cyan text-xs">✓</span>
              </span>
              <span><span className="text-white font-medium">{x.t}</span> — {x.d}</span>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={120}>
        <EstimatorWidget />
      </Reveal>
    </section>
  );
}
function IndianRupeeIcon() {
  return <span className="text-cyan text-xs font-bold">₹</span>;
}
function ClockIcon() {
  return <span className="text-cyan text-xs font-bold">◷</span>;
}

/* ============ FEATURED WORK ============ */
function FeaturedWork() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <section className="relative border-t border-white/[0.07] bg-[#080B12]/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-24">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="chip bg-cyan/10 text-cyan border border-cyan/25 mb-4">FEATURED WORK</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">Case studies that shipped</h2>
          </div>
          <Link href="/portfolio" className="btn-ghost shrink-0 self-start">Full portfolio <ArrowRight className="w-4 h-4" /></Link>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <Link href="/portfolio" className="glow-card glass p-6 h-full flex flex-col group">
                <span className={`chip self-start mb-4 ${p.accent === 'cyan' ? 'bg-cyan/15 text-cyan border border-cyan/30' : 'bg-indigo/15 text-indigo border border-indigo/30'}`}>
                  {p.category}
                </span>
                <h3 className="font-display font-bold text-white group-hover:text-cyan transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-body leading-relaxed flex-1">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((t) => (
                    <span key={t} className="chip bg-white/[0.04] border border-white/[0.08] text-body/70 text-[10.5px] font-mono">{t}</span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PROCESS STRIP ============ */
function ProcessStrip() {
  const steps = [
    { n: '01', t: 'Discover', d: 'Requirements, constraints, success metrics' },
    { n: '02', t: 'Architect', d: 'System design, stack selection, security' },
    { n: '03', t: 'Build', d: 'Agile sprints, weekly demos, CI/CD' },
    { n: '04', t: 'Operate', d: 'Launch, monitor, iterate, support' },
  ];
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
      <Reveal className="text-center max-w-2xl mx-auto mb-12">
        <p className="chip bg-indigo/15 text-indigo border border-indigo/30 mb-4">HOW WE WORK</p>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold">From discovery to production</h2>
      </Reveal>
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 110}>
            <div className="glow-card glass p-6 h-full">
              <div className="w-12 h-12 rounded-2xl bg-grad-cyan flex items-center justify-center font-display font-extrabold text-obsidian shadow-glow-cyan relative z-10 mb-5">
                {s.n}
              </div>
              <p className="font-display font-bold text-white text-lg">{s.t}</p>
              <p className="mt-1.5 text-sm text-body">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============ CTA ============ */
function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.07]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.10),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Let&apos;s engineer your <span className="grad-text">next system</span>.
          </h2>
          <p className="mt-4 text-body text-lg max-w-xl mx-auto">
            Tell us about your game, app, ERP or platform — we&apos;ll respond with architecture options and a clear estimate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Magnetic href="/contact" className="btn-primary !px-8 !py-4">Request a Quote <ArrowUpRight className="w-4 h-4" /></Magnetic>
            <Magnetic href="/calculator" className="btn-ghost !px-8 !py-4">Try the cost calculator</Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
