import React from 'react';
import { cn } from '@/lib/cn';

/**
 * EmptyState
 *
 * Displayed when a data set returns zero results.
 * Contextual per use-case (search, articles, media, books).
 * Keeps the brand tone: direct, minimal, no decorative imagery.
 *
 * Props:
 *   variant   string   — context hint for default copy:
 *                        'search' | 'articles' | 'books' | 'media' | 'generic'
 *   heading   string   — override the default heading
 *   body      string   — override the default body copy
 *   action    node     — optional CTA element (Button, anchor, etc.)
 *   icon      node     — optional icon element (lucide-react or similar)
 *   className string   — extra classes on the wrapper
 */

/* ─────────────────────────────────────────
   Default copy per variant
   ───────────────────────────────────────── */
const DEFAULTS = {
  search: {
    heading: 'No results found',
    body: 'Try adjusting your search terms or clearing the filters.',
  },
  articles: {
    heading: 'No articles yet',
    body: 'New insights and essays are published regularly. Check back soon.',
  },
  books: {
    heading: 'No books found',
    body: 'New titles are added as they become available.',
  },
  media: {
    heading: 'No media available',
    body: 'Press features, interviews, and appearances will appear here.',
  },
  generic: {
    heading: 'Nothing here yet',
    body: 'This section is being updated. Please check back later.',
  },
};

const EmptyState = React.forwardRef(
  (
    {
      variant = 'generic',
      heading,
      body,
      action,
      icon,
      className,
    },
    ref
  ) => {
    const defaults = DEFAULTS[variant] ?? DEFAULTS.generic;
    const resolvedHeading = heading ?? defaults.heading;
    const resolvedBody    = body    ?? defaults.body;

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={cn(
          'flex flex-col items-center justify-center text-center',
          'py-24 px-6 space-y-6',
          className
        )}
      >
        {/* Optional icon */}
        {icon && (
          <div
            className="flex items-center justify-center w-16 h-16 rounded-2xl"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-muted)',
            }}
            aria-hidden="true"
          >
            {icon}
          </div>
        )}

        {/* Divider line above heading */}
        <div
          className="w-12 h-px"
          style={{ background: 'var(--color-border-accent)' }}
          aria-hidden="true"
        />

        {/* Heading */}
        <h3
          className="text-2xl font-bold tracking-tight"
          style={{ color: 'var(--color-primary)' }}
        >
          {resolvedHeading}
        </h3>

        {/* Body */}
        <p
          className="text-base max-w-sm leading-relaxed"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {resolvedBody}
        </p>

        {/* Optional CTA */}
        {action && <div className="pt-2">{action}</div>}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';

export default EmptyState;