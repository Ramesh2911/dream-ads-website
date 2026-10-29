import Link from 'next/link';
import {
  MapPin, ShieldCheck, Clock, ArrowRight, Building2, CircleCheck,
  TrendingUp, Droplets, PieChart, Server, Activity, ArrowUpRight, Gauge, Users, Code2,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import CountUp from '../components/CountUp';
import TiltCard from '../components/TiltCard';
import SectionHead from '../components/SectionHead';
import CandlestickChart from '../components/CandlestickChart';
import { COMPANY } from '../lib/company';
import { SERVICES, MILESTONES, PROJECTS } from '../lib/data';

const TONE_ICON = { blue: 'bg-blue-50 border-blue-100 text-blue-700', emerald: 'bg-emerald-50 border-emerald-100 text-emerald-700', indigo: 'bg-indigo-50 border-indigo-100 text-indigo-700', purple: 'bg-purple-50 border-purple-100 text-purple-700' } as const;
const TONE_CHIP = { blue: 'text-emerald-700 bg-emerald-50 border-emerald-100', emerald: 'text-emerald-700 bg-emerald-50 border-emerald-100', indigo: 'text-blue-700 bg-blue-50 border-blue-100', purple: 'text-purple-700 bg-purple-50 border-purple-100' } as const;
const TONE_DOT = { blue: 'bg-emerald-500', emerald: 'bg-blue-600', indigo: 'bg-indigo-500', purple: 'bg-emerald-500' } as const;
const MILESTONE_ICONS = [Server, ShieldCheck, Activity, Code2];

export default function Home() {
  return (
    <>
      <Hero />
      <Milestones />
      <ServicesPreview />
      <GrowthEngine />
      <FeaturedWork />
      <CTA />
    </>
  );
}

/* ============================== HERO ============================== */

function Hero() {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 bg-white overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse-dot" />
              <span>Web, Apps, Games &amp; Enterprise IT</span>
              <span className="text-blue-300">|</span>
              <span className="font-mono text-blue-800">MCA Registered</span>
            </span>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] font-display">
                We build{' '}
                <span className="text-corp-blue">websites, mobile apps &amp; games</span> and the software that runs your
                business
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {COMPANY.legalName} is an MCA-registered software company from Murshidabad, West Bengal. We build
                websites, Android &amp; iOS apps, 3D games, ERP systems and the cloud setup that keeps them running.
              </p>
            </div>

            {/* credentials card */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-sm space-y-3.5 text-xs text-slate-700 w-full">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-corp-blue shrink-0 shadow-sm mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-slate-900 text-sm">Registered Corporate Office (RoC Kolkata)</div>
                  <p className="font-bold text-slate-800 text-xs sm:text-sm leading-relaxed">{COMPANY.address}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-slate-200/80 font-mono text-[11px]">
                <div>
                  <span className="text-slate-500">Statutory CIN:</span>
                  <span className="font-bold text-slate-800 block text-[10px] sm:text-[11px]">{COMPANY.cin}</span>
                </div>
                <div>
                  <span className="text-slate-500">GSTIN / PAN:</span>
                  <span className="font-bold text-slate-800 block text-[10px] sm:text-[11px]">{COMPANY.gstin} / {COMPANY.pan}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-500">Registry Status:</span>
                  <span className="font-bold text-emerald-700 block flex items-center gap-1">
                    <CircleCheck className="w-3 h-3" /> Active (MCA Verified)
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <Link href="/services" className="btn-corp w-full sm:w-auto">
                See our services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline w-full sm:w-auto">
                Talk to us
                <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 pt-1 font-medium">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-corp-blue" /> Mutual NDA Covered</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-corp-blue" /> 24-Hour Response SLA</span>
            </div>
          </div>

          {/* Right: 3D card */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <TiltCard className="relative w-full max-w-lg rounded-2xl bg-white p-3 border border-slate-200 shadow-corp-3d cursor-pointer">
              {/* floating badge */}
              <div className="animate-float-soft absolute -top-4 -right-3 sm:-right-4 z-30 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center gap-2.5 text-xs text-slate-900 font-semibold">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>Corporate HQ • Global Operations</span>
              </div>

              {/* building image */}
              <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-[4/3] border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt={`${COMPANY.shortName} Corporate Headquarters`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <div className="text-[11px] font-mono tracking-widest uppercase text-blue-300 font-semibold">
                    {COMPANY.shortName}
                  </div>
                  <div className="text-sm font-bold text-white flex items-center justify-between mt-0.5 gap-2">
                    <span>Executive Technology Center</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-600/80 text-white font-semibold shrink-0">Tier-4 NOC</span>
                  </div>
                </div>
              </div>

              {/* metrics */}
              <div className="p-4 pt-3.5 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-base font-bold font-mono text-slate-900">99.9%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-medium">Uptime SLA</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-base font-bold font-mono text-corp-blue">128+</div>
                  <div className="text-[10px] text-slate-500 uppercase font-medium">Deployments</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="text-base font-bold font-mono text-slate-900">24/7</div>
                  <div className="text-[10px] text-slate-500 uppercase font-medium">Monitoring</div>
                </div>
              </div>

              <div className="text-[10px] text-center text-slate-400 font-mono pt-1 pb-1">
                Interactive 3D Card — move cursor to tilt
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== MILESTONES ============================== */

function Milestones() {
  return (
    <section id="milestones" className="py-14 md:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <SectionHead
          eyebrow="By The Numbers"
          title="Milestones so far"
          mono="Updated: 2026"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {MILESTONES.map((m, i) => {
            const Icon = MILESTONE_ICONS[i];
            return (
              <Reveal key={m.label} delay={i * 80}>
                <div className="corp-card corp-card-hover p-6 relative group overflow-hidden h-full">
                  <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none ${TONE_ICON[m.tone].split(' ')[0]}/50 group-hover:${TONE_ICON[m.tone].split(' ')[0]}/60 transition-colors`} />
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg group-hover:scale-110 transition-transform shadow-sm ${TONE_ICON[m.tone]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${TONE_CHIP[m.tone]}`}>
                      {m.chip}
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tracking-tight stat-number-3d">
                    <CountUp to={m.value} decimals={m.decimals ?? 0} suffix={m.suffix} />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-2">{m.label}</div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================== SERVICES PREVIEW ============================== */

function ServicesPreview() {
  return (
    <section id="services" className="py-20 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHead
          eyebrow="What We Do"
          title="Services we deliver"
          lede="Nine services, one team — web, mobile, games, ERP, cloud and the ad work that pays for them."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.slug} delay={i * 50}>
                <article className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-corp-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-200/60 flex items-center justify-center text-corp-blue group-hover:bg-corp-blue group-hover:text-white transition-colors duration-200 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-300">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-corp-blue transition-colors font-display">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">{s.short}</p>
                    <div className="pt-2 pb-4 border-t border-slate-100">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-2.5">Key Deliverables</div>
                      <ul className="space-y-2 text-xs text-slate-700 font-medium">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2">
                            <CircleCheck className="w-3.5 h-3.5 text-corp-blue mt-0.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-mono font-semibold text-slate-700">
                      <Gauge className="w-3 h-3 text-corp-blue" />
                      <span>{s.slaChip}</span>
                    </div>
                    <Link href={`/services/${s.slug}`} className="flex items-center justify-between text-xs font-semibold text-corp-blue hover:text-corp-blueHover group/link">
                      <span>View details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-corp">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============================== GROWTH ENGINE ============================== */

function GrowthEngine() {
  const kpis = [
    { label: 'Year On Year Growth', value: '+128%', tone: 'text-emerald-600', dot: 'bg-emerald-500', icon: TrendingUp },
    { label: 'Uptime', value: '99.9%', tone: 'text-slate-900', dot: 'bg-blue-600', icon: Droplets },
    { label: 'Client Return', value: '4.2x ROI', tone: 'text-corp-blue', dot: 'bg-indigo-500', icon: PieChart },
    { label: 'Traffic Handled', value: '860K req/s', tone: 'text-slate-900', dot: 'bg-emerald-500', icon: Activity },
  ];

  return (
    <section id="growth-engine" className="py-20 md:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-50/40 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <span className="eyebrow-emerald">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot" />
              Live Project Numbers
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
              How we&apos;re growing
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Figures from client projects currently in production — counted after delivery, not estimated on paper.
            </p>
          </div>
          {/* beacon */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 sm:px-4 shadow-sm flex items-center gap-3 shrink-0">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="beacon-ring" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 self-center ml-0.5" />
            </span>
            <div className="font-mono text-[11px] leading-tight">
              <p className="text-slate-900 font-bold">ON-TIME DELIVERY</p>
              <p className="text-slate-500">100% Shipped • 0 Missed SLAs</p>
            </div>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((k) => (
            <div key={k.label} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-sm">
              <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1">{k.label}</p>
              <p className={`text-3xl font-extrabold font-mono stat-number-3d ${k.tone}`}>{k.value}</p>
              <p className="flex items-center gap-1.5 mt-2 text-[11px] text-slate-600 font-medium">
                <span className={`w-1.5 h-1.5 rounded-full ${k.dot}`} /> Verified
              </p>
            </div>
          ))}
        </div>

        <CandlestickChart />

        {/* bottom accents */}
        <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {[
            { icon: TrendingUp, bg: 'bg-emerald-100', fg: 'text-emerald-700', title: 'Work Ships Weekly', sub: 'Steady progress instead of one big drop at the end.' },
            { icon: Droplets, bg: 'bg-blue-100', fg: 'text-blue-700', title: 'Signed Off Step By Step', sub: 'You approve each milestone before the next one starts.' },
            { icon: PieChart, bg: 'bg-indigo-100', fg: 'text-indigo-700', title: 'Sensible Budgets', sub: 'Startup-friendly pricing with proper engineering behind it.' },
          ].map((a) => (
            <div key={a.title} className="flex items-start gap-3">
              <div className={`w-7 h-7 rounded-lg ${a.bg} ${a.fg} flex items-center justify-center shrink-0`}>
                <a.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-slate-900">{a.title}</p>
                <p className="text-slate-500 mt-0.5">{a.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== FEATURED WORK ============================== */

function FeaturedWork() {
  const featured = PROJECTS.slice(0, 3);
  return (
    <section className="py-20 md:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHead
          eyebrow="Our Work"
          title="Featured projects"
          lede="Systems that shipped and stayed shipped."
        >
          <Link href="/portfolio" className="btn-outline !py-2.5 !px-4 text-xs mt-4 md:mt-0">
            View Portfolio <ArrowUpRight className="w-4 h-4" />
          </Link>
        </SectionHead>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article className="corp-card corp-card-hover p-6 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-corp-blue font-semibold">
                      {p.category}
                    </span>
                    <Users className="w-4 h-4 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-corp-blue transition-colors font-display">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{p.summary}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.stack.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 border border-slate-200 text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/portfolio" className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-semibold text-corp-blue hover:text-corp-blueHover group/link">
                  <span>Read case study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== CTA ============================== */

function CTA() {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          Get Started
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
          Tell us what you need built.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Talk to our engineers about your project. Mutual NDA, a reply within 24 hours and payment by milestones.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact" className="btn-corp w-full sm:w-auto">
            Request a Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/calculator" className="btn-outline w-full sm:w-auto">
            Estimate Your Project
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
          <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5 text-corp-blue" /> MCA Registered Entity</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-corp-blue" /> 100% IP Transfer</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-corp-blue" /> Milestone Delivery</span>
        </div>
      </div>
    </section>
  );
}
