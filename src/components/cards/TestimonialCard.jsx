import { cn } from '../../lib/cn';
import Quote from '../typography/Quote';

/**
 * TestimonialCard (Redesigned Editorial Layout)
 */
export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  image,
  className,
  ...props
}) {
  return (
    <div 
      className={cn(
        'card-premium group relative flex h-full flex-col px-6 py-5', 
        'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg',
        className
      )} 
      {...props}
    >
      {/* 1. Hero Portrait */}
      {image && (
        <div className="mb-5 aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-[var(--color-surface-elevated)]">
          <img
            src={image}
            alt={`Portrait of ${name}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </div>
      )}

      {/* 2. Quote with Subtle Mark */}
      <div className="relative mb-6 flex-1 pt-2">
        <span 
          aria-hidden="true" 
          className="absolute -left-1 -top-2 select-none text-4xl leading-none text-[var(--color-text-muted)] opacity-20"
        >
          &ldquo;
        </span>
        <Quote className="relative z-10 text-[15px] leading-relaxed text-[var(--color-text)]">
          {quote}
        </Quote>
      </div>

      {/* 3. Stacked Author Info */}
      <div className="mt-auto flex flex-col pt-2">
        <p className="text-sm font-semibold text-[var(--color-text)]">{name}</p>
        <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{role}</p>
        {company && (
          <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{company}</p>
        )}
      </div>
    </div>
  );
}