import { cn } from '../../lib/cn';

/**
 * Label
 * Small uppercase eyebrow/meta text
 */
export default function Label({ as: Tag = 'span', className, children, ...props }) {
  return (
    <Tag
      className={cn(
        'text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}