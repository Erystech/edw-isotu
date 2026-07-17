import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/cn';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import Label from '../typography/Label';
import Input from '../forms/Input';
import Button from '../ui/Button';

/**
 * NewsletterSignup
 * UI-only capture form. No email provider is wired up yet -- replace
 * handleSubmit with a real integration (Mailchimp/ConvertKit/etc.)
 * before launch.
 */
export default function NewsletterSignup({
  eyebrow = 'Newsletter',
  title = 'Get new articles and talks in your inbox',
  description = 'One email, roughly monthly. No spam, unsubscribe any time.',
  className,
  ...props
}) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to a real email provider.
    setSubmitted(true);
  };

  return (
    <div className={cn('grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]', className)} {...props}>
      <div>
        {eyebrow && <Label as="p">{eyebrow}</Label>}
        <Heading size="md" className="mt-3">
          {title}
        </Heading>
        {description && (
          <Paragraph tone="muted" size="md" className="mt-3">
            {description}
          </Paragraph>
        )}
      </div>

      {submitted ? (
        <div className="flex items-center gap-3 rounded-2xl border border-[var(--color-accent-light)] bg-[var(--color-surface)] px-6 py-5">
          <CheckCircle2 className="shrink-0 text-[var(--color-accent-light)]" size={22} aria-hidden="true" />
          <p className="text-sm text-[var(--color-text)]">
            You're on the list — thanks for subscribing.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <Input
            type="email"
            required
            placeholder="you@company.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sm:flex-1"
          />
          <Button type="submit" className="sm:shrink-0">
            Subscribe
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </form>
      )}
    </div>
  );
}