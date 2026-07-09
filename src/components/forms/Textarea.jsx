import { forwardRef } from 'react';
import { cn } from '../../lib/cn';

const Textarea = forwardRef(function Textarea({ className, rows = 5, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        'w-full resize-y rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)]',
        'transition-colors placeholder:text-[var(--color-text-muted)]',
        'focus:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2',
        'aria-[invalid=true]:border-[var(--color-danger)]',
        className
      )}
      {...props}
    />
  );
});

export default Textarea;
