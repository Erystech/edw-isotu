import { Play } from 'lucide-react';
import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Label from '../typography/Label';

/**
 * VideoCard
 * Resolved critical white-on-white contrast failures and 
 * replaced the undefined overlay with a strict background mask.
 */
export default function VideoCard({
  thumbnail,
  title,
  duration,
  onPlay,
  className,
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className={cn(
        'group relative w-full overflow-hidden rounded-2xl text-left border border-[var(--color-border)]',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2',
        className
      )}
      {...props}
    >
      <img
        src={thumbnail}
        alt=""
        loading="lazy"
        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* 
        Refactored Overlay:
        Replaced the phantom 'hero-overlay' class with a controlled 70% dark mask.
      */}
      <div className="absolute inset-0 bg-[var(--color-background)]/70 transition-colors duration-300 group-hover:bg-[var(--color-background)]/60" aria-hidden="true" />

      <div
        className="absolute inset-0 grid place-items-center transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        {/* 
          Refactored Play Button:
        */}
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-accent-light)] shadow-lg">
          <Play className="ml-1 text-[var(--color-text)]" size={22} fill="currentColor" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 z-10">
        {duration && (
          <Label as="span" className="text-[var(--color-text-muted)]">
            {duration}
          </Label>
        )}
        <Heading as="h3" size="xs" className="mt-1 text-[var(--color-primary)]">
          {title}
        </Heading>
      </div>
    </button>
  );
}