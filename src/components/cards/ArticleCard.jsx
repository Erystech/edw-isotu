import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';
import { formatDate } from '../../lib/formatDate';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Label from '../typography/Label';
import Badge from '../ui/Badge';

/**
 * ArticleCard
 * List-view preview for a single article. Mirrors BlogCard's visual
 * language (image + category badge + meta row) but points at the
 * dedicated /articles/[slug] route rather than a generic href.
 */
export default function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  author,
  publishedDate,
  readTime,
  featuredImage,
  className,
  ...props
}) {
  return (
    <Link
      to={`/articles/${slug}`}
      className={cn(
        'group flex flex-col overflow-hidden rounded-2xl',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2',
        className
      )}
      {...props}
    >
      <div className="relative overflow-hidden rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)]">
        <img
          src={featuredImage}
          alt=""
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {category && (
          <Badge tone="surface" className="absolute left-4 top-4">
            {category}
          </Badge>
        )}
      </div>

      <Heading
        as="h3"
        size="sm"
        className="mt-5 transition-colors group-hover:text-[var(--color-accent-light)]"
      >
        {title}
      </Heading>

      <Paragraph tone="muted" size="sm" className="mt-2 line-clamp-2">
        {excerpt}
      </Paragraph>

      <Label as="span" className="mt-4 text-[var(--color-text-muted)] normal-case tracking-normal">
        {author} · {formatDate(publishedDate)}
        {readTime ? ` · ${readTime} min read` : ''}
      </Label>
    </Link>
  );
}