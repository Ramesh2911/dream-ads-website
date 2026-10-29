import type { Metadata } from 'next';
import LegalDoc from '../../components/LegalDoc';
import { TERMS_DOC } from '../../lib/legal';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms & Conditions for the DREAM ADS OTT streaming service — eligibility, subscriptions, billing, licensing, permitted use and company information.',
};

export default function TermsPage() {
  return <LegalDoc doc={TERMS_DOC} />;
}
