import React from 'react';
import LegalLayout, {
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalContact,
} from './LegalLayout';

/**
 * Privacy — Privacy Policy page
 *
 * PLACEHOLDER — legally sound structure and standard clauses.
 * Must be reviewed and approved by a qualified solicitor before
 * the site goes live. All [BRACKETED] values require client input.
 *
 * Route: /privacy
 */

/* ─── Client-edit constants ──────────────────
   Replace these before going live.
   ─────────────────────────────────────────── */
const SITE_NAME    = 'Edwin Isotu';
const SITE_URL     = 'https://edwinisotu.com';
const CONTACT_EMAIL = 'privacy@edwinisotu.com';
const CONTACT_ADDR  = '[Registered business address — to be confirmed]';
const EFFECTIVE_DATE = '1 July 2025';

const Privacy = () => {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={EFFECTIVE_DATE}>

      <LegalSection heading="Overview">
        <LegalParagraph>
          {SITE_NAME} ("{SITE_NAME}", "we", "us", or "our") operates {SITE_URL}.
          This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website or contact us directly.
          Please read this policy carefully. If you disagree with its terms,
          please discontinue use of the site.
        </LegalParagraph>
        <LegalParagraph>
          We reserve the right to make changes to this Privacy Policy at any time
          and for any reason. We will alert you about any changes by updating the
          "Last updated" date at the top of this page. You are encouraged to
          review this Privacy Policy periodically to stay informed of updates.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <LegalParagraph>
          We may collect information about you in a variety of ways depending on
          how you interact with our site. The categories of information we collect
          include:
        </LegalParagraph>
        <LegalList
          items={[
            'Personal identification information — name, email address, phone number, and similar identifiers you provide when submitting an inquiry or booking request.',
            'Usage data — information your browser sends automatically, including your IP address, browser type and version, pages visited, time and date of visit, and referring URLs.',
            'Communications — the content of messages you send us via the contact form or by email, including any attachments.',
            'Newsletter subscription data — email address and subscription preferences if you opt in to receive our newsletter.',
          ]}
        />
      </LegalSection>

      <LegalSection heading="How we use your information">
        <LegalParagraph>
          We use the information we collect for the following purposes:
        </LegalParagraph>
        <LegalList
          items={[
            'To respond to inquiries and booking requests you submit through the site.',
            'To send administrative communications such as booking confirmations or programme information.',
            'To send periodic newsletters and updates if you have opted in — you may unsubscribe at any time.',
            'To analyse site usage and improve the performance, content, and usability of the website.',
            'To comply with applicable laws and regulations.',
          ]}
        />
        <LegalParagraph>
          We do not sell, trade, or otherwise transfer your personal information to
          third parties for marketing purposes.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Legal basis for processing (GDPR)">
        <LegalParagraph>
          If you are located in the European Economic Area (EEA) or the United
          Kingdom, our legal bases for collecting and using the personal information
          described above depend on the information concerned and the context in
          which we collect it:
        </LegalParagraph>
        <LegalList
          items={[
            'Contract — processing is necessary to respond to your inquiry or fulfil a booking request.',
            'Legitimate interests — we have a legitimate interest in improving our services and communicating with people who have expressed interest in our work.',
            'Consent — where we rely on consent (e.g. newsletter), you may withdraw it at any time by contacting us.',
            'Legal obligation — where processing is necessary to comply with a legal obligation.',
          ]}
        />
      </LegalSection>

      <LegalSection heading="Cookies and tracking technologies">
        <LegalParagraph>
          We may use cookies, web beacons, and similar tracking technologies to
          analyse trends, administer the website, and gather demographic information
          about our user base as a whole. You can control the use of cookies at the
          individual browser level.
        </LegalParagraph>
        <LegalParagraph>
          Where required by applicable law, we will obtain your consent before
          placing non-essential cookies on your device. A cookie consent banner
          will be displayed on your first visit where required.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Third-party services">
        <LegalParagraph>
          We may use third-party service providers to help operate our website or
          administer services on our behalf. These parties have access to your
          personal information only to perform specific tasks and are obligated not
          to disclose or use it for any other purpose. Third-party services we may
          use include:
        </LegalParagraph>
        <LegalList
          items={[
            'Analytics providers (e.g. Google Analytics) to understand how visitors use the site.',
            'Email service providers to send newsletters and inquiry responses.',
            'Hosting and infrastructure providers.',
            'Payment processors for any paid products or programmes — we do not store payment card information on our servers.',
          ]}
        />
      </LegalSection>

      <LegalSection heading="Data retention">
        <LegalParagraph>
          We retain personal information for as long as necessary to fulfil the
          purposes outlined in this Privacy Policy, unless a longer retention period
          is required or permitted by law. Inquiry and booking data is typically
          retained for up to 3 years. You may request deletion of your data at any
          time by contacting us.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Your rights">
        <LegalParagraph>
          Depending on your location, you may have the following rights with respect
          to your personal data:
        </LegalParagraph>
        <LegalList
          items={[
            'Right of access — request a copy of the personal data we hold about you.',
            'Right to rectification — request correction of inaccurate or incomplete data.',
            'Right to erasure — request deletion of your personal data in certain circumstances.',
            'Right to restrict processing — request that we limit how we use your data.',
            'Right to data portability — request a machine-readable copy of your data.',
            'Right to object — object to processing based on legitimate interests or for direct marketing.',
            'Rights related to automated decision-making — we do not engage in automated profiling that produces legal or similarly significant effects.',
          ]}
        />
        <LegalParagraph>
          To exercise any of these rights, please contact us using the details
          below. We will respond to all legitimate requests within 30 days.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Security">
        <LegalParagraph>
          We implement commercially reasonable technical and organisational measures
          to protect your personal information from unauthorised access, use, or
          disclosure. However, no method of transmission over the internet or method
          of electronic storage is 100% secure. While we strive to use commercially
          acceptable means to protect your personal information, we cannot guarantee
          its absolute security.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Children's privacy">
        <LegalParagraph>
          Our website is not directed to individuals under the age of 16. We do not
          knowingly collect personal information from children. If you believe we
          have inadvertently collected information from a child, please contact us
          immediately so we can delete it.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Contact us">
        <LegalParagraph>
          If you have questions or concerns about this Privacy Policy or our data
          practices, please contact us:
        </LegalParagraph>
        <LegalContact email={CONTACT_EMAIL} address={CONTACT_ADDR} />
      </LegalSection>

    </LegalLayout>
  );
};

export default Privacy;