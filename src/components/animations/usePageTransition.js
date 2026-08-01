import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * usePageTransition
 * Tracks route changes and flips `visible` false→true on a double
 * rAF, giving the browser a paint frame at opacity-0/translated
 * before transitioning in. Resets on every pathname change so page
 * navigations always get a fresh entrance.
 */
export function usePageTransition() {
  const { pathname } = useLocation();
  
  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;
      
    if (prefersReducedMotion) return;

    setVisible(false);
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, [pathname]);

  return visible;
}