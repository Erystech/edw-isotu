import { cn } from '../../lib/cn';
import Container from './Container';

/**
 * Section
 * Wraps a homepage/page section with consistent vertical padding
 * (uses --spacing-section from the theme), optional background
 * treatment, and an id for in-page navigation / anchor links.
 *
 * @param {'plain'|'muted'|'primary'} tone
 */
const tones = {
  plain: '',
  muted: 'bg-[var(--color-surface)] border-y border-[var(--color-border)]',
  /* 
    Refactored Primary Tone:
    Replaced the broken white background with your dark accent color. 
    This creates a rich, distinct section that seamlessly supports light text.
  */
  primary: 'bg-[var(--color-accent)] text-[var(--color-text)]',
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