import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';

/**
 * MediaCategoryCard
 * Image-led link tile for a content hub (podcasts, interviews, books,
 * articles). Deliberately excerpt/date-free -- BlogCard already covers
 * that shape; this is a simpler "enter this section" tile matching the
 * live site's 4-tile insights hub.
 */
export default function MediaCategoryCard({
  image,
  title,
  description,
  href,
  external = false,
  className,
  ...props
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(
        'group relative block overflow-hidden rounded-3xl border border-[var(--color-border)]',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2',
        className
      )}
      {...props}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
      />
      <div
        className="absolute inset-0 bg-[var(--color-background)]/60 transition-colors duration-300 group-hover:bg-[var(--color-background)]/45"
        aria-hidden="true"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <Heading as="h3" size="sm" className="text-white">
            {title}
          </Heading>
          {description && (
            <Paragraph size="sm" className="mt-2 max-w-xs text-white/75">
              {description}
            </Paragraph>
          )}
        </div>
        <ArrowUpRight
          className="mt-1 shrink-0 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          size={22}
          aria-hidden="true"
        />
      </div>
    </a>
  );
}