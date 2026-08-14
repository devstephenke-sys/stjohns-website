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
          <ScrollReveal>
            <div className="border border-primary/20 bg-primary/3 rounded p-6 flex flex-col sm:flex-row gap-5 items-start hover:shadow-sm transition-shadow">
              {/* Date block */}
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
      <section className="py-16 bg-muted/40 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-8">
            <h2 className="font-serif text-2xl font-semibold text-foreground">News & Stories</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.08}>
                <article className="bg-card border border-border rounded overflow-hidden h-full flex flex-col group hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-44 overflow-hidden img-zoom-wrap">
                    <img
                      src={article.img}
                      alt={article.title}
                      loading="lazy"
                      className="w-full h-full object-cover img-zoom"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${article.catCls}`}>
                        {article.cat}
                      </span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="font-serif text-base font-semibold text-foreground mb-2 leading-snug">{article.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{article.excerpt}</p>
                    {article.note && (
                      <p className="text-xs text-amber-700 italic mt-3">{article.note}</p>
                    )}
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
          <ScrollReveal>
            <div className="border border-dashed border-border rounded p-10 text-center">
              <p className="text-muted-foreground text-sm mb-1">Check back for upcoming campus events.</p>
              <p className="text-xs text-muted-foreground italic">Events will be published here as information is confirmed with the institution.</p>
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
