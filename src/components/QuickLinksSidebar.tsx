import { useState, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface SidebarSection {
  label: string;
  href: string;
}

interface QuickLinksSidebarProps {
  sections: SidebarSection[];
  /** Called with the currently active section href when it changes */
  onActiveChange?: (href: string) => void;
}

/**
 * useActiveSection — tracks which section is currently in the viewport.
 * Returns the `#id` href of the active section.
 */
export function useActiveSection(sections: SidebarSection[]) {
  const [active, setActive] = useState(sections[0]?.href ?? '');

  useEffect(() => {
    const els = sections
      .map((s) => document.querySelector<HTMLElement>(s.href))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Sort by top position; pick the topmost intersecting entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-12% 0px -68% 0px', threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return active;
}

/**
 * QuickLinksSidebar — collapsible sticky sidebar for desktop.
 * Renders the `lg:col-span-1` grid column with section-aware active highlighting
 * and smooth scroll on click.
 *
 * Usage: place as the first child inside `grid grid-cols-1 lg:grid-cols-3 gap-14`.
 * For mobile, pair with a horizontal strip that also calls `useActiveSection`.
 */
export default function QuickLinksSidebar({ sections, onActiveChange }: QuickLinksSidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const activeSection = useActiveSection(sections);

  useEffect(() => {
    onActiveChange?.(activeSection);
  }, [activeSection, onActiveChange]);

  const scrollTo = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="sticky top-24">
        {/* Collapse toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-semibold tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded transition-colors mb-0.5"
          aria-expanded={isOpen}
          aria-controls="quick-links-list"
        >
          Quick Links
          <motion.span
            animate={{ rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.18 }}
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="quick-links-list"
              key="links"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <nav aria-label="Page sections" className="pt-0.5 space-y-0.5">
                {sections.map((s) => {
                  const isActive = activeSection === s.href;
                  return (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(s.href);
                      }}
                      className={`flex items-center gap-2.5 px-3 py-2.5 text-sm rounded transition-all duration-200 ${
                        isActive
                          ? 'text-primary font-semibold bg-primary/5'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                      }`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-200 ${
                          isActive ? 'bg-primary' : 'bg-transparent'
                        }`}
                      />
                      {s.label}
                    </a>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
