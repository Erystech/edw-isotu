import { useEffect, useRef, useState } from 'react';

/**
 * AnimatedCounter
 * Counts from 0 to `value` once the element enters the viewport.
 * Immediately renders the final value if the user prefers reduced
 * motion, or if IntersectionObserver isn't available.
 */
export default function AnimatedCounter({ value, duration = 1400 }) {
  const ref = useRef(null);
  const played = useRef(false);

  const [display, setDisplay] = useState(() => {
    const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const noObserver = typeof window !== 'undefined' && typeof IntersectionObserver === 'undefined';
    return (prefersReducedMotion || noObserver) ? value : 0;
  });

  useEffect(() => {
    if (display === value) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !played.current) {
          played.current = true;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, display]);

  return (
    <span ref={ref} aria-label={String(value)}>
      {display.toLocaleString()}
    </span>
  );
}