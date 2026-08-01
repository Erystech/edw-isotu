import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Section, Container } from '../components/layout';
import { Breadcrumb, SectionHeading } from '../components/misc';
import { Badge } from '../components/ui';
import { Label } from '../components/typography';
import { ArticleContent } from '../components/blocks';
import { ArticleGrid } from '../components/sections/articles';
import { LoadingState } from '../components/states';
import { getArticleBySlug, getRelatedArticles } from '../components/data/articles';
import { formatDate } from '../lib/FormatDate';
import { FadeInOnScroll } from '../components/animations';

function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Scroll to top on article navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsLoading(true);

    // Simulating a network request for the article
    const timer = setTimeout(() => {
      const fetchedArticle = getArticleBySlug(slug);
      if (fetchedArticle) {
        setArticle(fetchedArticle);
      } else {
        setNotFound(true);
      }
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [slug]);

  if (notFound) {
    return <Navigate to="/articles" replace />;
  }

  if (isLoading || !article) {
    return (
      <Container className="pb-14 pt-36 lg:pb-20 lg:pt-44">
        <LoadingState variant="detail" />
      </Container>
    );
  }

  const related = getRelatedArticles(article.slug, article.category, 3);

  return (
    <>
      {/* Text-first header (Image and overlays stripped) */}
      <header>
        <Container className="pb-14 pt-36 lg:pb-20 lg:pt-44">
          <FadeInOnScroll variant="fade-up">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/articles' },
              { label: article.title },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <Badge tone="accent">{article.category}</Badge>

            <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-extrabold leading-tight text-[var(--color-primary)] lg:text-5xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]">
              {article.subtitle}
            </p>

            <Label as="p" className="mt-8 text-[var(--color-text-muted)] normal-case tracking-normal">
              {article.author} · {formatDate(article.publishedDate)} ·{' '}
              {article.readTime} min read
            </Label>
          </div>
          </FadeInOnScroll>
        </Container>
      </header>

      {/* Article body */}
      <Section>
        <div className="mx-auto max-w-2xl">
          <ArticleContent content={article.content} />
        </div>
      </Section>

      {/* Related articles */}
      {related.length > 0 && (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Continue Reading"
            title="Related articles"
          />
          <div className="mt-10">
            <ArticleGrid articles={related} />
          </div>
        </Section>
      )}
    </>
  );
}

export default ArticleDetail;