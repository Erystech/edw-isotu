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
        'hero-overlay relative overflow-hidden rounded-3xl bg-[var(--color-primary)] px-8 py-16 text-center lg:px-16',
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
          {eyebrow}
        </p>
      )}
      <Heading size="xl" className="mx-auto mt-4 max-w-2xl text-white">
        {title}
      </Heading>
      {description && (
        <Paragraph size="lg" className="mx-auto mt-4 max-w-xl text-white/75">
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
            className="!border-white !text-white hover:!bg-white hover:!text-[var(--color-primary)]"
          >
            {secondaryAction.label}
          </Button>
        )}
      </div>
    </div>
  );
}
