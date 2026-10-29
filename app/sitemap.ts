import type { MetadataRoute } from 'next';
import { SERVICES } from '../lib/data';

const BASE = process.env.SITE_URL || 'http://localhost:3100';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ['', '/about', '/services', '/portfolio', '/calculator', '/careers', '/contact', '/privacy', '/terms'].map(
    (path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : path === '/contact' ? 0.9 : 0.7,
    })
  );
  const serviceRoutes = SERVICES.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  return [...staticRoutes, ...serviceRoutes];
}
