import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

export default function CTASection({
  title = 'Let’s engineer your next system.',
  text = 'Tell us about your game, app, ERP or platform — we’ll respond with architecture options and a clear estimate.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-white">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">{title}</h2>
          <p className="mt-4 text-slate-600 text-lg max-w-xl mx-auto leading-relaxed">{text}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="btn-corp !px-8 !py-4 w-full sm:w-auto">
              Request a Quote <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/calculator" className="btn-outline !px-8 !py-4 w-full sm:w-auto">
              Try the cost calculator
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
