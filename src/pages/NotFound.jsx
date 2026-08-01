import React from 'react';
import { Link } from 'react-router-dom';
import { PageMeta } from '../components/meta/PageMeta';


/**
 * NotFound — 404 page
 *
 * Completely minimal. No illustrations, no decorative elements.
 * Single clear action: return home.
 * Secondary action: go to speaking page (highest-value conversion page).
 */
const NotFound = () => {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you are looking for does not exist." url="/404" />

      <main
        id="main-content"
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: '80vh' }}
      >
        {/* Status line */}
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-8"
          style={{ color: 'var(--color-accent-light)' }}
        >
          404
        </p>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          style={{ color: 'var(--color-primary)' }}
        >
          Page not found
        </h1>

        {/* Body */}
        <p
          className="text-base sm:text-lg max-w-md leading-relaxed mb-12"
          style={{ color: 'var(--color-text-muted)' }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link to="/" className="btn-primary">
            Back to home
          </Link>
          <Link to="/speaking" className="btn-secondary">
            View speaking
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;