import { CheckCircle2 } from 'lucide-react';
import Section from '../../../layout/Section';
import SectionHeading from '../../../misc/SectionHeading';
import Paragraph from '../../../typography/Paragraph';

const FEATURES = [
  'Personalized strategies built around your leadership context',
  'Real-world case studies drawn from public health, policy, and industry',
  'A peer learning environment with leaders from your region and beyond',
  'Actionable frameworks you can apply the next morning',
  'Post-session support to keep momentum after the room empties',
];

export default function Overview({ image }) {
  return (
    <Section id="overview" className="scroll-mt-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Overview"
            title="Teaching built on two decades in the field"
          />
          <Paragraph tone="muted" size="md" className="mt-6">
            Dr. Isotu is an experienced teacher and the son of a headmaster,
            raised in a Southern Nigerian community known for its clusters of
            outstanding educators through the 1970s, 80s, and 90s. That
            teaching heritage — combined with his UN and industry experience
            — shapes a masterclass format built for transformational growth,
            not generic slides.
          </Paragraph>

          <ul className="mt-8 flex flex-col gap-4">
            {FEATURES.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[var(--color-accent-light)]"
                  size={20}
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-[var(--color-text)] lg:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <img
            src={image}
            alt="Dr. Edwin Isotu facilitating an executive masterclass"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}