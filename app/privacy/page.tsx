import type { Metadata } from 'next';
import { ShieldCheck, Database, Mail, Trash2, Cookie, Users } from 'lucide-react';
import Reveal from '../../components/Reveal';
import CTASection from '../../components/CTASection';
import { COMPANY } from '../../lib/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Dream Ads Multi Solutions Private Limited collects, uses and protects personal data submitted through this website.',
};

const SECTIONS = [
  {
    n: '01',
    h: 'Information we collect',
    p: `We collect information you voluntarily provide through our contact and careers forms: your name, email address, phone number, company, project requirements, and any file you choose to attach (such as a CV or brief). We also record basic technical data — IP address and browser user-agent — for spam prevention and security.`,
  },
  {
    n: '02',
    h: 'How we use your information',
    p: `Your details are used solely to respond to your enquiry, prepare quotes, evaluate job applications, and maintain a record of business communication. We do not sell, rent, or trade personal data to third-party marketers, and we do not use your submissions for unrelated advertising.`,
  },
  {
    n: '03',
    h: 'Storage & security',
    p: `Inquiries are stored in our own secured systems with access restricted to authorised team members under role-based access control. Transmissions are encrypted in transit (HTTPS). While no system is perfectly secure, we apply industry-standard technical and organisational measures to protect your data.`,
  },
  {
    n: '04',
    h: 'Cookies & tracking',
    p: `This website does not use advertising or cross-site tracking cookies. We avoid third-party marketing pixels and behavioural profiling scripts.`,
  },
  {
    n: '05',
    h: 'Retention & deletion',
    p: `Business inquiries are retained only as long as needed for the purposes above — typically up to 24 months of last interaction — and are then deleted or anonymised. You may request earlier deletion at any time.`,
  },
  {
    n: '06',
    h: 'Your rights',
    p: `You may request access to, correction of, or deletion of the personal data we hold about you, and you may object to certain processing. To exercise any of these rights, email us — we will respond within a reasonable period, typically within 30 days.`,
  },
  {
    n: '07',
    h: 'Service providers',
    p: `We may use processors for essential infrastructure (hosting, email delivery) who process data strictly on our instructions and under contractual confidentiality obligations. We do not permit them to use your data for their own purposes.`,
  },
  {
    n: '08',
    h: 'Changes & contact',
    p: `We may update this policy to reflect operational or legal changes; the latest version will always be published on this page. Questions about this policy or your data can be directed to the contact details below.`,
  },
];

const HIGHLIGHTS = [
  { icon: Users, t: 'No data selling', d: 'Personal data is never sold or shared with ad networks.' },
  { icon: Cookie, t: 'No ad cookies', d: 'No third-party tracking pixels or behavioural ads.' },
  { icon: Database, t: 'Own systems', d: 'Stored in our secured databases with RBAC access.' },
  { icon: Trash2, t: 'Deletable on request', d: 'Ask us to erase your data at any time.' },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-36 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.08),transparent_55%)]" />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="chip bg-cyan/10 text-cyan border border-cyan/25 mb-4">LEGAL</p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Privacy <span className="grad-text">Policy</span>
            </h1>
            <p className="mt-4 text-body">
              Last updated: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} ·{' '}
              {COMPANY.legalName}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-14">
        <Reveal>
          <div className="glass p-6 mb-8 flex items-start gap-4">
            <span className="w-11 h-11 rounded-xl bg-grad-cyan flex items-center justify-center shadow-glow-cyan shrink-0">
              <ShieldCheck className="w-5 h-5 text-obsidian" />
            </span>
            <p className="text-sm text-body leading-relaxed">
              This policy explains what happens to the information you share with {COMPANY.legalName} through this
              website. Short version: we only collect what we need to reply to you, we keep it in our own systems, and
              we never sell it.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.t} delay={i * 70}>
              <div className="glow-card glass p-5 h-full">
                <span className="w-10 h-10 rounded-xl bg-cyan/12 text-cyan flex items-center justify-center mb-3">
                  <h.icon className="w-5 h-5" />
                </span>
                <p className="font-display font-bold text-white text-sm">{h.t}</p>
                <p className="mt-1.5 text-xs text-body">{h.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="space-y-4">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.n} delay={i * 40}>
              <div className="glass p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-cyan">{s.n}</span>
                  <h2 className="font-display font-bold text-white text-lg">{s.h}</h2>
                </div>
                <p className="text-sm text-body leading-relaxed">{s.p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="glass p-6 mt-6">
            <p className="flex items-center gap-2 font-display font-bold text-white mb-3">
              <Mail className="w-4.5 h-4.5 text-cyan" /> Contact for privacy matters
            </p>
            <p className="text-sm text-body">
              Email: <a href={`mailto:${COMPANY.email}`} className="text-cyan hover:underline">{COMPANY.email}</a>
              <br />
              Registered office: {COMPANY.address}
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection title="Questions before you reach out?" text="Read how we work, what we build, and what previous systems we’ve delivered." />
    </>
  );
}
