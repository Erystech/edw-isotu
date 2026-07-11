import { cn } from '../../lib/cn';
import AnimatedCounter from '../misc/AnimatedCounter';
import Label from '../typography/Label';

/**
 * StatsCard
 */
export default function StatsCard({
  value,
  suffix = '',
  prefix = '',
  label,
  className,
  ...props
}) {
  return (
    <div className={cn('text-center lg:text-left', className)} {...props}>
      <p className="font-[var(--font-heading)] text-4xl font-extrabold lg:text-5xl text-[var(--color-primary)]">
        {prefix}
        <AnimatedCounter value={value} />
        {suffix}
      </p>
      <Label as="p" className="mt-2 text-[var(--color-text-muted)]">
        {label}
      </Label>
    </div>
  );
}