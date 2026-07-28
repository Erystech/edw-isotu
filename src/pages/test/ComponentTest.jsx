import React, { useState } from 'react';
import { LoadingState, EmptyState, ErrorState } from '../../components/states';
import { Heart } from 'lucide-react';

/**
 * ComponentsTest
 *
 * Temporary test page for Phase 12 components.
 * Route: /test/components
 *
 * Add to App.jsx:
 *   import ComponentsTest from '@/pages/ComponentsTest';
 *   <Route path="/test/components" element={<ComponentsTest />} />
 *
 * After testing, delete this file and the route.
 */

const ComponentsTest = () => {
  const [showErrorFull, setShowErrorFull] = useState(false);

  return (
    <>

      <main id="main-content" className="container-premium py-20 space-y-32">

        {/* ─────────────────────────────────────────────────────
            SECTION: LOADING STATES
            ───────────────────────────────────────────────────── */}
        <section>
          <h2
            className="text-4xl font-bold mb-12"
            style={{ color: 'var(--color-primary)' }}
          >
            LoadingState Component
          </h2>

          <div className="space-y-20">

            {/* Hero variant */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                variant="hero"
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Full-width hero with title + subtitle + CTA buttons
              </p>
              <LoadingState variant="hero" />
            </div>

            {/* Cards variant */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                variant="cards" (count=3)
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                3-column grid: responsive to 2-col on tablet, 1-col on mobile
              </p>
              <LoadingState variant="cards" count={3} />
            </div>

            {/* Article variant */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                variant="article" (count=3)
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Featured article (horizontal) + 3-col article grid
              </p>
              <LoadingState variant="article" count={3} />
            </div>

            {/* Stats variant */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                variant="stats"
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                4-column stats row: number + label
              </p>
              <LoadingState variant="stats" />
            </div>

            {/* Detail variant */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                variant="detail"
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Book/article detail: image left, content right (stacks on mobile)
              </p>
              <LoadingState variant="detail" />
            </div>

            {/* Section variant (default) */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                variant="section" (count=4)
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Generic section: heading + paragraph lines
              </p>
              <LoadingState variant="section" count={4} />
            </div>

          </div>
        </section>

        {/* Divider */}
        <div
          className="h-px"
          style={{ background: 'var(--color-border)' }}
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────
            SECTION: EMPTY STATES
            ───────────────────────────────────────────────────── */}
        <section>
          <h2
            className="text-4xl font-bold mb-12"
            style={{ color: 'var(--color-primary)' }}
          >
            EmptyState Component
          </h2>

          <div className="space-y-20">

            {/* Search variant */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                variant="search"
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                With icon + action button
              </p>
              <EmptyState
                variant="search"
                icon={<Heart size={24} />}
                action={<button className="btn-primary">Clear filters</button>}
              />
            </div>

            {/* Articles variant */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                variant="articles"
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Default copy: "No articles yet"
              </p>
              <EmptyState variant="articles" />
            </div>

            {/* Books variant */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                variant="books"
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Default copy: "No books found"
              </p>
              <EmptyState variant="books" />
            </div>

            {/* Media variant */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                variant="media"
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Default copy: "No media available"
              </p>
              <EmptyState variant="media" />
            </div>

            {/* Custom variant */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                Custom heading & body
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Override defaults with custom message
              </p>
              <EmptyState
                heading="No results match your query"
                body="Try searching for something different, or browse our entire catalogue."
              />
            </div>

          </div>
        </section>

        {/* Divider */}
        <div
          className="h-px"
          style={{ background: 'var(--color-border)' }}
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────
            SECTION: ERROR STATES
            ───────────────────────────────────────────────────── */}
        <section>
          <h2
            className="text-4xl font-bold mb-12"
            style={{ color: 'var(--color-primary)' }}
          >
            ErrorState Component
          </h2>

          <div className="space-y-20">

            {/* Inline mode (default) */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                Inline mode (full=false)
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Use inside a section/page; does not take full screen
              </p>
              <ErrorState onRetry={() => alert('Retry clicked')} />
            </div>

            {/* Custom message */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                Custom heading & body
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Override defaults
              </p>
              <ErrorState
                heading="That didn't work"
                body="There was a problem processing your request. Try again or contact us for help."
                onRetry={() => alert('Retry clicked')}
              />
            </div>

            {/* Full-screen mode toggle */}
            <div className="space-y-3">
              <h3
                className="text-lg font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                Full-screen mode (full=true)
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Use for page-level error boundaries
              </p>
              <button
                className="btn-primary mb-6"
                onClick={() => setShowErrorFull(!showErrorFull)}
              >
                {showErrorFull ? 'Hide' : 'Show'} full-screen error
              </button>
              {showErrorFull && (
                <ErrorState
                  full
                  onRetry={() => setShowErrorFull(false)}
                />
              )}
            </div>

          </div>
        </section>

        {/* Divider */}
        <div
          className="h-px"
          style={{ background: 'var(--color-border)' }}
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────
            SECTION: THANK YOU VARIANTS
            ───────────────────────────────────────────────────── */}
        <section>
          <h2
            className="text-4xl font-bold mb-12"
            style={{ color: 'var(--color-primary)' }}
          >
            ThankYou Page Variants
          </h2>

          <p
            className="text-base mb-12"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Test by navigating to:
          </p>

          <div className="space-y-4">
            <a
              href="/thank-you"
              className="btn-secondary inline-block"
            >
              /thank-you (generic)
            </a>
            <a
              href="/thank-you?type=speaking"
              className="btn-secondary inline-block ml-4"
            >
              /thank-you?type=speaking
            </a>
            <a
              href="/thank-you?type=mentorship"
              className="btn-secondary inline-block ml-4"
            >
              /thank-you?type=mentorship
            </a>
            <a
              href="/thank-you?type=media"
              className="btn-secondary inline-block ml-4"
            >
              /thank-you?type=media
            </a>
          </div>

          <p
            className="text-sm mt-12"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Check:
          </p>
          <ul
            className="space-y-2 mt-4 pl-4"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <li>
              ✓ Eyebrow label changes per type
            </li>
            <li>
              ✓ Heading and body copy are contextual
            </li>
            <li>
              ✓ Primary CTA links to the right page
            </li>
            <li>
              ✓ Secondary CTA always links to home
            </li>
            <li>
              ✓ Mobile: buttons stack vertically
            </li>
            <li>
              ✓ Invalid/missing type param falls back to generic
            </li>
          </ul>
        </section>

        {/* Divider */}
        <div
          className="h-px"
          style={{ background: 'var(--color-border)' }}
          aria-hidden="true"
        />

        {/* ─────────────────────────────────────────────────────
            TESTING CHECKLIST
            ───────────────────────────────────────────────────── */}
        <section>
          <h2
            className="text-4xl font-bold mb-12"
            style={{ color: 'var(--color-primary)' }}
          >
            Testing Checklist
          </h2>

          <div
            className="rounded-2xl p-8 space-y-6"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div>
              <h3
                className="font-semibold mb-3"
                style={{ color: 'var(--color-text)' }}
              >
                CSS & Animation
              </h3>
              <ul
                className="space-y-2 text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <li>✓ Skeleton shimmer animates left-to-right</li>
                <li>✓ With prefers-reduced-motion: shimmer is disabled</li>
                <li>✓ Colors use --color-surface and --color-surface-elevated</li>
              </ul>
            </div>

            <div>
              <h3
                className="font-semibold mb-3"
                style={{ color: 'var(--color-text)' }}
              >
                Responsive
              </h3>
              <ul
                className="space-y-2 text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <li>✓ Desktop (1440px+): 3-col cards, 4-col stats</li>
                <li>✓ Tablet (768px): 2-col cards, 2×2 stats</li>
                <li>✓ Mobile (320px): 1-col cards, 2-col stats</li>
                <li>✓ No horizontal scrolling</li>
              </ul>
            </div>

            <div>
              <h3
                className="font-semibold mb-3"
                style={{ color: 'var(--color-text)' }}
              >
                Accessibility
              </h3>
              <ul
                className="space-y-2 text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <li>✓ LoadingState: aria-busy="true", aria-label</li>
                <li>✓ EmptyState: role="status", aria-live="polite"</li>
                <li>✓ ErrorState: role="alert", aria-live="assertive"</li>
                <li>✓ Skeleton bones: aria-hidden="true"</li>
                <li>✓ Keyboard navigation works (Tab key)</li>
              </ul>
            </div>

            <div>
              <h3
                className="font-semibold mb-3"
                style={{ color: 'var(--color-text)' }}
              >
                Browser Console
              </h3>
              <ul
                className="space-y-2 text-sm"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <li>✓ No TypeErrors or ReferenceErrors</li>
                <li>✓ No missing component import warnings</li>
                <li>✓ No accessibility violations (axe-core)</li>
              </ul>
            </div>
          </div>
        </section>

      </main>

    </>
  );
};

export default ComponentsTest;