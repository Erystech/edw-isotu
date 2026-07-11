import { Mic2, Users2, MonitorPlay, PresentationIcon } from 'lucide-react';

import { Navbar, Footer, Section } from '../components/layout';
import { SpeakerCard, TestimonialCard } from '../components/cards';
import { Quote } from '../components/typography';
import { SectionHeading, CTABanner } from '../components/misc';
import { Hero } from '../components/sections';
import { WhyEdwin, EventFormats, BookingProcess } from '../components/sections/speaking';
import { VideoEmbed } from '../components/blocks';
import HeroImg from '../assets/images/keynotemain.webp';

const HERO_IMAGE = HeroImg;

const WHY_EDWIN_POINTS = [
  'UN Global Environmental Health Expert with two decades of field, policy, and boardroom experience.',
  '2-time winner, Nigeria Health Sustainability Consultant of the Year (2021, 2022).',
  'Mentored 350+ emerging leaders and public health and environmental experts globally.',
  'Coordinates the WHO Public Health and Environment (PHE) Programme in Nigeria as National Consultant.',
  'Ranked among Africa\u2019s top 1% leadership mentors on clarity and career growth.',
  'Every talk is adapted to the audience after a short discovery call \u2014 no generic decks.',
];

const SPEAKING_TOPICS = [
  {
    icon: PresentationIcon,
    title: 'The Momentum Principle',
    description:
      'Edwin\u2019s signature framework for turning strategy into daily, compounding action \u2014 built from two decades of leading multisectoral programs under real constraints.',
  },
  {
    icon: Users2,
    title: 'Leading Through Environmental Change',
    description:
      'What public health and environmental leadership teaches about guiding people through uncertainty without losing momentum.',
  },
  {
    icon: Mic2,
    title: 'Mentorship at Scale',
    description:
      'How to build a mentoring culture that reaches hundreds, not just the few people in the room \u2014 lessons from mentoring 350+ leaders.',
  },
  {
    icon: MonitorPlay,
    title: 'Sustainability as Strategy',
    description:
      'Reframing environmental and public health sustainability as a leadership discipline, not a compliance checkbox.',
  },
];
const EVENT_FORMATS = [
  {
    icon: Mic2,
    title: 'Keynote',
    description: '45\u201360 minute signature talk, tailored to your audience and industry.',
  },
  {
    icon: Users2,
    title: 'Workshop',
    description: 'Half or full-day interactive session for leadership teams and cohorts.',
  },
  {
    icon: PresentationIcon,
    title: 'Panel',
    description: 'Moderated or panelist appearance on leadership, health, or sustainability topics.',
  },
  {
    icon: MonitorPlay,
    title: 'Virtual',
    description: 'Live virtual keynote or workshop for distributed and global teams.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Edwin didn\u2019t just speak at our offsite \u2014 he changed how our leadership team makes decisions.',
    name: 'Amara Cole',
    role: 'VP People',
    company: 'Northbridge',
  },
  {
    quote:
      'Our regional managers still quote his framework a year later. That almost never happens with a keynote.',
    name: 'Priya Shah',
    role: 'Chief of Staff',
    company: 'Solborne',
  },
];

const BOOKING_STEPS = [
  {
    step: 'Step 1',
    title: 'Discovery call',
    description: 'A short call to understand your audience, goals, and the outcome you need from the event.',
  },
  {
    step: 'Step 2',
    title: 'Custom outline',
    description: 'Edwin tailors the talk with industry-specific examples and confirms the format and length.',
  },
  {
    step: 'Step 3',
    title: 'Pre-event logistics',
    description: 'Travel, AV requirements, and run-of-show are confirmed with your event team.',
  },
  {
    step: 'Step 4',
    title: 'The event, and after',
    description: 'Edwin delivers the talk and follows up with a resource pack for attendees.',
  },
];

function Speaking() {
  return (
    <>
      <Navbar transparent />

      <Hero
        title="KEYNOTE SPEAKING."
        description="Electrify your audience, motivate and inspire your team and boast your business growth and visibility with an impactful presence of Dr. Edwin-Isotu."
        image={HERO_IMAGE}
        primaryAction={{ label: 'Check availability', href: '/contact' }}
        secondaryAction={{ label: 'Join Telegram', href: '#reel' }}
      />

      <Section>
        <WhyEdwin
          eyebrow="Why Edwin"
          title="Credibility built in the field, not the green room"
          description="What makes his talks land differently with leadership teams."
          points={WHY_EDWIN_POINTS}
        />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Signature Talks"
          title="Speaking topics"
          description="Each talk is built around a single operating idea your team can put to work immediately."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SPEAKING_TOPICS.map((topic) => (
            <SpeakerCard key={topic.title} {...topic} />
          ))}
        </div>
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="Formats" title="Ways to book Edwin" />
        <div className="mt-10">
          <EventFormats formats={EVENT_FORMATS} />
        </div>
      </Section>
      <Section tone="muted">
        <SectionHeading eyebrow="Process" title="How booking works" />
        <div className="mt-10">
          <BookingProcess steps={BOOKING_STEPS} />
        </div>
      </Section>

      <Section id="reel" className="scroll-mt-24">
        <SectionHeading
          align="center"
          eyebrow="Featured Keynote"
          title="Watch Edwin in action"
          description="A 4-minute reel from recent keynotes \u2014 the pacing, the audience response, the specifics."
          className="mx-auto text-center"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <VideoEmbed
            src="https://www.youtube.com/embed/vtnS37ua4Vo?si=QbkIQ3ima9WCpHlQ"
            title="Edwin Isotu keynote reel"
          />
        </div>
      </Section>

      <Footer />
    </>
  );
}

export default Speaking;