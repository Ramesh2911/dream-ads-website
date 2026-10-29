import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import StatutoryStrip from '../components/StatutoryStrip';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import BackToTop from '../components/BackToTop';
import { COMPANY } from '../lib/company';

const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700', '800'] });
const body = Inter({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '600'] });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3100'),
  title: {
    default: `${COMPANY.legalName} — Enterprise IT, Mobile Apps, Games & Cloud Engineering`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    'MCA-registered software company from West Bengal. Custom ERP/CRM, web portals, Android & iOS apps, 3D games, multiplayer servers, video streaming and ad monetization.',
  keywords: ['IT company Murshidabad', 'enterprise software West Bengal', 'mobile app development India', 'game development', 'cloud infrastructure', 'SEO ASO India'],
  openGraph: { title: COMPANY.legalName, type: 'website', images: ['/logo.jpeg?v=2'] },
  icons: { icon: '/logo.jpeg?v=2' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans">
        <StatutoryStrip />
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <BackToTop />
      </body>
    </html>
  );
}
