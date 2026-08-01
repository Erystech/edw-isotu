import { useEffect, useRef, useState, forwardRef } from 'react';
import { cn } from '../../lib/cn';

/**
 * FadeInOnScroll
 * Scroll-triggered entrance animation. Reuses the fade-up / fade /
 * scale / slide keyframes already defined in index.css — no new
 * animation logic, just a viewport trigger wrapped around them.
 *
 * @param {'fade-up'|'fade'|'scale'|'slide'} variant
 * @param {number} delay - ms, applied as animation-delay once in view
 * @param {number} threshold - IntersectionObserver threshold (0–1)
 * @param {boolean} once - if false, re-animates every time it re-enters view
 */
const VARIANT_CLASS = {
  'fade-up': 'animate-fade-up',
  fade: 'animate-fade',
  scale: 'animate-scale',
  slide: 'animate-slide',
};

const FadeInOnScroll = forwardRef(function FadeInOnScroll(
  {
    as: Tag = 'div',
    variant = 'fade-up',
    delay = 0,
    threshold = 0.15,
    once = true,
    className,
    children,
    ...props
  },
  forwardedRef
) {
  const localRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const node = localRef.current;
    if (!node) return;

    // Graceful degradation: no IO support → just show the content.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setAnimating(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  const handleAnimationEnd = () => {
    setAnimating(false);
  };

  return (
    <Tag
      ref={(node) => {
        localRef.current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
      className={cn(!inView && 'opacity-0', inView && VARIANT_CLASS[variant], className)}
      style={{
        ...(inView && delay ? { animationDelay: `${delay}ms` } : undefined),
        ...(animating ? { willChange: 'opacity, transform' } : undefined),
      }}
      onAnimationEnd={handleAnimationEnd}
      {...props}
    >
      {children}
    </Tag>
  );
});

export default FadeInOnScroll;