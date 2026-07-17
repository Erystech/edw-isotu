import { cn } from '../../../lib/cn';
import ArticleCard from '../../cards/ArticleCard';

/**
 * ArticleGrid
 * Renders a set of ArticleCard components in a responsive grid.
 * Used both on the /articles list page (full article set) and on
 * article detail pages (related-articles subset) — kept generic so
 * it doesn't assume how many articles it's given.
 */
export default function ArticleGrid({ articles = [], className, ...props }) {
  if (!articles.length) return null;

  return (
    <div
      className={cn('grid gap-8 sm:grid-cols-2 lg:grid-cols-3', className)}
      {...props}
    >
      {articles.map((article) => (
        <ArticleCard key={article.slug} {...article} />
      ))}
    </div>
  );
}