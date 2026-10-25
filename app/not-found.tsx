import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <span className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center mx-auto shadow-sm">
          <Search className="w-7 h-7" />
        </span>
        <p className="mt-6 font-mono text-xs font-bold text-corp-blue tracking-widest">ERROR 404</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900">Page not found</h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Head back home or talk to us about your project.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/" className="btn-corp">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
          <Link href="/contact" className="btn-outline">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
