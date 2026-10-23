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
    <section className="relative overflow-hidden border-t border-white/[0.07]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.10),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 py-20 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">{title}</h2>
          <p className="mt-4 text-body text-lg max-w-xl mx-auto">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary !px-8 !py-4">
              Request a Quote <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/calculator" className="btn-ghost !px-8 !py-4">
              Try the cost calculator
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
