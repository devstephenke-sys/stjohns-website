import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronDown, Play } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import heroImage from '@assets/sjy-hero.jpg';
import studentsImage from '@assets/sjy-students.jpg';
import agricultureImage from '@assets/sjy-agriculture.jpg';
import campusLifeImage from '@assets/sjy-campus-life.jpg';
import studentStoryImage from '@assets/sjy-student-story.jpg';
import historyImage from '@assets/sjy-history.jpg';

const timeline = [
  { year: '1983', label: 'Vision', desc: 'The idea of a Catholic university for Sudan discussed in connection with Pope John Paul II.' },
  { year: '2003', label: 'Renewed Call', desc: 'The vision renewed around the canonization of Saint Daniel Comboni.' },
  { year: '2007', label: 'Foundation', desc: 'The Sudan Catholic Bishops\' Conference formally decided to establish the university.' },
  { year: '2008', label: 'First Students', desc: 'The university welcomed its first students at the Juba Campus.' },
  { year: '2009', label: 'Expansion', desc: 'Agricultural and Environmental Sciences expanded to Yambio and other locations.' },
  { year: 'Today', label: 'Transformation', desc: 'Education · Faith · Service · Transformation — serving the people of Western Equatoria.' },
];

const pillars = [
  {
    num: '01',
    title: 'Academic Excellence',
    desc: 'Programmes designed to prepare students for real-world challenges through quality teaching and rigorous standards.',
    accent: 'hsl(44 90% 48%)',
    shadow: 'hsl(44 90% 48% / 0.18)',
  },
  {
    num: '02',
    title: 'Faith & Formation',
    desc: 'Faith-based learning that shapes integrity, service, and ethical leadership — not only what students know, but how they use it.',
    accent: 'hsl(158 58% 26%)',
    shadow: 'hsl(158 58% 26% / 0.18)',
  },
  {
    num: '03',
    title: 'Community Empowerment',
    desc: 'Education connected to active citizenship, student development, outreach, and the formation of future change-makers.',
    accent: 'hsl(4 72% 44%)',
    shadow: 'hsl(4 72% 44% / 0.18)',
  },
  {
    num: '04',
    title: 'Peace & Justice',
    desc: 'Rooted in Catholic Social Teaching — civic responsibility, ethical leadership, governance, and dialogue on South Sudan\'s challenges.',
    accent: 'hsl(210 68% 46%)',
    shadow: 'hsl(210 68% 46% / 0.18)',
  },
  {
    num: '05',
    title: 'Practical Development',
    desc: 'Curriculum connected to labour-market relevance, digital skills, agriculture, and the real needs of the communities we serve.',
    accent: 'hsl(32 82% 46%)',
    shadow: 'hsl(32 82% 46% / 0.18)',
  },
];

const pathways = [
  {
    label: 'I want to study here',
    sub: 'Explore programmes and admissions',
    href: '/study',
    cta: 'Explore Programmes',
    accent: 'hsl(44 90% 48%)',
    num: '01',
  },
  {
    label: 'I want to experience campus life',
    sub: 'Discover students, activities, and community',
    href: '/campus-life',
    cta: 'Campus Life',
    accent: 'hsl(158 58% 26%)',
    num: '02',
  },
  {
    label: 'I want to understand our impact',
    sub: 'Research, partnerships, and community engagement',
    href: '/impact',
    cta: 'Our Impact',
    accent: 'hsl(4 72% 44%)',
    num: '03',
  },
];

const impactAreas = [
  {
    title: 'Peace & Reconciliation',
    desc: 'Research and dialogue around peacebuilding, social cohesion, and the healing of communities in South Sudan.',
  },
  {
    title: 'Agriculture & Food Security',
    desc: 'Practical agricultural education rooted in Western Equatoria, with active partnerships for skills development.',
  },
  {
    title: 'Youth Empowerment',
    desc: 'Forming a generation of ethical leaders who serve their communities with knowledge, integrity, and purpose.',
  },
];

const heroSlides = [
  { src: heroImage,         caption: "St. John\u2019s Yambio Campus",       sub: 'Catholic University of South Sudan' },
  { src: studentsImage,     caption: 'Students on their way to class',       sub: 'Every day a step forward' },
  { src: campusLifeImage,   caption: 'Life at the heart of campus',          sub: 'Community · Faith · Learning' },
  { src: agricultureImage,  caption: 'Practical agricultural sciences',      sub: 'Feeding communities, shaping futures' },
  { src: studentStoryImage, caption: 'Student voices & leadership',          sub: 'The next generation of South Sudan' },
  { src: historyImage,      caption: 'Lux Veritatis — Light of Truth',       sub: 'Faith · Education · Service' },
];

const floatingCards = [
  { src: studentsImage,    label: 'Students heading to class' },
  { src: campusLifeImage,  label: 'Campus community' },
  { src: agricultureImage, label: 'Agriculture lab' },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide(s => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">

        {/* ── Crossfade slideshow ── */}
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.03 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroSlides[activeSlide].src})` }}
            aria-hidden="true"
          />
        </AnimatePresence>

        {/* Overlays — strong darkening so text always pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/65 to-primary/90" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
        {/* Radial vignette — darkest at centre where text sits */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 48%, rgba(0,0,0,0.45) 0%, transparent 100%)' }}
          aria-hidden="true"
        />

        {/* ── Centre hero content ── */}
        <div className="relative z-10 text-center px-5 sm:px-8 max-w-3xl mx-auto">

          {/* Campus tag */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white mb-6"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.7)' }}
          >
            St. John's Yambio Campus &nbsp;·&nbsp; Catholic University of South Sudan
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl sm:text-8xl lg:text-[6rem] font-bold text-white mb-4 leading-[0.95] tracking-tight"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.55), 0 0 60px hsl(44 90% 50% / 0.25)' }}
          >
            Lux Veritatis
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-xl sm:text-2xl text-white font-light tracking-[0.25em] mb-5 italic font-serif"
            style={{ textShadow: '0 2px 16px rgba(0,0,0,0.85)' }}
          >
            Light of Truth
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="w-16 h-px bg-accent mx-auto mb-6 origin-center"
          />

          {/* Pillars — each word links to its page */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-10"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 bg-black/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
              {[
                { label: 'Education',      href: '/study' },
                { label: 'Faith',          href: '/discover' },
                { label: 'Service',        href: '/impact' },
                { label: 'Transformation', href: '/campus-life' },
              ].map(({ label, href }, i) => (
                <span key={label} className="flex items-center gap-x-4">
                  <Link
                    href={href}
                    className="text-sm sm:text-[15px] font-bold tracking-[0.2em] uppercase text-white hover:text-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                  {i < 3 && <span className="text-white/40 text-xs select-none">·</span>}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            {/* Primary — shimmering gold */}
            <Link
              href="/study"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground text-sm font-bold tracking-wide overflow-hidden group active:scale-[0.97] transition-transform duration-150 shadow-lg shadow-accent/30"
            >
              {/* Shimmer sweep */}
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)' }}
                aria-hidden="true"
              />
              Explore Programmes
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>

            {/* Secondary — glowing outline */}
            <Link
              href="/discover"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/30 text-white text-sm font-semibold tracking-wide backdrop-blur-sm hover:border-white/60 hover:bg-white/8 active:scale-[0.97] transition-all duration-200 group"
            >
              <span className="relative flex h-2 w-2 mr-1" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Our Story
              <ChevronRight className="w-4 h-4 opacity-60 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Mobile slide dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex xl:hidden gap-1.5 justify-center mt-8"
          >
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`transition-all duration-400 rounded-full ${
                  i === activeSlide
                    ? 'w-5 h-1.5 bg-accent'
                    : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </motion.div>
        </div>

        {/* Caption strip — bottom centre */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center pointer-events-none"
          >
            <p className="text-[9px] tracking-[0.25em] uppercase text-white/30 font-semibold">
              {heroSlides[activeSlide].caption}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── PATHWAYS ─── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="section-overline">What brings you here?</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pathways.map((p, i) => (
              <ScrollReveal key={p.href} delay={i * 0.1}>
                <Link
                  href={p.href}
                  className="group flex flex-col p-8 border border-border rounded bg-card hover:shadow-xl transition-all duration-300 h-full overflow-hidden relative hover:-translate-y-1"
                  style={{ borderTopColor: p.accent, borderTopWidth: '3px' } as React.CSSProperties}
                >
                  {/* Subtle colour wash on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `linear-gradient(160deg, ${p.accent}0a 0%, transparent 60%)` }}
                    aria-hidden="true"
                  />
                  <span
                    className="font-serif text-3xl font-bold mb-4 leading-none select-none transition-transform duration-300 group-hover:scale-110 origin-left"
                    style={{ color: p.accent }}
                  >
                    {p.num}
                  </span>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-2.5 transition-colors leading-snug">
                    {p.label}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.sub}</p>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide"
                    style={{ color: p.accent }}
                  >
                    {p.cta}
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSTITUTIONAL STATEMENT ─── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="w-10 h-px bg-accent/60 mx-auto mb-8" aria-hidden="true" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-8">
              Education that forms minds,<br className="hidden sm:block" /> builds character, and serves communities.
            </h2>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              St. John's Yambio Campus makes higher education accessible to students across Western Equatoria State —
              one of the few places where young people who cannot travel to Juba can pursue a university degree,
              rooted in faith, guided by integrity, and oriented toward the transformation of South Sudan.
            </p>
            <div className="w-10 h-px bg-accent/60 mx-auto mt-8" aria-hidden="true" />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── HISTORY TIMELINE ─── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-16">
            <p className="section-overline mb-2">Our History</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">A vision decades in the making</h2>
          </ScrollReveal>

          {/* Desktop: alternating timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border" aria-hidden="true" />
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.07}>
                  <div className={`relative flex items-center gap-0 py-9 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'pr-10 text-right' : 'pl-10'}`}>
                      <div className="inline-block bg-accent/12 text-accent-foreground px-3 py-1 rounded text-xs font-semibold tracking-wide mb-2">
                        {item.label}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                    {/* Centre dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shrink-0">
                      <span className="font-serif text-[10px] font-bold text-primary leading-none text-center">
                        {item.year === 'Today' ? '→' : item.year}
                      </span>
                    </div>
                    {/* Empty opposite side */}
                    <div className="w-[calc(50%-2.5rem)]" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Mobile: vertical stacked timeline */}
          <div className="md:hidden relative pl-10">
            <div className="absolute left-3 top-1 bottom-1 w-px bg-border" aria-hidden="true" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.06}>
                  <div className="relative">
                    {/* Dot */}
                    <div className="absolute -left-[2.35rem] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    </div>
                    <div className="inline-block bg-accent/12 text-accent-foreground px-2.5 py-0.5 rounded text-[10px] font-semibold tracking-wide mb-1">
                      {item.year} · {item.label}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FIVE PILLARS ─── */}
      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <p className="section-overline mb-2">What we stand for</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">Five pillars of institutional life</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div
                  className="bg-card border border-border rounded overflow-hidden h-full group transition-all duration-300 hover:-translate-y-1.5"
                  style={{
                    borderTopColor: p.accent,
                    borderTopWidth: '3px',
                    '--tw-shadow-color': p.shadow,
                  } as React.CSSProperties}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 12px 32px ${p.shadow}`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '')}
                >
                  <div className="p-6">
                    <div
                      className="font-serif text-2xl font-bold mb-4 leading-none transition-transform duration-300 group-hover:scale-110 origin-left"
                      style={{ color: p.accent }}
                    >
                      {p.num}
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-foreground mb-2.5 leading-snug">{p.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMMES PREVIEW ─── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="section-overline mb-2">Academic Programmes</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">What can you study?</h2>
              </div>
              <Link href="/study" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors shrink-0 group">
                All Programmes <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Confirmed programme */}
            <ScrollReveal>
              <div className="bg-card border border-primary/25 rounded p-7 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Undergraduate</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Applications Open
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1.5">Agricultural & Environmental Sciences</h3>
                <p className="text-xs text-muted-foreground mb-1">Campus: Yambio</p>
                <p className="text-xs text-muted-foreground mb-6 flex-1 leading-relaxed">
                  A programme connecting academic learning with the agricultural realities of Western Equatoria and South Sudan's food security needs.
                </p>
                <Link href="/study" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors group">
                  View Programme <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Placeholder slots */}
            {[1, 2].map(n => (
              <ScrollReveal key={n} delay={n * 0.1}>
                <div className="bg-muted/40 border border-dashed border-border rounded p-7 h-full flex flex-col items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200 mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                      Requires Confirmation
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-muted-foreground mb-2">Further Programmes</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Additional programmes are offered through CUofSS. Contact the admissions office for current offerings at Yambio Campus.
                    </p>
                  </div>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group">
                    Contact Admissions <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAMPUS IMAGE BAND ─── */}
      <section className="grid grid-cols-1 sm:grid-cols-3 h-64 sm:h-80 overflow-hidden" aria-hidden="true">
        {[
          { img: studentsImage, label: 'Students' },
          { img: agricultureImage, label: 'Agriculture' },
          { img: campusLifeImage, label: 'Campus Life' },
        ].map(({ img, label }) => (
          <div key={label} className="relative overflow-hidden img-zoom-wrap">
            <img
              src={img}
              alt={label}
              className="w-full h-full object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-primary/35 hover:bg-primary/15 transition-colors duration-500" />
          </div>
        ))}
      </section>

      {/* ─── IMPACT STRIP ─── */}
      <section className="py-24 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <p className="section-overline-light mb-3">Research & Impact</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold">What problems are we helping South Sudan solve?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {impactAreas.map((area, i) => (
              <ScrollReveal key={area.title} delay={i * 0.1}>
                <div className="border-t border-white/12 pt-6">
                  <div className="w-8 h-0.5 bg-accent mb-6" aria-hidden="true" />
                  <h3 className="font-serif text-lg font-semibold text-white mb-3">{area.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{area.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-14 text-center">
            <Link
              href="/impact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-semibold rounded hover:bg-white/8 transition-colors group"
            >
              Explore Our Impact <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── NEWS STRIP ─── */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="section-overline mb-1">Latest</p>
              <h2 className="font-serif text-2xl font-semibold">News & Announcements</h2>
            </div>
            <Link href="/news" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5 group shrink-0">
              All News <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScrollReveal>
              <div className="border border-border rounded p-6 h-full hover:shadow-sm transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                    Announcement
                  </span>
                  <span className="text-xs text-muted-foreground">July 2026</span>
                </div>
                <h3 className="font-serif text-base font-semibold mb-2 leading-snug">Campus Reopening — 20 July 2026</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  The campus has announced preparations for reopening. Subject to official confirmation from the institution.
                </p>
                <p className="text-xs text-amber-600 italic">Subject to official confirmation</p>
              </div>
            </ScrollReveal>
            {[
              { title: 'Agricultural Partnership with Uganda Martyrs University', date: 'July 2025', desc: 'A collaboration to strengthen practical agricultural skills and food security in Western Equatoria.' },
              { title: 'Student Council: Voices of Leadership', date: 'Coming soon', desc: 'Student governance at St. John\'s continues to grow. Stories from the student council.' },
            ].map((n, i) => (
              <ScrollReveal key={n.title} delay={(i + 1) * 0.1}>
                <div className="border border-border rounded p-6 h-full hover:shadow-sm transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-muted-foreground">{n.date}</span>
                  </div>
                  <h3 className="font-serif text-base font-semibold mb-2 leading-snug">{n.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{n.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-28 overflow-hidden bg-primary text-center">
        {/* Gold shimmer left + teal glow right */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true"
          style={{ backgroundImage: 'radial-gradient(circle at 25% 55%, hsl(44 90% 50%), transparent 55%), radial-gradient(circle at 78% 20%, hsl(158 58% 40%), transparent 50%)' }}
        />
        {/* Diagonal grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 8px)' }}
        />
        <div className="relative max-w-2xl mx-auto px-4">
          <ScrollReveal>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-white/35 mb-5">Begin your journey</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Your journey<br />begins here.
            </h2>
            <p className="text-base text-white/55 leading-relaxed mb-10">
              St. John's Yambio Campus is preparing to welcome students who aim high — for themselves, their families, and their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/study"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 active:scale-[0.98] transition-all duration-200"
              >
                Explore Programmes <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded border border-white/25 text-white text-sm font-semibold hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
