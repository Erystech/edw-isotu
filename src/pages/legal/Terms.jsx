import React from 'react';
import LegalLayout, {
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalContact,
} from './LegalLayout';

/**
 * Terms — Terms of Service page
 *
 * PLACEHOLDER — legally sound structure and standard clauses.
 * Must be reviewed and approved by a qualified solicitor before
 * the site goes live. All [BRACKETED] values require client input.
 *
 * Route: /terms
 */

/* ─── Client-edit constants ──────────────────
   Replace these before going live.
   ─────────────────────────────────────────── */
const SITE_NAME     = 'Edwin Isotu';
const SITE_URL      = 'https://edwinisotu.com';
const CONTACT_EMAIL = 'legal@edwinisotu.com';
const CONTACT_ADDR  = '[Registered business address — to be confirmed]';
const GOVERNING_LAW = '[England and Wales / Nigeria — to be confirmed]';
const EFFECTIVE_DATE = '1 July 2025';

const Terms = () => {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={EFFECTIVE_DATE}>

      <LegalSection heading="Acceptance of terms">
        <LegalParagraph>
          By accessing or using {SITE_URL} (the "Site"), you agree to be bound by
          these Terms of Service ("Terms"). If you do not agree to all of these
          Terms, you are prohibited from using this Site and should discontinue
          use immediately.
        </LegalParagraph>
        <LegalParagraph>
          {SITE_NAME} reserves the right to update or modify these Terms at any
          time without prior notice. Your continued use of the Site following any
          changes constitutes your acceptance of the revised Terms.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Use of the site">
        <LegalParagraph>
          You may use this Site for lawful purposes only. By using the Site, you
          agree that you will not:
        </LegalParagraph>
        <LegalList
          items={[
            'Use the Site in any way that violates applicable local, national, or international law or regulation.',
            'Transmit any unsolicited or unauthorised advertising or promotional material.',
            'Attempt to gain unauthorised access to any part of the Site or its related systems.',
            'Reproduce, duplicate, copy, or resell any part of the Site in contravention of these Terms.',
            'Use automated tools (bots, scrapers, crawlers) to extract data from the Site without written permission.',
            "Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <LegalParagraph>
          All content on this Site — including but not limited to text, graphics,
          logos, images, audio clips, video, and software — is the property of
          {' '}{SITE_NAME} or its content suppliers and is protected by applicable
          intellectual property laws.
        </LegalParagraph>
        <LegalParagraph>
          You may not reproduce, distribute, modify, create derivative works of,
          publicly display, publicly perform, republish, download, store, or
          transmit any materials from this Site without our prior written consent,
          except as follows:
        </LegalParagraph>
        <LegalList
          items={[
            'Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.',
            'You may store files that are automatically cached by your web browser for display enhancement purposes.',
            'You may print or download a single copy of a reasonable number of pages of the Site for your own personal, non-commercial use.',
          ]}
        />
      </LegalSection>

      <LegalSection heading="Booking and speaking engagements">
        <LegalParagraph>
          Submitting an inquiry or booking request through this Site does not
          constitute a confirmed engagement. All speaking engagements and
          mentorship programmes are subject to availability and separate written
          agreement between the parties.
        </LegalParagraph>
        <LegalParagraph>
          Any fees, cancellation terms, travel requirements, and deliverables
          will be set out in a separate speaker agreement or service contract.
          Nothing on this Site constitutes a binding offer or acceptance.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Third-party links">
        <LegalParagraph>
          The Site may contain links to third-party websites. These links are
          provided for your convenience only. We have no control over the content
          of those sites and accept no responsibility for them or for any loss or
          damage that may arise from your use of them.
        </LegalParagraph>
        <LegalParagraph>
          Inclusion of a link does not imply endorsement of the linked site by
          {' '}{SITE_NAME}.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Disclaimers">
        <LegalParagraph>
          The information on this Site is provided on an "as is" basis without
          any warranties of any kind, either express or implied, including but not
          limited to implied warranties of merchantability, fitness for a particular
          purpose, or non-infringement.
        </LegalParagraph>
        <LegalParagraph>
          {SITE_NAME} does not warrant that the Site will be uninterrupted,
          error-free, or free of viruses or other harmful components. We make no
          warranties or representations about the accuracy or completeness of the
          content on this Site or on any sites linked to it.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Limitation of liability">
        <LegalParagraph>
          To the fullest extent permitted by applicable law, {SITE_NAME} shall not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages — including loss of profits, data, goodwill, or other
          intangible losses — arising out of or relating to your access to or use
          of (or inability to access or use) the Site or its content.
        </LegalParagraph>
        <LegalParagraph>
          In no event shall our total liability to you for all claims arising out
          of or relating to the use of the Site exceed the greater of (a) the
          amount you paid us in the twelve months preceding the claim, or (b)
          £100 / $100.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Indemnification">
        <LegalParagraph>
          You agree to defend, indemnify, and hold harmless {SITE_NAME} and its
          officers, directors, employees, and agents from and against any claims,
          liabilities, damages, judgments, awards, losses, costs, expenses, or
          fees (including reasonable legal fees) arising out of or relating to your
          violation of these Terms or your use of the Site.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Governing law and jurisdiction">
        <LegalParagraph>
          These Terms shall be governed by and construed in accordance with the
          laws of {GOVERNING_LAW}, without regard to its conflict of law provisions.
          Any dispute arising under these Terms shall be subject to the exclusive
          jurisdiction of the courts of {GOVERNING_LAW}.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Entire agreement">
        <LegalParagraph>
          These Terms, together with our Privacy Policy, constitute the entire
          agreement between you and {SITE_NAME} with respect to the Site and
          supersede all prior and contemporaneous understandings, agreements,
          representations, and warranties.
        </LegalParagraph>
      </LegalSection>

      <LegalSection heading="Contact us">
        <LegalParagraph>
          If you have questions about these Terms, please contact us:
        </LegalParagraph>
        <LegalContact email={CONTACT_EMAIL} address={CONTACT_ADDR} />
      </LegalSection>

    </LegalLayout>
  );
};

export default Terms;