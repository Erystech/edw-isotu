import {Section } from '../../components/layout';
import { CTABanner } from '../../components/misc';
import {
  Hero,
  Overview,
  TargetAudience,
} from '../../components/sections/mentorship/executive-masterclass';
import MasterclassImg from '../../assets/images/high-level-strategy.webp';
import { PageMeta } from '../../components/meta/PageMeta';

function ExecutiveMasterclass() {
  return (
    <>
      <PageMeta 
        title="Executive Masterclass" 
        description="Transform your leadership skills with Edwin Isotu's Executive Masterclass." 
        url="/mentorship/executive-masterclass" 
      />
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