import { Navbar, Footer, Section } from '../components/layout';
import { Quote } from '../components/typography';
import { SectionHeading, CTABanner } from '../components/misc';
import { Hero } from '../components/sections';
import { BookCard, TestimonialCard } from '../components/cards';
import { FeaturedBook } from '../components/sections/books';

// Placeholder imagery/content — swap for the real title, cover art, and
// retailer links once available.
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
    { label: 'Amazon', href: '#', primary: true },
    { label: 'Barnes & Noble', href: '#' },
    { label: 'Apple Books', href: '#' },
    { label: 'Bookshop.org', href: '#' },
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
  return (
    <>
      <Navbar transparent />
      <Section id="featured-book" className="mt-12">
        <FeaturedBook {...FEATURED_BOOK} />
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="More from Edwin"
          title="The rest of the collection"
          description="Each book stands alone — pick the one that matches the problem in front of you."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {OTHER_BOOKS.map((book) => (
            <BookCard key={book.title} purchaseHref="#" {...book} />
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}

export default Books;