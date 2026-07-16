import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/cn';

/**
 * Breadcrumb
 *
 * @param {{ label: string, href?: string }[]} items
 * @param {boolean} invert - use on dark/image-backed sections
 */
export default function Breadcrumb({ items = [], invert = false, className, ...props }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm', className)} {...props}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight
                  size={14}
                  aria-hidden="true"
                  className={invert ? 'text-white/40' : 'text-[var(--color-text-muted)]'}
                />
              )}
              {isLast || !item.href ? (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={cn('font-medium', invert ? 'text-white' : 'text-[var(--color-text)]')}
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className={cn(
                    'transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2 rounded-xs',
                    invert
                      ? 'text-white/70 hover:text-white'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-accent-light)]'
                  )}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}