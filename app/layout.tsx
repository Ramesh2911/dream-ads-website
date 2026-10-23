import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import GlowTracker from '../components/GlowTracker';

const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display', weight: ['500', '600', '700', '800'] });
const body = Inter({ subsets: ['latin'], variable: '--font-body', weight: ['400', '500', '600'] });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400', '500'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? 'http://localhost:3100'),
  title: {
    default: 'Dream Ads Multi Solutions Private Limited — Games, Enterprise Software & Cloud Engineering',
    template: '%s | Dream Ads Multi Solutions',
  },
  description:
    'Enterprise-grade digital software and game engineering company. We build 2D/3D games, custom ERP/CRM software, mobile apps, SaaS platforms and cloud infrastructure.',
  keywords: ['game development', 'enterprise software', 'mobile apps', 'web development', 'cloud infrastructure', 'India IT company'],
  openGraph: { title: 'Dream Ads Multi Solutions Private Limited', type: 'website', images: ['/logo.jpeg'] },
  icons: { icon: '/logo.jpeg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-sans">
        <GlowTracker />
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
