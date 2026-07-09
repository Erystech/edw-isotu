import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';

/**
 * SpeakerCard
 * Used for individual speaking topics (e.g. "Leading Through Change").
 * `icon` accepts any lucide-react icon component.
 */
export default function SpeakerCard({ icon: Icon, title, description, className, ...props }) {
  return (
    <div className={cn('card-premium p-8', className)} {...props}>
      {Icon && (
        <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-accent)]/10">
          <Icon className="text-[var(--color-accent)]" size={22} aria-hidden="true" />
        </div>
      )}
      <Heading as="h3" size="sm" className="mb-3">
        {title}
      </Heading>
      <Paragraph tone="muted" size="sm">
        {description}
      </Paragraph>
    </div>
  );
}
