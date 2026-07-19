
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

function ClearLiftAfricaMentorship() {
  return (
    <>
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