import { MapPin } from 'lucide-react';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import Label from '../../typography/Label';

export default function Location() {
  return (
    <div className="card-premium flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)]">
          <MapPin className="text-[var(--color-accent-light)]" size={18} aria-hidden="true" />
        </div>
        <div>
          <Label as="p">Nigeria Office</Label>
          <Heading as="h3" size="sm" className="mt-1">
            Abuja, Federal Capital Territory
          </Heading>
          <Paragraph tone="muted" size="sm" className="mt-2 max-w-md">
            Rivers House, TED Suite, 83 Ralph Shodeinde Street, Central
            Business District, 900103, Abuja, FCT, Nigeria.
          </Paragraph>
          <Paragraph tone="muted" size="sm" className="mt-2 max-w-md">
            Available for engagements worldwide, in person or virtually.
            International travel is arranged during the discovery call.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}