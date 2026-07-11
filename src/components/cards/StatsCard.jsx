import { cn } from '../../lib/cn';
import AnimatedCounter from '../misc/AnimatedCounter';
import Label from '../typography/Label';

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
      <Label as="p" className={cn('mt-2', invert ? 'text-white/70' : 'text-[var(--color-text-muted)]')}>
        {label}
      </Label>
    </div>
  );
}