import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';
import { formatDate } from '../../lib/formatDate';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Label from '../typography/Label';
import Badge from '../ui/Badge';

/**
 * ArticleCard
 * Text-first list-view preview for a single article.
 */
export default function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  author,
  publishedDate,
  readTime,
  className,
  ...props
}) {
  return (
    <Link
      to={`/articles/${slug}`}
      className={cn(
        'group flex flex-col rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] p-6 transition-colors hover:border-[var(--color-accent-light)]',
        'focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2',
        className
      )}
      {...props}
    >
      {category && (
        <Badge tone="surface" className="self-start mb-5">
          {category}
        </Badge>
      )}

      <Heading
        as="h3"
        size="sm"
        className="transition-colors group-hover:text-[var(--color-accent-light)]"
      >
        {title}
      </Heading>

      <Paragraph tone="muted" size="sm" className="mt-3 line-clamp-3">
        {excerpt}
      </Paragraph>

      <Label as="span" className="mt-6 pt-4 mt-auto border-t border-[var(--color-border)] text-[var(--color-text-muted)] normal-case tracking-normal">
        {author} · {formatDate(publishedDate)}
        {readTime ? ` · ${readTime} min read` : ''}
      </Label>
    </Link>
  );
}