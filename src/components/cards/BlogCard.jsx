import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Label from '../typography/Label';
import Badge from '../ui/Badge';

export default function BlogCard({
  image,
  category,
  title,
  excerpt,
  date,
  readTime,
  href,
  className,
  ...props
}) {
  return (
    <a
      href={href}
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2',
        className
      )}
      {...props}
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      {category && (
        <Badge tone="primary" className="mt-5 self-start">
          {category}
        </Badge>
      )}

      <Heading as="h3" size="sm" className="mt-3 transition-colors group-hover:text-[var(--color-accent)]">
        {title}
      </Heading>
      <Paragraph tone="muted" size="sm" className="mt-2">
        {excerpt}
      </Paragraph>

      <Label as="span" className="mt-4 text-[var(--color-text-muted)] normal-case tracking-normal">
        {date}
        {readTime ? ` · ${readTime}` : ''}
      </Label>
    </a>
  );
}
