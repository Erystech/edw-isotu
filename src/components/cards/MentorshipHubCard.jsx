import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Button from '../ui/Button';

/**
 * MentorshipHubCard
 * Image-led card for a Clearlift Africa mentorship hub. The "Join Hub"
 * action is a distinct Button rather than wrapping the whole card in
 * an <a> (as BlogCard does) — mentees should be able to read the full
 * description before committing to the CTA.
 */
export default function MentorshipHubCard({
  icon: Icon,
  image,
  title,
  description,
  joinHref,
  className,
  ...props
}) {
  return (
    <div className={cn('card-premium flex flex-col overflow-hidden', className)} {...props}>
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-8">
        {Icon && (
          <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
            <Icon className="text-[var(--color-accent-light)]" size={22} aria-hidden="true" />
          </div>
        )}

        <Heading as="h3" size="sm" className="text-[var(--color-primary)]">
          {title}
        </Heading>
        <Paragraph tone="muted" size="sm" className="mt-3 flex-1">
          {description}
        </Paragraph>

        {joinHref && (
          <Button href={joinHref} variant="secondary" size="sm" className="mt-6 self-start">
            Join Hub
          </Button>
        )}
      </div>
    </div>
  );
}