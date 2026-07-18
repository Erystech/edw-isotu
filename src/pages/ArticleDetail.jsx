import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Navbar, Footer, Section, Container } from '../components/layout';
import { Breadcrumb, SectionHeading } from '../components/misc';
import { Badge } from '../components/ui';
import { Label } from '../components/typography';
import { ArticleContent } from '../components/blocks';
import { ArticleGrid } from '../components/sections/articles';
import { getArticleBySlug, getRelatedArticles } from '../components/data/articles';
import { formatDate } from '../lib/formatDate';

function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  // Scroll to top on article navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const related = getRelatedArticles(article.slug, article.category, 3);

  return (
    <>
      <Navbar transparent />

      {/* Text-first header (Image and overlays stripped) */}
      <header>
        <Container className="pb-14 pt-36 lg:pb-20 lg:pt-44">
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

      <Footer />
    </>
  );
}

export default ArticleDetail;