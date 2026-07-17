import { Navbar, Footer, Section } from '../components/layout';
import { ArticlesHero, ArticleGrid } from '../components/sections/articles';
import { articles } from '../components/data/articles';

function Articles() {
  return (
    <>
      <Navbar transparent />

      <ArticlesHero />

      <Section>
        <ArticleGrid articles={articles} />
      </Section>

      <Footer />
    </>
  );
}

export default Articles;