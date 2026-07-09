import { cn } from '../../lib/cn';

/**
 * Label
 * Small uppercase eyebrow/meta text. Distinct from <FormField> labels,
 * this is for section eyebrows, card meta (e.g. "keynote · 45 min"),
 * and category tags rendered as plain text (not a pill — see Badge).
 */
export default function Label({ as: Tag = 'span', className, children, ...props }) {
  return (
    <Tag
      className={cn(
        'text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
