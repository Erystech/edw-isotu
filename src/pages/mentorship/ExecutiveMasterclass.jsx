import {Section } from '../../components/layout';
import { CTABanner } from '../../components/misc';
import {
  Hero,
  Overview,
  TargetAudience,
} from '../../components/sections/mentorship/executive-masterclass';
import MasterclassImg from '../../assets/images/high-level-strategy.webp';

function ExecutiveMasterclass() {
  return (
    <>
      <Hero />
      <Overview image={MasterclassImg} />
      <TargetAudience />

      <Section>
        <CTABanner
          eyebrow="Limited Spots"
          title="Ready to elevate your leadership?"
          description="Custom masterclasses tailored to your organization's needs. Reach out to check dates and availability."
          primaryAction={{ label: 'Register Now', href: '/contact' }}
          secondaryAction={{ label: 'Schedule a Consultation', href: '/contact' }}
        />
      </Section>
    </>
  );
}

export default ExecutiveMasterclass;