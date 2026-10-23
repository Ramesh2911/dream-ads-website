import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Reveal from '../../components/Reveal';
import ContactForm from '../../components/ContactForm';
import { COMPANY } from '../../lib/company';

export const metadata: Metadata = {
  title: 'Contact — Request a Quote or Talk to Our Team',
  description:
    'Send a project brief, apply for a role or ask about partnerships. We respond within 1 business day.',
};

const CARDS = [
  { icon: Mail, k: 'Email', v: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Phone, k: 'Phone', v: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/\s/g, '')}` },
  { icon: MapPin, k: 'Registered office', v: COMPANY.address },
  { icon: Clock, k: 'Response time', v: 'Within 1 business day (Mon–Sat)' },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-36 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.08),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <p className="chip bg-cyan/10 text-cyan border border-cyan/25 mb-4">CONTACT</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-[1.08]">
              Let&apos;s scope your <span className="grad-text">next build</span>
            </h1>
            <p className="mt-5 text-lg text-body max-w-2xl">
              Three short steps — tell us what you need, share your details, review and send. Attach a brief or CV if helpful.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 grid lg:grid-cols-[1.25fr_0.75fr] gap-6 items-start">
        <Reveal>
          <ContactForm />
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={80}>
            <div className="glass p-6">
              <p className="font-display font-bold text-white mb-4 flex items-center gap-2">
                <MessageCircle className="w-4.5 h-4.5 text-cyan" /> Direct channels
              </p>
              <div className="space-y-3.5">
                {CARDS.map((c) => (
                  <div key={c.k} className="flex gap-3">
                    <span className="w-9 h-9 rounded-lg bg-cyan/12 text-cyan flex items-center justify-center shrink-0">
                      <c.icon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-body/70 font-semibold">{c.k}</p>
                      {c.href ? (
                        <a href={c.href} className="text-sm text-white hover:text-cyan transition-colors break-words">{c.v}</a>
                      ) : (
                        <p className="text-sm text-white leading-relaxed break-words">{c.v}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="glass p-6">
              <p className="flex items-center gap-2 font-display font-bold text-white mb-2.5 text-sm">
                <ShieldCheck className="w-4.5 h-4.5 text-cyan" /> Your data stays safe
              </p>
              <p className="text-xs text-body leading-relaxed">
                Submissions are stored securely in our own systems — never sold or shared with third-party marketers.
                Questions? Read our <Link href="/privacy" className="text-cyan hover:underline">privacy policy</Link>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass p-6 bg-gradient-to-br from-cyan/[0.07] to-indigo/[0.07]">
              <p className="font-display font-bold text-white mb-2 text-sm">Prefer a number first?</p>
              <p className="text-xs text-body leading-relaxed mb-4">
                Run the instant estimator to get a budget band before we talk.
              </p>
              <Link href="/calculator" className="btn-ghost !py-2.5 text-[13px] w-full justify-center">
                Open cost calculator
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
