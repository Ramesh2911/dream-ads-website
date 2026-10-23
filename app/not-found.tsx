import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-28 px-5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.07),transparent_60%)]" />
      <div className="relative text-center max-w-lg">
        <span className="w-16 h-16 rounded-2xl bg-grad-cyan flex items-center justify-center mx-auto shadow-glow-cyan">
          <Compass className="w-8 h-8 text-obsidian" />
        </span>
        <p className="font-display font-extrabold text-6xl text-white mt-7 tracking-tight">404</p>
        <h1 className="font-display text-2xl font-bold mt-3">This route hasn&apos;t been engineered yet</h1>
        <p className="mt-3 text-body text-sm">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Head back and try another path.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <Link href="/contact" className="btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
