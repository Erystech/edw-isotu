import { Section, Container } from '../components/layout';
import { SectionHeading, Accordion } from '../components/misc';
import Heading from '../components/typography/Heading';
import Paragraph from '../components/typography/Paragraph';
import { ContactForm, BookingInfo, Location } from '../components/sections/contact';
import { FadeInOnScroll } from '../components/animations';

const FAQS = [
  {
    question: 'How far in advance should I book?',
    answer: 'Most keynotes are booked 8–12 weeks in advance, though shorter notice is sometimes possible depending on the calendar.',
  },
  {
    question: 'Does Edwin travel internationally?',
    answer: 'Yes — Edwin speaks at events worldwide and can accommodate virtual formats for distributed teams.',
  },
  {
    question: 'What happens after I submit an inquiry?',
    answer: 'You will hear back within one business day to schedule a short discovery call and confirm dates, format, and logistics.',
  },
  {
    question: 'Can I request a specific speaking topic?',
    answer: 'Absolutely. Every talk is tailored after a discovery call, and existing topics can be adapted or combined for your audience.',
  },
];

export default function Contact() {
  return (
    <>
      {/* Minimal, Text-First Header */}
      <header>
        <Container className="pb-12 pt-36 lg:pb-16 lg:pt-44">
          <FadeInOnScroll variant="fade-up">
            <p className="text-sm font-semibold tracking-widest uppercase mb-4 text-[var(--color-accent-light)]">
              Get in Touch
            </p>
            <Heading as="h1" size="2xl" className="text-[var(--color-primary)]">
              Let's start the conversation
            </Heading>
            <Paragraph size="lg" tone="muted" className="mt-6 max-w-2xl">
              Whether it's a keynote, a mentorship inquiry, or a media request, tell us what you need and we'll get back to you within one business day.
            </Paragraph>
          </FadeInOnScroll>
        </Container>
      </header>

      {/* Main Content: Form Left, Consolidated Info Right */}
      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 items-start">
          
          {/* Left Column: The Form */}
          <FadeInOnScroll variant="fade-up" delay={100}>
            <SectionHeading eyebrow="Inquiry" title="Send a message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </FadeInOnScroll>

          {/* Right Column: Consolidated & Sticky Info */}
          <FadeInOnScroll variant="fade-up" delay={200} className="flex flex-col gap-6 sticky top-32">
            <BookingInfo />
            {/* Reusing Location but letting it naturally fit the column width */}
            <Location /> 
          </FadeInOnScroll>
          
        </div>
      </Section>

      {/* FAQ Section */}
      <Section tone="muted">
        <FadeInOnScroll variant="fade-up">
          <SectionHeading 
            align="center" 
            eyebrow="FAQ" 
            title="Before you reach out" 
            className="mx-auto text-center" 
          />
        </FadeInOnScroll>
        <FadeInOnScroll variant="fade-up" delay={100} className="mx-auto mt-10 max-w-2xl">
          <Accordion items={FAQS} />
        </FadeInOnScroll>
      </Section>
    </>
  );
}