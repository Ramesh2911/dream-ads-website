import { Building2, Landmark, CircleCheck, Mail, Phone } from 'lucide-react';
import { COMPANY } from '../lib/company';

export default function StatutoryStrip() {
  return (
    <div className="bg-slate-50 border-b border-slate-200 text-xs text-slate-600 py-2 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:flex-nowrap items-center justify-between gap-1.5 md:gap-4 w-full">
        {/* Left: statutory badges — single line like reference */}
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-start gap-x-2.5 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800 whitespace-nowrap">
            <Building2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
            <span>CIN: {COMPANY.cin}</span>
          </span>
          <span className="hidden sm:inline text-slate-300 shrink-0">•</span>
          <span className="inline-flex items-center gap-1.5 text-slate-700 whitespace-nowrap">
            <Landmark className="w-3 h-3 text-blue-700 shrink-0" />
            <span>{COMPANY.roc}</span>
          </span>
          <span className="hidden lg:inline text-slate-300 shrink-0">•</span>
          <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-700 font-mono whitespace-nowrap">
            <span>GSTIN: {COMPANY.gstin}</span>
          </span>
          <span className="hidden md:inline text-slate-300 shrink-0">•</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold whitespace-nowrap">
            <CircleCheck className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>Active Statutory Status</span>
          </span>
        </div>

        {/* Right: contact — one line, never breaks */}
        <div className="flex flex-nowrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs whitespace-nowrap">
          <a href={`mailto:${COMPANY.email}`} className="hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 text-slate-600 font-medium whitespace-nowrap">
            <Mail className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="hidden lg:inline">{COMPANY.email}</span>
            <span className="lg:hidden">Email</span>
          </a>
          <span className="text-slate-300">|</span>
          <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-blue-700 transition-colors inline-flex items-center gap-1.5 font-semibold text-slate-800 whitespace-nowrap">
            <Phone className="w-3 h-3 text-blue-700 shrink-0" />
            <span className="whitespace-nowrap">{COMPANY.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
