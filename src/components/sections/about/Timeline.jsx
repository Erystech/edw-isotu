import { cn } from '../../../lib/cn';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';

/**
 * TimelineItem
 * A single vertical-rail entry: dot + connecting line, year, title, copy.
 * `invert` lets it sit on a dark (tone="primary") section without a
 * separate color variant component.
 */
export function TimelineItem({ year, title, description, invert = false, isLast = false }) {
  return (
    <li className="relative pl-10 pb-10 last:pb-0">
      {!isLast && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute left-[7px] top-3 h-full w-px',
            invert ? 'bg-white/20' : 'bg-[var(--color-border)]'
          )}
        />
      )}
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-0 top-1.5 h-4 w-4 rounded-full border-2',
          invert
            ? 'border-white bg-[var(--color-accent)]'
            : 'border-[var(--color-accent-light)] bg-[var(--color-surface)]'
        )}
      />
      <span
        className={cn(
          'text-xs font-semibold uppercase tracking-[0.18em]',
          invert ? 'text-white/70' : 'text-[var(--color-accent-light)]'
        )}
      >
        {year}
      </span>
      <Heading
        as="h3"
        size="sm"
        className={cn('mt-2', invert ? 'text-white' : 'text-[var(--color-primary)]')}
      >
        {title}
      </Heading>
      <Paragraph
        tone="muted"
        size="sm"
        className={cn('mt-2', invert && 'text-white/70')}
      >
        {description}
      </Paragraph>
    </li>
  );
}

/**
 * Timeline
 * @param {{ year: string, title: string, description: string }[]} items
 */
export default function Timeline({ items, invert = false, className }) {
  return (
    <ol className={cn('flex flex-col', className)}>
      {items.map((item, index) => (
        <TimelineItem
          key={`${item.year}-${item.title}`}
          {...item}
          invert={invert}
          isLast={index === items.length - 1}
        />
      ))}
    </ol>
  );
}