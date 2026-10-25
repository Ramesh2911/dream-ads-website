import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CircleCheck, Clock, IndianRupee, Server } from 'lucide-react';
import Reveal from '../../../components/Reveal';
import SectionHead from '../../../components/SectionHead';
import CTASection from '../../../components/CTASection';
import { SERVICES } from '../../../lib/data';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service not found' };
  return { title: service.title, description: service.short };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-10 pb-14 md:pt-14 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-corp-blue mb-6">
            <ArrowLeft className="w-3.5 h-3.5" /> All services
          </Link>
          <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-10 items-start">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold">{service.chip}</span>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                {service.headline}
              </h1>
              <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">{service.description}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href={`/contact?service=${encodeURIComponent(service.title)}&subject=project`} className="btn-corp">
                  Get a quote <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/calculator" className="btn-outline">Estimate cost</Link>
              </div>
            </div>

            {/* quick facts card */}
            <div className="corp-card p-6 shadow-corp-card">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Engagement facts</p>
              <dl className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <IndianRupee className="w-4 h-4 text-corp-blue mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-slate-500 text-xs">Indicative price</dt>
                    <dd className="font-bold text-slate-900 font-mono">{service.price}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-corp-blue mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-slate-500 text-xs">Timeline</dt>
                    <dd className="font-bold text-slate-900">{service.timeline}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Server className="w-4 h-4 text-corp-blue mt-0.5 shrink-0" />
                  <div>
                    <dt className="text-slate-500 text-xs">Track record</dt>
                    <dd className="font-bold text-slate-900">{service.deployments}</dd>
                  </div>
                </div>
              </dl>
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-2.5 py-1.5 inline-block">
                  {service.slaChip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Key Deliverables" title="What you receive" />
          <div className="grid sm:grid-cols-3 gap-5">
            {service.deliverables.map((d, i) => (
              <Reveal key={d} delay={i * 80}>
                <div className="corp-card corp-card-hover p-6 h-full">
                  <span className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
                    <CircleCheck className="w-5 h-5" />
                  </span>
                  <p className="text-sm font-semibold text-slate-900 leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Technology stack</p>
            <div className="flex flex-wrap gap-2">
              {service.stack.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-mono font-medium shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Delivery Process" title="How we ship it" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 80}>
                <div className="corp-card corp-card-hover p-6 h-full relative">
                  <span className="absolute top-5 right-5 font-mono text-2xl font-extrabold text-slate-100">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-sm font-bold text-slate-900 mb-2 font-display">{p.step}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead eyebrow="Explore More" title="Related services" />
          <div className="grid sm:grid-cols-3 gap-5">
            {others.map((o, i) => {
              const OIcon = o.icon;
              return (
                <Reveal key={o.slug} delay={i * 80}>
                  <Link href={`/services/${o.slug}`} className="corp-card corp-card-hover p-5 h-full flex flex-col group block">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center mb-3 group-hover:bg-corp-blue group-hover:text-white transition-colors">
                      <OIcon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-corp-blue transition-colors">{o.title}</p>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed flex-1">{o.short}</p>
                    <span className="mt-3 text-xs font-semibold text-corp-blue inline-flex items-center gap-1">
                      View details <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title={`Ready to start ${service.title.toLowerCase()}?`} />
    </>
  );
}
