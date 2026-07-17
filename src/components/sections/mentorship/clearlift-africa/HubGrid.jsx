import { Leaf, Rocket, Target } from 'lucide-react';
import Section from '../../../layout/Section';
import SectionHeading from '../../../misc/SectionHeading';
import { MentorshipHubCard } from '../../../cards';

// TODO: replace with the live Clearlift Africa application form URL
// (ideally with a hub-specific prefill param per entry below).
const JOIN_URL = 'https://forms.gle/REPLACE_WITH_CLEARLIFT_APPLICATION_FORM';

export default function HubGrid({ images = {} }) {
  const hubs = [
    {
      icon: Leaf,
      image: images.environment,
      title: 'Environment & Public Health Leadership',
      description:
        'Empowers aspiring leaders in public health and environmental sustainability through mentorship from experienced professionals — bridging the gap between knowledge and practical application.',
      joinHref: JOIN_URL,
    },
    {
      icon: Rocket,
      image: images.career,
      title: 'Career & Business Growth Accelerator',
      description:
        'Expert guidance and resources to help you secure meaningful employment or launch a profitable business, building the tools and confidence needed for the world of work.',
      joinHref: JOIN_URL,
    },
    {
      icon: Target,
      image: images.leadership,
      title: 'Strategic Leadership & Enterprise',
      description:
        'Gain the knowledge, skills, and network to lead in the age of AI, joining a cohort of diverse emerging leaders spanning the African continent.',
      joinHref: JOIN_URL,
    },
  ];

  return (
    <Section>
      <SectionHeading
        eyebrow="Program Hubs"
        title="Join the hub that fits your journey"
        description="Each hub is a distinct mentorship track — choose the one that matches where you are right now."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {hubs.map((hub) => (
          <MentorshipHubCard key={hub.title} {...hub} />
        ))}
      </div>
    </Section>
  );
}