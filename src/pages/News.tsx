import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import GallerySlider from '@/components/GallerySlider';
import type { GalleryItem } from '@/components/GallerySlider';
import campusLifeImage from '@assets/sjy-campus-life.jpg';
import agricultureImage from '@assets/sjy-agriculture.jpg';
import studentStoryImage from '@assets/sjy-student-story.jpg';

const articles = [
  {
    img: campusLifeImage,
    cat: 'Graduation',
    catCls: 'bg-yellow-50 text-yellow-800 border-yellow-300',
    date: 'August 2026',
    title: '2026 Thanksgiving & Graduation Ceremony — 21–22 August',
    excerpt: 'The Catholic University of South Sudan, St. John\'s Yambio Campus, proudly hosts its 2026 Thanksgiving and Graduation Ceremony on 21\u201322 August 2026. Day 1 features a Thanksgiving Mass at St. Mary Mother of God Catholic Parish, Yambio at 4:00 pm. Day 2 begins with a Graduation Parade at Freedom Square (9:00 am), followed by the Grand Finale at St. Mary\'s Parish at 11:00 am.',
    note: null,
  },
  {
    img: campusLifeImage,
    cat: 'Announcement',
    catCls: 'bg-blue-50 text-blue-700 border-blue-200',
    date: 'July 2026',
    title: 'Campus Reopening — 20 July 2026',
    excerpt: 'The campus has announced preparations for its reopening for the 2026 academic year. This information is subject to official confirmation from the institution.',
    note: 'Subject to official confirmation',
  },
  {
    img: campusLifeImage,
    cat: 'Civic Engagement',
    catCls: 'bg-green-50 text-green-700 border-green-200',
    date: '2026',
    title: 'Civic Education Seminars with the National Elections Commission',
    excerpt: 'In collaboration with the National Elections Commission, St. John\'s Yambio Campus hosted comprehensive civic education seminars to prepare students for peaceful democratic involvement. The programme — spearheaded by Campus Director Dr. Paul Alela Oguta — equips graduates to participate in and safeguard South Sudan\'s democratic processes.',
    note: null,
  },
  {
    img: agricultureImage,
    cat: 'Campus Development',
    catCls: 'bg-amber-50 text-amber-700 border-amber-200',
    date: '2026',
    title: 'Campus Expansion: A Larger Site for a Growing Institution',
    excerpt: 'St. John\'s Yambio Campus has finalised its infrastructure expansion strategy, with plans to relocate services to a larger, updated campus site to accommodate growing class sizes and new academic programmes. The expansion reflects the institution\'s growing role as the leading higher education provider in Western Equatoria.',
    note: null,
  },
  {
    img: agricultureImage,
    cat: 'Partnership',
    catCls: 'bg-green-50 text-green-700 border-green-200',
    date: 'July 2025',
    title: 'Agricultural Partnership with Uganda Martyrs University',
    excerpt: 'A collaboration to strengthen practical agricultural skills and food security outcomes in Western Equatoria State was established between St. John\'s Yambio and Uganda Martyrs University.',
    note: null,
  },
  {
    img: studentStoryImage,
    cat: 'Student Life',
    catCls: 'bg-purple-50 text-purple-700 border-purple-200',
    date: 'Coming soon',
    title: 'Student Council: Voices of Leadership',
    excerpt: 'Led by Guild President Joseph Ndani Gbinzaramba, the student council is one of the most active dimensions of campus governance. Stories from student leaders will be featured here as they are gathered.',
    note: null,
  },
];

const galleryItems: GalleryItem[] = [
  {
    src: campusLifeImage,
    alt: 'Students at St. John\'s Yambio Campus',
    caption: 'Campus Life',
  },
  {
    src: agricultureImage,
    alt: 'Agricultural Sciences programme at St. John\'s Yambio',
    caption: 'Agricultural Sciences',
  },
  {
    src: studentStoryImage,
    alt: 'Student life and leadership at St. John\'s Yambio',
    caption: 'Student Life',
  },
  {
    src: campusLifeImage,
    alt: 'Community at St. John\'s Yambio Campus',
    caption: 'Our Community',
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        overline="Latest"
        heading="News & Stories"
        subheading="Updates, announcements, and stories from St. John's Yambio Campus and the wider Catholic University of South Sudan."
        backgroundImage={campusLifeImage}
      />

      {/* Notice bar */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs text-amber-800">
            For the most current news and announcements, contact the university or Diocese of Tombura-Yambio directly. Content on this page is being progressively updated.
          </p>
        </div>
      </div>

      {/* Featured Announcement */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Announcements</h2>
          </ScrollReveal>

          {/* Graduation Ceremony – Featured */}
          <ScrollReveal className="mb-6">
            <div className="border border-yellow-300 bg-yellow-50/60 rounded-lg p-6 flex flex-col sm:flex-row gap-5 items-start hover:shadow-md transition-shadow">
              <div className="shrink-0 w-16 h-16 rounded-lg bg-primary flex flex-col items-center justify-center text-white select-none shadow">
                <span className="text-[9px] font-bold tracking-widest uppercase">Aug</span>
                <span className="text-2xl font-bold font-serif leading-none">21</span>
                <span className="text-[9px] tracking-wide">– 22</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 items-center mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-300">
                    🎓 Graduation
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">21–22 August 2026</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  2026 Thanksgiving &amp; Graduation Ceremony
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Catholic University of South Sudan, St. John's Yambio Campus cordially announces its <strong>2026 Thanksgiving and Graduation Ceremony</strong> — a two-day celebration of academic achievement. Hosted by <em>Most Rev. Barani Eduardo Hiiboro Kussala</em>.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Campus Reopening */}
          <ScrollReveal>
            <div className="border border-primary/20 bg-primary/3 rounded p-6 flex flex-col sm:flex-row gap-5 items-start hover:shadow-sm transition-shadow">
              <div className="shrink-0 w-14 h-14 rounded bg-primary flex flex-col items-center justify-center text-white select-none">
                <span className="text-[10px] font-semibold tracking-wide uppercase">Jul</span>
                <span className="text-xl font-bold font-serif leading-none">20</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 items-center mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    Announcement
                  </span>
                  <span className="text-xs text-amber-700 font-semibold">Subject to official confirmation</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">Campus Reopening — 20 July 2026</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  St. John's Yambio Campus has announced preparations for its reopening for the 2026 academic year on 20 July 2026. Prospective and returning students should verify this date directly with the campus or the Catholic Diocese of Tombura-Yambio before making travel or other arrangements.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900">Latest Insights</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.1}>
                <article className="group relative h-full flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md bg-white/20 text-white border border-white/30`}>
                        {article.cat}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs font-medium text-blue-600 mb-2">{article.date}</p>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-6 line-clamp-3 flex-grow">{article.excerpt}</p>
                    <div className="flex items-center gap-1 text-primary font-semibold text-sm mt-auto pt-4 border-t border-gray-100 group-hover:gap-3 transition-all duration-300 cursor-pointer">
                      <span className="group-hover:underline underline-offset-2">Read story</span>
                      <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Upcoming Events</h2>
          </ScrollReveal>

          {/* 2026 Graduation — Two-Day Schedule */}
          <ScrollReveal>
            <div className="rounded-xl border border-yellow-200 bg-gradient-to-br from-yellow-50 via-white to-blue-50 overflow-hidden shadow-sm">
              {/* Header */}
              <div className="bg-primary px-6 py-5 text-white">
                <p className="text-xs font-semibold tracking-widest uppercase opacity-80 mb-1">Catholic University of South Sudan · St. John's Yambio Campus</p>
                <h3 className="font-serif text-xl font-bold">2026 Thanksgiving &amp; Graduation Ceremony</h3>
                <p className="text-sm opacity-80 mt-1">Hosted by Most Rev. Barani Eduardo Hiiboro Kussala</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-yellow-200">

                {/* Day 1 */}
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-yellow-300">
                    <span>FIRST DAY</span>
                  </div>
                  <h4 className="font-serif text-base font-semibold text-foreground mb-4">🙏 Thanksgiving Mass</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">📅</span>
                      <span><strong className="text-foreground">Date:</strong> Friday, 21st August, 2026</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">📍</span>
                      <span><strong className="text-foreground">Venue:</strong> St. Mary Mother of God Catholic Parish, Yambio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">🕓</span>
                      <span><strong className="text-foreground">Time:</strong> 4:00 pm</span>
                    </li>
                  </ul>
                </div>

                {/* Day 2 */}
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-blue-200">
                    <span>SECOND DAY</span>
                  </div>
                  <h4 className="font-serif text-base font-semibold text-foreground mb-4">🎓 Grand Finale of the Graduation Ceremony</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">🚶</span>
                      <span><strong className="text-foreground">Parade:</strong> Freedom Square · 9:00 am</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">📅</span>
                      <span><strong className="text-foreground">Date:</strong> Saturday, 22nd August, 2026</span>
                    </li>
                  </ul>
                  <p className="text-xs font-semibold text-foreground mt-4 mb-2 uppercase tracking-wide">Part II</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">📍</span>
                      <span><strong className="text-foreground">Venue:</strong> St. Mary Mother of God Catholic Parish, Yambio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">🕙</span>
                      <span><strong className="text-foreground">Time:</strong> 11:00 am</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-primary/5 border-t border-yellow-200 px-6 py-4 text-center">
                <p className="font-serif italic text-primary text-sm font-medium">✦ Congratulations Graduates ✦</p>
                <p className="text-xs text-muted-foreground mt-1">We are proud of you today, tomorrow and always.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Media Gallery — responsive slider with lightbox */}
      <section className="py-16 bg-muted/40 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-8">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Media Gallery</h2>
              <p className="text-xs text-muted-foreground pb-0.5">Click any image to enlarge</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <GallerySlider items={galleryItems} />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
