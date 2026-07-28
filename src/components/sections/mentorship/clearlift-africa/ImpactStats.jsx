import { useState, useEffect } from 'react';
import Section from '../../../layout/Section';
import SectionHeading from '../../../misc/SectionHeading';
import { StatsCard } from '../../../cards';
import { LoadingState } from '../../../states';

const STATS = [
  { value: 325, suffix: '+', label: 'Emerging leaders and professionals raised' },
  { value: 183, suffix: '+', label: 'Environmental and public health experts mentored' },
  { value: 56, suffix: '+', label: 'Health & eco-business start-ups guided' },
  { value: 5, suffix: '', label: 'African nations reached' },
];

export default function ImpactStats() {
  const [statsData, setStatsData] = useState(null);

  useEffect(() => {
    // Simulating data fetch for the metrics
    const timer = setTimeout(() => {
      setStatsData(STATS);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section tone="primary">
      <SectionHeading
        invert
        eyebrow="Impact"
        title="A proven track record of transformation"
      />
      <div className="mt-12">
        {statsData === null ? (
          <LoadingState variant="stats" />
        ) : (
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {statsData.map((stat) => (
              <StatsCard key={stat.label} invert {...stat} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}