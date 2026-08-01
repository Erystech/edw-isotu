import { useState, useEffect } from 'react';
import { Section } from '../components/layout';
import { SectionHeading } from '../components/misc';
import { BookCard } from '../components/cards';
import { FeaturedBook } from '../components/sections/books';
import { LoadingState, EmptyState } from '../components/states';
import { FadeInOnScroll, StaggerChildren } from '../components/animations';
import { PageMeta } from '../components/meta/PageMeta';

const BOOK_COVER = 'https://placehold.co/600x800/0B132B/FFFFFF?text=Cover';

const FEATURED_BOOK = {
  badge: 'Bestseller',
  cover: BOOK_COVER,
  title: 'The Momentum Principle',
  tagline: 'How leaders turn strategy into daily action.',
  description: [
    'Most strategies fail quietly — not in the boardroom, but in the six weeks after the offsite, when the plan on the slide meets the reality of a full calendar. The Momentum Principle is a field guide for the leaders responsible for closing that gap.',
    'Drawing on two decades of work with teams under real operational pressure, Edwin Isotu lays out a small set of daily habits that compound into lasting execution — without adding another framework to an already-crowded planning cycle.',
    'Written for operators, not theorists: every chapter ends with a single practice a team can start using the next morning.',
  ],
  details: [
    { label: 'Pages', value: '312' },
    { label: 'Published', value: '2024' },
    { label: 'Format', value: 'Hardcover, eBook, Audio' },
    { label: 'Publisher', value: 'Northbridge Press' },
  ],
  purchaseLinks: [
    { label: 'Bookshop.org', href: '#', primary: true  },
  ],
};

const OTHER_BOOKS = [
  {
    title: 'Quiet Authority',
    tagline: 'Leading without needing the room’s attention.',
    cover: BOOK_COVER,
  },
  {
    title: 'The Trust Ledger',
    tagline: 'What teams actually owe each other to move fast.',
    cover: BOOK_COVER,
  },
  {
    title: 'The Clarity Habit',
    tagline: 'A daily practice for cutting through noisy priorities.',
    cover: BOOK_COVER,
    badge: 'New',
  },
];

function Books() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    // Simulating data fetch for the grid
    const timer = setTimeout(() => {
      setBooks(OTHER_BOOKS);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageMeta 
        title="Books" 
        description="Explore books authored by Edwin Isotu, offering deep insights into public health systems and leadership." 
        url="/books" 
      />
      <Section id="featured-book" className="mt-12">
        <FadeInOnScroll variant="fade-up">
          <FeaturedBook {...FEATURED_BOOK} />
        </FadeInOnScroll>
      </Section>

      <Section tone="muted">
        <FadeInOnScroll variant="fade-up">
          <SectionHeading
            eyebrow="More from Edwin"
            title="The rest of the collection"
            description="Each book stands alone — pick the one that matches the problem in front of you."
          />
        </FadeInOnScroll>
        
        {books === null ? (
          <div className="mt-10">
            <LoadingState variant="cards" count={3} />
          </div>
        ) : books.length === 0 ? (
          <div className="mt-10">
            <EmptyState variant="books" />
          </div>
        ) : (
          <StaggerChildren className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <BookCard key={book.title} purchaseHref="#" {...book} />
            ))}
          </StaggerChildren>
        )}
      </Section>
    </>
  );
}

export default Books;