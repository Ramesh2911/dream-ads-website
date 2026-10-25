export const COMPANY = {
  legalName: 'Dream Ads Multi Solutions Private Limited',
  shortName: 'Dream Ads Multi Solutions',
  tagline: 'Enterprise IT Infrastructure & Digital Engineering',
  cin: 'U62011WR2026PTC295658',
  pan: 'AAMCD9416G',
  gstin: '19AAMCD9416G1ZA',
  incorporated: '28/07/2026',
  incorporatedLong: 'July 28, 2026',
  roc: 'RoC - Kolkata (West Bengal)',
  directors: [
    { name: 'Biswajit Chakraborty', role: 'Director', din: 'DIN — Verified' },
    { name: 'Ranajit Adhikari', role: 'Director', din: 'DIN — Verified' },
  ],
  ceo: { name: 'Biswajit Chakraborty', role: 'Chief Executive Officer' },
  address: 'Village & P.O. Tenya, P.S. Salar, Murshidabad, West Bengal - 742404, India',
  email: 'dreamadsmultisolutions@gmail.com',
  phone: '+91 9800610286',
  phoneRaw: '+919800610286',
  whatsapp: 'https://wa.me/919800610286',
  hours: 'Mon - Sat: 10:00 AM - 05:00 PM IST',
  lat: 24.0031,
  lng: 88.2667,
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
] as const;

export const FOOTER_EXTRA_LINKS = [
  { href: '/calculator', label: 'Cost Calculator' },
  { href: '/careers', label: 'Careers' },
  { href: '/privacy', label: 'Privacy Policy' },
] as const;
