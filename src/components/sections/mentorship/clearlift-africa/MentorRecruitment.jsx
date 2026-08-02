import { HeartHandshake } from 'lucide-react';
import Section from '../../../layout/Section';
import Heading from '../../../typography/Heading';
import Paragraph from '../../../typography/Paragraph';
import Button from '../../../ui/Button';
import { FadeInOnScroll } from '../../../animations';

const APPLY_URL = 'https://docs.google.com/forms/d/1wfderJdfVbclgb7o7Hliu45HQNhZ2mMkhTUwWq0RcC0/prefill';

export default function MentorRecruitment() {
  return (
    <Section id="mentor" tone="muted" className="scroll-mt-24">
      <FadeInOnScroll variant="scale">
        <div className="card-premium mx-auto flex max-w-4xl flex-col items-center gap-6 border-[var(--color-accent-light)] p-10 text-center lg:p-14">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-accent-light)]">
            <HeartHandshake className="text-[var(--color-accent-light)]" size={26} aria-hidden="true" />
          </div>

          <Heading as="h2" size="lg">
            Mentor the next generation
          </Heading>

          <Paragraph tone="muted" size="md" className="max-w-2xl">
            Are you an experienced public health or environmental professional
            passionate about giving back? Become a mentor and shape the future
            of the industry — your expertise and guidance can make a lasting
            impact on the leaders coming up behind you.
          </Paragraph>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Contact Us</Button>
            <Button href={APPLY_URL} variant="secondary" target="_blank">
              Apply as a Mentee
            </Button>
          </div>
        </div>
      </FadeInOnScroll>
    </Section>
  );
}