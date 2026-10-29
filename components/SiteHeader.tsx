'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, Mail, Calculator, Briefcase, Shield, FileText } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { NAV_LINKS, FOOTER_EXTRA_LINKS, COMPANY } from '../lib/company';

const EXTRA_ICONS: Record<string, typeof Calculator> = {
  '/calculator': Calculator,
  '/careers': Briefcase,
  '/privacy': Shield,
  '/terms': FileText,
};

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-200 w-full ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Left: logo + brand */}
          <Link href="/" className="flex items-center group focus:outline-none min-w-0 py-1" title={COMPANY.legalName}>
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <Image
                src="/logo.jpeg?v=2"
                alt={`${COMPANY.shortName} Logo`}
                width={40}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain flex-shrink-0 rounded"
                priority
              />
              <div className="flex items-center min-w-0">
                <span className="font-extrabold text-slate-900 text-[10px] sm:text-sm md:text-base whitespace-nowrap tracking-tight">
                  Dream Ads <span className="text-blue-700">Multi Solutions</span> Pvt Ltd
                </span>
              </div>
            </div>
          </Link>

          {/* Center: nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium" aria-label="Main Navigation">
            {NAV_LINKS.map((l) => {
              const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-2.5 lg:px-3 py-1.5 rounded-md transition-colors ${
                    active ? 'text-blue-700 bg-blue-50 font-semibold' : 'text-slate-600 hover:text-blue-700'
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: actions (desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-all shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600 mr-1.5" />
              <span>WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-corp-blue hover:bg-corp-blueHover rounded-md transition-all shadow-sm"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-emerald-600 hover:bg-emerald-50 border border-emerald-200"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden border-t border-slate-200 bg-white px-4 sm:px-6 py-4 space-y-1.5 shadow-lg w-full overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0 border-t-0 py-0'
        }`}
      >
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono mb-2">
          {COMPANY.shortName}
        </div>
        {NAV_LINKS.map((l) => {
          const active = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2.5 px-3 text-sm font-medium rounded-md transition-colors ${
                active ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              {l.label}
            </Link>
          );
        })}
        {FOOTER_EXTRA_LINKS.map((l) => {
          const Icon = EXTRA_ICONS[l.href] ?? Mail;
          const active = pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 py-2.5 px-3 text-sm font-medium rounded-md transition-colors ${
                active ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" /> {l.label}
            </Link>
          );
        })}
        <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-2">
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2.5 px-4 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600 mr-2" />
            <span>WhatsApp ({COMPANY.phone})</span>
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full py-2.5 px-4 text-sm font-semibold text-white bg-corp-blue hover:bg-corp-blueHover rounded-md transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            <span>Contact / Request a Quote</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
