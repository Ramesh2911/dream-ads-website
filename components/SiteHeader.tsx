'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../lib/company';

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || open ? 'glass-nav shadow-lg shadow-black/40' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-[68px]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow-cyan">
            <Image src="/logo.jpeg" alt="Dream Ads Multi Solutions" fill sizes="40px" className="object-cover" priority />
          </div>
          <div className="leading-tight">
            <p className="font-display font-bold text-white text-[15px] tracking-tight">
              Dream Ads <span className="text-cyan">Multi Solutions</span>
            </p>
            <p className="text-[10px] text-body/70 uppercase tracking-[0.14em]">Software &amp; Game Engineering</p>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => {
            const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                  active ? 'text-cyan bg-cyan/10' : 'text-body hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden sm:inline-flex btn-primary !py-2.5 !px-4 text-[13px]">
            Request a Quote <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="xl:hidden p-2 rounded-lg text-body hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`xl:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="mx-4 mb-3 p-2 rounded-2xl bg-obsidian/95 backdrop-blur-xl border border-white/[0.08] shadow-2xl">
          {NAV_LINKS.map((l) => {
            const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  active ? 'bg-cyan/10 text-cyan' : 'text-body hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-grad-cyan text-obsidian shadow-glow-cyan">
            Request a Quote <ArrowUpRight className="w-4 h-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
