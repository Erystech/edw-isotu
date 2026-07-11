import { forwardRef } from 'react';
import { cn } from '../../lib/cn';

/**
 * Button
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 ' +
  'focus-visible:outline-2 focus-visible:outline-[var(--color-accent-light)] focus-visible:outline-offset-2 ' +
  'disabled:cursor-not-allowed disabled:opacity-50';

const variants = {
  primary:
    'bg-[var(--color-accent-light)] text-white hover:-translate-y-[2px] hover:bg-[var(--color-accent-hover)]',
  secondary:
    'border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent-light)] hover:bg-[var(--color-surface)]',
  ghost:
    'text-[var(--color-text)] hover:text-[var(--color-accent-light)] hover:bg-[var(--color-surface)]',
};

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-4 text-sm',
  lg: 'px-9 py-5 text-base',
};

const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', href, className, children, ...props },
  ref
) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} type={props.type || 'button'} className={classes} {...props}>
      {children}
    </button>
  );
});

export default Button;

/**
 * IconButton
 * Square button for a single icon.
 */
const iconSizes = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-14 w-14',
};

export const IconButton = forwardRef(function IconButton(
  { variant = 'secondary', size = 'md', label, className, children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={props.type || 'button'}
      aria-label={label}
      className={cn(
        base,
        'grid place-items-center !p-0',
        variants[variant],
        iconSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});