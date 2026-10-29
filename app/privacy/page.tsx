import type { Metadata } from 'next';
import LegalDoc from '../../components/LegalDoc';
import { PRIVACY_DOC } from '../../lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for the DREAM ADS OTT entertainment platform — what we collect, how it is used, retained and protected, and your rights under the DPDP Act.',
};

export default function PrivacyPage() {
  return <LegalDoc doc={PRIVACY_DOC} />;
}
