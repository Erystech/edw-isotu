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

  // Scroll to top on article navigation (e.g. clicking a related article
  // while already on a detail page keeps the same route shape).
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

      {/* Featured image hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden lg:min-h-[80vh]">
        <img
          src={article.featuredImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-[var(--color-background)]/70"
          aria-hidden="true"
        />

        <Container className="relative z-10 pb-14 pt-40 lg:pb-20 lg:pt-48">
          <Breadcrumb
            invert
            items={[
              { label: 'Home', href: '/' },
              { label: 'Articles', href: '/articles' },
              { label: article.title },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <Badge tone="accent">{article.category}</Badge>

            <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-extrabold leading-tight text-white lg:text-5xl">
              {article.title}
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-white/75">
              {article.subtitle}
            </p>

            <Label as="p" className="mt-6 text-white/60 normal-case tracking-normal">
              {article.author} · {formatDate(article.publishedDate)} ·{' '}
              {article.readTime} min read
            </Label>
          </div>
        </Container>
      </section>

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