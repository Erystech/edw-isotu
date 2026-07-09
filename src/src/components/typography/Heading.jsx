import { cn } from '../../lib/cn';

/**
 * Heading
 * Central type-scale control. Always renders the semantic tag you
 * pass via `as`, but sizes it independently via `size` — so visual
 * hierarchy never has to be coupled to document outline.
 *
 * Scale: xs → 6xl mirrors a modular scale (1.25 ratio) tuned for
 * the executive/editorial tone of the brand.
 */
const sizes = {
  xs: 'text-lg',
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl lg:text-4xl',
  xl: 'text-4xl lg:text-5xl',
  '2xl': 'text-5xl lg:text-6xl',
  '3xl': 'text-6xl lg:text-7xl',
};

export default function Heading({
  as: Tag = 'h2',
  size = 'lg',
  balance = true,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(sizes[size], balance && 'text-balance', className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
