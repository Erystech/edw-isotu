import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';


/**
 * ThankYou — post-contact confirmation page
 *
 * Reads a `type` query param to customise the message.
 * Supported values:
 *   ?type=speaking   — speaking inquiry
 *   ?type=mentorship — mentorship inquiry
 *   ?type=media      — media / press inquiry
 *   ?type=general    — general contact (default)
 *
 * Usage from ContactForm:
 *   navigate('/thank-you?type=speaking')
 */

const MESSAGES = {
  speaking: {
    eyebrow: 'Speaking inquiry received',
    heading: 'Thank you for reaching out.',
    body: "Edwin's team will review your event details and respond within 2–3 business days. In the meantime, explore the speaking topics page to learn more about what Edwin brings to every stage.",
    cta: { label: 'Explore speaking topics', to: '/speaking' },
  },
  mentorship: {
    eyebrow: 'Mentorship inquiry received',
    heading: 'Thank you for your interest.',
    body: 'Your application has been received. The mentorship team will be in touch within 3–5 business days to discuss next steps and programme fit.',
    cta: { label: 'Learn about the programme', to: '/mentorship/clearlift-africa' },
  },
  media: {
    eyebrow: 'Media request received',
    heading: 'Thank you for your request.',
    body: "Edwin's communications team will review your request and respond within 1–2 business days. You can find press assets and high-resolution photos in the media kit.",
    cta: { label: 'Visit the media page', to: '/media' },
  },
  general: {
    eyebrow: 'Message received',
    heading: 'Thank you for getting in touch.',
    body: "Edwin's team reads every message personally and will respond within 3 business days.",
    cta: { label: 'Return home', to: '/' },
  },
};

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') ?? 'general';
  const content = MESSAGES[type] ?? MESSAGES.general;

  return (
    <>


      <main
        id="main-content"
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: '80vh' }}
      >
        {/* Eyebrow */}
        <p
          className="text-sm font-semibold tracking-widest uppercase mb-8"
          style={{ color: 'var(--color-accent-light)' }}
        >
          {content.eyebrow}
        </p>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-2xl"
          style={{ color: 'var(--color-primary)' }}
        >
          {content.heading}
        </h1>

        {/* Divider */}
        <div
          className="w-12 h-px mb-8"
          style={{ background: 'var(--color-border-accent)' }}
          aria-hidden="true"
        />

        {/* Body */}
        <p
          className="text-base sm:text-lg max-w-md leading-relaxed mb-12"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {content.body}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link to={content.cta.to} className="btn-primary">
            {content.cta.label}
          </Link>
          <Link to="/" className="btn-secondary">
            Return home
          </Link>
        </div>
      </main>
    </>
  );
};

export default ThankYou;