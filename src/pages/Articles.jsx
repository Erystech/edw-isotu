import { Section } from '../components/layout';
import { ArticlesHero, ArticleGrid } from '../components/sections/articles';
import { articles } from '../components/data/articles';

function Articles() {
  return (
    <>

      <ArticlesHero />

      <Section>
        <ArticleGrid articles={articles} />
      </Section>

    </>
  );
}

export default Articles;