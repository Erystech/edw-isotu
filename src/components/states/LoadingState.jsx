import React from 'react';
import { cn } from '@/lib/cn';

/**
 * LoadingState
 *
 * Skeleton loaders that mirror real section/card layouts exactly.
 * Uses the `.skeleton` utility class from index.css for the shimmer effect.
 * Respects prefers-reduced-motion at the CSS level.
 *
 * Variants:
 *   'hero'        — Full-width hero block with title + subtitle + two CTA buttons
 *   'cards'       — 3-column grid of speaker/book/service cards
 *   'article'     — Featured article + 3-column article grid
 *   'stats'       — 4-column stats row (matches StatsCard layout)
 *   'section'     — Generic section: heading block + paragraph lines
 *   'detail'      — Single-item detail view (book detail, article detail)
 *
 * Props:
 *   variant  string   — which skeleton layout to render (default: 'section')
 *   count    number   — how many repeating units to render (default: 3)
 *   className string  — extra wrapper classes
 */

/* ─────────────────────────────────────────
   Primitive: single skeleton bar
   ───────────────────────────────────────── */
const Bone = ({ className }) => (
  <div className={cn('skeleton', className)} aria-hidden="true" />
);

/* ─────────────────────────────────────────
   Primitive: skeleton card shell
   Matches .card-premium dimensions exactly
   ───────────────────────────────────────── */
const CardBone = () => (
  <div
    className="rounded-3xl border p-6 space-y-4"
    style={{
      background: 'var(--color-surface)',
      borderColor: 'var(--color-border)',
    }}
    aria-hidden="true"
  >
    {/* Image region */}
    <Bone className="h-44 w-full rounded-xl" />
    {/* Label */}
    <Bone className="h-3 w-20" />
    {/* Title */}
    <Bone className="h-6 w-5/6" />
    {/* Body lines */}
    <div className="space-y-2">
      <Bone className="h-3 w-full" />
      <Bone className="h-3 w-4/5" />
      <Bone className="h-3 w-3/5" />
    </div>
    {/* CTA */}
    <Bone className="h-11 w-full rounded-xl mt-2" />
  </div>
);

/* ─────────────────────────────────────────
   Primitive: skeleton article card
   Matches ArticleCard proportions
   ───────────────────────────────────────── */
const ArticleCardBone = () => (
  <div
    className="rounded-3xl border overflow-hidden"
    style={{
      background: 'var(--color-surface)',
      borderColor: 'var(--color-border)',
    }}
    aria-hidden="true"
  >
    {/* Thumbnail */}
    <Bone className="h-48 w-full rounded-none" />
    <div className="p-6 space-y-3">
      {/* Category badge */}
      <Bone className="h-3 w-16" />
      {/* Headline */}
      <Bone className="h-5 w-full" />
      <Bone className="h-5 w-3/4" />
      {/* Excerpt */}
      <div className="space-y-1.5 pt-1">
        <Bone className="h-3 w-full" />
        <Bone className="h-3 w-5/6" />
      </div>
      {/* Meta row */}
      <div className="flex items-center gap-3 pt-2">
        <Bone className="h-3 w-20" />
        <Bone className="h-3 w-16" />
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Hero skeleton
   ───────────────────────────────────────── */
const HeroSkeleton = () => (
  <section
    className="flex flex-col items-center justify-center text-center space-y-8 px-6 py-28"
    style={{ minHeight: '90vh', background: 'var(--color-background)' }}
    aria-busy="true"
    aria-label="Loading page"
  >
    {/* Label badge */}
    <Bone className="h-5 w-32 mx-auto" />
    {/* H1 – two lines */}
    <div className="space-y-3 w-full max-w-2xl">
      <Bone className="h-14 w-full" />
      <Bone className="h-14 w-4/5 mx-auto" />
    </div>
    {/* Subtitle */}
    <div className="space-y-2 w-full max-w-lg">
      <Bone className="h-4 w-full" />
      <Bone className="h-4 w-3/4 mx-auto" />
    </div>
    {/* CTA row */}
    <div className="flex gap-4 pt-2">
      <Bone className="h-14 w-40 rounded-xl" />
      <Bone className="h-14 w-40 rounded-xl" />
    </div>
  </section>
);

/* ─────────────────────────────────────────
   Cards grid skeleton
   ───────────────────────────────────────── */
const CardsSkeleton = ({ count }) => (
  <div
    className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    aria-busy="true"
    aria-label="Loading content"
  >
    {Array.from({ length: count }).map((_, i) => (
      <CardBone key={i} />
    ))}
  </div>
);

/* ─────────────────────────────────────────
   Article layout skeleton
   Featured row + grid below
   ───────────────────────────────────────── */
const ArticleSkeleton = ({ count }) => (
  <div
    className="space-y-10"
    aria-busy="true"
    aria-label="Loading articles"
  >
    {/* Featured article – horizontal card */}
    <div
      className="rounded-3xl border grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
      aria-hidden="true"
    >
      <Bone className="h-64 lg:h-full w-full rounded-none" />
      <div className="p-8 space-y-4 flex flex-col justify-center">
        <Bone className="h-3 w-20" />
        <Bone className="h-8 w-5/6" />
        <Bone className="h-8 w-3/4" />
        <div className="space-y-2 pt-2">
          <Bone className="h-3 w-full" />
          <Bone className="h-3 w-5/6" />
          <Bone className="h-3 w-4/5" />
        </div>
        <Bone className="h-11 w-36 rounded-xl mt-4" />
      </div>
    </div>

    {/* Article grid */}
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ArticleCardBone key={i} />
      ))}
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Stats row skeleton
   Matches 4-column StatsCard layout
   ───────────────────────────────────────── */
const StatsSkeleton = () => (
  <div
    className="grid grid-cols-2 lg:grid-cols-4 gap-6"
    aria-busy="true"
    aria-label="Loading statistics"
  >
    {Array.from({ length: 4 }).map((_, i) => (
      <div
        key={i}
        className="rounded-3xl border p-8 flex flex-col items-center gap-3"
        style={{
          background: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}
        aria-hidden="true"
      >
        <Bone className="h-10 w-24" />
        <Bone className="h-3 w-16" />
      </div>
    ))}
  </div>
);

/* ─────────────────────────────────────────
   Detail skeleton
   Single item: image left, content right
   ───────────────────────────────────────── */
const DetailSkeleton = () => (
  <div
    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
    aria-busy="true"
    aria-label="Loading details"
  >
    {/* Image */}
    <Bone className="h-96 lg:h-[500px] w-full rounded-3xl" />
    {/* Content */}
    <div className="space-y-6">
      <Bone className="h-3 w-24" />
      <div className="space-y-3">
        <Bone className="h-10 w-full" />
        <Bone className="h-10 w-3/4" />
      </div>
      <Bone className="h-px w-full" />
      <div className="space-y-3">
        <Bone className="h-4 w-full" />
        <Bone className="h-4 w-full" />
        <Bone className="h-4 w-5/6" />
        <Bone className="h-4 w-4/5" />
      </div>
      <div className="flex gap-4 pt-4">
        <Bone className="h-12 w-36 rounded-xl" />
        <Bone className="h-12 w-36 rounded-xl" />
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   Generic section skeleton
   Heading block + paragraph lines
   ───────────────────────────────────────── */
const SectionSkeleton = ({ count }) => (
  <div
    className="space-y-10"
    aria-busy="true"
    aria-label="Loading section"
  >
    {/* Section heading */}
    <div className="space-y-3 max-w-xl">
      <Bone className="h-3 w-20" />
      <Bone className="h-10 w-full" />
      <Bone className="h-4 w-3/4" />
    </div>
    {/* Content blocks */}
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="space-y-2">
        <Bone className="h-4 w-full" />
        <Bone className="h-4 w-5/6" />
        <Bone className="h-4 w-3/4" />
      </div>
    ))}
  </div>
);

/* ─────────────────────────────────────────
   Main export
   ───────────────────────────────────────── */
const LoadingState = React.forwardRef(
  ({ variant = 'section', count = 3, className }, ref) => {
    const wrapperClass = cn('w-full', className);

    return (
      <div ref={ref} className={wrapperClass}>
        {variant === 'hero'    && <HeroSkeleton />}
        {variant === 'cards'   && <CardsSkeleton count={count} />}
        {variant === 'article' && <ArticleSkeleton count={count} />}
        {variant === 'stats'   && <StatsSkeleton />}
        {variant === 'detail'  && <DetailSkeleton />}
        {variant === 'section' && <SectionSkeleton count={count} />}
      </div>
    );
  }
);

LoadingState.displayName = 'LoadingState';

export default LoadingState;