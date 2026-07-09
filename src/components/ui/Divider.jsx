import { cn } from '../../lib/cn';

/**
 * Divider
 * @param {'horizontal'|'vertical'} orientation
 */
export default function Divider({ orientation = 'horizontal', className, ...props }) {
  if (orientation === 'vertical') {
    return (
      <span
        className={cn('inline-block h-full w-px bg-[var(--color-border)]', className)}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  return (
    <hr
      className={cn('border-0 border-t border-[var(--color-border)]', className)}
      {...props}
    />
  );
}
