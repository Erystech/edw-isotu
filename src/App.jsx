import {
  Mic2,
  Users,
  Target,
  BookOpen,
} from 'lucide-react';

import { Navbar, Footer, Section, Container } from './components/layout';
import { Button, Badge, Divider } from './components/ui';
import {
  SpeakerCard,
  TestimonialCard,
  BookCard,
  VideoCard,
  ServiceCard,
  BlogCard,
  StatsCard,
} from './components/cards';
import { Heading, Paragraph, Label, Quote } from './components/typography';
import {
  SectionHeading,
  CTABanner,
  LogoStrip,
  Accordion,
} from './components/misc';
import { Input, Textarea, Select, Checkbox, FormField } from './components/forms';

// Placeholder image (swap for real assets once you have them)
const PLACEHOLDER_IMG = 'https://placehold.co/600x800/0B132B/FFFFFF?text=Cover';
const PLACEHOLDER_WIDE = 'https://placehold.co/800x450/0B132B/FFFFFF?text=Video';
const PLACEHOLDER_LOGO = 'https://placehold.co/160x40/transparent/111827?text=Logo';

function App() {
  return (
    <>
      <Navbar transparent={false} />

      {/* Spacer so content clears the fixed navbar during the demo */}
      <div className="h-20" />

      <Section>
        <SectionHeading
          eyebrow="Component Showcase"
          title="Phase 2 — visual QA"
          description="Every component from the library rendered once, so we can sanity-check spacing, color, and states before building real pages."
        />

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Badge tone="accent">Accent Badge</Badge>
          <Badge tone="primary">Primary Badge</Badge>
        </div>
      </Section>

      <Divider className="max-w-7xl mx-auto" />

      <Section tone="muted">
        <SectionHeading eyebrow="Typography" title="Type scale" />
        <div className="mt-8 flex flex-col gap-4">
          <Heading size="2xl">Heading 2xl</Heading>
          <Heading size="xl">Heading xl</Heading>
          <Heading size="lg">Heading lg</Heading>
          <Paragraph size="lg">Paragraph large — supporting copy under a hero.</Paragraph>
          <Paragraph tone="muted">Paragraph muted — secondary body text.</Paragraph>
          <Label>Eyebrow Label</Label>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Speaking Topics" title="Speaker cards" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <SpeakerCard
            icon={Mic2}
            title="Leading Through Change"
            description="A framework for guiding teams through uncertainty without losing momentum."
          />
          <SpeakerCard
            icon={Users}
            title="Building High-Trust Teams"
            description="Practical habits that compound into durable team performance."
          />
          <SpeakerCard
            icon={Target}
            title="Strategy to Execution"
            description="Closing the gap between the plan on the slide and the work on the ground."
          />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Impact" title="Stats cards" />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <StatsCard value={250} suffix="+" label="Keynotes delivered" />
          <StatsCard value={40} suffix="k+" label="Leaders trained" />
          <StatsCard value={98} suffix="%" label="Would rebook" />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Testimonials" title="Testimonial card" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <TestimonialCard
            quote="Edwin didn't just speak at our offsite — he changed how our leadership team makes decisions."
            name="Amara Cole"
            role="VP People"
            company="Northbridge"
          />
          <Quote cite="— Daniel Reyes, CEO, Fenwick Group">
            The single best keynote our company has hosted in a decade.
          </Quote>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Books" title="Book card" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <BookCard
            cover={PLACEHOLDER_IMG}
            title="The Momentum Principle"
            tagline="How leaders turn strategy into daily action."
            badge="Bestseller"
            purchaseHref="#"
          />
          <ServiceCard
            icon={BookOpen}
            title="Executive Workshops"
            description="Half-day and full-day formats tailored to leadership offsites."
            href="#"
          />
          <VideoCard
            thumbnail={PLACEHOLDER_WIDE}
            title="Keynote Reel 2026"
            duration="3:42"
            onPlay={() => alert('Open video modal here')}
          />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Insights" title="Blog card" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            image={PLACEHOLDER_WIDE}
            category="Leadership"
            title="Why most change initiatives stall at month three"
            excerpt="The pattern shows up everywhere — and it's fixable."
            date="Jun 2026"
            readTime="6 min read"
            href="#"
          />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Press" title="Logo strip" />
        <LogoStrip
          className="mt-10"
          logos={[1, 2, 3, 4, 5].map((i) => ({ src: PLACEHOLDER_LOGO, alt: `Press logo ${i}` }))}
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Accordion" />
        <div className="mt-10 max-w-2xl">
          <Accordion
            items={[
              {
                question: 'What is Edwin\u2019s typical booking lead time?',
                answer: 'Most keynotes are booked 8\u201312 weeks in advance, though shorter notice is sometimes possible.',
              },
              {
                question: 'Does Edwin travel internationally?',
                answer: 'Yes — Edwin speaks at events worldwide and can accommodate virtual formats as well.',
              },
            ]}
          />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Contact" title="Form elements" />
        <form className="mt-10 grid max-w-xl gap-5">
          <FormField label="Full name" required>
            <Input placeholder="Jane Doe" />
          </FormField>
          <FormField label="Event type" hint="Select the closest match">
            <Select defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>Keynote</option>
              <option>Workshop</option>
              <option>Panel</option>
            </Select>
          </FormField>
          <FormField label="Message">
            <Textarea placeholder="Tell us about your event…" />
          </FormField>
          <Checkbox id="consent" label="I agree to be contacted about this inquiry." />
          <Button type="submit" className="self-start">
            Send inquiry
          </Button>
        </form>
      </Section>

      <Section>
        <CTABanner
          eyebrow="Book Edwin"
          title="Ready to bring momentum to your next event?"
          description="Check availability and get a response within one business day."
          primaryAction={{ label: 'Check availability', href: '#' }}
          secondaryAction={{ label: 'Download media kit', href: '#' }}
        />
      </Section>

      <Footer />
    </>
  );
}

export default App;