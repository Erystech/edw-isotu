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
 * @param {boolean} invert - use on dark/tone="primary" sections
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
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
      <Heading size="lg" className={cn('mt-3', invert && '!text-white')}>
        {title}
      </Heading>
      {description && (
        <Paragraph tone="muted" size="lg" className={cn('mt-4', invert && '!text-white/70')}>
          {description}
        </Paragraph>
      )}
    </div>
  );
}