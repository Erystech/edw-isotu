import Label from '../typography/Label';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Button from '../ui/Button';

/**
 * AboutPreview
 * Two-column bio teaser: portrait + copy. Designed to live inside
 * a <Section> (relies on the parent for Container/padding), and to
 * be reused as the top of the full About page in a later phase.
 *
 * @param {string[]} paragraphs
 */
export default function AboutPreview({
  eyebrow,
  title,
  paragraphs = [],
  image,
  imageAlt = '',
  action,
}) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className="order-2 lg:order-1">
        {eyebrow && <Label as="p">{eyebrow}</Label>}
        <Heading size="lg" className="mt-3">
          {title}
        </Heading>

        <div className="mt-6 flex flex-col gap-4">
          {paragraphs.map((paragraph, index) => (
            <Paragraph key={index} tone="muted" size="lg">
              {paragraph}
            </Paragraph>
          ))}
        </div>

        {action && (
          <Button href={action.href} variant="secondary" className="mt-8">
            {action.label}
          </Button>
        )}
      </div>

      <div className="order-1 overflow-hidden rounded-3xl shadow-[var(--shadow-card)] lg:order-2">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
    </div>
  );
}