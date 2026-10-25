import type { ReactNode } from 'react';

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: 'left' | 'center';
  emerald?: boolean;
  mono?: string;
  children?: ReactNode;
}

export default function SectionHead({ eyebrow, title, lede, align = 'left', emerald, mono, children }: SectionHeadProps) {
  const centered = align === 'center';

  if (centered) {
    return (
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className={emerald ? 'eyebrow-emerald' : 'eyebrow'}>
          <span className={emerald ? 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot' : 'eyebrow-dot'} />
          {eyebrow}
          {mono && (
            <>
              <span className={emerald ? 'text-emerald-300' : 'text-blue-300'}>|</span>
              <span className={`font-mono normal-case tracking-normal ${emerald ? 'text-emerald-700' : 'text-blue-800'}`}>{mono}</span>
            </>
          )}
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">{title}</h2>
        {lede && <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{lede}</p>}
        {children}
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
      <div className="max-w-2xl">
        <span className={emerald ? 'eyebrow-emerald' : 'eyebrow'}>
          <span className={emerald ? 'w-2 h-2 rounded-full bg-emerald-500 animate-pulse-dot' : 'eyebrow-dot'} />
          {eyebrow}
          {mono && (
            <>
              <span className={emerald ? 'text-emerald-300' : 'text-blue-300'}>|</span>
              <span className={`font-mono normal-case tracking-normal ${emerald ? 'text-emerald-700' : 'text-blue-800'}`}>{mono}</span>
            </>
          )}
        </span>
        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">{title}</h2>
        {lede && <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{lede}</p>}
      </div>
      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}
