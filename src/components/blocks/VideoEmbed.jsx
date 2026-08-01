import { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '../../lib/cn';

/**
 * VideoEmbed
 *
 */
export default function VideoEmbed({
  src,
  title = 'Video',
  className,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const videoId = src?.match(/\/embed\/([^?]+)/)?.[1];
  const thumbnailUrl = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : null;

  if (loaded) {
    return (
      <div
        className={cn(
          'aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border)]',
          className
        )}
        {...props}
      >
        <iframe
          className="h-full w-full"
          src={`${src}${src.includes('?') ? '&' : '?'}autoplay=1`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play video: ${title}`}
      className={cn(
        'group relative aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border)]',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2',
        className
      )}
      {...props}
    >
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div
        className="absolute inset-0 bg-[var(--color-background)]/40 transition-colors duration-300 group-hover:bg-[var(--color-background)]/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 grid place-items-center transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-accent-light)] shadow-lg">
          <Play className="ml-1 text-white" size={22} fill="currentColor" />
        </div>
      </div>
    </button>
  );
}