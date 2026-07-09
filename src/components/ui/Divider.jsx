import { cn } from '../../lib/cn';

const tones = {
  default: 'border-[var(--color-border)]',
  inverted: 'border-white/10',
};

export default function Divider({
  orientation = 'horizontal',
  tone = 'default',
  className,
  ...props
}) {
  if (orientation === 'vertical') {
    return (
      <span
        className={cn('inline-block h-full w-px', tones[tone].replace('border-', 'bg-'), className)}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  return (
    <hr className={cn('border-0 border-t', tones[tone], className)} {...props} />
  );
}
