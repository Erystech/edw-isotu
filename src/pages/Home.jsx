import { Compass, Users, TrendingUp } from 'lucide-react';

import { Navbar, Footer, Section } from '../components/layout';
import { Divider } from '../components/ui';
import {
  SpeakerCard,
  TestimonialCard,
  BookCard,
  BlogCard,
  StatsCard,
} from '../components/cards';
import { Quote } from '../components/typography';
import { SectionHeading, CTABanner, LogoStrip, Accordion } from '../components/misc';
import { Hero, AboutPreview } from '../components/sections';
import IsotuPotrait from '../assets/images/edisotu.webp'
import HeroImg from '../assets/images/isotu-banner.webp'
import { clientLogos } from '../assets/logos';

// Placeholder imagery — swap for real photography/video assets once available.
const HERO_IMAGE = HeroImg
  'https://placehold.co/1600x1000/0B132B/16324F?text=Edwin+Isotu';
const PORTRAIT_IMAGE = IsotuPotrait;
const BOOK_COVER = 'https://placehold.co/600x800/0B132B/FFFFFF?text=Cover';
const BLOG_THUMB = 'https://placehold.co/800x450/16324F/FFFFFF?text=Insight';
const CLIENT_LOGO = 'https://placehold.co/160x40/transparent/6B7280?text=Client';
const PRESS_LOGO = 'https://placehold.co/140x32/transparent/111827?text=Press';

const SPEAKING_TOPICS = [
  {
    icon: Compass,
    title: 'Leading Through Change',
    description:
      'A framework for guiding teams through uncertainty without losing momentum.',
  },
  {
    icon: Users,
    title: 'Building High-Trust Teams',
    description: 'Practical habits that compound into durable team performance.',
  },
  {
    icon: TrendingUp,
    title: 'Strategy to Execution',
    description:
      "Closing the gap between the plan on the slide and the work on the ground.",
  },
];

const BOOKS = [
  {
    title: 'The Momentum Principle',
    tagline: 'How leaders turn strategy into daily action.',
    badge: 'Bestseller',
  },
  {
    title: 'Quiet Authority',
    tagline: 'Leading without needing the room\u2019s attention.',
  },
  {
    title: 'The Trust Ledger',
    tagline: 'What teams actually owe each other to move fast.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Edwin didn't just speak at our offsite \u2014 he changed how our leadership team makes decisions.",
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

const ARTICLES = [
  {
    category: 'Leadership',
    title: 'Why most change initiatives stall at month three',
    excerpt: 'The pattern shows up everywhere \u2014 and it\u2019s fixable.',
    date: 'Jun 2026',
    readTime: '6 min read',
  },
  {
    category: 'Management',
    title: 'The one-on-one question most managers skip',
    excerpt: 'A single question that surfaces problems weeks earlier.',
    date: 'May 2026',
    readTime: '4 min read',
  },
  {
    category: 'Feedback',
    title: 'How to give feedback that actually lands',
    excerpt: 'The delivery habit that determines whether advice sticks.',
    date: 'Apr 2026',
    readTime: '5 min read',
  },
];

const FAQS = [
  {
    question: 'What is Edwin\u2019s typical booking lead time?',
    answer:
      'Most keynotes are booked 8\u201312 weeks in advance, though shorter notice is sometimes possible.',
  },
  {
    question: 'Does Edwin travel internationally?',
    answer:
      'Yes \u2014 Edwin speaks at events worldwide and can accommodate virtual formats as well.',
  },
  {
    question: 'What\u2019s included in a keynote booking?',
    answer:
      'Every booking includes a pre-event strategy call, a talk tailored to your audience, and a follow-up resource pack for attendees.',
  },
  {
    question: 'Can the talk be customized for our industry?',
    answer:
      'Every keynote is adapted with industry-specific examples after a short discovery call with your team.',
  },
];

function Home() {
  return (
    <>
      <Navbar transparent />

      <Hero
        eyebrow="Keynote Speaker \u00b7 Author \u00b7 Advisor"
        title="Momentum is built, one decision at a time."
        description="Edwin Isotu helps leadership teams close the gap between strategy and execution \u2014 turning the plan on the slide into momentum on the ground."
        image={HERO_IMAGE}
        primaryAction={{ label: 'Check availability', href: '/contact' }}
        secondaryAction={{ label: 'Watch the reel', href: '#keynote-reel' }}
        stats={[
          { label: 'Keynotes delivered', value: 250, suffix: '+' },
          { label: 'Leaders trained', value: 40, suffix: 'k+' },
          { label: 'Would rebook', value: 98, suffix: '%' },
        ]}
      />

      <Section className="!pt-16 !pb-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          Trusted by teams at
        </p>
        <LogoStrip
          className="mt-8"
          logos={clientLogos}
        />
      </Section>

      <Divider className="mx-auto max-w-7xl" />

      <Section tone="muted">
        <AboutPreview
          eyebrow="Meet EDWIN ISOTU"
          title="From the field, not just the podium."
          paragraphs={[
            'Dr. Edwin Isotu Edeh, PhD is an award-winning United Nations’ Global Environmental Health Expert, Executive Career Mentor, Keynote Speaker and a transformational leader with two decades worth of technical and strategic level experience in public health and environmental sustainability spanning across governance, industry, academics and humanitarian spheres. He currently coordinates Public Health and Environment (PHE) Programme of the World Health Organization (WHO) in Nigeria, as a National Consultant.',
            'He has excellent mastery in raising and bringing out the best out of people in vision, strategy and outstanding results. He is ranked Africa’s #1 Mentor on Public Health & Environment (PHE) and listed among top Africa’s 1% leadership mentors on clarity and Career Growth.',
            'Dr. Edwin Isotu, as popularly called, is a 2-time Winner of Nigeria Health Sustainability Consultant of the Year 2021 and 2022. He has mentored over 350 emerging leaders and public health and environmental experts globally.',
          ]}
          image={PORTRAIT_IMAGE}
          imageAlt="Edwin Isotu"
          action={{ label: "Read Edwin's full story", href: '/about' }}
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Signature Talks"
          title="Speaking topics"
          description="Each talk is built around a single operating idea your team can put to work the next morning."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SPEAKING_TOPICS.map((topic) => (
            <SpeakerCard key={topic.title} {...topic} />
          ))}
        </div>
      </Section>

      <Section id="keynote-reel" tone="muted" className="scroll-mt-24">
        <SectionHeading
          align="center"
          eyebrow="Featured Keynote"
          title="Watch Edwin in action"
          description="A 4-minute reel from recent keynotes \u2014 the pacing, the audience response, the specifics."
          className="mx-auto text-center"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          {/* Responsive iframe wrapper */}
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <iframe 
              className="h-full w-full"
              src="https://www.youtube.com/embed/vtnS37ua4Vo?si=QbkIQ3ima9WCpHlQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Books"
          title="Ideas that outlast the keynote"
          description="Three books on turning strategy into daily execution."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKS.map((book) => (
            <BookCard key={book.title} cover={BOOK_COVER} purchaseHref="/books" {...book} />
          ))}
        </div>
      </Section>

      <Section tone="primary">
        <SectionHeading
          invert
          eyebrow="Impact"
          title="The numbers behind the stage time"
          description="Every keynote is measured the same way Edwin asks teams to measure their own work."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <StatsCard invert value={250} suffix="+" label="Keynotes delivered" />
          <StatsCard invert value={40} suffix="k+" label="Leaders trained" />
          <StatsCard invert value={98} suffix="%" label="Would rebook" />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Testimonials" title="What leaders say afterward" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Quote
            cite="\u2014 Daniel Reyes, CEO, Fenwick Group"
            className="rounded-3xl border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)] md:col-span-1"
          >
            The single best keynote our company has hosted in a decade.
          </Quote>
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
          As featured in
        </p>
        <LogoStrip
          className="mt-8"
          logos={[1, 2, 3, 4].map((i) => ({ src: PRESS_LOGO, alt: `Press outlet ${i}` }))}
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Insights"
          title="Latest articles"
          description="Short, specific writing on leadership and execution."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <BlogCard key={article.title} image={BLOG_THUMB} href="/insights" {...article} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading align="center" eyebrow="FAQ" title="Before you book" className="mx-auto text-center" />
        <div className="mx-auto mt-10 max-w-2xl">
          <Accordion items={FAQS} />
        </div>
      </Section>

      <Section>
        <CTABanner
          eyebrow="Book Edwin"
          title="Ready to bring momentum to your next event?"
          description="Check availability and get a response within one business day."
          primaryAction={{ label: 'Check availability', href: '/contact' }}
          secondaryAction={{ label: 'Download media kit', href: '/media' }}
        />
      </Section>

      <Footer />
    </>
  );
}

export default Home;