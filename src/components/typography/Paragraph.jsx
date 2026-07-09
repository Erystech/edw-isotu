import { cn } from '../../lib/cn';

/**
 * Paragraph
 * @param {'sm'|'md'|'lg'} size
 * @param {'default'|'muted'} tone
 */
const sizes = {
  sm: 'text-sm leading-relaxed',
  md: 'text-base leading-relaxed',
  lg: 'text-lg leading-relaxed lg:text-xl',
};

const tones = {
  default: 'text-[var(--color-text)]',
  muted: 'text-[var(--color-text-muted)]',
};

export default function Paragraph({
  size = 'md',
  tone = 'default',
  as: Tag = 'p',
  className,
  children,
  ...props
}) {
  return (
    <Tag className={cn(sizes[size], tones[tone], className)} {...props}>
      {children}
    </Tag>
  );
}
