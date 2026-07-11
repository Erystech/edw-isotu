import { cn } from '../../lib/cn';
import Label from '../typography/Label';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';

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
      className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}
      {...props}
    >
      {eyebrow && (
        <Label as="p" className={invert ? 'text-white/80' : 'text-[var(--color-accent-light)]'}>
          {eyebrow}
        </Label>
      )}

      <Heading size="lg" className={cn('mt-3', invert ? 'text-white' : 'text-[var(--color-primary)]')}>
        {title}
      </Heading>

      {description && (
        <Paragraph size="lg" className={cn('mt-4', invert ? 'text-white/70' : 'text-[var(--color-text-muted)]')}>
          {description}
        </Paragraph>
      )}
    </div>
  );
}