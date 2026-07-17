import Section from '../../../layout/Section';
import SectionHeading from '../../../misc/SectionHeading';
import { Accordion } from '../../../misc';

const FAQS = [
  {
    question: 'What is Clearlift Africa Mentorship?',
    answer:
      'A community-based mentorship program run by Dr. Edwin Isotu, built around a 3-year cycle across three hubs, aimed at raising one million visionary African leaders by 2063.',
  },
  {
    question: 'Who should apply?',
    answer:
      'Anyone building a career, leadership path, or business in public health, environmental sustainability, or professional life more broadly — from early-career professionals to established leaders.',
  },
  {
    question: 'How long is the program?',
    answer:
      'Mentorship is structured around a 3-year cycle, with milestones and check-ins along the way rather than a single fixed session.',
  },
  {
    question: 'Is there a cost to join?',
    answer:
      'Reach out through the contact page for current enrollment details and any associated costs for your selected hub.',
  },
  {
    question: 'Can I switch hubs?',
    answer:
      'Yes. If your goals shift during the program, you can discuss a hub change with the mentorship team.',
  },
  {
    question: 'What happens after the program ends?',
    answer:
      'Mentees join the wider Clearlift Africa alumni network, with continued access to community events and opportunities.',
  },
  {
    question: 'How do mentors get involved?',
    answer:
      'Experienced public health and environmental professionals can apply to mentor through the contact page — see "Mentor the next generation" above.',
  },
  {
    question: "What's the time commitment?",
    answer:
      'Expect regular individual and group sessions with your mentor, plus periodic networking events and workshops.',
  },
];

export default function FAQ() {
  return (
    <Section tone="muted">
      <SectionHeading
        align="center"
        eyebrow="FAQ"
        title="Before you apply"
        className="mx-auto text-center"
      />
      <div className="mx-auto mt-10 max-w-2xl">
        <Accordion items={FAQS} />
      </div>
    </Section>
  );
}