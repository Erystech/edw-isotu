import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '../../lib/cn';

const markdownComponents = {
  h1: ({ ...p }) => (
    <h1
      className="mt-2 mb-6 font-[var(--font-heading)] text-4xl font-extrabold text-[var(--color-primary)] lg:text-5xl"
      {...p}
    />
  ),
  h2: ({ ...p }) => (
    <h2
      className="mt-12 mb-5 font-[var(--font-heading)] text-2xl font-extrabold text-[var(--color-primary)] lg:text-3xl"
      {...p}
    />
  ),
  h3: ({ ...p }) => (
    <h3
      className="mt-8 mb-4 font-[var(--font-heading)] text-xl font-bold text-[var(--color-primary)] lg:text-2xl"
      {...p}
    />
  ),
  p: ({ ...p }) => (
    <p className="mb-6 text-base leading-relaxed text-[var(--color-text)] lg:text-lg" {...p} />
  ),
  strong: ({ ...p }) => (
    <strong className="font-semibold text-[var(--color-primary)]" {...p} />
  ),
  blockquote: ({ ...p }) => (
    <blockquote
      className="my-8 border-l-2 border-[var(--color-accent-light)] pl-6 text-lg font-medium italic text-[var(--color-text-muted)]"
      {...p}
    />
  ),
  ul: ({ ...p }) => (
    <ul className="mb-6 flex flex-col gap-2 pl-5 text-[var(--color-text)] marker:text-[var(--color-accent-light)]" style={{ listStyleType: 'disc' }} {...p} />
  ),
  ol: ({ ...p }) => (
    <ol className="mb-6 flex flex-col gap-2 pl-5 text-[var(--color-text)] marker:text-[var(--color-accent-light)] marker:font-semibold" style={{ listStyleType: 'decimal' }} {...p} />
  ),
  li: ({ ...p }) => <li className="pl-1 leading-relaxed" {...p} />,
  a: ({ ...p }) => (
    <a
      className="font-medium text-[var(--color-accent-light)] underline underline-offset-4 transition-colors hover:text-[var(--color-accent-hover)]"
      target="_blank"
      rel="noopener noreferrer"
      {...p}
    />
  ),
  code: ({ inline, className: codeClassName, children, ...p }) =>
    inline ? (
      <code
        className="rounded-[var(--radius-xs)] bg-[var(--color-surface-elevated)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--color-accent-light)]"
        {...p}
      >
        {children}
      </code>
    ) : (
      <code className="font-mono text-sm text-[var(--color-text)]" {...p}>
        {children}
      </code>
    ),
  pre: ({ ...p }) => (
    <pre
      className="my-6 overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5"
      {...p}
    />
  ),
  // Enforcing text-first: completely strip any images parsed from markdown
  img: () => null,
  hr: () => <hr className="my-10 border-[var(--color-border)]" />,
  table: ({ ...p }) => (
    <div className="my-8 overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border)]">
      <table className="w-full border-collapse text-sm" {...p} />
    </div>
  ),
  thead: ({ ...p }) => <thead className="bg-[var(--color-surface-elevated)]" {...p} />,
  th: ({ ...p }) => (
    <th className="border-b border-[var(--color-border)] px-4 py-3 text-left font-semibold text-[var(--color-primary)]" {...p} />
  ),
  td: ({ ...p }) => (
    <td className="border-b border-[var(--color-border)] px-4 py-3 text-[var(--color-text-muted)]" {...p} />
  ),
};

/**
 * ArticleContent
 * Renders raw markdown (from the `content` field on an article record)
 * using the site's existing typography tokens rather than Tailwind's
 * `prose` plugin, so it stays visually consistent with the rest of
 * the design system without adding a new dependency.
 */
export default function ArticleContent({ content, className, ...props }) {
  return (
    <div className={cn('flex flex-col', className)} {...props}>
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {content}
      </Markdown>
    </div>
  );
}