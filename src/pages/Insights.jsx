import { useState, useEffect } from 'react';
import { Section } from '../components/layout';
import { SectionHeading, NewsletterSignup, SocialLinks } from '../components/misc';
import { Hero } from '../components/sections';
import { ArticleCard, MediaCategoryCard } from '../components/cards';
import QuoteCarousel from '../components/misc/QuoteCarousel';
import { LoadingState, EmptyState } from '../components/states';
import { FadeInOnScroll, StaggerChildren } from '../components/animations';
import { QUOTES } from '../components/data/Quotes';
import HeroImg from '../assets/images/high-level-strategy.webp';
import PodcastImg from '../assets/images/isotu-smile.webp';
import InterviewImg from '../assets/images/int1.webp';
import ArticleImg from '../assets/images/field-work-mobile.webp';
import { articles as initialArticles } from '../components/data/articles';

const HERO_IMAGE = HeroImg;
const BOOK_COVER = 'https://placehold.co/600x800/0B132B/FFFFFF?text=Cover';

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

const RECENT_ARTICLES = [...initialArticles]
  .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
  .slice(0, 3);

function Insights() {
  const [categories, setCategories] = useState(null);
  const [recentArticles, setRecentArticles] = useState(null);

  useEffect(() => {
    // Simulating data fetching for dynamic sections
    const timer = setTimeout(() => {
      setCategories(CATEGORIES);
      setRecentArticles(RECENT_ARTICLES);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero
        eyebrow="Insights"
        title="Podcasts, interviews, books, and quotes."
        description="A curated trove of ideas from two decades in public health, environmental sustainability, and leadership — for anyone pursuing career growth and transformational leadership."
        image={HERO_IMAGE}
      />

      <Section>
        <FadeInOnScroll variant="fade-up">
          <SectionHeading
            eyebrow="Wisdom Quotes"
            title="Words to guide the next decision"
            description="A running collection of Dr. Isotu's own reflections on leadership, resilience, Africa, and the environment."
          />
        </FadeInOnScroll>
        <FadeInOnScroll variant="fade" delay={100}>
          <QuoteCarousel quotes={QUOTES} />
        </FadeInOnScroll>
      </Section>

      <Section tone="muted">
        <FadeInOnScroll variant="fade-up">
          <SectionHeading
            eyebrow="Explore"
            title="Go deeper"
            description="Four ways to spend more time with the ideas above."
          />
        </FadeInOnScroll>
        {categories === null ? (
          <div className="mt-10">
            <LoadingState variant="cards" count={4} />
          </div>
        ) : categories.length === 0 ? (
          <div className="mt-10">
            <EmptyState variant="media" />
          </div>
        ) : (
          <StaggerChildren className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <MediaCategoryCard key={category.title} {...category} />
            ))}
          </StaggerChildren>
        )}
      </Section>

      <Section id="articles" className="scroll-mt-24">
        <FadeInOnScroll variant="fade-up">
          <SectionHeading
            eyebrow="Articles & Blog"
            title="Latest articles"
            description="Short, specific writing on leadership and execution."
          />
        </FadeInOnScroll>
        {recentArticles === null ? (
          <div className="mt-10">
            <LoadingState variant="cards" count={3} />
          </div>
        ) : recentArticles.length === 0 ? (
          <div className="mt-10">
            <EmptyState variant="articles" />
          </div>
        ) : (
          <StaggerChildren className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </StaggerChildren>
        )}
      </Section>

      <Section tone="muted">
        <FadeInOnScroll variant="fade-up">
          <SectionHeading
            align="center"
            eyebrow="Stay Connected"
            title="Follow the conversation"
            className="mx-auto text-center"
          />
          <div className="mt-8 flex justify-center">
            <SocialLinks />
          </div>
        </FadeInOnScroll>
      </Section>

      <Section>
        <FadeInOnScroll variant="fade-up">
          <NewsletterSignup />
        </FadeInOnScroll>
      </Section>
    </>
  );
}

export default Insights;