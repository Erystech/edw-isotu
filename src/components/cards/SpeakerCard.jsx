import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';

/**
 * SpeakerCard
 */
export default function SpeakerCard({ icon: Icon, title, description, className, ...props }) {
  return (
    <div className={cn('card-premium p-8', className)} {...props}>
      {Icon && (
        <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
          <Icon className="text-[var(--color-accent-light)]" size={22} aria-hidden="true" />
        </div>
      )}
      <Heading as="h3" size="sm" className="mb-3 text-[var(--color-primary)]">
        {title}
      </Heading>
      <Paragraph tone="muted" size="sm" className="text-[var(--color-text-muted)]">
        {description}
      </Paragraph>
    </div>
  );
}