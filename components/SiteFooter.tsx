import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, FileCheck2 } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '../lib/company';

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#080B12]">
      <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid lg:grid-cols-[1.4fr_1fr_1.2fr] gap-10">
        {/* Brand + contact */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 group-hover:shadow-glow-cyan transition-shadow">
              <Image src="/logo.jpeg" alt={COMPANY.legalName} fill sizes="40px" className="object-cover" />
            </div>
            <span className="font-display font-bold text-white">{COMPANY.shortName}</span>
          </Link>
          <p className="text-sm text-body/90 leading-relaxed max-w-sm">
            Enterprise-grade digital software and game engineering company delivering games, custom office systems,
            mobile apps, SaaS platforms and cloud architecture.
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 text-body hover:text-cyan transition-colors">
              <Mail className="w-4 h-4 text-cyan-dim shrink-0" /> {COMPANY.email}
            </a>
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 text-body hover:text-cyan transition-colors">
              <Phone className="w-4 h-4 text-cyan-dim shrink-0" /> {COMPANY.phone}
            </a>
            <p className="flex items-start gap-2.5 text-body">
              <MapPin className="w-4 h-4 text-cyan-dim shrink-0 mt-0.5" /> {COMPANY.address}
            </p>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <p className="font-display font-semibold text-white text-sm mb-4">Sitemap</p>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-body hover:text-cyan transition-colors hover:translate-x-1 inline-block transform duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Statutory */}
        <div>
          <p className="font-display font-semibold text-white text-sm mb-4 flex items-center gap-2">
            <FileCheck2 className="w-4 h-4 text-cyan" /> Statutory Information
          </p>
          <div className="glass p-4 space-y-2 text-[12.5px] font-mono">
            <StatRow label="Legal Entity" value={COMPANY.legalName} />
            <StatRow label="CIN" value={COMPANY.cin} />
            <StatRow label="PAN" value={COMPANY.pan} />
            <StatRow label="GSTIN" value={COMPANY.gstin} />
            <StatRow label="Incorporated" value={COMPANY.incorporated} />
            <StatRow label="Directors" value={COMPANY.directors.map((d) => d.name).join(' & ')} />
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-body/60">
          <p>© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-cyan transition-colors">Privacy Policy</Link>
            <p className="font-mono text-[11px]">CIN {COMPANY.cin} · GSTIN {COMPANY.gstin}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-body/50 w-[86px] shrink-0">{label}</span>
      <span className="text-white/90 break-words">{value}</span>
    </div>
  );
}
