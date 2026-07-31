import { Children, isValidElement } from 'react';
import FadeInOnScroll from './FadeInOnScroll';
import { useStaggerAnimation } from './useStaggerAnimation';

/**
 * StaggerChildren
 * Wraps a list (cards, grid items, nav links) and staggers each
 * child's scroll-triggered entrance. Designed to sit directly where
 * a grid wrapper div already sits — pass grid classes via
 * `className`, StaggerChildren becomes the grid container and each
 * wrapped child becomes a grid cell.
 *
 * Usage:
 *   <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
 *     {articles.map((a) => <ArticleCard key={a.slug} {...a} />)}
 *   </StaggerChildren>
 */
export default function StaggerChildren({
  as: Tag = 'div',
  children,
  variant = 'fade-up',
  step = 80,
  baseDelay = 0,
  threshold = 0.15,
  className,
  itemClassName,
  ...props
}) {
  const items = Children.toArray(children).filter(isValidElement);
  const delays = useStaggerAnimation(items.length, { baseDelay, step });

  return (
    <Tag className={className} {...props}>
      {items.map((child, index) => (
        <FadeInOnScroll
          key={child.key ?? index}
          variant={variant}
          delay={delays[index]}
          threshold={threshold}
          className={itemClassName}
        >
          {child}
        </FadeInOnScroll>
      ))}
    </Tag>
  );
}