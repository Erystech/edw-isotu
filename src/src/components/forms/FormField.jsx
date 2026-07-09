import { useId, cloneElement } from 'react';
import { cn } from '../../lib/cn';

/**
 * FormField
 * Wraps a single form control with a label, optional hint, and
 * error message. Clones the child to inject id/aria attributes so
 * inputs, textareas, and selects all stay in sync automatically.
 *
 * Usage:
 *   <FormField label="Email" error={errors.email}>
 *     <Input type="email" name="email" />
 *   </FormField>
 */
export default function FormField({ label, hint, error, required, className, children }) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  const control = cloneElement(children, {
    id,
    'aria-invalid': Boolean(error),
    'aria-describedby': cn(hintId, errorId) || undefined,
    required,
  });

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-sm font-medium text-[var(--color-text)]">
        {label}
        {required && <span className="ml-1 text-[var(--color-danger)]">*</span>}
      </label>

      {control}

      {hint && !error && (
        <p id={hintId} className="text-xs text-[var(--color-text-muted)]">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs font-medium text-[var(--color-danger)]">
          {error}
        </p>
      )}
    </div>
  );
}
