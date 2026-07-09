import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
  ...props
}) {
  const Tag = href ? 'a' : 'div';

  return (
    <Tag
      href={href}
      className={cn(
        'group card-premium flex flex-col p-8',
        href && 'focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2',
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        {Icon && (
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-primary)]/10">
            <Icon className="text-[var(--color-primary)]" size={22} aria-hidden="true" />
          </div>
        )}
        {href && (
          <ArrowUpRight
            className="text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--color-accent)]"
            size={20}
            aria-hidden="true"
          />
        )}
      </div>

      <Heading as="h3" size="sm" className="mt-6 mb-3">
        {title}
      </Heading>
      <Paragraph tone="muted" size="sm">
        {description}
      </Paragraph>
    </Tag>
  );
}
