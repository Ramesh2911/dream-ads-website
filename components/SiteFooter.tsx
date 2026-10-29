import Link from 'next/link';
import Image from 'next/image';
import { Globe, Mail, Phone, MapPin, Clock, Building2, Landmark, Shield } from 'lucide-react';
import { COMPANY, NAV_LINKS, FOOTER_EXTRA_LINKS } from '../lib/company';
import { SERVICES } from '../lib/data';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 relative text-slate-600 w-full" aria-label="Official Corporate Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1-2: brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <Image src="/logo.jpeg" alt={COMPANY.legalName} width={44} height={44} className="h-9 md:h-11 w-auto object-contain rounded" />
              <div>
                <p className="font-bold text-slate-900 leading-tight">{COMPANY.shortName} Pvt Ltd</p>
                <p className="text-[11px] text-slate-500">{COMPANY.tagline}</p>
              </div>
            </Link>
            <div className="text-xs text-slate-500 space-y-1 font-mono">
              <p><span className="font-bold text-slate-700">CIN:</span> {COMPANY.cin}</p>
              <p><span className="font-bold text-slate-700">GSTIN:</span> {COMPANY.gstin} · <span className="font-bold text-slate-700">PAN:</span> {COMPANY.pan}</p>
              <p><span className="font-bold text-slate-700">RoC:</span> Kolkata (WB) · <span className="font-bold text-slate-700">Inc.:</span> {COMPANY.incorporated}</p>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Enterprise-grade digital software and game engineering company delivering games, custom office systems,
              mobile apps, SaaS platforms and cloud architecture.
            </p>
            <div className="flex items-center gap-2">
              <a href={`https://${COMPANY.email.split('@')[1]}`} target="_blank" rel="noopener noreferrer" aria-label="Official Website"
                className="w-8 h-8 rounded bg-slate-50 border border-slate-200 hover:text-corp-blue hover:border-blue-400 transition-all flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </a>
              <a href={`mailto:${COMPANY.email}`} aria-label="Official Corporate Email"
                className="w-8 h-8 rounded bg-slate-50 border border-slate-200 hover:text-corp-blue hover:border-blue-400 transition-all flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </a>
              <a href={`tel:${COMPANY.phoneRaw}`} aria-label="Official Corporate Phone"
                className="w-8 h-8 rounded bg-slate-50 border border-slate-200 hover:text-corp-blue hover:border-blue-400 transition-all flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: services */}
          <div>
            <p className="font-mono font-bold uppercase text-slate-900 text-xs tracking-wider mb-4">Services &amp; Architecture</p>
            <ul className="space-y-2.5 text-xs">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-corp-blue transition-colors">{s.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/pricing" className="text-corp-blue font-semibold hover:text-corp-blueHover transition-colors">
                  Enterprise Pricing Matrix
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: governance & pages */}
          <div>
            <p className="font-mono font-bold uppercase text-slate-900 text-xs tracking-wider mb-4">Governance &amp; Trust</p>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/about" className="hover:text-corp-blue transition-colors">About the Company</Link></li>
              <li><Link href="/about#leadership" className="hover:text-corp-blue transition-colors">Board of Directors</Link></li>
              <li><Link href="/about#governance" className="hover:text-corp-blue transition-colors">Statutory Registry</Link></li>
              <li><Link href="/faq" className="hover:text-corp-blue transition-colors">Corporate FAQs</Link></li>
              <li><Link href="/portfolio" className="hover:text-corp-blue transition-colors">Portfolio &amp; Case Studies</Link></li>
              <li><Link href="/careers" className="hover:text-corp-blue transition-colors">Careers</Link></li>
              <li><Link href="/calculator" className="hover:text-corp-blue transition-colors">Cost Calculator</Link></li>
              <li>
                <Link href="/privacy" className="text-corp-blue font-semibold hover:text-corp-blueHover transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: registered office */}
          <div>
            <p className="font-mono font-bold uppercase text-slate-900 text-xs tracking-wider mb-4">Registered Office</p>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-corp-blue shrink-0 mt-0.5" />
                <span className="text-slate-600">{COMPANY.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-corp-blue shrink-0" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-corp-blue transition-colors break-all">{COMPANY.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-corp-blue shrink-0" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="font-semibold text-slate-800 hover:text-corp-blue transition-colors">{COMPANY.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-corp-blue shrink-0" />
                <span>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {year} {COMPANY.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {FOOTER_EXTRA_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-corp-blue transition-colors">{l.label}</Link>
            ))}
            <p className="font-mono text-[11px]">CIN {COMPANY.cin} · GSTIN {COMPANY.gstin}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
