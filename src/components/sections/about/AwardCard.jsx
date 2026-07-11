import { Award } from 'lucide-react';
import { cn } from '../../../lib/cn';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';

/**
 * AwardCard
 * Ledger-style award entry. `featured` produces a larger spotlight
 * treatment (used for the lead award) inside the same grid — the rest
 * stay compact so the hierarchy reads at a glance.
 */
export default function AwardCard({ year, title, issuer, featured = false, className, ...props }) {
  return (
    <div
      className={cn(
        'card-premium group relative flex flex-col justify-between overflow-hidden p-8',
        featured && 'sm:col-span-2 border-[var(--color-accent-light)] lg:p-12',
        className
      )}
      {...props}
    >
      <Award
        aria-hidden="true"
        strokeWidth={1}
        className={cn(
          'pointer-events-none absolute -right-4 -top-4 transition-colors duration-300 group-hover:text-[var(--color-accent-light)]',
          featured ? 'h-36 w-36 text-[var(--color-accent-light)]/25' : 'h-20 w-20 text-[var(--color-border)]'
        )}
      />

      <div className="relative">
        <span
          className={cn(
            'block font-[var(--font-heading)] font-extrabold leading-none text-[var(--color-accent-light)]',
            featured ? 'text-6xl lg:text-7xl' : 'text-4xl'
          )}
        >
          {year}
        </span>

        <Heading as="h3" size={featured ? 'md' : 'sm'} className="mt-5 text-[var(--color-primary)]">
          {title}
        </Heading>

        <Paragraph
          tone="muted"
          size="sm"
          className="mt-3 font-semibold uppercase tracking-[0.14em]"
        >
          {issuer}
        </Paragraph>
      </div>
    </div>
  );
}