import Timeline from '../about/Timeline';

/**
 * BookingProcess
 * Reuses the About page's Timeline component. Booking steps are a
 * true sequence (each step depends on the last), so the same
 * rail-and-dot treatment used for career history applies here —
 * "Step 1/2/3" passed into the existing `year` slot.
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
    <div className="max-w-2xl">
      <Timeline items={items} />
    </div>
  );
}