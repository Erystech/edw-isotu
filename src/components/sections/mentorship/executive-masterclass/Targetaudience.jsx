import { Briefcase, UserCog, Rocket, Landmark } from 'lucide-react';
import Section from '../../../layout/Section';
import SectionHeading from '../../../misc/SectionHeading';
import { SpeakerCard } from '../../../cards';

const AUDIENCE = [
  {
    icon: Briefcase,
    title: 'C-Suite Executives',
    description: 'CEOs, CFOs, and founders steering strategy at the top.',
  },
  {
    icon: UserCog,
    title: 'Emerging Leaders',
    description: 'Managers and directors stepping into bigger mandates.',
  },
  {
    icon: Rocket,
    title: 'Entrepreneurs',
    description: 'Solopreneurs and scale-up founders building from scratch.',
  },
  {
    icon: Landmark,
    title: 'Public & NGO Leaders',
    description: 'Government and nonprofit executives driving public impact.',
  },
];

export default function TargetAudience() {
  return (
    <Section tone="muted">
      <SectionHeading eyebrow="Who It's For" title="Who this masterclass is for" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {AUDIENCE.map((item) => (
          <SpeakerCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}