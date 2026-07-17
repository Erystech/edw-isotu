import Section from '../../../layout/Section';
import SectionHeading from '../../../misc/SectionHeading';
import Paragraph from '../../../typography/Paragraph';

export default function AGSModel({ image }) {
  return (
    <Section tone="muted">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="The Clearlift AGS Model"
            title="Lifting ordinary Africans to extraordinary results"
          />
          <div className="mt-6 flex flex-col gap-4">
            <Paragraph tone="muted" size="md">
              With the Clearlift AGS model, we lift ordinary Africans with
              potential to do extraordinary things — achieving results that
              fulfil each mentee's life goals within a 3-year cycle.
            </Paragraph>
            <Paragraph tone="muted" size="md">
              The program is inspired by the vision of raising one million
              excellent and visionary African leaders and professionals,
              irrespective of nation, tribe, or tongue, in support of the
              African Union's Agenda 2063: "The Africa We Want."
            </Paragraph>
            <Paragraph tone="muted" size="md">
              We believe effective professionalism, leadership, and
              entrepreneurship are the cornerstones of Africa's sustainable
              growth — a united, healthy, and productive continent, driven
              by its own citizens.
            </Paragraph>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <img
            src={image}
            alt="Dr. Edwin Isotu mentoring a group of emerging leaders"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}