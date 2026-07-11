import { Quote as QuoteMark } from 'lucide-react';
import { cn } from '../../lib/cn';

/**
 * Quote
 * Large pull-quote used for testimonials and editorial callouts.
 */
export default function Quote({ className, children, cite, ...props }) {
  return (
    <figure className={cn('relative', className)} {...props}>
      <QuoteMark
        className="mb-4 text-[var(--color-accent-light)]"
        size={36}
        aria-hidden="true"
      />
      <blockquote className="font-[var(--font-heading)] text-xl font-medium leading-snug text-[var(--color-text)] lg:text-2xl">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="mt-4 text-sm font-medium text-[var(--color-text-muted)]">
          {cite}
        </figcaption>
      )}
    </figure>
  );
}