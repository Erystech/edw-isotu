import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../../misc/SectionHeading';

/**
 * WhyEdwin
 * Credibility checklist. Pulled out of the generic <li> pattern used
 * on the About page's Research section so it can carry an icon and
 * sit in a two-column layout here.
 *
 * @param {string[]} points
 */
export default function WhyEdwin({ eyebrow, title, description, points = [] }) {
  return (
    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <ul className="flex flex-col gap-5">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 shrink-0 text-[var(--color-accent-light)]"
              size={20}
              aria-hidden="true"
            />
            <span className="text-sm leading-relaxed text-[var(--color-text)] lg:text-base">
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}