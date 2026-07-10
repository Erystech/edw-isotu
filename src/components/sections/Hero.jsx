import { ArrowRight, Play } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Heading from '../typography/Heading';
import Paragraph from '../typography/Paragraph';
import AnimatedCounter from '../misc/AnimatedCounter';

/**
 * Hero
 * Full-bleed image hero designed to sit under a transparent fixed
 * Navbar. Deliberately bypasses <Section> — it needs edge-to-edge
 * imagery rather than the standard container/padding rhythm.
 *
 * @param {{ label: string, value: number, prefix?: string, suffix?: string }[]} stats
 * @param {{ label: string, href: string }} primaryAction
 * @param {{ label: string, href: string }} secondaryAction
 */
export default function Hero({
  eyebrow,
  title,
  description,
  image,
  primaryAction,
  secondaryAction,
  stats = [],
}) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden lg:items-center">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      <Container className="relative z-10 pb-16 pt-40 lg:pb-28 lg:pt-48">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-light)]">
              {eyebrow}
            </p>
          )}

          <Heading as="h1" size="3xl" className="mt-4 text-white">
            {title}
          </Heading>

          <Paragraph size="lg" className="mt-6 max-w-xl text-white/80">
            {description}
          </Paragraph>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {primaryAction && (
              <Button href={primaryAction.href} size="lg">
                {primaryAction.label}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            )}
            {secondaryAction && (
              <Button
                href={secondaryAction.href}
                variant="ghost"
                size="lg"
                className="!text-white hover:!bg-white/10"
              >
                <Play size={16} aria-hidden="true" fill="currentColor" />
                {secondaryAction.label}
              </Button>
            )}
          </div>

          {stats.length > 0 && (
            <dl className="mt-16 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/15 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-[var(--font-heading)] text-3xl font-extrabold text-white">
                    {stat.prefix}
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </Container>
    </section>
  );
}