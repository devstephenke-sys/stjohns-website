import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';

const subjects = [
  'Admissions Enquiry',
  'Programme Information',
  'Campus Facilities',
  'Academic Calendar',
  'Student Life',
  'Research & Partnerships',
  'General Enquiry',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setErrors({});
    setSubmitted(true);
  };

  const field = (id: keyof typeof form) => ({
    id,
    value: form[id],
    onChange: (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [id]: ev.target.value })),
  });

  const inputCls = (id: keyof typeof form) =>
    `w-full border rounded px-4 py-2.5 text-sm text-foreground bg-white placeholder:text-muted-foreground/45 focus:outline-none focus:ring-2 focus:border-primary transition-colors ${
      errors[id] ? 'border-destructive focus:ring-destructive/20' : 'border-border focus:ring-primary/20'
    }`;

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        overline="Contact"
        heading="Get in Touch"
        subheading="For admissions enquiries, programme information, or any other questions about St. John's Yambio Campus."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Info column */}
          <div>
            <ScrollReveal>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-7">Contact Information</h2>

              <div className="bg-amber-50 border border-amber-200 rounded p-5 mb-8">
                <p className="text-xs text-amber-800 leading-relaxed">
                  Contact details for the campus are being updated. We recommend reaching out through the Catholic Diocese of Tombura-Yambio or the Catholic University of South Sudan's main offices for the most current information.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: 'Campus',
                    lines: [
                      'St. John\'s Yambio Campus',
                      'Catholic University of South Sudan',
                      'Yambio, Western Equatoria State',
                      'South Sudan',
                    ],
                  },
                  {
                    label: 'Diocese',
                    lines: [
                      'Catholic Diocese of Tombura-Yambio',
                      'Patron: Bishop Barani Eduardo Hiiboro Kussala',
                    ],
                    note: 'The Diocese can be contacted for current campus information.',
                  },
                  {
                    label: 'Parent University',
                    lines: [
                      'Catholic University of South Sudan (CUofSS)',
                      'National Office — Juba, South Sudan',
                    ],
                    note: 'For admissions and programme enquiries, contact the university\'s central admissions office.',
                  },
                ].map(item => (
                  <div key={item.label} className="border border-border rounded p-5 hover:shadow-sm transition-shadow duration-200">
                    <h3 className="font-serif font-semibold text-foreground mb-2 text-sm">{item.label}</h3>
                    {item.lines.map(l => (
                      <p key={l} className="text-sm text-muted-foreground">{l}</p>
                    ))}
                    {item.note && (
                      <p className="text-xs text-muted-foreground/65 mt-2 italic">{item.note}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4">Quick Links</p>
                <div className="flex flex-col gap-2">
                  {[
                    { label: 'Explore Programmes', href: '/study' },
                    { label: 'Discover the Campus', href: '/discover' },
                    { label: 'Campus Life', href: '/campus-life' },
                  ].map(l => (
                    <a key={l.href} href={l.href} className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium group">
                      {l.label} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form column */}
          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-7">Send an Enquiry</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Enquiry Received</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Thank you for your message. This form is currently in preview mode — for urgent enquiries, please contact the Catholic Diocese of Tombura-Yambio or the CUofSS admissions office directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold tracking-wide text-foreground mb-1.5">
                      Full Name <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      {...field('name')}
                      type="text"
                      required
                      autoComplete="name"
                      className={inputCls('name')}
                      placeholder="Your full name"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" className="mt-1 text-xs text-destructive">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold tracking-wide text-foreground mb-1.5">
                      Email Address <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      {...field('email')}
                      type="email"
                      required
                      autoComplete="email"
                      className={inputCls('email')}
                      placeholder="your.email@example.com"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" className="mt-1 text-xs text-destructive">{errors.email}</p>}
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold tracking-wide text-foreground mb-1.5">
                      Subject
                    </label>
                    <select
                      {...field('subject')}
                      className={inputCls('subject')}
                    >
                      <option value="">Select a subject</option>
                      {subjects.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold tracking-wide text-foreground mb-1.5">
                      Message <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      {...field('message')}
                      rows={6}
                      required
                      className={inputCls('message')}
                      placeholder="Your message or enquiry…"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      style={{ resize: 'none' }}
                    />
                    {errors.message && <p id="message-error" className="mt-1 text-xs text-destructive">{errors.message}</p>}
                  </div>

                  {/* Preview notice */}
                  <div className="bg-muted/50 border border-border rounded p-4">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      This contact form is currently in preview mode. Your message may not be received. For urgent enquiries, please contact the Catholic University of South Sudan or Diocese of Tombura-Yambio directly.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 active:scale-[0.99] transition-all duration-200"
                  >
                    Send Enquiry
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
