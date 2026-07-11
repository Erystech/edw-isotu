import { cn } from '../../lib/cn';

/**
 * LogoStrip
 * @param {boolean} marquee - if true, logos scroll infinitely
 *   (uses the existing `animate-marquee` keyframe). Set false for
 *   a static, evenly-spaced row (better for a short logo list).
 */
export default function LogoStrip({ logos, marquee = false, className, ...props }) {
  const items = (
    <>
      {logos.map((logo, i) => (
        <img
          key={`${logo.alt}-${i}`}
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          className="h-7 w-auto shrink-0 object-contain opacity-60 brightness-0 invert transition-opacity hover:opacity-100 lg:h-8"
        />
      ))}
    </>
  );

  if (!marquee) {
    return (
      <div
        className={cn('flex flex-wrap items-center justify-center gap-x-12 gap-y-6', className)}
        {...props}
      >
        {items}
      </div>
    );
  }

  return (
    <div className={cn('overflow-hidden', className)} {...props}>
      <div className="animate-marquee flex w-max items-center gap-16">
        {items}
        {items}
      </div>
    </div>
  );
}

