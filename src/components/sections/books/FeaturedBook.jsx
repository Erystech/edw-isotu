import { cn } from '../../../lib/cn';
import Label from '../../typography/Label';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import Divider from '../../ui/Divider';

/**
 * FeaturedBook
 * Spotlight layout for a single title: cover, tagline, long-form
 * description, a compact facts list (pages / published / format),
 * and a row of retailer purchase links.
 *
 * @param {{ label: string, value: string }[]} details
 * @param {{ label: string, href: string, primary?: boolean }[]} purchaseLinks
 */
export default function FeaturedBook({
  eyebrow = 'Featured Book',
  badge,
  cover,
  title,
  tagline,
  description = [],
  details = [],
  purchaseLinks = [],
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        'grid items-start gap-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-20',
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-sm lg:mx-0 lg:sticky lg:top-28">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
          <img
            src={cover}
            alt={`${title} book cover`}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover"
          />
          {badge && (
            <Badge tone="surface" className="absolute left-4 top-4">
              {badge}
            </Badge>
          )}
        </div>
      </div>

      <div>
        {eyebrow && <Label as="p">{eyebrow}</Label>}
        <Heading size="xl" className="mt-3">
          {title}
        </Heading>
        {tagline && (
          <Paragraph size="lg" className="mt-4 font-semibold text-[var(--color-accent-light)]">
            {tagline}
          </Paragraph>
        )}

        <div className="mt-6 flex flex-col gap-4">
          {description.map((paragraph, index) => (
            <Paragraph key={index} tone="muted" size="md">
              {paragraph}
            </Paragraph>
          ))}
        </div>

        {details.length > 0 && (
          <>
            <Divider className="my-8" />
            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
              {details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-[var(--color-text)]">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        )}

        {purchaseLinks.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {purchaseLinks.map((link) => (
              <Button
                key={link.label}
                href={link.href}
                variant={link.primary ? 'primary' : 'secondary'}
                size="md"
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}