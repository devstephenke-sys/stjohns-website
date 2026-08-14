import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import campusLifeImage from '@assets/sjy-campus-life.jpg';
import studentStoryImage from '@assets/sjy-student-story.jpg';

const dimensions = [
  { icon: '📖', title: 'Learn', desc: 'Academic engagement, lectures, seminars, and independent study — building knowledge and critical thinking that lasts a lifetime.' },
  { icon: '🌿', title: 'Lead', desc: 'Student governance, the student council, and leadership programmes that prepare graduates for public service and community responsibility.' },
  { icon: '✝️', title: 'Pray', desc: 'Spiritual formation, the campus chapel, daily prayer, and the rhythms of Catholic faith that anchor and orient academic life.' },
  { icon: '🤝', title: 'Serve', desc: 'Community outreach, volunteer work, and engagement with the Diocese\'s wider educational and social mission in Western Equatoria.' },
  { icon: '🎨', title: 'Create', desc: 'Clubs, activities, events, and the many ways students bring their talents, cultures, and creativity to campus life.' },
  { icon: '🌱', title: 'Grow', desc: 'Personal development — the quiet but profound formation that happens when young people are challenged, supported, and given space to become themselves.' },
];

const facilities = [
  { name: 'Classrooms', status: 'confirmed', desc: 'Teaching and learning spaces for undergraduate programmes.' },
  { name: 'Library', status: 'unverified', desc: 'Library resources available to students. Specific holdings and hours to be confirmed.' },
  { name: 'ICT / Computer Laboratory', status: 'unverified', desc: 'Access to computing facilities. Specifications and availability to be confirmed.' },
  { name: 'Agricultural Facilities', status: 'confirmed', desc: 'Practical agricultural facilities supporting the Agricultural and Environmental Sciences programme.' },
  { name: 'Chapel', status: 'confirmed', desc: 'A space for prayer, spiritual formation, and Catholic worship at the heart of campus life.' },
  { name: 'Student Spaces', status: 'unverified', desc: 'Common areas and gathering spaces for students. Details to be confirmed.' },
  { name: 'Sports Facilities', status: 'unverified', desc: 'Sporting and recreation facilities. Availability to be confirmed with the institution.' },
  { name: 'Health & Wellness', status: 'unverified', desc: 'Health services available to students. Contact the institution for current provision.' },
];

function StatusBadge({ status }: { status: string }) {
  if (status === 'confirmed') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-200 shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
        Confirmed
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200 shrink-0">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
      To be verified
    </span>
  );
}

export default function CampusLife() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        overline="Campus Life"
        heading="Life at St. John's"
        subheading="University is more than a degree. Discover the rhythms, communities, and experiences that shape students at St. John's Yambio Campus."
        backgroundImage={campusLifeImage}
      />

      {/* ─── Six Dimensions ─── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14">
            <p className="section-overline mb-2">The Student Experience</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground">
              What is life like at St. John's?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dimensions.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 0.07}>
                <div className="border border-border rounded p-7 h-full hover:border-primary/30 hover:shadow-sm transition-all duration-300 group">
                  <div className="text-2xl mb-4 select-none" aria-hidden="true">{d.icon}</div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Student Council ─── */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="section-overline-light mb-4">Governance</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-5">Student Council</h2>
              <p className="text-base text-white/60 leading-relaxed mb-4">
                St. John's Yambio Campus has an active student council led by Guild President <strong className="text-white/85 font-semibold">Joseph Ndani Gbinzaramba</strong>, who manages peer leadership transition frameworks and represents students in campus governance structures.
              </p>
              <p className="text-base text-white/60 leading-relaxed mb-4">
                Student governance is not a formality here — it reflects the university's belief that the formation of future leaders begins in the way students govern themselves today.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                Campus Director Dr. Paul Alela Oguta has championed democratic culture and civic responsibility as foundations of student formation, actively connecting student governance to real participation in community and national life.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="relative rounded overflow-hidden h-72 lg:h-96 img-zoom-wrap">
              <img src={campusLifeImage} alt="Campus community at St. John's Yambio" className="w-full h-full object-cover img-zoom" />
              <div className="absolute inset-0 bg-primary/35" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Spiritual Life ─── */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <p className="section-overline mb-4">Formation</p>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-5">Spiritual Life</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Spiritual formation is woven into every dimension of campus life at St. John's Yambio. The campus chapel is a centre of prayer and worship, reflecting the university's Catholic identity and the rhythms of faith that shape the academic year.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Connected to the Diocese of Tombura-Yambio, students at St. John's are part of a rich tradition of Catholic education and ministry in Western Equatoria — one that has shaped the region's communities for generations.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ethics, service, human dignity, and the common good are not subjects studied in isolation — they are principles practised in daily campus life.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-muted/40 border border-border rounded p-7">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-5">Faith on Campus</h3>
                <ul className="space-y-3.5">
                  {[
                    'Campus Chapel — prayer and worship at the heart of the institution',
                    'Daily and weekly liturgical rhythms throughout the academic year',
                    'Catholic Social Teaching integrated into academic programmes',
                    'Spiritual counselling and formation support',
                    'Connection to the wider Diocese of Tombura-Yambio community',
                  ].map(item => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Clubs & Activities ─── */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <p className="section-overline mb-2">Student Activities</p>
            <h2 className="font-serif text-3xl font-semibold text-foreground">Clubs & Activities</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
            {[
              {
                title: 'Civic Engagement Club',
                badge: 'Active',
                badgeCls: 'bg-green-50 text-green-700 border-green-200',
                accent: 'hsl(158 58% 26%)',
                desc: 'Founded by Campus Director Dr. Paul Alela Oguta to institutionalise permanent voter awareness, community dialogue, and peacebuilding among students. The club works in collaboration with the National Elections Commission and serves as a model for civic education in the region.',
              },
              {
                title: 'Sports & Recreation',
                badge: 'Confirmed',
                badgeCls: 'bg-blue-50 text-blue-700 border-blue-200',
                accent: 'hsl(210 68% 46%)',
                desc: 'Football, athletics, and recreational activities that build teamwork, discipline, and campus community across programmes and year groups.',
              },
              {
                title: 'Arts & Culture',
                badge: 'Confirmed',
                badgeCls: 'bg-purple-50 text-purple-700 border-purple-200',
                accent: 'hsl(280 50% 46%)',
                desc: 'Musical, dramatic, and cultural expression — celebrating the rich traditions students bring to campus from across Western Equatoria and South Sudan.',
              },
              {
                title: 'Academic Societies',
                badge: 'Confirmed',
                badgeCls: 'bg-amber-50 text-amber-700 border-amber-200',
                accent: 'hsl(44 90% 48%)',
                desc: 'Study groups, debating, and subject-specific societies that extend learning beyond the lecture hall and build research and critical-thinking skills.',
              },
            ].map((club, i) => (
              <ScrollReveal key={club.title} delay={i * 0.08}>
                <div
                  className="bg-card border border-border rounded overflow-hidden h-full"
                  style={{ borderTopColor: club.accent, borderTopWidth: '3px' }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="font-serif font-semibold text-foreground">{club.title}</h3>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border shrink-0 ${club.badgeCls}`}>
                        {club.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{club.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Facilities ─── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <p className="section-overline mb-2">Infrastructure</p>
            <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">Campus Facilities</h2>
            <div className="bg-amber-50 border border-amber-200 rounded p-4 max-w-2xl">
              <p className="text-xs text-amber-800 leading-relaxed">
                Facility information is being verified with the institution. Items marked "Confirmed" are based on documented sources; "To be verified" items should not be relied upon without direct confirmation.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facilities.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 0.05}>
                <div className="border border-border rounded p-5 hover:shadow-sm transition-shadow duration-200">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif font-semibold text-foreground text-sm">{f.name}</h3>
                    <StatusBadge status={f.status} />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Student Stories ─── */}
      <section className="py-20 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <p className="section-overline-light mb-2">Real Voices</p>
            <h2 className="font-serif text-3xl font-semibold">Student Stories</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="relative rounded overflow-hidden h-56 img-zoom-wrap">
                <img src={studentStoryImage} alt="A student at St. John's Yambio" className="w-full h-full object-cover img-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end p-6">
                  <div>
                    <p className="font-serif text-white font-semibold text-lg mb-1">Real student voices coming soon</p>
                    <p className="text-white/55 text-xs">We will feature stories from St. John's students here.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="border border-white/10 rounded p-7 h-56 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-0.5 bg-accent mb-5" aria-hidden="true" />
                  <p className="font-serif text-white/55 italic text-base leading-relaxed">
                    "From Yambio classroom to community impact — stories like this are at the heart of what we do."
                  </p>
                </div>
                <p className="text-xs text-white/28 mt-4">Student stories to be featured as content is gathered from the institution.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
