import {
  Hero,
  AGSModel,
  HubGrid,
  ImpactStats,
  ProgramBenefits,
  HowToParticipate,
  MentorRecruitment,
  FAQ,
} from '../../components/sections/mentorship/clearlift-africa';

import MentorshipHeroImg from '../../assets/images/isotu-mentorship.webp';
import EnvironmentImg from '../../assets/images/field-work-mobile.webp';
import CareerImg from '../../assets/images/int1.webp';
import LeadershipImg from '../../assets/images/isotu-smile.webp';
import { PageMeta } from '../../components/meta/PageMeta';

function ClearLiftAfricaMentorship() {
  return (
    <>
      <PageMeta 
        title="Clearlift Africa Mentorship" 
        description="Join the Clearlift Africa Mentorship program. Empowering the next generation of African leaders in health and sustainability." 
        url="/mentorship/clearlift-africa" 
      />
      <Hero />
      <AGSModel image={MentorshipHeroImg} />
      <HubGrid
        images={{
          environment: EnvironmentImg,
          career: CareerImg,
          leadership: LeadershipImg,
        }}
      />
      <ImpactStats />
      <ProgramBenefits />
      <HowToParticipate />
      <MentorRecruitment />
      <FAQ />
    </>
  );
}

export default ClearLiftAfricaMentorship;