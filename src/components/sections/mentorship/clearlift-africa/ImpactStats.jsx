import Section from '../../../layout/Section';
import SectionHeading from '../../../misc/SectionHeading';
import { StatsCard } from '../../../cards';

const STATS = [
  { value: 325, suffix: '+', label: 'Emerging leaders and professionals raised' },
  { value: 183, suffix: '+', label: 'Environmental and public health experts mentored' },
  { value: 56, suffix: '+', label: 'Health & eco-business start-ups guided' },
  { value: 5, suffix: '', label: 'African nations reached' },
];

export default function ImpactStats() {
  return (
    <Section tone="primary">
      <SectionHeading
        invert
        eyebrow="Impact"
        title="A proven track record of transformation"
      />
      <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StatsCard key={stat.label} invert {...stat} />
        ))}
      </div>
    </Section>
  );
}