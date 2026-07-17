import { Compass, Zap, Eye, Wrench, Users, ShieldCheck, Flag } from 'lucide-react';
import Section from '../../../layout/Section';
import SectionHeading from '../../../misc/SectionHeading';
import { SpeakerCard } from '../../../cards';

const BENEFITS = [
  {
    icon: Compass,
    title: 'Personalized Life Clarity Guidance',
    description:
      'Gain exceptional clarity on your path to success. Your mentor helps you set SMART goals and stay on track.',
  },
  {
    icon: Zap,
    title: 'Accelerated Career Success',
    description:
      'Learn from mentors who share best practices, shortcuts, and resources that shorten your learning curve.',
  },
  {
    icon: Eye,
    title: 'Real-World Experience & Insights',
    description:
      'Gain insights from leaders and entrepreneurs who have navigated real challenges and reached real milestones.',
  },
  {
    icon: Wrench,
    title: 'Skill Development',
    description:
      'Develop technical expertise alongside soft skills — communication, leadership, and problem-solving.',
  },
  {
    icon: Users,
    title: 'Networking Opportunities',
    description:
      'Connect with a diverse, dynamic community of mentors, peers, and potential collaborators.',
  },
  {
    icon: ShieldCheck,
    title: 'Increased Confidence',
    description:
      'A mentor who believes in your abilities helps you take on bigger challenges and more ambitious goals.',
  },
  {
    icon: Flag,
    title: 'Accountability & Motivation',
    description:
      'Regular check-ins keep you focused on your goals and consistently moving toward improvement.',
  },
];

export default function ProgramBenefits() {
  return (
    <Section tone="muted">
      <SectionHeading eyebrow="Program Benefits" title="What you gain as a mentee" />
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {BENEFITS.map((benefit) => (
          <SpeakerCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </Section>
  );
}