import { cn } from '../../lib/cn';

/**
 * Badge
 * Small label used for categories, statuses, and eyebrows.
 * @param {'accent'|'primary'|'muted'|'success'|'danger'} tone
 */
const tones = {
  accent: 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]',
  primary: 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]',
  muted: 'bg-[var(--color-border)]/60 text-[var(--color-text-muted)]',
  success: 'bg-[var(--color-success)]/10 text-[var(--color-success)]',
  danger: 'bg-[var(--color-danger)]/10 text-[var(--color-danger)]',
};

export default function Badge({ tone = 'accent', className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        tones[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
