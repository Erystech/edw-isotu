import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Button from '../ui/Button';

export default function CTABanner({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        /* 
          Refactored Background:
          Removed 'hero-overlay' and 'bg-primary'. Applied your elevated surface 
          token and a subtle border to maintain the flat UI aesthetic while creating depth.
        */
        'relative overflow-hidden rounded-3xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] px-8 py-16 text-center shadow-[var(--shadow-card)] lg:px-16',
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
          {eyebrow}
        </p>
      )}
      <Heading size="xl" className="mx-auto mt-4 max-w-2xl text-[var(--color-primary)]">
        {title}
      </Heading>
      {description && (
        <Paragraph size="lg" className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
          {description}
        </Paragraph>
      )}

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        {primaryAction && (
          <Button href={primaryAction.href} size="lg">
            {primaryAction.label}
          </Button>
        )}
        {secondaryAction && (
          <Button
            href={secondaryAction.href}
            variant="secondary"
            size="lg"
            /* 
              Refactored Button:
              Removed the !important overrides. Your global .btn-secondary styles 
              will now properly handle the hover transitions.
            */
          >
            {secondaryAction.label}
          </Button>
        )}
      </div>
    </div>
  );
}