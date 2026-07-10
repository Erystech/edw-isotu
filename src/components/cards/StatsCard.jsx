import { cn } from '../../lib/cn';
import AnimatedCounter from '../misc/AnimatedCounter';
import Label from '../typography/Label';

/**
 * StatsCard
 * @param {boolean} invert - use on dark/tone="primary" sections so the
 *   value and label read correctly over the navy background.
 */
export default function StatsCard({
  value,
  suffix = '',
  prefix = '',
  label,
  invert = false,
  className,
  ...props
}) {
  return (
    <div className={cn('text-center lg:text-left', className)} {...props}>
      <p
        className={cn(
          'font-[var(--font-heading)] text-4xl font-extrabold lg:text-5xl',
          invert ? 'text-white' : 'text-[var(--color-primary)]'
        )}
      >
        {prefix}
        <AnimatedCounter value={value} />
        {suffix}
      </p>
      <Label as="p" className={cn('mt-2', invert && '!text-white/60')}>
        {label}
      </Label>
    </div>
  );
}