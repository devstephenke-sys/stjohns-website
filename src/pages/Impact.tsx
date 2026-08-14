import { Link } from 'wouter';
import ScrollReveal from '@/components/ScrollReveal';
import PageHero from '@/components/PageHero';
import impactImage from '@assets/sjy-impact.jpg';
import agricultureImage from '@assets/sjy-agriculture.jpg';

const researchThemes = [
  { title: 'Peace & Reconciliation', desc: 'Research and dialogue around peacebuilding, social cohesion, transitional justice, and the healing of communities in post-conflict South Sudan.' },
  { title: 'Ethical Leadership', desc: 'Formation of leaders grounded in integrity, Catholic Social Teaching, and a commitment to public service and the common good.' },
  { title: 'Agriculture & Environment', desc: 'Applied research connecting academic knowledge to the agricultural and environmental challenges of Western Equatoria.' },
  { title: 'Community Development', desc: 'Engagement with the social, economic, and human development needs of communities in and around Yambio.' },
  { title: 'Youth Development', desc: 'Formation of young people as agents of peace, healing, self-reliance, and transformation in South Sudanese society.' },
  { title: 'Governance & Civic Life', desc: 'Study of civic responsibility, governance, and the role of educated citizens in building accountable institutions.' },
];

const impactChain = [
  { label: 'What we learn', sub: 'Academic programmes, critical thinking, research methods' },
  { label: 'What we research', sub: 'Peacebuilding, agriculture, governance, community development' },
  { label: 'How we serve', sub: 'Community outreach, dialogue, partnerships, student service' },
  { label: 'How communities benefit', sub: 'Capable graduates, applied knowledge, social transformation' },
];

export default function Impact() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        overline="Impact"
        heading="Research & Community"
        subheading="What problems is St. John's helping South Sudan understand and solve?"
        backgroundImage={impactImage}
      />

      {/* Opening statement */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <p className="text-base text-muted-foreground leading-relaxed mb-5">
              At St. John's Yambio Campus, education is understood as a form of service — not just preparation for individual careers, but formation for the transformation of society. The wider Catholic University of South Sudan is connected to research and community outreach that addresses the real challenges facing South Sudan: peace, governance, food security, and human dignity.
            </p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed italic">
              Specific projects, publications, and outcomes should be verified with the institution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact chain */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-12">
            <p className="section-overline mb-2">The Impact Chain</p>
            <h2 className="font-serif text-3xl font-semibold text-foreground">From knowledge to community benefit</h2>
          </ScrollReveal>
          <div className="space-y-0">
            {impactChain.map((step, i, arr) => (
              <ScrollReveal key={step.label} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-card border border-border rounded p-6 w-full max-w-sm shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                    <h3 className="font-serif font-semibold text-foreground mb-1">{step.label}</h3>
                    <p className="text-xs text-muted-foreground">{step.sub}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="w-px h-7 bg-border my-1" aria-hidden="true" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agriculture feature */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="relative rounded overflow-hidden h-72 lg:h-96 img-zoom-wrap">
              <img src={agricultureImage} alt="Agricultural education at St. John's Yambio" className="w-full h-full object-cover img-zoom" />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-800 text-xs font-semibold mb-5">
                Documented Partnership
              </div>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-5">Agriculture & Food Security</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                In July 2025, a collaboration with Uganda Martyrs University (UMU) was established to strengthen practical agricultural skills and address food security challenges in Western Equatoria State.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                This partnership reflects the university's historical connection to agricultural education in Yambio — the Faculty of Agricultural and Environmental Sciences was among the first programmes expanded to the campus in 2009 — and its ongoing commitment to education that serves the real needs of South Sudanese communities.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Food security in Western Equatoria is not an abstract academic topic here — it is a lived challenge, and the campus is positioned to connect academic knowledge with practical, community-serving outcomes.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Peace & Justice */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <p className="section-overline-light mb-4">Social Transformation</p>
              <h2 className="font-serif text-3xl font-semibold mb-5">Peace & Justice</h2>
              <p className="text-base text-white/60 leading-relaxed mb-4">
                The Catholic University of South Sudan's Institute of Catholic Social Teachings works around civic responsibility, ethical leadership, justice, governance, and social problems in South Sudanese society.
              </p>
              <p className="text-base text-white/60 leading-relaxed mb-4">
                The Institute of Applied Research and Community Outreach has engaged with civil society, peacebuilding, reconciliation, forgiveness, and community needs — connecting academic research to the lived reality of communities in one of the world's youngest nations.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                This is one of the university's most significant institutional differentiators: a commitment to education as an instrument of peace, not only development.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-0">
                {['Research', 'Dialogue', 'Understanding', 'Reconciliation', 'Peaceful Society'].map((step, i, arr) => (
                  <div key={step} className="flex flex-col items-start">
                    <div className="bg-white/10 border border-white/15 rounded px-5 py-3 hover:bg-white/15 transition-colors">
                      <span className="text-white font-serif font-semibold text-sm">{step}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="ml-5 w-px h-5 bg-white/20" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <p className="section-overline mb-2">Academic Focus</p>
            <h2 className="font-serif text-3xl font-semibold text-foreground">Research Themes</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchThemes.map((theme, i) => (
              <ScrollReveal key={theme.title} delay={i * 0.07}>
                <div className="border border-border rounded p-6 h-full hover:shadow-sm hover:border-primary/20 transition-all duration-300">
                  <div className="w-8 h-0.5 bg-accent mb-5" aria-hidden="true" />
                  <h3 className="font-serif font-semibold text-foreground mb-2">{theme.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{theme.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Partnerships */}
      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Community Engagement</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Education at St. John's is understood as inseparable from community. The Diocese of Tombura-Yambio's mission encompasses the whole person and the whole community — and the university's presence in Yambio reflects that commitment.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Students are encouraged to engage with their communities through outreach, service, and the practical application of their studies — living out the motto <em className="font-serif">Lux Veritatis</em> not just for themselves, but for those around them.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Partnerships</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-5">
                The campus develops partnerships in agriculture, peacebuilding, and education — locally, nationally, and internationally. The Uganda Martyrs University collaboration is the most recently documented example.
              </p>
              <p className="text-sm text-muted-foreground/70 leading-relaxed mb-8 italic">
                Further partnership details are available on request from the institution.
              </p>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Alumni</h2>
              <div className="bg-card border border-dashed border-border rounded p-5">
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  Our graduates are building South Sudan — as teachers, farmers, peacebuilders, and leaders. Their stories will be featured here as they are gathered.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background border-t border-border text-center">
        <div className="max-w-xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Be part of the impact</h2>
            <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
              Education that transforms communities begins with individuals who choose to aim higher. Explore what St. John's has to offer.
            </p>
            <Link href="/study" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
              Explore Programmes
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
