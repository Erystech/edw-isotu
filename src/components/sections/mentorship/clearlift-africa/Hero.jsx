import { ArrowRight, HeartHandshake } from 'lucide-react';
import Container from '../../../layout/Container';
import Breadcrumb from '../../../misc/Breadcrumb';
import Label from '../../../typography/Label';
import Heading from '../../../typography/Heading';
import Paragraph from '../../../typography/Paragraph';
import Button from '../../../ui/Button';

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: 'Mentorship', href: '/mentorship' },
  { label: 'Clearlift Africa Mentorship' },
];

// TODO: replace with the live Clearlift Africa application form URL.
const APPLY_URL = 'https://forms.gle/REPLACE_WITH_CLEARLIFT_APPLICATION_FORM';

export default function Hero() {
  return (
    <Container className="pt-36 lg:pt-44 mb-15">
      <Breadcrumb items={BREADCRUMB} />

      <div className="mt-8 max-w-3xl">
        <Label as="p">Clearlift Africa Mentorship</Label>
        <Heading as="h1" size="2xl" className="mt-3">
          Unlock your potential, at scale
        </Heading>
        <Paragraph size="lg" tone="muted" className="mt-6">
          Are you ready to take your career, leadership, or entrepreneurial
          journey to the next level? Join the Clearlift Africa mentorship
          program with Dr. Edwin Isotu Edeh and unlock your potential to make
          a lasting impact in society — part of a vision to raise{' '}
          <span className="font-semibold text-[var(--color-text)]">
            one million visionary African leaders
          </span>{' '}
          by 2063.
        </Paragraph>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={APPLY_URL} size="lg">
            Apply Now
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="#mentor" variant="secondary" size="lg">
            <HeartHandshake size={16} aria-hidden="true" />
            Become a Mentor
          </Button>
        </div>
      </div>
    </Container>
  );
}