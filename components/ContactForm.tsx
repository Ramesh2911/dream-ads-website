'use client';

import { useMemo, useRef, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  ArrowLeft, ArrowRight, CheckCircle2, Send, Paperclip, X,
  Briefcase, Code2, Handshake, LifeBuoy, MessageSquare,
} from 'lucide-react';
import { SERVICES } from '../lib/data';

const SUBJECTS = [
  { id: 'project', label: 'New project', icon: Code2, hint: 'Game, app, ERP, web or cloud' },
  { id: 'career', label: 'Careers', icon: Briefcase, hint: 'Join the team' },
  { id: 'partnership', label: 'Partnership', icon: Handshake, hint: 'Collaborations & referrals' },
  { id: 'support', label: 'Support', icon: LifeBuoy, hint: 'Existing engagement' },
  { id: 'other', label: 'Something else', icon: MessageSquare, hint: 'General enquiry' },
] as const;

const BUDGETS = ['< ₹1L', '₹1L – ₹3L', '₹3L – ₹8L', '₹8L – ₹20L', '> ₹20L', 'Not sure yet'];
const TIMELINES = ['ASAP', '1 month', '2–3 months', '3–6 months', 'Exploring'];

const schema = z.object({
  subject: z.enum(['project', 'career', 'partnership', 'support', 'other']),
  service: z.string().optional(),
  name: z.string().min(2, 'Enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Tell us a little more (min 10 characters)').max(5000),
});

type FormValues = z.infer<typeof schema>;

function ContactFormInner() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [fileErr, setFileErr] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [serverErr, setServerErr] = useState('');
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const estimate = useMemo(() => {
    const platform = params.get('platform');
    if (!platform) return undefined;
    const features = params.get('features');
    const complexity = params.get('complexity');
    return {
      platform,
      features: features ? features.split(',').filter(Boolean) : undefined,
      timeline: params.get('timeline') ?? undefined,
      complexity: complexity ? Number(complexity) : undefined,
    };
  }, [params]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      subject: (params.get('subject') as FormValues['subject']) || 'project',
      role: params.get('role') || '',
      timeline: params.get('timeline') ? undefined : '',
      message: estimate
        ? `I ran the cost estimator (platform: ${estimate.platform}) and would like an exact quote.`
        : '',
    },
  });

  const subject = watch('subject');
  const values = watch();

  const onFile = (f: File | undefined) => {
    setFileErr('');
    if (!f) return;
    const allowed = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp', 'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!allowed.includes(f.type)) { setFileErr('PDF, DOC/DOCX, PNG, JPG, WEBP or TXT only'); setFile(null); return; }
    if (f.size > 5 * 1024 * 1024) { setFileErr('Max file size is 5MB'); setFile(null); return; }
    setFile(f);
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    setServerErr('');
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (v !== undefined && v !== null && String(v).trim() !== '') fd.append(k, String(v));
      });
      if (estimate) fd.append('estimate', JSON.stringify(estimate));
      fd.append('source', 'corporate');
      if (file) fd.append('attachment', file);

      const res = await fetch('/api/inquiry', { method: 'POST', body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.message || 'Submission failed — please try again');
      setDone(true);
    } catch (e) {
      setServerErr(e instanceof Error ? e.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="corp-card p-8 sm:p-10 text-center">
        <span className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </span>
        <h3 className="font-display font-extrabold text-slate-900 text-2xl mt-6">Inquiry received</h3>
        <p className="mt-3 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thanks{values.name ? `, ${values.name.split(' ')[0]}` : ''} — our team will review your message and respond
          by email, usually within 1 business day.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="/" className="btn-corp">Back to home</a>
          <a href="/portfolio" className="btn-outline">See our work</a>
        </div>
      </div>
    );
  }

  const steps = ['Project details', 'About you', 'Review & send'];
  const canNext =
    step === 0
      ? subject === 'project'
        ? !!watch('service') || true
        : true
      : true;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="corp-card p-6 sm:p-8">
      {/* Stepper */}
      <div className="flex items-center gap-2 mb-7">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1 last:flex-none">
            <button
              type="button"
              onClick={() => i < step && setStep(i)}
              className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center border transition-all ${
                i === step
                  ? 'border-corp-blue bg-blue-700 text-white shadow-sm'
                  : i < step
                    ? 'border-blue-300 bg-blue-50 text-corp-blue cursor-pointer'
                    : 'border-slate-300 text-slate-400 bg-white'
              }`}
            >
              {i < step ? '✓' : i + 1}
            </button>
            <span className={`text-xs font-medium hidden sm:block ${i === step ? 'text-slate-900' : 'text-slate-400'}`}>{s}</span>
            {i < steps.length - 1 && <span className={`h-px flex-1 ${i < step ? 'bg-blue-300' : 'bg-slate-200'}`} />}
          </div>
        ))}
      </div>

      {/* STEP 1 */}
      {step === 0 && (
        <div className="space-y-5 animate-fade-up">
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">What brings you here?</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {SUBJECTS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setValue('subject', s.id, { shouldValidate: true })}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                    subject === s.id
                      ? 'border-blue-400 bg-blue-50 ring-1 ring-blue-100'
                      : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50/70'
                  }`}
                >
                  <s.icon className={`w-5 h-5 mb-2 ${subject === s.id ? 'text-corp-blue' : 'text-slate-500'}`} />
                  <p className="text-sm font-semibold text-slate-900">{s.label}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{s.hint}</p>
                </button>
              ))}
            </div>
          </div>

          {subject === 'project' && (
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2.5">Service needed</label>
              <select {...register('service')} className="field">
                <option value="">Select a service (optional)</option>
                {SERVICES.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
          )}

          {subject === 'career' && (
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2.5">Role you&apos;re applying for</label>
              <input
                {...register('role')}
                placeholder="e.g. Full-Stack Developer (Node.js / React)"
                className="field"
              />
            </div>
          )}

          {(subject === 'project' || subject === 'partnership') && (
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2.5">Budget range</label>
                <select {...register('budget')} className="field">
                  <option value="">Select budget</option>
                  {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2.5">Timeline</label>
                <select {...register('timeline')} className="field">
                  <option value="">Select timeline</option>
                  {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          )}
        </div>
      )}

      {/* STEP 2 */}
      {step === 1 && (
        <div className="space-y-4 animate-fade-up">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Full name *</label>
              <input {...register('name')} placeholder="Your name" className="field" />
              {errors.name && <p className="text-red-600 text-xs mt-1.5">{errors.name.message}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Email *</label>
              <input {...register('email')} type="email" placeholder="you@company.com" className="field" />
              {errors.email && <p className="text-red-600 text-xs mt-1.5">{errors.email.message}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Phone</label>
              <input {...register('phone')} placeholder="+91 ..." className="field" />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Company</label>
              <input {...register('company')} placeholder="Company / organisation" className="field" />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Message *</label>
            <textarea
              {...register('message')}
              rows={5}
              placeholder={subject === 'career' ? 'Tell us about the projects you’ve shipped and your GitHub/portfolio…' : 'Describe your requirements, users, deadlines and anything we should know…'}
              className="field resize-y"
            />
            {errors.message && <p className="text-red-600 text-xs mt-1.5">{errors.message.message}</p>}
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
              Attachment {subject === 'career' ? '(CV / portfolio)' : '(brief, PDF)'}
            </label>
            <input
              ref={fileRef}
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp,.txt"
              onChange={(e) => onFile(e.target.files?.[0])}
            />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="w-full flex items-center gap-3 p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/60 hover:border-blue-400 hover:bg-blue-50/40 transition-colors text-left"
            >
              <Paperclip className="w-4 h-4 text-corp-blue shrink-0" />
              <span className="text-sm text-slate-600">
                {file ? <span className="text-slate-900 font-medium">{file.name}</span> : 'Click to attach — PDF, DOC/DOCX, PNG, JPG, WEBP, TXT · max 5MB'}
              </span>
              {file && (
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => { e.stopPropagation(); setFile(null); if (fileRef.current) fileRef.current.value = ''; }}
                  className="ml-auto w-7 h-7 rounded-lg bg-slate-200 flex items-center justify-center hover:bg-red-100 hover:text-red-600 cursor-pointer text-slate-500"
                >
                  <X className="w-3.5 h-3.5" />
                </span>
              )}
            </button>
            {fileErr && <p className="text-red-600 text-xs mt-1.5">{fileErr}</p>}
          </div>
        </div>
      )}

      {/* STEP 3 */}
      {step === 2 && (
        <div className="space-y-4 animate-fade-up">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 divide-y divide-slate-200/80">
            {[
              ['Subject', SUBJECTS.find((s) => s.id === values.subject)?.label ?? values.subject],
              values.service ? ['Service', values.service] : null,
              values.role ? ['Role', values.role] : null,
              values.budget ? ['Budget', values.budget] : null,
              values.timeline ? ['Timeline', values.timeline] : null,
              ['Name', values.name],
              ['Email', values.email],
              values.phone ? ['Phone', values.phone] : null,
              values.company ? ['Company', values.company] : null,
              estimate ? ['Estimator', `${estimate.platform} · complexity ${estimate.complexity ?? 2}`] : null,
              file ? ['Attachment', file.name] : null,
            ]
              .filter(Boolean)
              .map((pair) => {
                const [k, v] = pair as [string, string];
                return (
                  <div key={k} className="flex justify-between gap-4 px-4 py-3 text-sm">
                    <span className="text-slate-500">{k}</span>
                    <span className="text-slate-900 text-right break-all font-medium">{v}</span>
                  </div>
                );
              })}
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Message</p>
            <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
              {values.message}
            </p>
          </div>
          {serverErr && (
            <p className="text-red-700 text-sm rounded-xl bg-red-50 border border-red-200 px-4 py-3">{serverErr}</p>
          )}
        </div>
      )}

      {/* Nav */}
      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          className={`btn-outline ${step === 0 ? 'invisible' : ''}`}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {step < 2 ? (
          <button type="button" onClick={() => setStep((s) => Math.min(2, s + 1))} className="btn-corp" disabled={!canNext}>
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button type="submit" disabled={submitting} className="btn-corp !px-8">
            {submitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending…
              </span>
            ) : (
              <>
                Send inquiry <Send className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="corp-card p-8 h-96 animate-pulse" />}>
      <ContactFormInner />
    </Suspense>
  );
}
