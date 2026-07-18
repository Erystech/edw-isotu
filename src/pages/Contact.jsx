import { Navbar, Footer, Section } from '../components/layout';
import { SectionHeading } from '../components/misc';
import { Accordion } from '../components/misc';
import { Hero } from '../components/sections';
import { ContactForm, BookingInfo, Location } from '../components/sections/contact';
import HeroImg from '../assets/images/high-level-strategy.webp';

const HERO_IMAGE = HeroImg;

const FAQS = [
  {
    question: 'How far in advance should I book?',
    answer:
      'Most keynotes are booked 8\u201312 weeks in advance, though shorter notice is sometimes possible depending on the calendar.',
  },
  {
    question: 'Does Edwin travel internationally?',
    answer:
      'Yes \u2014 Edwin speaks at events worldwide and can accommodate virtual formats for distributed teams.',
  },
  {
    question: 'What happens after I submit an inquiry?',
    answer:
      'You will hear back within one business day to schedule a short discovery call and confirm dates, format, and logistics.',
  },
  {
    question: 'Can I request a specific speaking topic?',
    answer:
      'Absolutely. Every talk is tailored after a discovery call, and existing topics can be adapted or combined for your audience.',
  },
];

function Contact() {
  return (
    <>
      <Navbar transparent />

      <Hero
        eyebrow="Get in Touch"
        title="Let's start the conversation"
        description="Whether it's a keynote, a mentorship inquiry, or a media request, tell us what you need and we'll get back to you within one business day."
        image={HERO_IMAGE}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Inquiry" title="Send a message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <BookingInfo />
        </div>
      </Section>

      <Section tone="muted">
        <Location />
      </Section>

      <Section>
        <SectionHeading align="center" eyebrow="FAQ" title="Before you reach out" className="mx-auto text-center" />
        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion items={FAQS} />
        </div>
      </Section>

      <Footer />
    </>
  );
}

export default Contact;