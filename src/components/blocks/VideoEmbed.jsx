import { cn } from '../../lib/cn';

export default function VideoEmbed({
  src,
  title = 'Video',
  className,
  ...props
}) {
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
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}