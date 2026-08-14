import { useCallback } from 'react';
import { Link } from 'wouter';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import FlipCard from '@/components/FlipCard';
import QuickLinksSidebar, { useActiveSection } from '@/components/QuickLinksSidebar';
import type { SidebarSection } from '@/components/QuickLinksSidebar';
import studentsImage from '@assets/sjy-students.jpg';
import historyImage from '@assets/sjy-history.jpg';

const reasons = [
  { title: 'Access', desc: 'One of the only universities serving students in Western Equatoria — no need to travel to Juba to access higher education.' },
  { title: 'Formation', desc: 'An education that shapes character alongside knowledge — graduates who lead with integrity and serve their communities.' },
  { title: 'Community', desc: 'A campus rooted in the Diocese of Tombura-Yambio\'s rich educational tradition, spanning kindergarten to university.' },
  { title: 'Research & Impact', desc: 'Connected to peacebuilding, agriculture, and community development themes that matter to South Sudan.' },
  { title: 'Faith', desc: 'Catholic social teaching and spiritual formation are woven into every dimension of campus life — not separate from learning, but integral to it.' },
];

const sections: SidebarSection[] = [
  { label: 'About', href: '#about' },
  { label: 'Our Story', href: '#story' },
  { label: 'History', href: '#history' },
  { label: 'Vision & Mission', href: '#vision' },
  { label: 'Catholic Identity', href: '#identity' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Why St. John\'s?', href: '#why' },
];

const values = [
  {
    title: 'Academic Excellence',
    desc: 'Rigorous programmes grounded in quality teaching, research, and real-world application — preparing graduates who can lead in their fields.',
  },
  {
    title: 'Faith & Service',
    desc: 'Catholic identity woven into every dimension of learning — forming leaders of integrity, compassion, and public service.',
  },
  {
    title: 'Community Empowerment',
    desc: 'Education as a tool for local transformation, peacebuilding, food security, and sustainable community development.',
  },
];

/** Mobile horizontal section nav with active-section highlighting */
function MobileSectionNav({ sections }: { sections: SidebarSection[] }) {
  const activeSection = useActiveSection(sections);
  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <nav
      aria-label="Page sections"
      className="lg:hidden sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border"
    >
      <div className="flex gap-1 overflow-x-auto px-4 py-2 no-scrollbar">
        {sections.map((s) => {
          const isActive = activeSection === s.href;
          return (
            <a
              key={s.href}
              href={s.href}
              onClick={(e) => { e.preventDefault(); scrollTo(s.href); }}
              className={`shrink-0 px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
              aria-current={isActive ? 'true' : undefined}
            >
              {s.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default function Discover() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        overline="Discover"
        heading="About St. John's Yambio"
        subheading="A university rooted in faith, dedicated to academic excellence, and committed to serving the communities of Western Equatoria and South Sudan."
        backgroundImage={studentsImage}
      />

      {/* Mobile section nav — horizontal scroll with active tracking */}
      <MobileSectionNav sections={sections} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">

          {/* Collapsible desktop sidebar */}
          <QuickLinksSidebar sections={sections} />

          {/* Main content */}
          <div className="lg:col-span-2 space-y-20">

            {/* About */}
            <section id="about">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-5">
                  About St. John's Yambio Campus
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  St. John's Yambio Campus is part of the Catholic University of South Sudan (CUofSS), one of the country's principal institutions of higher learning. Located in Yambio, the capital of Western Equatoria State, the campus plays a vital role in bringing university education directly to students in this region.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  The Catholic University of South Sudan's campus network spans several cities — Juba, Wau, Malakal, Rumbek, and Yambio. St. John's Yambio Campus is connected to the Catholic Diocese of Tombura-Yambio, one of the most active Catholic educational ecosystems in South Sudan, spanning institutions from kindergarten through to higher education.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  The campus motto, <em className="font-serif">Lux Veritatis</em> — Light of Truth — captures the spirit of what education means here: the pursuit of truth, integrity in knowledge, and the belief that learning can transform lives, communities, and societies.
                </p>
              </ScrollReveal>
            </section>

            {/* Story */}
            <section id="story">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-5">Our Story</h2>
                <div className="relative rounded overflow-hidden mb-6 h-64 img-zoom-wrap">
                  <img src={studentsImage} alt="Students at St. John's Yambio Campus" className="w-full h-full object-cover img-zoom" />
                  <div className="absolute inset-0 bg-primary/15" />
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  St. John's Yambio Campus is not simply an educational building — it is part of a larger ecosystem of formation, service, and leadership. The Catholic Diocese of Tombura-Yambio's educational institutions range from primary schools to seminaries, teacher training colleges, and higher education, all sharing a vision of human development rooted in Catholic values.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Within this ecosystem, St. John's Campus offers something rare in Western Equatoria: access to university-level education. For students who cannot relocate to Juba, this campus represents an opportunity to pursue a degree while remaining connected to their families, their land, and their communities.
                </p>
              </ScrollReveal>
            </section>

            {/* History */}
            <section id="history">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-5">History</h2>
                <div className="relative rounded overflow-hidden mb-6 h-52 img-zoom-wrap">
                  <img src={historyImage} alt="History of Catholic education in the region" className="w-full h-full object-cover img-zoom" />
                  <div className="absolute inset-0 bg-primary/15" />
                </div>
                <div className="space-y-8">
                  {[
                    { year: '1983', label: 'The Vision', text: 'The idea of a Catholic university for Sudan was first discussed in connection with Pope John Paul II — a seed of aspiration planted in the Church\'s vision for the region.' },
                    { year: '2003', label: 'Renewed Call', text: 'The vision gained renewed momentum around the canonization of Saint Daniel Comboni, reflecting the Church\'s enduring commitment to education and mission in Sudan.' },
                    { year: '2007', label: 'A Formal Decision', text: 'The Sudan Catholic Bishops\' Conference formally decided to establish the Catholic University of South Sudan — turning vision into institutional commitment.' },
                    { year: '2008', label: 'First Students', text: 'The university opened its doors and welcomed its first students at the Juba Campus — the beginning of a new chapter in Catholic higher education in South Sudan.' },
                    { year: '2009', label: 'Expansion to Yambio', text: 'The Faculty of Agricultural and Environmental Sciences expanded to Yambio and other locations, bringing higher education directly to communities across the country.' },
                    { year: 'Today', label: 'Continuing the Mission', text: 'St. John\'s Yambio Campus continues to develop, forming graduates who carry the values of education, faith, service, and transformation into every corner of South Sudan.' },
                  ].map(item => (
                    <div key={item.year} className="flex gap-6">
                      <div className="shrink-0 text-right w-16 pt-0.5">
                        <span className="font-serif text-sm font-bold text-primary">{item.year}</span>
                      </div>
                      <div className="border-l-2 border-border pl-6 pb-2">
                        <h3 className="font-serif text-base font-semibold text-foreground mb-1">{item.label}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </section>

            {/* Vision */}
            <section id="vision">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-5">Vision, Mission & Values</h2>
                <div className="bg-muted/40 border border-border rounded p-6 mb-5">
                  <p className="text-[10px] text-amber-700 font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                    Exact official wording requires confirmation from the institution
                  </p>
                  <p className="text-base font-serif italic text-foreground leading-relaxed">
                    "To be a centre of academic excellence, faith-based learning, and community empowerment — forming leaders for the transformation of South Sudan."
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  The Catholic University of South Sudan's broader mission emphasises preparing students for real-world challenges through quality teaching, research, community engagement, and formation in Catholic values. At Yambio, this mission is expressed through the unique context of Western Equatoria — its agricultural heritage, its peace-building journey, and its communities.
                </p>

                {/* Flip cards for values */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                  {values.map((v, i) => {
                    const palette = [
                      {
                        frontBg: 'linear-gradient(135deg, hsl(44 90% 48%), hsl(44 90% 56%))',
                        backBg: 'linear-gradient(135deg, hsl(158 58% 18%), hsl(158 58% 26%))',
                      },
                      {
                        frontBg: 'linear-gradient(135deg, hsl(158 58% 20%), hsl(158 58% 30%))',
                        backBg: 'linear-gradient(135deg, hsl(44 90% 44%), hsl(44 90% 52%))',
                      },
                      {
                        frontBg: 'linear-gradient(135deg, hsl(4 72% 40%), hsl(4 72% 50%))',
                        backBg: 'linear-gradient(135deg, hsl(158 58% 18%), hsl(158 58% 28%))',
                      },
                    ];
                    const c = palette[i] ?? palette[0];
                    return (
                      <FlipCard
                        key={v.title}
                        label={`${v.title} — hover or tap to learn more`}
                        className="h-44"
                        front={
                          <div
                            className="h-full rounded p-5 flex flex-col items-center justify-center text-center text-white shadow-md"
                            style={{ background: c.frontBg }}
                          >
                            <span className="font-serif text-base font-bold leading-snug mb-2 drop-shadow-sm">{v.title}</span>
                            <span className="text-[10px] text-white/65 tracking-[0.15em] uppercase mt-1">Tap to explore</span>
                          </div>
                        }
                        back={
                          <div
                            className="h-full rounded p-5 flex items-center justify-center text-white shadow-md"
                            style={{ background: c.backBg }}
                          >
                            <p className="text-xs leading-relaxed text-center text-white/90">{v.desc}</p>
                          </div>
                        }
                      />
                    );
                  })}
                </div>
              </ScrollReveal>
            </section>

            {/* Catholic Identity */}
            <section id="identity">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-5">Catholic Identity</h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  At St. John's Yambio Campus, faith is not peripheral to education — it is woven into the institution's understanding of what education is for. The Catholic University of South Sudan identifies faith-based learning as central to its mission, emphasising integrity, service, and ethical leadership as outcomes of a genuine university education.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  The campus is connected to the Catholic Diocese of Tombura-Yambio, whose patron is Bishop Barani Eduardo Hiiboro Kussala. The Bishop has publicly emphasised themes of truth, integrity, and the responsibility of educated people to serve their communities — values that are reflected in the campus motto, <em className="font-serif">Lux Veritatis</em>.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  The wider university's Institute of Catholic Social Teachings focuses on civic responsibility, ethical leadership, justice, and governance — preparing students not only for careers, but for lives of purpose and public service.
                </p>
              </ScrollReveal>
            </section>

            {/* Leadership */}
            <section id="leadership">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-5">Leadership</h2>
                <div className="bg-amber-50 border border-amber-200 rounded p-4 mb-6">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Staff profiles are being progressively confirmed with the institution. Leadership information below reflects publicly available sources and should be verified before official use.
                  </p>
                </div>
                <div className="space-y-4">
                  {/* Patron */}
                  <div className="border border-border rounded p-6">
                    <p className="text-[10px] font-semibold tracking-wide uppercase text-muted-foreground mb-2">Patron</p>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Bishop Barani Eduardo Hiiboro Kussala</h3>
                    <p className="text-sm text-muted-foreground mt-1">Catholic Diocese of Tombura-Yambio</p>
                  </div>

                  {/* Campus Director */}
                  <div className="border border-primary/25 rounded p-6 bg-primary/3">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <p className="text-[10px] font-semibold tracking-wide uppercase text-primary/70 mb-2">Campus Director</p>
                        <h3 className="font-serif text-lg font-semibold text-foreground">Dr. Paul Alela Oguta</h3>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-lg">
                          Dr. Paul leads administrative oversight of the Yambio Campus and champions democratic culture, civic responsibility, and moral leadership across Western Equatoria. He founded the Civic Engagement Club to institutionalise voter awareness and peacebuilding among students, and has collaborated with the National Elections Commission on civic education seminars.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Registrar */}
                  <div className="border border-border rounded p-6">
                    <p className="text-[10px] font-semibold tracking-wide uppercase text-muted-foreground mb-2">Registrar</p>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Prof. Noel</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Manages physical admissions, application pipelines, and processing at the central Registrar's office. Prospective students should contact the Registrar's office directly for intake dates and application procedures.
                    </p>
                  </div>

                  {/* Guild President */}
                  <div className="border border-border rounded p-6">
                    <p className="text-[10px] font-semibold tracking-wide uppercase text-muted-foreground mb-2">Guild President</p>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Joseph Ndani Gbinzaramba</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Head of student governance, managing peer leadership transition frameworks and representing students in campus governance structures.
                    </p>
                  </div>

                  {/* Diocese listing */}
                  <div className="border border-border rounded p-6">
                    <p className="text-[10px] font-semibold tracking-wide uppercase text-muted-foreground mb-2">Campus — Diocese Listing</p>
                    <h3 className="font-serif text-lg font-semibold text-foreground">Dr. John Gbono</h3>
                    <p className="text-sm text-muted-foreground mt-1">Role and title to be confirmed with the institution</p>
                  </div>

                  {/* Remaining placeholders */}
                  {['Academic Staff', 'Administrative Staff'].map(role => (
                    <div key={role} className="border border-dashed border-border rounded p-5 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-semibold tracking-wide uppercase text-muted-foreground mb-1">{role}</p>
                        <p className="text-sm text-muted-foreground italic">Profiles to be confirmed with the institution</p>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-semibold shrink-0">
                        Pending
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </section>

            {/* Why */}
            <section id="why">
              <ScrollReveal>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-8">Why St. John's Yambio?</h2>
                <div className="space-y-4">
                  {reasons.map((r, i) => (
                    <div key={r.title} className="flex gap-5">
                      <div className="shrink-0 w-8 h-8 rounded bg-primary/8 flex items-center justify-center font-serif font-bold text-sm text-primary">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-serif font-semibold text-foreground mb-1">{r.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <Link href="/study" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                    Explore Programmes
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-border text-foreground text-sm font-semibold hover:bg-muted transition-colors">
                    Contact Us
                  </Link>
                </div>
              </ScrollReveal>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
