import { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  /** Accessible label for the card */
  label?: string;
}

/**
 * 3D flip card — hover/focus/tap reveals the back face.
 * The container must have an explicit height set (e.g. `h-44`).
 */
export default function FlipCard({ front, back, className = '', label }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`relative cursor-pointer select-none ${className}`}
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={label}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {/* Front face */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          } as React.CSSProperties}
          className="absolute inset-0"
        >
          {front}
          {/* Subtle interactive hint — pulse dot bottom-right */}
          <motion.div
            className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-white/40 pointer-events-none"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
        </div>

        {/* Back face */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          } as React.CSSProperties}
          className="absolute inset-0"
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
