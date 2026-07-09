import { cn } from '../../lib/cn';
import Quote from '../typography/Quote';

/**
 * TestimonialCard
 * @param {string} avatar - optional image src
 */
export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatar,
  className,
  ...props
}) {
  return (
    <div className={cn('card-premium flex h-full flex-col p-8', className)} {...props}>
      <Quote className="flex-1">{quote}</Quote>

      <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-border)] pt-6">
        {avatar ? (
          <img
            src={avatar}
            alt=""
            width={44}
            height={44}
            loading="lazy"
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="grid h-11 w-11 place-items-center rounded-full bg-[var(--color-primary)]/10 text-sm font-semibold text-[var(--color-primary)]"
          >
            {name?.[0]}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-[var(--color-text)]">{name}</p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {role}
            {company ? ` · ${company}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
}
