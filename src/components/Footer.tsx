import { Link } from 'wouter';

const cols = [
  {
    title: 'Discover',
    links: [
      ['About Us', '/discover'],
      ['Our Story', '/discover'],
      ['History', '/discover'],
      ['Catholic Identity', '/discover'],
      ['Leadership', '/discover'],
    ],
  },
  {
    title: 'Study',
    links: [
      ['Programmes', '/study'],
      ['Admissions', '/study'],
      ['Entry Requirements', '/study'],
      ['Academic Calendar', '/study'],
    ],
  },
  {
    title: 'Connect',
    links: [
      ['Campus Life', '/campus-life'],
      ['Impact', '/impact'],
      ['News & Stories', '/news'],
      ['Contact Us', '/contact'],
    ],
  },
];

// Social icon paths (SVG)
const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded bg-white/10 border border-white/15 flex items-center justify-center font-serif font-bold text-sm text-white group-hover:bg-white/15 transition-colors">
                SJ
              </div>
              <div>
                <div className="font-semibold text-sm text-white">St. John's Yambio Campus</div>
                <div className="text-[10px] text-white/45">Catholic University of South Sudan</div>
              </div>
            </Link>

            <p className="text-sm font-serif italic text-white/40 leading-relaxed mb-5">
              "Lux Veritatis — Light of Truth"
            </p>

            <address className="not-italic text-xs text-white/35 leading-relaxed mb-5">
              Catholic Diocese of Tombura-Yambio<br />
              Yambio, Western Equatoria State<br />
              South Sudan
            </address>

            <p className="text-xs text-white/25 mb-6">
              Patron: Bishop Barani Eduardo Hiiboro Kussala
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded border border-white/10 flex items-center justify-center text-white/35 hover:text-white/70 hover:border-white/25 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h3 className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/30 mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-white/50 hover:text-white/85 transition-colors duration-200">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-white/28">
            &copy; 2026 St. John's Yambio Campus, Catholic University of South Sudan. All rights reserved.
          </p>
          <p className="text-xs text-white/20 italic text-left sm:text-right max-w-xs">
            Website content is being progressively verified with the institution.
          </p>
        </div>
      </div>
    </footer>
  );
}
