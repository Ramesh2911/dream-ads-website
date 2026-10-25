import type { Metadata } from 'next';
import { ShieldCheck, Lock, Eye, Database, FileText, Mail } from 'lucide-react';
import Reveal from '../../components/Reveal';
import { COMPANY } from '../../lib/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Dream Ads Multi Solutions collects, uses and protects personal data — DPDPA-aligned practices for clients, candidates and website visitors.',
};

const SECTIONS = [
  {
    icon: Eye,
    t: 'What we collect',
    d: 'Contact details you submit via inquiry forms (name, email, phone, company, message, optional attachments), and technical metadata such as pages visited and referring URLs collected via privacy-respecting analytics.',
  },
  {
    icon: Database,
    t: 'How we use it',
    d: 'To respond to inquiries, prepare estimates, deliver contracted services, process job applications and improve our website. We never sell personal data or share it with advertisers.',
  },
  {
    icon: Lock,
    t: 'How we protect it',
    d: 'Role-based access controls, audit logging, encrypted transport (TLS), encrypted backups and least-privilege policies. Project data is segregated per client and never reused across engagements without written consent.',
  },
  {
    icon: ShieldCheck,
    t: 'Retention & deletion',
    d: 'Inquiry records are retained up to 24 months for relationship continuity. Candidate data is retained up to 12 months unless you request earlier deletion. Contract data follows statutory retention requirements.',
  },
  {
    icon: FileText,
    t: 'Your rights (DPDPA-aligned)',
    d: 'You may request access, correction or deletion of your personal data, withdraw consent, and lodge complaints with the Data Protection Board. Email us to exercise any of these rights.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-12 pb-14 md:pt-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Legal · Privacy
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Privacy policy
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Last updated: {COMPANY.incorporatedLong}. This policy explains how {COMPANY.legalName} handles personal data across our website, inquiry flows and engagements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.t} delay={i * 70}>
              <div className="corp-card p-6">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display font-bold text-slate-900">{s.t}</h2>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={100}>
            <div className="corp-card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
              <h2 className="font-display font-bold text-slate-900 mb-2">Contact for privacy requests</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Email <a href={`mailto:${COMPANY.email}`} className="font-semibold text-corp-blue hover:underline">{COMPANY.email}</a>{' '}
                with the subject line &ldquo;Privacy request&rdquo;. We respond within 30 days as per DPDPA timelines.
              </p>
              <p className="mt-3 text-xs text-slate-500 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-corp-blue" />
                {COMPANY.legalName} · {COMPANY.address}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
