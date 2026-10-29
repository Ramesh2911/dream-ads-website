import Link from 'next/link';
import type { LegalDoc as LegalDocType } from '../lib/legal';

export default function LegalDoc({ doc }: { doc: LegalDocType }) {
  return (
    <>
      <section className="relative pt-12 pb-10 md:pt-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              {doc.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              {doc.title}
            </h1>
            <p className="mt-3 text-slate-600 leading-relaxed italic">{doc.subtitle} · Operated by {doc.meta[0]?.value}</p>
          </div>

          <div className="mt-8 corp-card p-6 max-w-3xl">
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              {doc.meta.slice(1).map((m) => (
                <div key={m.label} className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
                  <dt className="text-slate-500 shrink-0">{m.label}</dt>
                  <dd className="text-slate-900 font-medium sm:text-right break-words">
                    {m.href ? (
                      <a href={m.href} target={m.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-corp-blue hover:underline">
                        {m.value}
                      </a>
                    ) : (
                      m.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="corp-card p-6 sm:p-9 space-y-8">
            {doc.items.map((item, i) => (
              <div key={`${item.n}-${i}`}>
                {item.h && (
                  <h2 className="font-display font-bold text-slate-900 text-lg sm:text-xl flex items-baseline gap-2.5">
                    <span className="font-mono text-corp-blue text-sm font-bold">{item.n}.</span>
                    {item.h}
                  </h2>
                )}
                {item.sub && (
                  <h3 className="font-display font-semibold text-slate-900 text-sm sm:text-base flex items-baseline gap-2.5">
                    <span className="font-mono text-corp-blue text-xs font-bold">{item.n}</span>
                    {item.sub}
                  </h3>
                )}
                <div className={`${item.h ? 'mt-3' : item.sub ? 'mt-2' : ''} space-y-2.5`}>
                  {item.blocks.map((b, j) => {
                    if (b.type === 'list')
                      return (
                        <ul key={j} className="space-y-1.5 pl-5 list-disc marker:text-corp-blue text-sm text-slate-600 leading-relaxed">
                          {b.items?.map((li) => (
                            <li key={li}>{li}</li>
                          ))}
                        </ul>
                      );
                    if (b.type === 'ordered')
                      return (
                        <ol key={j} className="space-y-1.5 pl-6 list-decimal marker:text-corp-blue marker:font-semibold text-sm text-slate-600 leading-relaxed">
                          {b.items?.map((li) => (
                            <li key={li}>{li}</li>
                          ))}
                        </ol>
                      );
                    if (b.type === 'note')
                      return (
                        <p key={j} className="text-[13px] text-slate-500 leading-relaxed italic border-l-2 border-blue-200 pl-3">
                          {b.text}
                        </p>
                      );
                    return (
                      <p key={j} className="text-sm text-slate-600 leading-relaxed">
                        {b.text}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500 text-center">
            Questions about this document?{' '}
            <Link href="/contact" className="text-corp-blue font-semibold hover:underline">
              Contact us
            </Link>{' '}
            or email <a href={`mailto:${doc.meta.find((m) => m.label.includes('Email'))?.value ?? ''}`} className="text-corp-blue font-semibold hover:underline">{doc.meta.find((m) => m.label.includes('Email'))?.value}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
