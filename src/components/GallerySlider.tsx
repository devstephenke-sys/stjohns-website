import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

interface GallerySliderProps {
  items: GalleryItem[];
  className?: string;
}

/**
 * GallerySlider — responsive Embla carousel with:
 * - Captions (revealed on hover)
 * - Lazy loading
 * - Touch / drag support (Embla native)
 * - Lightbox preview on click
 * - Dot and arrow navigation
 */
export default function GallerySlider({ items, className = '' }: GallerySliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Sync selected index with embla
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxPrev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + items.length) % items.length),
    [items.length],
  );
  const lightboxNext = useCallback(
    () => setLightboxIndex((i) => (i + 1) % items.length),
    [items.length],
  );

  // Keyboard navigation in lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, lightboxPrev, lightboxNext]);

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Carousel viewport */}
        <div className="overflow-hidden rounded" ref={emblaRef}>
          <div className="flex -mr-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="relative flex-none w-full sm:w-1/2 lg:w-1/3 pr-3"
              >
                <button
                  className="group relative w-full overflow-hidden rounded block focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  onClick={() => openLightbox(i)}
                  aria-label={`Open ${item.alt} in lightbox`}
                  type="button"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                  {/* Zoom icon */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-white/90 backdrop-blur-sm rounded p-1.5 shadow-sm">
                      <ZoomIn className="w-3.5 h-3.5 text-foreground" />
                    </div>
                  </div>
                  {/* Caption — slides up on hover */}
                  {item.caption && (
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <p className="text-xs text-white font-medium text-left leading-snug">
                        {item.caption}
                      </p>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Controls row */}
        <div className="flex items-center justify-between mt-4 px-0.5">
          {/* Dot indicators */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Gallery slides">
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === selectedIndex}
                onClick={() => { emblaApi?.scrollTo(i); }}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-250 ${
                  i === selectedIndex
                    ? 'w-5 bg-primary'
                    : 'w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70'
                }`}
              />
            ))}
          </div>
          {/* Arrow buttons */}
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="p-2 rounded border border-border hover:bg-muted transition-colors duration-150"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="p-2 rounded border border-border hover:bg-muted transition-colors duration-150"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 380, damping: 38 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setLightboxOpen(false)}
                aria-label="Close lightbox"
                className="absolute -top-10 right-0 p-2 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={items[lightboxIndex].src}
                alt={items[lightboxIndex].alt}
                className="w-full rounded object-contain max-h-[78vh]"
              />

              {items[lightboxIndex].caption && (
                <p className="text-center text-sm text-white/60 mt-3 font-medium">
                  {items[lightboxIndex].caption}
                </p>
              )}

              {/* Slide count */}
              <p className="text-center text-xs text-white/30 mt-1">
                {lightboxIndex + 1} / {items.length}
              </p>

              {/* Prev arrow */}
              <button
                onClick={lightboxPrev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next arrow */}
              <button
                onClick={lightboxNext}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
