import { Mail, Phone, Clock } from 'lucide-react';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import Label from '../../typography/Label';
import Divider from '../../ui/Divider';
import SocialLinks from '../../misc/SocialLinks';

const DETAILS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'connect@edwinisotu.com',
    href: 'mailto:connect@edwinisotu.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 704 256 6000',
    href: 'tel:+2347042566000',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within one business day',
  },
];

export default function BookingInfo() {
  return (
    <div className="card-premium flex h-full flex-col p-8 lg:p-10">
      <Heading as="h3" size="sm">
        Direct contact
      </Heading>
      <Paragraph tone="muted" size="sm" className="mt-2">
        Prefer to reach out directly? Use any of the details below.
      </Paragraph>

      <ul className="mt-8 flex flex-col gap-6">
        {DETAILS.map((detail) => (
          <li key={detail.label} className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
              <detail.icon className="text-[var(--color-accent-light)]" size={18} aria-hidden="true" />
            </div>
            <div>
              <Label as="p">{detail.label}</Label>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="mt-1 block text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-light)]"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="mt-1 text-sm font-medium text-[var(--color-text)]">{detail.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <Divider className="my-8" />

      <Label as="p">Follow along</Label>
      <SocialLinks className="mt-4" />
    </div>
  );
}