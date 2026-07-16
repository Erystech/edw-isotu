import { ArrowRight } from 'lucide-react';
import Container from '../../../layout/Container';
import Breadcrumb from '../../../misc/Breadcrumb';
import Label from '../../../typography/Label';
import Heading from '../../../typography/Heading';
import Paragraph from '../../../typography/Paragraph';
import Button from '../../../ui/Button';

const BREADCRUMB = [
  { label: 'Home', href: '/' },
  { label: 'Mentorship', href: '/mentorship' },
  { label: 'Executive Masterclass' },
];
export default function Hero() {
  return (
    <Container className="pt-36 lg:pt-44">
      <Breadcrumb items={BREADCRUMB} />

      <div className="mt-8 max-w-3xl">
        <Label as="p">Board-Level Facilitation</Label>
        <Heading as="h1" size="2xl" className="mt-3">
          Executive Masterclass with Dr. Edwin Isotu
        </Heading>
        <Paragraph size="lg" tone="muted" className="mt-6">
          Having combined industry experience with 6+ years teaching in
          higher institutions of learning, Dr. Edwin Isotu knows the science
          of teaching for solutions. He has helped over 2,000 leaders and
          professionals from 12 countries across Africa, the Middle East,
          and Europe simplify their personal growth plans and strategies.
        </Paragraph>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/contact" size="lg">
            Register Now
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="#overview" variant="secondary" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
}