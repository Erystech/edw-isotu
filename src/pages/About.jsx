import { Navbar, Footer, Section } from '../components/layout';
import { StatsCard } from '../components/cards';
import { Heading, Paragraph } from '../components/typography';
import { SectionHeading, CTABanner } from '../components/misc';
import { Hero } from '../components/sections';
import { Timeline, AwardCard, PhotoGrid } from '../components/sections/about';
import HeroImg from '../assets/images/profile-banner.webp'
import BioImg from '../assets/images/about-main.webp'
import { Photos} from '../components/sections/about/index'

const HERO_IMAGE = HeroImg
const BIO_IMAGE = BioImg
const PHOTOS = Photos

const TIMELINE = [
  {
    year: '2004',
    title: 'Into the field',
    description:
      'Began two decades of technical and strategic work in public health and environmental sustainability, spanning governance, industry, academia, and humanitarian response.',
  },
  {
    year: '2015',
    title: 'From practice to mentorship',
    description:
      'Shifted focus toward developing other leaders, building the mentoring practice that would later reach hundreds of emerging public health and environmental experts.',
  },
  {
    year: '2021',
    title: 'Consultant of the Year',
    description:
      'Named Nigeria Health Sustainability Consultant of the Year — the first of two consecutive wins.',
  },
  {
    year: '2022',
    title: 'Second consecutive win',
    description: 'Repeated as Nigeria Health Sustainability Consultant of the Year.',
  },
  {
    year: 'Present',
    title: 'WHO PHE Programme Coordinator',
    description:
      'Coordinates the Public Health and Environment (PHE) Programme for the World Health Organization in Nigeria, as National Consultant.',
  },
];

const AWARDS = [
  {
    year: '2022',
    title: "Nigeria's Sustainability Health Consultant of the Year",
    issuer: 'CSR Reporters',
    featured: true,
  },
  {
    year: '2022',
    title: 'Special Facilitator Award — Public Health in a Changing World',
    issuer: 'University of Ibadan',
  },
  {
    year: '2022',
    title: 'Outstanding Keynote Speaker — The Earth and Pandemics, 5th IMGA Conference',
    issuer: 'IMGA',
  },
  {
    year: '2020',
    title: 'Healthcare Waste Management Champion Award',
    issuer: 'Bayelsa Medical University',
  },
  {
    year: '2019',
    title: 'Ministerial Outstanding Contributor Award — Health Aspects of the Minamata Convention',
    issuer: 'Federal Ministry of Health',
  },
  {
    year: '2018',
    title: 'Peace and Eco-Tourism Ambassador Award',
    issuer: 'Andoni Local Government Council / Obolo Entertainers',
  },
];

const RESEARCH_AREAS = [
  'Environmental health policy and governance',
  'Climate-resilient public health systems',
  'Leadership capacity-building in humanitarian health response',
  'PHE programme design, monitoring, and evaluation',
];



function About() {
  return (
    <>
      <Navbar transparent />

      <Hero
        title="BRIEF PROFILE"
        description="Two decades spent closing the gap between public health strategy and the people it's meant to serve."
        image={HERO_IMAGE}
      />

      <Section id="biography">
        <SectionHeading eyebrow="Biography" title="Two decades in public health and environmental sustainability" />
        <div className="mt-8 flex flex-col md:flex-row gap-16 lg:gap-20 max-w-7xl">
          <div className="flex flex-col gap-5 justify-between md:w-1/2">
            <Paragraph size="lg" className="text-accent-light font-semibold">
              Dr Edwin Isotu Edeh is a seasoned United Nation's global environmental health specialist, 
              keynote speaker and transformational leader with 18 years strategic and technical level experiences in 
              environmental - public health issues spanning across industry, academics and humanitarian spheres.
            </Paragraph>
            <Paragraph size="lg" tone="muted">
              He is an award-winning author of a classic 426 page book: ‘Environmental Health: Understanding Current Issues and
              Solutions of the 21st Century’ published in 2016, which is serving as a standard text in seven (7) African 
              universities including Mount Kenya University, Nairobi and Cavendish University, Kampala. He was a senior 
              lecturer at the Rivers State College of Health Science and Technology, Port Harcourt. Edwin-Isotu has 
              successfully led and managed impactful dozens of multisectoral health and environment projects and programs. 
              He coordinated the 3rd & 4 th Cycle implementation of United Nations Global Analysis and Assessment on 
              Sanitation and Drinking Water (GLASS) Initiative in 36 states of Nigeria in 2018 and 2022.
            </Paragraph>
            <Paragraph size="lg" tone="muted">
              In 2020, he coordinated the WHO/UNICEF/WSSCC supported WASH TRACKFIN Initiative – assessment and tracking 
              of financial inflows and investments into WASH Sector from 36 states covering household, government, private 
              sector and International NGOs sources in Nigeria Dr Edwin Isotu also coordinated a joint health sector - 
              WHO/Federal Ministry of Health (FMOH) public health assessments and awareness toward the National Action Plan
              (NAP) on Artisanal Small Scale Gold Mining (ASGM) in line with Minimata Conventions on Mercury. 
              He also facilitated Nigeria’s participation at global fora on Environmental Issues including the WHO 1st 
              International Conference on Air Pollution and Health in 2018 at Geneva, Switzerland.
            </Paragraph>
            <Paragraph size='lg' tone="muted">
              Rethinking 5G Technology and Health, In 2019 he facilitated at the first ITU ‘Digital African Week’ which 
              brought together policymakers and regulators, industry players and standardization experts to discuss Africa’s 
              actions in the interests of environmental sustainability. In May 2019, he led the 1st multisectoral One-Health 
              Environmental Response to Lassa Fever (LF) prevention and control in Nigeria for Nigeria Centre for Disease 
              Control (NCDC), Ministry of Environment (FMENV), Federal Ministry of Power, Works and Housing, and other 
              partners. He coordinated the establishment of a national coordination platform for safer management of the 
              Dead during COVID-19 , and pioneered the coordination of a One-Health environmental action for COVID-19, 
              Lassa Fever, yellow fever control and antimicrobial resistance (AMR). He contributed as an expert reviewer to 
              NESREA-led National Environment (HealthCare Waste) Regulation 2017 and other environmental policies in Nigeria.
            </Paragraph>
          </div>

          {/* Added 'justify-between' here as well to maintain perfect alignment */}
          <div className="flex flex-col gap-5 justify-between md:w-1/2">
            <img 
              src={BIO_IMAGE}
              alt="Dr. Edwin Isotu Edeh" 
              className="w-full h-auto rounded-xl object-cover"
            />
            <Paragraph size='lg' tone='muted'>
              In 2020, Dr. Edwin trained over 1800 experts on Infection Prevention and Control (IPC) and reached over 
              52,000 persons with WHO Handhygiene 
              Advocacy plates prior to the recording of 1st index case of COVID-19 in Nigeria on 27th February 2020.
            </Paragraph>
            <Paragraph size='lg' tone='muted'>
              He holds a Global Health and Humanitarianism certification of the University of Manchester, United Kingdom; 
              Interprofessional Health Informatics from University of Minnesota, United States; Doctor of Philosophy in 
              Environmental Management and Control, University of Nigeria; Masters of Science Degree in Geography and 
              Environmental Management from University of Port Harcourt; graduate studies in Environmental Health Technology 
              at Rivers State College of Health Science and Technology, Port Harcourt. He is Fellow of African Institute of 
              Public Health Professionals (AIPHP), a professional member of Nigerian Environmental Society (NES), EHORECON 
              licensed Environmental Health Professional, and an accredited Management Consultant of the International 
              Council of Management Consulting Institutes, Zurich.
            </Paragraph>
          </div>

        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Awards" title="Recognized for measurable impact" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {AWARDS.map((award) => (
            <AwardCard key={award.title + award.year} {...award} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="How the work took shape" />
        <div className="mt-10 max-w-2xl">
          <Timeline items={TIMELINE} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Mission"
          title="Momentum should outlast the room"
          description="Edwin's mission is to close the distance between strategy and the people it's meant to serve — training leaders who carry the work forward long after the keynote ends."
        />
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Research" title="Focus areas" />
        <ul className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {RESEARCH_AREAS.map((area) => (
            <li
              key={area}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-5 text-sm text-[var(--color-text)]"
            >
              {area}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="primary">
        <SectionHeading
          invert
          eyebrow="Impact"
          title="Measured the same way he asks teams to measure their own work"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <StatsCard invert value={350} suffix="+" label="Leaders mentored" />
          <StatsCard invert value={20} suffix="+" label="Years of experience" />
          <StatsCard invert value={2} suffix="x" label="Consultant of the Year" />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Photos" title="In the field and on stage" />
        <div className="mt-10">
          <PhotoGrid photos={PHOTOS} />
        </div>
      </Section>

      <Section>
        <CTABanner
          eyebrow="Book Edwin"
          title="Ready to bring this experience to your team?"
          description="Check availability and get a response within one business day."
          primaryAction={{ label: 'Check availability', href: '/contact' }}
          secondaryAction={{ label: 'Read his speaking topics', href: '/speaking' }}
        />
      </Section>

      <Footer />
    </>
  );
}

export default About;