import { Navbar, Footer, Section } from '../components/layout';
import { SectionHeading, NewsletterSignup, SocialLinks } from '../components/misc';
import { Hero } from '../components/sections';
import { BlogCard, MediaCategoryCard } from '../components/cards';
import QuoteCarousel from '../components/misc/QuoteCarousel';
import { QUOTES } from '../components/data/Quotes';
import HeroImg from '../assets/images/high-level-strategy.webp';
import PodcastImg from '../assets/images/isotu-smile.webp';
import InterviewImg from '../assets/images/int1.webp';
import ArticleImg from '../assets/images/field-work-mobile.webp';

const HERO_IMAGE = HeroImg;
const BOOK_COVER = 'https://placehold.co/600x800/0B132B/FFFFFF?text=Cover';
const BLOG_THUMB = 'https://placehold.co/800x450/16324F/FFFFFF?text=Insight';

// Sourced from the live site's /insights hub tiles.
const PODCAST_URL = 'https://youtube.com/profIsotu';
const INTERVIEWS_URL = 'https://youtube.com/profIsotu';

const CATEGORIES = [
  {
    image: PodcastImg,
    title: 'Podcasts',
    description: 'Conversations on leadership, health, and sustainability.',
    href: PODCAST_URL,
    external: true,
  },
  {
    image: InterviewImg,
    title: 'Interviews',
    description: 'Sit-down conversations with industry leaders and visionaries.',
    href: INTERVIEWS_URL,
    external: true,
  },
  {
    image: BOOK_COVER,
    title: 'Books',
    description: 'The Momentum Principle and the rest of the collection.',
    href: '/books',
  },
  {
    image: ArticleImg,
    title: 'Articles & Blog',
    description: 'Short, specific writing on execution and public health.',
    href: '/articles',
  },
];

// Placeholder — duplicated from Home's featured-articles data until a
// shared content source exists. Swap for real Insights-specific
// articles (and centralize) during the content pass.
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

function Insights() {
  return (
    <>
      <Navbar transparent />

      <Hero
        eyebrow="Insights"
        title="Podcasts, interviews, books, and quotes."
        description="A curated trove of ideas from two decades in public health, environmental sustainability, and leadership \u2014 for anyone pursuing career growth and transformational leadership."
        image={HERO_IMAGE}
      />

      <Section>
        <SectionHeading
          eyebrow="Wisdom Quotes"
          title="Words to guide the next decision"
          description="A running collection of Dr. Isotu's own reflections on leadership, resilience, Africa, and the environment."
        />
        <QuoteCarousel quotes={QUOTES} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Explore"
          title="Go deeper"
          description="Four ways to spend more time with the ideas above."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <MediaCategoryCard key={category.title} {...category} />
          ))}
        </div>
      </Section>

      <Section id="articles" className="scroll-mt-24">
        <SectionHeading
          eyebrow="Articles & Blog"
          title="Latest articles"
          description="Short, specific writing on leadership and execution."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
           {ARTICLES.map((article) => (
              <BlogCard key={article.title} image={BLOG_THUMB} href="/articles" {...article} />
            ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          align="center"
          eyebrow="Stay Connected"
          title="Follow the conversation"
          className="mx-auto text-center"
        />
        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>
      </Section>

      <Section>
        <NewsletterSignup />
      </Section>
      <Footer />
    </>
  );
}

export default Insights;