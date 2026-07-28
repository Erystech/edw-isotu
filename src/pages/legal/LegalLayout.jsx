import React from 'react';

/**
 * LegalLayout
 *
 * Shared shell for Privacy Policy and Terms of Service.
 * Renders a minimal header (title + last-updated date) then
 * a constrained prose column for the document body.
 *
 * Props:
 *   title        string  — document title shown as H1
 *   lastUpdated  string  — e.g. "1 July 2025"
 *   children     node    — document sections
 */
const LegalLayout = ({ title, lastUpdated, children }) => {
  return (
    <>

      <main id="main-content">
        {/* Page header */}
        <header
          className="border-b"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <div className="container-premium py-16 sm:py-20">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'var(--color-accent-light)' }}
            >
              Legal
            </p>
            <h1
              className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              {title}
            </h1>
            <p
              className="text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Last updated: {lastUpdated}
            </p>
          </div>
        </header>

        {/* Document body */}
        <div className="container-premium py-16 sm:py-20">
          <div className="max-w-3xl space-y-12">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

/* ─────────────────────────────────────────
   Sub-components for consistent section
   and paragraph formatting inside legal docs
   ───────────────────────────────────────── */

/**
 * LegalSection
 * A titled block within a legal document.
 *
 * Props:
 *   heading  string — section heading
 *   children node   — paragraphs, lists, etc.
 */
export const LegalSection = ({ heading, children }) => (
  <section
    className="space-y-4 pb-12 border-b last:border-b-0 last:pb-0"
    style={{ borderColor: 'var(--color-border)' }}
  >
    <h2
      className="text-xl sm:text-2xl font-bold tracking-tight"
      style={{ color: 'var(--color-primary)' }}
    >
      {heading}
    </h2>
    {children}
  </section>
);

/**
 * LegalParagraph
 * Standard body paragraph inside a legal section.
 */
export const LegalParagraph = ({ children }) => (
  <p
    className="text-base leading-relaxed"
    style={{ color: 'var(--color-text-muted)' }}
  >
    {children}
  </p>
);

/**
 * LegalList
 * Unordered list of legal items.
 */
export const LegalList = ({ items }) => (
  <ul className="space-y-2 pl-4">
    {items.map((item, i) => (
      <li
        key={i}
        className="text-base leading-relaxed flex gap-3"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <span
          className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
          style={{ background: 'var(--color-accent-light)' }}
          aria-hidden="true"
        />
        {item}
      </li>
    ))}
  </ul>
);

/**
 * LegalContact
 * Consistently formatted contact block at end of legal docs.
 */
export const LegalContact = ({ email, address }) => (
  <div
    className="rounded-2xl p-6 space-y-2"
    style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
    }}
  >
    {email && (
      <p
        className="text-base"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Email:{' '}
        <a
          href={`mailto:${email}`}
          className="transition-colors duration-200"
          style={{ color: 'var(--color-accent-light)' }}
        >
          {email}
        </a>
      </p>
    )}
    {address && (
      <p
        className="text-base"
        style={{ color: 'var(--color-text-muted)' }}
      >
        {address}
      </p>
    )}
  </div>
);

export default LegalLayout;