import { forwardRef, useId } from 'react'; 
import { cn } from '../../lib/cn';

const Checkbox = forwardRef(function Checkbox({ className, label, id, ...props }, ref) {
  const internalId = useId();
  const resolvedId = id || internalId;

  return (
    <label htmlFor={resolvedId} className={cn('flex cursor-pointer items-start gap-3', className)}>
      <input
        ref={ref}
        id={resolvedId}
        type="checkbox"
        className={cn(
          'mt-0.5 h-5 w-5 shrink-0 rounded-md border-[var(--color-border)] text-[var(--color-accent)]',
          'focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2'
        )}
        {...props}
      />
      <span className="text-sm text-[var(--color-text)]">{label}</span>
    </label>
  );
});

export default Checkbox;