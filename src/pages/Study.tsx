import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import agricultureImage from '@assets/sjy-agriculture.jpg';

const admissionsSteps = [
  { num: '01', title: 'Explore', desc: 'Research available programmes and determine which aligns with your interests and goals.' },
  { num: '02', title: 'Check Requirements', desc: 'Review the entry requirements for your chosen programme and confirm your eligibility.' },
  { num: '03', title: 'Prepare Documents', desc: 'Gather required documents including academic certificates, identification, and supporting materials.' },
  { num: '04', title: 'Apply', desc: 'Complete and submit your application to the university admissions office.' },
  { num: '05', title: 'Screening', desc: 'Applications are reviewed and screened by the admissions committee.' },
  { num: '06', title: 'Decision', desc: 'Admitted students are notified. Results are published officially by the university.' },
  { num: '07', title: 'Enrolment', desc: 'Confirm your place, complete enrolment procedures, and begin your academic journey.' },
];

const sections = [
  { label: 'Programmes', href: '#programmes' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'Fees', href: '#fees' },
  { label: 'Calendar', href: '#calendar' },
];

export default function Study() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        overline="Study"
        heading="Academic Programmes"
        subheading="Explore what you can study at St. John's Yambio Campus, understand the admissions process, and take the first step towards your university education."
        backgroundImage={agricultureImage}
      />

      {/* Mobile section nav */}
      <nav
        aria-label="Page sections"
        className="lg:hidden sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border"
      >
        <div className="flex gap-1 overflow-x-auto px-4 py-2 no-scrollbar">
          {sections.map(s => (
            <a
              key={s.href}
              href={s.href}
              className="shrink-0 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors whitespace-nowrap"
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* Sticky desktop nav */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-0.5">
              {sections.map(s => (
                <a key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-20">

            {/* Programmes */}
            <section id="programmes">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-2">Explore Programmes</h2>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  The Catholic University of South Sudan offers programmes at the Yambio Campus. One programme has been confirmed at time of writing. Please contact the admissions office for the most current and complete list of available programmes.
                </p>

                {/* Confirmed */}
                <div className="border border-primary/25 rounded overflow-hidden mb-5 hover:shadow-md transition-shadow duration-300">
                  <div className="bg-primary/4 px-6 py-4 border-b border-primary/12 flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wide text-primary uppercase">Confirmed Programme</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                      Applications Open
                    </span>
                  </div>
                  <div className="px-6 py-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Agricultural & Environmental Sciences</h3>
                    <p className="text-xs text-muted-foreground mb-4">Undergraduate &nbsp;·&nbsp; Campus: Yambio &nbsp;·&nbsp; Level: Bachelor's</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      The agricultural and environmental sciences programme connects academic study with the practical realities of South Sudan's agricultural communities. Rooted in the university's original expansion to Yambio in 2009, this programme addresses food security, environmental stewardship, and sustainable farming practices in the region.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                      {[
                        ['Duration', 'Confirm with institution'],
                        ['Mode of Study', 'Confirm with institution'],
                        ['Start Date', 'Subject to confirmation'],
                      ].map(([k, v]) => (
                        <div key={k} className="bg-muted/50 rounded p-3">
                          <p className="text-xs text-muted-foreground mb-0.5">{k}</p>
                          <p className="text-xs font-semibold text-foreground">{v}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                        Apply Now
                      </Link>
                      <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded border border-border text-foreground text-sm font-semibold hover:bg-muted transition-colors">
                        Enquire
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Additional programmes — named but requiring confirmation */}
                <div className="space-y-3 mb-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                      Awaiting Confirmation
                    </span>
                    <p className="text-xs text-muted-foreground">
                      The following programmes have been identified at the Yambio Campus. Contact the admissions office to verify current availability, requirements, and intake dates.
                    </p>
                  </div>
                  {[
                    {
                      title: 'Peace and Development Studies',
                      accent: 'hsl(210 68% 46%)',
                      desc: 'Specialised study focused on community stability, conflict resolution, and the conditions for sustainable peace in South Sudan and the wider region.',
                    },
                    {
                      title: 'Conflict Studies & International Relations',
                      accent: 'hsl(4 72% 44%)',
                      desc: 'Advanced systemic governance and diplomacy courses addressing conflict navigation, international frameworks, and South Sudan\'s place in regional and global affairs.',
                    },
                    {
                      title: 'Business & Economics',
                      accent: 'hsl(32 82% 46%)',
                      desc: 'Multi-level training tracks in Economics and Business Administration — preparing graduates to drive economic recovery and entrepreneurship in Western Equatoria.',
                    },
                    {
                      title: 'Education',
                      accent: 'hsl(158 58% 26%)',
                      desc: 'Standard teacher training qualification curriculum — equipping graduates to strengthen South Sudan\'s primary and secondary education system.',
                    },
                  ].map(prog => (
                    <div
                      key={prog.title}
                      className="border border-border rounded p-5 hover:shadow-sm transition-shadow duration-200 flex gap-4 items-start"
                      style={{ borderLeftColor: prog.accent, borderLeftWidth: '3px' }}
                    >
                      <div className="flex-1">
                        <h3 className="font-serif font-semibold text-foreground mb-1">{prog.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{prog.desc}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-semibold border border-amber-200 shrink-0 mt-0.5">
                        Verify with institution
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border border-dashed border-border rounded p-5 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For the most accurate and current programme list — including diploma and degree pathways — contact the admissions office directly.
                    </p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group shrink-0">
                    Admissions Office <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            </section>

            {/* Admissions Journey */}
            <section id="admissions">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-2">Admissions Journey</h2>
                <div className="bg-amber-50 border border-amber-200 rounded p-4 mb-8">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    The exact current admissions process should be verified with the institution before relying on it. The steps below reflect the general CUofSS admissions structure documented in official sources.
                  </p>
                </div>
                <div className="space-y-0">
                  {admissionsSteps.map((step, i) => (
                    <div key={step.num} className="flex gap-5 pb-8 relative">
                      {i < admissionsSteps.length - 1 && (
                        <div className="absolute left-5 top-10 bottom-0 w-px bg-border" aria-hidden="true" />
                      )}
                      <div className="shrink-0 w-10 h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10">
                        <span className="font-mono text-xs font-bold text-primary">{step.num}</span>
                      </div>
                      <div className="pt-2">
                        <h3 className="font-serif font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </section>

            {/* Requirements */}
            <section id="requirements">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-5">Entry Requirements</h2>
                <div className="bg-muted/40 border border-border rounded p-4 mb-6">
                  <p className="text-xs text-muted-foreground">
                    Specific requirements per programme must be confirmed with the institution. The following reflects general university admission standards.
                  </p>
                </div>
                <div className="space-y-3.5">
                  {[
                    { title: 'Academic Certificate', desc: 'A completed South Sudan Certificate of Secondary Education (SSCE) or equivalent qualification recognised by the university.' },
                    { title: 'Application Form', desc: 'A completed official application form, available from the admissions office.' },
                    { title: 'Supporting Documents', desc: 'Certified copies of academic certificates, national ID or birth certificate, and passport-size photographs. Additional documents may be required per programme.' },
                    { title: 'Application Fee', desc: 'A non-refundable application fee as specified by the university at time of application. Contact the admissions office for current fee information.' },
                  ].map(req => (
                    <div key={req.title} className="border border-border rounded p-5 hover:shadow-sm transition-shadow duration-200">
                      <h3 className="font-serif font-semibold text-foreground mb-1">{req.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{req.desc}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </section>

            {/* Fees */}
            <section id="fees">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-5">Tuition & Fees</h2>
                <div className="bg-primary/4 border border-primary/15 rounded p-8 text-center">
                  <div className="w-10 h-px bg-primary/25 mx-auto mb-6" aria-hidden="true" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Fee Information</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-7 max-w-lg mx-auto">
                    Tuition fees, scholarship information, and payment plans should be obtained directly from the university admissions office. Fees are subject to change and vary by programme.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                    Contact Admissions for Fee Information
                  </Link>
                </div>
              </ScrollReveal>
            </section>

            {/* Calendar */}
            <section id="calendar">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-5">Academic Calendar</h2>
                <div className="border border-border rounded overflow-hidden">
                  <div className="bg-primary px-6 py-5">
                    <p className="text-xs font-semibold tracking-wide uppercase text-white/45 mb-1">Academic Year 2026</p>
                    <h3 className="font-serif text-lg font-semibold text-white">Campus Reopening</h3>
                  </div>
                  <div className="px-6 py-5">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200 shrink-0">
                        Announcement
                      </span>
                      <div>
                        <p className="text-sm text-foreground font-medium mb-1">20 July 2026 — Campus reopening date announced</p>
                        <p className="text-xs text-amber-700 italic">Subject to official confirmation from the institution</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-5">
                      Further academic calendar details — semester dates, examination periods, and academic events — will be published by the institution. Contact the university for the most current academic calendar.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
