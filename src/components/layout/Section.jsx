import { cn } from '../../lib/cn';
import Container from './Container';

/**
 * Section
 * Wraps a homepage/page section with consistent vertical padding
 * (uses --spacing-section from the theme), optional background
 * treatment, and an id for in-page navigation / anchor links.
 *
 * @param {'plain'|'muted'|'primary'|'grid'} tone
 */
const tones = {
  plain: '',
  muted: 'bg-[var(--color-surface)]',
  primary: 'bg-[var(--color-primary)] text-white',
  grid: 'bg-grid',
};

export default function Section({
  id,
  tone = 'plain',
  containerSize = 'default',
  className,
  containerClassName,
  children,
  ...props
}) {
  return (
    <section id={id} className={cn(tones[tone], className)} {...props}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
