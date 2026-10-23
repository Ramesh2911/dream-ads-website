export type Platform =
  | 'web-app'
  | 'mobile-app'
  | 'game'
  | 'enterprise'
  | 'cloud';

export interface Feature {
  id: string;
  label: string;
  cost: number; // INR additive
  days: number;
}

export const PLATFORMS: { id: Platform; label: string; base: number; days: number; blurb: string }[] = [
  { id: 'web-app', label: 'Web Application / SaaS', base: 180000, days: 35, blurb: 'Portals, dashboards, SaaS products' },
  { id: 'mobile-app', label: 'Mobile Application', base: 220000, days: 42, blurb: 'Android / iOS / cross-platform' },
  { id: 'game', label: 'Game (2D / 3D / WebGL)', base: 300000, days: 55, blurb: 'Casual to mid-core titles' },
  { id: 'enterprise', label: 'Enterprise Software (ERP/CRM)', base: 450000, days: 65, blurb: 'Custom office & business systems' },
  { id: 'cloud', label: 'Cloud / API Architecture', base: 120000, days: 21, blurb: 'Infra, deployments, DevOps' },
];

export const FEATURES: Feature[] = [
  { id: 'auth', label: 'Auth & roles (SSO/RBAC)', cost: 25000, days: 5 },
  { id: 'payments', label: 'Payments / billing', cost: 45000, days: 8 },
  { id: 'admin', label: 'Admin panel', cost: 60000, days: 10 },
  { id: 'realtime', label: 'Realtime / chat / streaming', cost: 80000, days: 14 },
  { id: 'ai', label: 'AI features', cost: 90000, days: 15 },
  { id: 'analytics', label: 'Analytics & reports', cost: 35000, days: 6 },
  { id: 'notifications', label: 'Push / email notifications', cost: 20000, days: 4 },
  { id: 'multilang', label: 'Multi-language (i18n)', cost: 30000, days: 5 },
];

export const TIMELINES: { id: 'standard' | 'fast' | 'rush'; label: string; multiplier: number; note: string }[] = [
  { id: 'standard', label: 'Standard', multiplier: 1.0, note: 'Comfortable pace, best value' },
  { id: 'fast', label: 'Fast-track', multiplier: 1.25, note: '~25% faster delivery' },
  { id: 'rush', label: 'Rush', multiplier: 1.5, note: 'Parallel teams, priority lanes' },
];

export interface Estimate {
  low: number;
  high: number;
  weeksLow: number;
  weeksHigh: number;
  tier: 'Starter' | 'Growth' | 'Enterprise';
}

function round50k(n: number) {
  return Math.round(n / 50000) * 50000;
}

export function estimate(opts: {
  platform: Platform;
  features: string[];
  timeline: 'standard' | 'fast' | 'rush';
  complexity: 1 | 2 | 3;
}): Estimate {
  const p = PLATFORMS.find((x) => x.id === opts.platform) ?? PLATFORMS[0];
  const tl = TIMELINES.find((x) => x.id === opts.timeline) ?? TIMELINES[0];
  const complexityMult = [0.85, 1.0, 1.35][opts.complexity - 1] ?? 1;

  let cost = p.base;
  let days = p.days;
  for (const fid of opts.features) {
    const f = FEATURES.find((x) => x.id === fid);
    if (f) {
      cost += f.cost;
      days += f.days;
    }
  }

  cost = cost * complexityMult * tl.multiplier;
  days = days * complexityMult * (2 - tl.multiplier) * 0.5 + days * tl.multiplier * 0.5;

  const low = round50k(cost * 0.85);
  const high = round50k(cost * 1.25);

  const weeksLow = Math.max(2, Math.round((days * 0.85) / 7));
  const weeksHigh = Math.max(weeksLow + 1, Math.round((days * 1.2) / 7));

  const tier: Estimate['tier'] = high < 300000 ? 'Starter' : high < 800000 ? 'Growth' : 'Enterprise';

  return { low, high, weeksLow, weeksHigh, tier };
}

export function formatINR(n: number) {
  return '₹' + new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(n);
}
