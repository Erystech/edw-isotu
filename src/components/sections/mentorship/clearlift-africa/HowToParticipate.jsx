import Section from '../../../layout/Section';
import SectionHeading from '../../../misc/SectionHeading';
import Timeline from '../../about/Timeline';

const STEPS = [
  {
    step: 'Step 1',
    title: 'Application',
    description:
      'Complete the online application form, sharing your background, interests, and goals. Follow Dr. Edwin Isotu on social media and join the Telegram community.',
  },
  {
    step: 'Step 2',
    title: 'Mentor Matching',
    description:
      'Our team carefully matches you with a mentor based on your profile, selected hub, and preferences.',
  },
  {
    step: 'Step 3',
    title: 'Programme Commencement',
    description:
      'Begin the mentorship journey with regular individual and group meetings with your mentor.',
  },
  {
    step: 'Step 4',
    title: 'Networking & Training',
    description:
      'Access networking events and workshops designed to enhance your skills and broaden your horizons.',
  },
];

export default function HowToParticipate() {
  const items = STEPS.map((step) => ({
    year: step.step,
    title: step.title,
    description: step.description,
  }));

  return (
    <Section>
      <SectionHeading eyebrow="How to Participate" title="Your path to transformation" />
      <div className="mt-10 max-w-2xl">
        <Timeline items={items} />
      </div>
    </Section>
  );
}