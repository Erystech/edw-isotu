import { Play } from 'lucide-react';
import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Label from '../typography/Label';

/**
 * VideoCard
 * Thumbnail-first card; `onPlay` opens a modal/player at the page
 * level so this component stays presentation-only.
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
        'group relative w-full overflow-hidden rounded-2xl text-left shadow-[var(--shadow-soft)]',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2',
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
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      <div
        className="absolute inset-0 grid place-items-center opacity-90 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-white/95">
          <Play className="ml-1 text-[var(--color-primary)]" size={22} fill="currentColor" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        {duration && (
          <Label as="span" className="text-white/70">
            {duration}
          </Label>
        )}
        <Heading as="h3" size="xs" className="mt-1 text-white">
          {title}
        </Heading>
      </div>
    </button>
  );
}
