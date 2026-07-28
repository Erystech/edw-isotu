import { useState, useEffect } from 'react';
import { LoadingState, ErrorState } from '../components/states';
import { Section } from '../components/layout';
import { ArticlesHero, ArticleGrid } from '../components/sections/articles';
import { articles as initialArticles } from '../components/data/articles';

function Articles() {
  const [articlesList, setArticlesList] = useState(null); // null = loading
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulating a network request to demonstrate loading states
    const fetchArticles = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setArticlesList(initialArticles);
      } catch (err) {
        setError(true);
      }
    };
    fetchArticles();
  }, []);

  if (error) {
    return <ErrorState full />;
  }

  return (
    <>
      <ArticlesHero />

      <Section>
        {articlesList === null ? (
          <LoadingState variant="article" />
        ) : (
          <ArticleGrid articles={articlesList} />
        )}
      </Section>
    </>
  );
}

export default Articles;