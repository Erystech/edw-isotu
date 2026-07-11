import { cn } from '../../lib/cn';

export default function LogoStrip({ logos, marquee = true, className, ...props }) {
  const items = (
    <>
      {logos.map((logo, i) => (
        <img
          key={`${logo.alt}-${i}`}
          src={logo.src}
          alt={logo.alt}
          loading="lazy"
          className="h-10 w-auto shrink-0 object-contain opacity-60 brightness-0 invert transition-opacity hover:opacity-100 md:h-12 lg:h-16"
        />
      ))}
    </>
  );

  if (!marquee) {
    return (
      <div
        className={cn('mx-auto flex w-full flex-wrap items-center justify-center gap-x-12 gap-y-6', className)}
        {...props}
      >
        {items}
      </div>
    );
  }

  return (
    <div 
      /* Added mx-auto, w-full, and lg:w-[80%] here as well */
      className={cn('mx-auto w-full overflow-hidden lg:w-[80%]', className)} 
      {...props}
    >
      {/* Increased the gap on large screens (lg:gap-24) so the bigger images don't look crowded */}
      <div className="animate-marquee flex w-max items-center gap-16 lg:gap-24">
        {items}
        {items}
      </div>
    </div>
  );
}