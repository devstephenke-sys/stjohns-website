interface PageHeroProps {
  overline: string;
  heading: string;
  subheading?: string;
  backgroundImage?: string;
  /** Renders children below the subheading */
  children?: React.ReactNode;
}

/**
 * Consistent inner-page hero banner used on all pages except Home.
 * Navy background with optional background image overlay.
 */
export default function PageHero({
  overline,
  heading,
  subheading,
  backgroundImage,
  children,
}: PageHeroProps) {
  return (
    <div className="relative bg-primary pt-24 pb-20 overflow-hidden">
      {/* Gold accent bar at very top */}
      <div className="absolute top-0 left-0 right-0 h-1 pointer-events-none" aria-hidden="true"
        style={{ background: 'linear-gradient(90deg, hsl(44 90% 50%), hsl(44 90% 62%), hsl(44 90% 50%))' }}
      />

      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-12 scale-105"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          aria-hidden="true"
        />
      )}
      {/* Multi-layer gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/70 to-primary pointer-events-none" aria-hidden="true" />
      {/* Gold radial glow — bottom-left warmth */}
      <div className="absolute bottom-0 left-0 w-96 h-64 pointer-events-none opacity-15" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at bottom left, hsl(44 90% 50%), transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gold overline pill */}
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="w-5 h-px bg-accent/70" aria-hidden="true" />
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-accent/80">
            {overline}
          </p>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl">
          {heading}
        </h1>
        {subheading && (
          <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed">
            {subheading}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
