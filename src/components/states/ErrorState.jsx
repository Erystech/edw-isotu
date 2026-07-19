import React from 'react';
import { cn } from '@/lib/cn';

/**
 * ErrorState
 *
 * Displayed when a data fetch, route, or component throws an error.
 * Non-alarming, non-dramatic. Gives the user exactly one clear action.
 *
 * Two modes:
 *   1. Inline — small, renders inside a section (default)
 *   2. Full   — full-screen, used as a page-level error boundary fallback
 *
 * Props:
 *   full      boolean  — full-screen mode (default: false)
 *   heading   string   — error heading (has sensible default)
 *   body      string   — error description (has sensible default)
 *   onRetry   fn       — if provided, renders a Retry button
 *   className string   — extra classes
 */
const ErrorState = React.forwardRef(
  (
    {
      full = false,
      heading = 'Something went wrong',
      body = 'We were unable to load this content. Please try again.',
      onRetry,
      className,
    },
    ref
  ) => {
    const wrapperClass = cn(
      'flex flex-col items-center justify-center text-center px-6 space-y-6',
      full ? 'min-h-screen' : 'py-24',
      className
    );

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="assertive"
        className={wrapperClass}
        style={{ background: full ? 'var(--color-background)' : 'transparent' }}
      >
        {/* Minimal status indicator — a small coloured bar, no icons */}
        <div
          className="w-12 h-0.5"
          style={{ background: 'var(--color-danger)' }}
          aria-hidden="true"
        />

        {/* Heading */}
        <h2
          className={cn(
            'font-bold tracking-tight',
            full ? 'text-4xl' : 'text-2xl'
          )}
          style={{ color: 'var(--color-primary)' }}
        >
          {heading}
        </h2>

        {/* Body */}
        <p
          className="text-base max-w-sm leading-relaxed"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {body}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
          {onRetry && (
            <button
              onClick={onRetry}
              className="btn-primary"
              type="button"
            >
              Try again
            </button>
          )}
          <a href="/" className="btn-secondary">
            Go home
          </a>
        </div>
      </div>
    );
  }
);

ErrorState.displayName = 'ErrorState';

/* ─────────────────────────────────────────
   Class-based Error Boundary wrapper
   Use this to wrap page-level trees.

   Usage:
     <PageErrorBoundary>
       <MyPage />
     </PageErrorBoundary>
   ───────────────────────────────────────── */
export class PageErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // In production you'd send this to an error reporting service
    if (process.env.NODE_ENV !== 'production') {
      console.error('[PageErrorBoundary]', error, info);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorState
          full
          onRetry={this.handleRetry}
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorState;