import { useState, useEffect } from 'react';
import { Compass, Users, TrendingUp } from 'lucide-react';
import { Section } from '../components/layout';
import { Divider } from '../components/ui';
import {
  SpeakerCard,
  TestimonialCard,
  BookCard,
  ArticleCard,
  StatsCard,
} from '../components/cards';
import { Quote } from '../components/typography';
import { SectionHeading, CTABanner, LogoStrip, Accordion } from '../components/misc';
import { Hero, AboutPreview } from '../components/sections';
import { LoadingState } from '../components/states';
import { FadeInOnScroll, StaggerChildren } from '../components/animations';
import IsotuPotrait from '../assets/images/edisotu.webp';
import HeroImg from '../assets/images/isotu-banner.webp';
import { clientLogos, pressLogos } from '../assets/logos';
import { VideoEmbed } from '../components/blocks';
import { TESTIMONIALS } from '../assets/images/testimonials';
import TestimonialCarousel from '../components/misc/TestimonialCarousel';
import { articles } from '../components/data/articles';
import { PageMeta } from '../components/meta/PageMeta';

const HERO_IMAGE = HeroImg;
const PORTRAIT_IMAGE = IsotuPotrait;
const BOOK_COVER = 'https://placehold.co/600x800/0B132B/FFFFFF?text=Cover';

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

// Dynamically grab the 3 most recent articles
const RECENT_ARTICLES = [...articles]
  .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
  .slice(0, 3);

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading for the homepage
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <PageMeta
        title="Edwin Isotu" // Note: PageMeta already appends " | Edwin Isotu" if title is different, but for Home, we can just pass the name or leave default.
        description="Official website of Edwin Isotu. Keynote speaker and mentor specializing in public health, sustainability, and executive leadership."
        url="/"
        keywords="edwin isotu, public health speaker, executive leadership mentor, sustainability expert"
    />
      <Hero
        isLoading={isLoading}
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
        <FadeInOnScroll variant="fade">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Trusted by teams at
          </p>
          <LogoStrip className="mt-8" logos={clientLogos} />
        </FadeInOnScroll>
      </Section>

      <Divider className="mx-auto max-w-7xl" />

      <Section tone="muted">
        <FadeInOnScroll variant="fade-up">
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
        </FadeInOnScroll>
      </Section>

      <Section>
        <FadeInOnScroll variant="fade-up">
          <SectionHeading
            eyebrow="Signature Talks"
            title="Speaking topics"
            description="Each talk is built around a single operating idea your team can put to work the next morning."
          />
        </FadeInOnScroll>
        <StaggerChildren className="mt-10 grid gap-6 md:grid-cols-3">
          {SPEAKING_TOPICS.map((topic) => (
            <SpeakerCard key={topic.title} {...topic} />
          ))}
        </StaggerChildren>
      </Section>

      <Section id="keynote-reel" tone="muted" className="scroll-mt-24">
        <FadeInOnScroll variant="fade-up">
          <SectionHeading
            align="center"
            eyebrow="Featured Keynote"
            title="Watch Edwin in action"
            description="A 4-minute reel from recent keynotes \u2014 the pacing, the audience response, the specifics."
            className="mx-auto text-center"
          />
        </FadeInOnScroll>
        <FadeInOnScroll variant="scale" delay={120} className="mx-auto mt-10 max-w-3xl">
          <VideoEmbed
            src="https://www.youtube.com/embed/vtnS37ua4Vo?si=QbkIQ3ima9WCpHlQ"
            title="Edwin Isotu keynote reel"
          />
        </FadeInOnScroll>
      </Section>

      <Section>
        <FadeInOnScroll variant="fade-up">
          <SectionHeading
            eyebrow="Books"
            title="Ideas that outlast the keynote"
            description="Three books on turning strategy into daily execution."
          />
        </FadeInOnScroll>
        {isLoading ? (
          <div className="mt-10">
            <LoadingState variant="cards" count={3} />
          </div>
        ) : (
          <StaggerChildren className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BOOKS.map((book) => (
              <BookCard key={book.title} cover={BOOK_COVER} purchaseHref="/books" {...book} />
            ))}
          </StaggerChildren>
        )}
      </Section>

      <Section tone="primary">
        <FadeInOnScroll variant="fade-up">
          <SectionHeading
            invert
            eyebrow="Impact"
            title="The numbers behind the stage time"
            description="Every keynote is measured the same way Edwin asks teams to measure their own work."
          />
        </FadeInOnScroll>
        {isLoading ? (
          <div className="mt-12">
            <LoadingState variant="stats" />
          </div>
        ) : (
          <StaggerChildren
            className="mt-12 grid gap-8 sm:grid-cols-3"
            step={100}
          >
            <StatsCard invert value={250} suffix="+" label="Keynotes delivered" />
            <StatsCard invert value={40} suffix="k+" label="Leaders trained" />
            <StatsCard invert value={98} suffix="%" label="Would rebook" />
          </StaggerChildren>
        )}
      </Section>

      <Section>
        <FadeInOnScroll variant="fade-up">
          <SectionHeading eyebrow="Testimonials" title="What leaders say afterward" />
        </FadeInOnScroll>
        <FadeInOnScroll variant="fade" delay={100}>
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </FadeInOnScroll>
      </Section>

      <Section tone="muted">
        <FadeInOnScroll variant="fade">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            As featured in
          </p>
          <LogoStrip className="mt-8" logos={pressLogos} />
        </FadeInOnScroll>
      </Section>

      <Section>
        <FadeInOnScroll variant="fade-up">
          <SectionHeading
            eyebrow="Insights"
            title="Latest articles"
            description="Short, specific writing on leadership and execution."
          />
        </FadeInOnScroll>
        {isLoading ? (
          <div className="mt-10">
            <LoadingState variant="cards" count={3} />
          </div>
        ) : (
          <StaggerChildren className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {RECENT_ARTICLES.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </StaggerChildren>
        )}
      </Section>

      <Section tone="muted">
        <FadeInOnScroll variant="fade-up">
          <SectionHeading align="center" eyebrow="FAQ" title="Before you book" className="mx-auto text-center" />
          <div className="mx-auto mt-10 max-w-2xl">
            <Accordion items={FAQS} />
          </div>
        </FadeInOnScroll>
      </Section>

      <Section>
        <FadeInOnScroll variant="scale">
          <CTABanner
            eyebrow="Book Edwin"
            title="Ready to bring momentum to your next event?"
            description="Check availability and get a response within one business day."
            primaryAction={{ label: 'Check availability', href: '/contact' }}
            secondaryAction={{ label: 'Download media kit', href: '/media' }}
          />
        </FadeInOnScroll>
      </Section>
    </>
  );
}

export default Home;