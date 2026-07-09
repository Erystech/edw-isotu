import { cn } from "../../lib/cn";

/**
 * Container
 * Horizontal max-width + gutter wrapper. Use inside every Section.
 *
 * @param {'default'|'narrow'|'wide'} size
 */
const sizes = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  wide: 'max-w-[90rem]',
};

export default function Container({
  as: Tag = 'div',
  size = 'default',
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn('mx-auto w-full px-6 lg:px-10', sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
