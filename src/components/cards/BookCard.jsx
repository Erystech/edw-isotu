import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function BookCard({
  cover,
  title,
  tagline,
  badge,
  purchaseHref,
  className,
  ...props
}) {
  return (
    <div className={cn('group flex flex-col', className)} {...props}>
      <div className="relative overflow-hidden rounded-2xl bg-[var(--color-primary)]/5 shadow-[var(--shadow-soft)]">
        <img
          src={cover}
          alt={`${title} book cover`}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {badge && (
          <Badge tone="surface" className="absolute left-4 top-4">
            {badge}
          </Badge>
        )}
      </div>

      <Heading as="h3" size="sm" className="mt-5">
        {title}
      </Heading>
      <Paragraph tone="muted" size="sm" className="mt-2 flex-1">
        {tagline}
      </Paragraph>

      {purchaseHref && (
        <Button href={purchaseHref} variant="secondary" size="sm" className="mt-5 self-start">
          Get the book
        </Button>
      )}
    </div>
  );
}
