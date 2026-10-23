export const COMPANY = {
  legalName: 'Dream Ads Multi Solutions Private Limited',
  shortName: 'Dream Ads Multi Solutions',
  cin: 'U62011WR2026PTC295658',
  pan: 'AAMCD9416G',
  gstin: '19AAMCD9416G1ZA',
  incorporated: 'July 28, 2026',
  directors: [
    { name: 'Biswajit Chakraborty', role: 'Director' },
    { name: 'Ranajit Adhikari', role: 'Director' },
  ],
  address: 'Village & P.O. Tenya, P.S. Salar, Murshidabad, West Bengal - 742404, India',
  email: 'dreamadsmultisolutions@gmail.com',
  phone: '+91 9800610286',
  // registered office approximate geo for map embed
  lat: 24.0031,
  lng: 88.2667,
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/calculator', label: 'Cost Calculator' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
] as const;
