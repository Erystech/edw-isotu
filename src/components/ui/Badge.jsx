import { cn } from '../../lib/cn';

/**
 * Badge
 * @param {'accent'|'primary'|'muted'|'success'|'danger'|'surface'} tone
 */
const tones = {
  accent: 'bg-[var(--color-surface)] border border-[var(--color-accent-light)] text-[var(--color-accent-light)]',
  primary: 'bg-[var(--color-surface)] border border-[var(--color-primary-muted)] text-[var(--color-primary)]',
  muted: 'bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]',
  success: 'bg-[var(--color-surface)] border border-[var(--color-success)] text-[var(--color-success)]',
  danger: 'bg-[var(--color-surface)] border border-[var(--color-danger)] text-[var(--color-danger)]',
  /* Refactored Surface Badge: Replaced the broken white-on-white configuration */
  surface: 'bg-[var(--color-surface-elevated)] border border-[var(--color-border-light)] text-[var(--color-primary)]',
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