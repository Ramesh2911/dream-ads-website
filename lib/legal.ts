import { COMPANY } from './company';

export interface LegalBlock {
  type: 'p' | 'list' | 'ordered' | 'note';
  text?: string;
  items?: string[];
}

export interface LegalItem {
  n?: string;
  h?: string;
  sub?: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  title: string;
  subtitle: string;
  eyebrow: string;
  meta: { label: string; value: string; href?: string }[];
  items: LegalItem[];
}

const EMAIL = COMPANY.email;
const ADDRESS = COMPANY.address;
const WEBSITE = 'https://dreamads.in';

export const PRIVACY_DOC: LegalDoc = {
  title: 'Privacy Policy',
  subtitle: 'An OTT Entertainment Platform',
  eyebrow: 'Legal · Privacy',
  meta: [
    { label: 'Operated by', value: COMPANY.legalName },
    { label: 'Policy Version', value: '1.0' },
    { label: 'Effective Date', value: '29/10/2026' },
    { label: 'Last Updated', value: '29/10/2026' },
    { label: 'Official Website', value: WEBSITE, href: WEBSITE },
    { label: 'Privacy Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { label: 'Registered Office', value: ADDRESS },
    { label: 'Privacy Contact / Grievance Officer', value: 'Biswajit Chakraborty, Chief Executive Officer' },
  ],
  items: [
    {
      n: '1',
      h: 'About This Policy',
      blocks: [
        { type: 'p', text: 'DREAM ADS ("App", "Platform", "we", "our" or "us") is an OTT entertainment service operated by DREAM ADS MULTI SOLUTIONS PRIVATE LIMITED ("Company").' },
        { type: 'p', text: 'This Privacy Policy explains how the Company collects, uses, stores, discloses and protects personal information in connection with our application, website and related services.' },
      ],
    },
    {
      n: '2',
      h: 'Information We Collect',
      blocks: [{ type: 'p', text: 'Depending on your use of the Platform, we may process:' }],
    },
    {
      n: '2.1',
      sub: 'Account information',
      blocks: [
        {
          type: 'list',
          items: [
            'Name or display name, if provided.',
            'Mobile number and/or email address.',
            'Authentication identifiers and account credentials.',
            'Account preferences.',
          ],
        },
      ],
    },
    {
      n: '2.2',
      sub: 'Subscription and transaction information',
      blocks: [
        {
          type: 'list',
          items: [
            'Subscription plan and validity.',
            'Transaction reference, payment status and order ID.',
            'Billing and refund records.',
            'Relevant payment provider information.',
          ],
        },
        { type: 'note', text: 'We do not intend to store full card numbers, CVV, UPI PINs or payment passwords on Company servers.' },
      ],
    },
    {
      n: '2.3',
      sub: 'Technical information',
      blocks: [
        {
          type: 'list',
          items: [
            'Device model, OS and app version.',
            'IP address and session information.',
            'Security logs, crash reports and diagnostics.',
            'Approximate location inferred from IP, only if needed and appropriately disclosed.',
          ],
        },
      ],
    },
    {
      n: '2.4',
      sub: 'OTT usage information',
      blocks: [
        {
          type: 'list',
          items: [
            'Viewing history and playback progress.',
            'Search activity, watchlists and preferences.',
            'Streaming quality and technical playback events.',
          ],
        },
        { type: 'p', text: 'We will collect only information reasonably necessary for disclosed purposes.' },
      ],
    },
    {
      n: '3',
      h: 'Purposes of Processing',
      blocks: [
        {
          type: 'ordered',
          items: [
            'Register and authenticate accounts.',
            'Deliver video streaming and playback.',
            'Administer free and paid subscription plans.',
            'Process payments, cancellations and refunds.',
            'Provide customer support.',
            'Detect account sharing abuse, fraud, piracy and security threats.',
            'Troubleshoot and improve service reliability.',
            'Maintain business, tax and accounting records.',
            'Fulfil lawful regulatory requests.',
            'Personalise recommendations where implemented and appropriately disclosed.',
          ],
        },
        { type: 'p', text: 'Promotional communications will be subject to applicable law and user preferences.' },
      ],
    },
    {
      n: '4',
      h: 'Consent and Privacy Choices',
      blocks: [
        { type: 'p', text: 'Where consent is required by law, we will provide a clear notice describing the data and purpose and obtain appropriate consent.' },
        { type: 'p', text: `You may withdraw consent through the consent controls provided in the app (where available) or by writing to ${EMAIL}, subject to applicable law.` },
        { type: 'p', text: 'Withdrawal may affect features that depend on the relevant information. It does not invalidate lawful processing performed before withdrawal.' },
      ],
    },
    {
      n: '5',
      h: 'Data Sharing',
      blocks: [
        { type: 'p', text: 'We may share necessary information with:' },
        {
          type: 'list',
          items: [
            'Cloud hosting and streaming infrastructure providers.',
            'CDN and video delivery providers.',
            'Payment gateways and subscription processors.',
            'Authentication and security vendors.',
            'Analytics and crash monitoring providers, if used.',
            'Customer support providers.',
            'Professional advisers, auditors and authorities where legally justified.',
          ],
        },
        { type: 'p', text: 'Third-party service providers must be subject to appropriate safeguards and contractual requirements.' },
        { type: 'p', text: 'We do not sell personal information as a business practice.' },
      ],
    },
    {
      n: '6',
      h: 'Advertising and Tracking',
      blocks: [
        { type: 'p', text: 'The Platform may offer free content supported by advertising, if implemented.' },
        { type: 'p', text: 'Where advertising, advertising identifiers, tracking SDKs or profiling are used, we will provide applicable disclosures and required controls.' },
        { type: 'p', text: 'We will not represent that advertising is non-personalised or that tracking is disabled unless this is factually correct.' },
      ],
    },
    {
      n: '7',
      h: 'Data Security',
      blocks: [
        { type: 'p', text: 'We apply appropriate security safeguards proportionate to risk, including, where implemented:' },
        {
          type: 'list',
          items: [
            'Encryption in transit and suitable encryption at rest.',
            'Access control and least-privilege permissions.',
            'Secure authentication and session management.',
            'Rate limiting and abuse prevention.',
            'Security monitoring and audit logs.',
            'Secure software development and vulnerability remediation.',
            'Backup and disaster recovery controls.',
            'Vendor security reviews and confidentiality obligations.',
          ],
        },
        { type: 'p', text: 'No electronic transmission or storage system can be guaranteed completely secure.' },
      ],
    },
    {
      n: '8',
      h: 'Data Retention',
      blocks: [
        { type: 'p', text: 'We retain personal information only for the period necessary for its disclosed purpose, legitimate operational requirements and applicable legal obligations.' },
        { type: 'p', text: 'Different periods may apply to:' },
        {
          type: 'list',
          items: [
            'Active accounts.',
            'Viewing history and preferences.',
            'Transaction and tax records.',
            'Security logs.',
            'Complaints, disputes and legal records.',
          ],
        },
        {
          type: 'note',
          text: 'Retention schedule: active accounts for as long as the account is active; viewing history and preferences until the deletion request is completed; transaction and tax records for 8 (eight) years from the end of the financial year concerned; security logs for 90 days; complaints, disputes and legal records until resolution plus the applicable statutory limitation period.',
        },
        { type: 'p', text: 'When data is no longer required, it will be securely deleted or anonymised, subject to lawful retention requirements.' },
      ],
    },
    {
      n: '9',
      h: 'Account Deletion',
      blocks: [
        { type: 'p', text: 'Users may request account deletion through:' },
        { type: 'p', text: 'In-App Path: Profile → Delete Account' },
        { type: 'p', text: `Email: ${EMAIL}` },
        { type: 'p', text: 'We will provide a practical deletion process and communicate any applicable exceptions.' },
        { type: 'p', text: 'Deletion may remove viewing history, profiles and preferences. Necessary transaction or legal records may be retained where permitted or required by law.' },
      ],
    },
    {
      n: '10',
      h: 'Privacy Rights',
      blocks: [
        { type: 'p', text: 'Subject to applicable law, users may exercise rights relating to:' },
        {
          type: 'list',
          items: [
            'Access to information about personal data processing.',
            'Correction and updating.',
            'Erasure.',
            'Withdrawal of consent.',
            'Grievance redressal.',
            'Nomination, where legally applicable.',
          ],
        },
        { type: 'p', text: 'Requests may be subject to reasonable identity verification and statutory exceptions.' },
        { type: 'p', text: 'We will respond within applicable legal timelines.' },
      ],
    },
    {
      n: '11',
      h: 'Adults-Only Platform',
      blocks: [
        { type: 'p', text: 'DREAM ADS is intended for adults aged 18 years and above.' },
        { type: 'p', text: 'We may apply age-gating and appropriate access controls. A simple age confirmation is not necessarily sufficient where stronger verification or other safeguards are legally required.' },
        { type: 'p', text: 'We do not knowingly permit underage users to access restricted services contrary to applicable law.' },
      ],
    },
    {
      n: '12',
      h: 'International Processing',
      blocks: [
        { type: 'p', text: 'Some service providers may process information outside India.' },
        { type: 'p', text: 'Where applicable, we will comply with Indian legal requirements, transfer restrictions and appropriate safeguards.' },
      ],
    },
    {
      n: '13',
      h: 'Data Breach Response',
      blocks: [
        { type: 'p', text: 'If a personal data breach occurs, we will take appropriate steps to investigate, contain, remediate and document the incident and provide notifications to affected individuals and authorities as legally required.' },
      ],
    },
    {
      n: '14',
      h: 'Third-Party Links',
      blocks: [
        { type: 'p', text: 'External services and payment providers may operate under their own privacy policies. Our responsibilities remain subject to applicable law and contractual obligations.' },
      ],
    },
    {
      n: '15',
      h: 'Changes',
      blocks: [
        { type: 'p', text: 'We may revise this policy as our services, technologies or legal requirements evolve.' },
        { type: 'p', text: 'Material changes will be communicated through appropriate notices. The latest version and effective date will be displayed on our Platform.' },
      ],
    },
    {
      n: '16',
      h: 'Contact',
      blocks: [
        { type: 'p', text: COMPANY.legalName },
        { type: 'p', text: `Privacy Email: ${EMAIL}` },
        { type: 'p', text: 'Grievance Officer: Biswajit Chakraborty, Chief Executive Officer' },
        { type: 'p', text: `Office Address: ${ADDRESS}` },
        { type: 'p', text: `Website: ${WEBSITE}` },
      ],
    },
  ],
};

export const TERMS_DOC: LegalDoc = {
  title: 'Terms & Conditions',
  subtitle: 'OTT Streaming Service',
  eyebrow: 'Legal · Terms',
  meta: [
    { label: 'Operated by', value: COMPANY.legalName },
    { label: 'Effective Date', value: '29/10/2026' },
    { label: 'Last Updated', value: '29/10/2026' },
    { label: 'Official Website', value: WEBSITE, href: WEBSITE },
  ],
  items: [
    {
      n: '1',
      h: 'Agreement',
      blocks: [
        { type: 'p', text: 'These Terms govern your access to DREAM ADS, including streaming, account management, subscriptions, free content and paid entertainment services.' },
        { type: 'p', text: 'By using the Platform, you agree to these Terms, subject to any legally required acceptance process.' },
      ],
    },
    {
      n: '2',
      h: 'Eligibility',
      blocks: [
        { type: 'p', text: 'DREAM ADS is intended exclusively for adults aged 18 and above.' },
        { type: 'p', text: 'By registering, you confirm that you meet the applicable minimum age requirements and are legally capable of entering into the relevant agreement.' },
        { type: 'p', text: 'We may apply age-verification measures where appropriate or legally required.' },
      ],
    },
    {
      n: '3',
      h: 'Account Security',
      blocks: [
        { type: 'p', text: 'You agree to:' },
        {
          type: 'list',
          items: [
            'Provide accurate registration details.',
            'Maintain account confidentiality.',
            'Not share credentials for commercial exploitation.',
            'Report suspected unauthorised access.',
            'Not create fraudulent or impersonation accounts.',
          ],
        },
        { type: 'p', text: 'We may secure, suspend or revoke compromised sessions when reasonably necessary.' },
      ],
    },
    {
      n: '4',
      h: 'Service Description',
      blocks: [
        { type: 'p', text: 'DREAM ADS may offer:' },
        {
          type: 'list',
          items: [
            'Free streaming content.',
            'Paid subscriptions.',
            'Premium movies, series and entertainment.',
            'Promotional offers and other features.',
          ],
        },
        { type: 'p', text: 'Actual content availability, subscription entitlements and regional access may vary.' },
      ],
    },
    {
      n: '5',
      h: 'Free and Paid Plans',
      blocks: [
        { type: 'p', text: 'Applicable plans, benefits, prices, duration, renewal conditions and restrictions will be displayed before purchase.' },
        { type: 'p', text: 'Free access may be subject to availability, advertising or reasonable service limits.' },
        { type: 'p', text: 'A paid subscription does not guarantee that every title will remain available indefinitely.' },
      ],
    },
    {
      n: '6',
      h: 'Subscription & Billing',
      blocks: [
        { type: 'p', text: 'Before purchase, we will disclose material terms, including:' },
        {
          type: 'list',
          items: [
            'Subscription price and applicable taxes.',
            'Billing frequency and validity.',
            'Automatic renewal, if applicable.',
            'Cancellation procedure.',
            'Refund and eligibility conditions.',
            'Any relevant platform billing conditions.',
          ],
        },
        { type: 'p', text: 'Recurring payments will not be initiated without appropriate authorisation.' },
        { type: 'p', text: 'Where subscriptions are purchased through Google Play, Apple or another marketplace, the applicable marketplace payment and cancellation processes will also apply, subject to mandatory law.' },
      ],
    },
    {
      n: '7',
      h: 'Cancellation & Refunds',
      blocks: [
        { type: 'p', text: 'Users may cancel subscriptions through the cancellation controls in the app, or through Google Play / Apple where the subscription was purchased.' },
        { type: 'p', text: 'Cancellation will generally stop future renewals, where applicable, but may not automatically generate a refund.' },
        { type: 'p', text: 'Refund eligibility will depend on applicable law, purchase channel, disclosed terms and the circumstances of the claim.' },
        { type: 'p', text: 'Nothing in these Terms removes mandatory consumer rights or remedies.' },
      ],
    },
    {
      n: '8',
      h: 'Streaming Access Licence',
      blocks: [
        { type: 'p', text: 'Subject to your subscription and applicable restrictions, the Company grants a limited, personal, non-exclusive, non-transferable and revocable licence to access authorised content for private, non-commercial viewing.' },
        { type: 'p', text: 'You may not:' },
        {
          type: 'list',
          items: [
            'Reproduce, redistribute or sell content.',
            'Publicly screen or commercially exploit content without permission.',
            'Record or retransmit protected streams unlawfully.',
            'Bypass DRM or access controls.',
            'Scrape or extract our content catalogue at scale.',
            'Circumvent geographical licensing restrictions.',
          ],
        },
        { type: 'p', text: 'Offline downloads, if introduced, will be subject to separate technical and licensing restrictions.' },
      ],
    },
    {
      n: '9',
      h: 'Intellectual Property',
      blocks: [
        { type: 'p', text: 'DREAM ADS branding, software, application design, platform interface, logos and proprietary materials are owned by or licensed to the relevant rights holders.' },
        { type: 'p', text: 'Movies, music, photographs, posters and other content remain the property of their respective rights holders.' },
        { type: 'p', text: 'No ownership rights are transferred to users.' },
      ],
    },
    {
      n: '10',
      h: 'Content Licensing',
      blocks: [
        { type: 'p', text: 'The Company will make content available subject to applicable ownership rights, distribution agreements and licences.' },
        { type: 'p', text: 'Content may be removed, replaced or restricted when licensing expires, rights change or legal obligations require it.' },
      ],
    },
    {
      n: '11',
      h: 'Prohibited Conduct',
      blocks: [
        { type: 'p', text: 'You must not:' },
        {
          type: 'list',
          items: [
            'Commit fraud, phishing or payment abuse.',
            'Attempt unauthorised system access.',
            'Distribute malware or malicious software.',
            'Interfere with streaming infrastructure.',
            'Circumvent security or subscription controls.',
            'Infringe intellectual property or privacy rights.',
            'Use the service for unlawful purposes.',
          ],
        },
      ],
    },
    {
      n: '12',
      h: 'Suspension & Termination',
      blocks: [
        { type: 'p', text: 'We may restrict or terminate access for material violations, fraud, security risks, unlawful conduct or licensing requirements, subject to applicable law.' },
        { type: 'p', text: 'Where reasonably practicable, we will provide notice and an appropriate opportunity to appeal.' },
        { type: 'p', text: 'Urgent restrictions may be imposed when reasonably necessary to prevent harm, comply with law or protect platform security.' },
        { type: 'p', text: 'Refunds and account balances, where applicable, will be handled according to law and purchase conditions.' },
      ],
    },
    {
      n: '13',
      h: 'Service Availability',
      blocks: [
        { type: 'p', text: 'We aim to provide reliable service but cannot promise uninterrupted access.' },
        { type: 'p', text: 'Temporary interruptions may occur due to maintenance, network issues, provider failures, cyber incidents or events outside reasonable control.' },
        { type: 'p', text: 'We will take reasonable steps to restore services.' },
      ],
    },
    {
      n: '14',
      h: 'Disclaimer',
      blocks: [
        { type: 'p', text: 'Nothing in these Terms excludes statutory consumer rights or liability that cannot lawfully be excluded.' },
        { type: 'p', text: "The Platform's availability and technical performance may vary by device, connectivity and location." },
      ],
    },
    {
      n: '15',
      h: 'Liability',
      blocks: [
        { type: 'p', text: 'To the extent permitted by law, the Company will not be responsible for indirect losses that are not legally recoverable.' },
        { type: 'p', text: 'No limitation applies to liabilities that cannot legally be excluded, including applicable liability for fraud or other non-excludable conduct.' },
      ],
    },
    {
      n: '16',
      h: 'Indemnification',
      blocks: [
        { type: 'p', text: "Where permitted by law, a user may be responsible for reasonable direct losses arising from the user's established unlawful conduct or material breach." },
        { type: 'p', text: "This clause does not impose liability on users for the Company's own unlawful conduct or non-excludable obligations." },
      ],
    },
    {
      n: '17',
      h: 'Complaints',
      blocks: [
        { type: 'p', text: 'Complaints may be submitted through:' },
        { type: 'p', text: `Grievance Email: ${EMAIL}` },
        { type: 'p', text: 'Support channel: https://dreamads.in/contact' },
        { type: 'p', text: 'Please provide relevant transaction references or content identifiers where appropriate.' },
      ],
    },
    {
      n: '18',
      h: 'Governing Law',
      blocks: [
        { type: 'p', text: 'These Terms are governed by the laws of India.' },
        { type: 'p', text: 'Disputes shall be resolved before a competent court or forum with lawful jurisdiction, subject to mandatory consumer protections.' },
      ],
    },
    {
      n: '19',
      h: 'Changes to Terms',
      blocks: [
        { type: 'p', text: 'We may update these Terms when required by business, technical or legal changes.' },
        { type: 'p', text: 'Material changes will be appropriately notified, and renewed acceptance will be obtained where required.' },
      ],
    },
    {
      n: '20',
      h: 'Company Information',
      blocks: [
        { type: 'p', text: COMPANY.legalName },
        { type: 'p', text: `Registered Office: ${ADDRESS}` },
        { type: 'p', text: `CIN: ${COMPANY.cin}` },
        { type: 'p', text: `Email: ${EMAIL}` },
        { type: 'p', text: `Website: ${WEBSITE}` },
      ],
    },
  ],
};
