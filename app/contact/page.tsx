import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Phone, Clock, Calculator } from 'lucide-react';
import ContactForm from '../../components/ContactForm';
import WhatsAppIcon from '../../components/WhatsAppIcon';
import Reveal from '../../components/Reveal';
import { COMPANY } from '../../lib/company';

export const metadata: Metadata = {
  title: 'Contact — Schedule a Consultation',
  description:
    'Reach Dream Ads Multi Solutions — Murshidabad, West Bengal. 24-hour response SLA, mutual NDA before technical deep-dives.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-12 pb-14 md:pt-16 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/70 via-white to-white pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Contact
            </span>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Let&apos;s talk about your project
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Fill the wizard or reach us directly — mutual NDA covered, 24-hour response SLA, milestone-based delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <div className="corp-card p-6">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Direct lines</p>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">Email</p>
                      <a href={`mailto:${COMPANY.email}`} className="font-medium text-slate-900 hover:text-corp-blue break-all">{COMPANY.email}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500">Phone</p>
                      <a href={`tel:${COMPANY.phoneRaw}`} className="font-medium text-slate-900 hover:text-corp-blue">{COMPANY.phone}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500">WhatsApp</p>
                      <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-emerald-700 hover:underline">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500">Business hours</p>
                      <p className="font-medium text-slate-900">{COMPANY.hours}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-corp-blue flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">Registered office</p>
                      <p className="font-medium text-slate-900 leading-relaxed">{COMPANY.address}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="corp-card p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Not sure of the budget?</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Use the instant estimator — pick platform, features and timeline to get a range in seconds.
                </p>
                <Link href="/calculator" className="btn-outline !py-2.5 text-[13px] w-full justify-center">
                  <Calculator className="w-4 h-4" /> Open cost calculator
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
