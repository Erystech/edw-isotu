import Timeline from '../about/Timeline';
import { FadeInOnScroll } from '../../animations';

/**
 * BookingProcess
 * Reuses the About page's Timeline component. Booking steps are a
 * true sequence (each step depends on the last)
 *
 * @param {{ step: string, title: string, description: string }[]} steps
 */
export default function BookingProcess({ steps = [] }) {
  const items = steps.map((step) => ({
    year: step.step,
    title: step.title,
    description: step.description,
  }));

  return (
    <FadeInOnScroll variant="fade-up" className="max-w-2xl">
      <Timeline items={items} />
    </FadeInOnScroll>
  );
}