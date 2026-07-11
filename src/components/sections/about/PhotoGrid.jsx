import { cn } from '../../../lib/cn';

/**
 * PhotoGrid
 * @param {{ src: string, alt: string, span?: 2 }[]} photos
 * Pass span: 2 on an entry to let it take a 2x2 block in the grid.
 */
export default function PhotoGrid({ photos, className, ...props }) {
  return (
    <div
      className={cn('grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4', className)}
      {...props}
    >
      {photos.map((photo, index) => (
        <div
          key={photo.alt || index}
          className={cn(
            'overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]',
            photo.span === 2 && 'col-span-2 row-span-2'
          )}
        >
          <img
            src={photo.src}
            alt={photo.alt || ''}
            loading="lazy"
            className="aspect-square h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}