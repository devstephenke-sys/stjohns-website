import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Discover', href: '/discover' },
  { label: 'Study', href: '/study' },
  { label: 'Campus Life', href: '/campus-life' },
  { label: 'Impact', href: '/impact' },
  { label: 'News', href: '/news' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isHome = location === '/';
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          transparent
            ? 'bg-transparent'
            : 'bg-white/96 backdrop-blur-md border-b border-border shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className={`w-9 h-9 rounded flex items-center justify-center font-serif font-bold text-sm transition-all duration-300 ${
                transparent
                  ? 'bg-white/15 text-white border border-white/30 group-hover:bg-white/25'
                  : 'bg-primary text-primary-foreground group-hover:bg-primary/90'
              }`}>
                SJ
              </div>
              <div className="hidden sm:block leading-tight">
                <div className={`font-semibold text-sm transition-colors duration-300 ${transparent ? 'text-white' : 'text-foreground'}`}>
                  St. John's Yambio
                </div>
                <div className={`text-[10px] transition-colors duration-300 ${transparent ? 'text-white/60' : 'text-muted-foreground'}`}>
                  Catholic University of South Sudan
                </div>
              </div>
            </Link>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map(link => {
                const isActive = link.href === '/'
                  ? location === '/'
                  : location.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 text-xs font-semibold tracking-[0.08em] rounded transition-colors duration-200 ${
                      isActive
                        ? transparent
                          ? 'text-white'
                          : 'text-primary'
                        : transparent
                          ? 'text-white/65 hover:text-white hover:bg-white/8'
                          : 'text-foreground/55 hover:text-foreground hover:bg-muted/60'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className={`absolute bottom-0.5 left-3 right-3 h-px rounded-full ${
                          transparent ? 'bg-accent' : 'bg-primary'
                        }`}
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/study"
                className={`hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wider rounded transition-all duration-200 ${
                  transparent
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : 'bg-accent text-accent-foreground hover:bg-accent/90'
                }`}
              >
                Apply Now
              </Link>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={open}
                className={`lg:hidden p-2 rounded transition-colors duration-200 ${
                  transparent ? 'text-white hover:bg-white/10' : 'text-foreground hover:bg-muted'
                }`}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 38 }}
            className="fixed inset-0 z-50 bg-primary flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header row */}
            <div className="flex items-center justify-between h-16 px-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-white/15 border border-white/30 flex items-center justify-center font-serif font-bold text-sm text-white">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">St. John's Yambio</div>
                  <div className="text-[10px] text-white/55">Catholic University of South Sudan</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 text-white hover:bg-white/10 rounded transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-0.5" aria-label="Mobile navigation">
              {navLinks.map((link, i) => {
                const isActive = link.href === '/'
                  ? location === '/'
                  : location.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-4 border-b border-white/10 transition-colors group ${
                        isActive ? 'text-accent' : 'text-white hover:text-accent'
                      }`}
                    >
                      <span className="font-serif text-2xl font-medium">{link.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.15 }}
                className="pt-7"
              >
                <Link
                  href="/study"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 text-sm font-semibold tracking-wider rounded bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Apply Now
                </Link>
              </motion.div>
            </nav>

            <div className="px-8 pb-8 text-xs text-white/30 italic font-serif">
              Lux Veritatis — Light of Truth
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
