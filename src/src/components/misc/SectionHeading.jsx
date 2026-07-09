import { cn } from '../../lib/cn';
import Label from '../typography/Label';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';

/**
 * SectionHeading
 * The eyebrow + heading + supporting copy pattern reused at the
 * top of every homepage/page section.
 *
 * @param {'left'|'center'} align
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
      {...props}
    >
      {eyebrow && <Label as="p">{eyebrow}</Label>}
      <Heading size="lg" className="mt-3">
        {title}
      </Heading>
      {description && (
        <Paragraph tone="muted" size="lg" className="mt-4">
          {description}
        </Paragraph>
      )}
    </div>
  );
}
