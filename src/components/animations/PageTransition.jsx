import { cn } from '../../lib/cn';
import { usePageTransition } from './usePageTransition';

/**
 * PageTransition
 * Wraps a page's rendered output (inside each page component, or
 * once around <Outlet /> in RootLayout — see integration notes).
 * Subtle fade + lift on mount, tied to route changes.
 */
export default function PageTransition({ children, className }) {
  const visible = usePageTransition();

  return (
    <div
      className={cn(
        'transition-[opacity,transform] duration-500 ease-[var(--ease-premium)]',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
        className
      )}
    >
      {children}
    </div>
  );
}