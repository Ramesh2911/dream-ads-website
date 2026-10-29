import type { LucideIcon } from 'lucide-react';
import {
  Code2, Globe, Smartphone, Gamepad2, Crosshair, Radio, Coins, Megaphone, Search,
} from 'lucide-react';

/* ============================== SERVICES (9) ============================== */

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  chip: string;
  headline: string;
  description: string;
  deliverables: string[];
  stack: string[];
  slaChip: string;
  process: { step: string; detail: string }[];
  price: string;
  timeline: string;
  deployments: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'custom-it-software',
    title: 'Custom IT Software & ERP',
    short: 'Custom ERP and CRM software for billing, inventory and day-to-day operations.',
    icon: Code2,
    chip: 'Enterprise Systems',
    headline: 'Software built around how your business actually works',
    description:
      'We build ERP, CRM, billing and inventory systems to replace spreadsheets and scattered tools. Every build ships with role-based access, audit trails and reports, so your team can grow without losing control of the data.',
    deliverables: [
      'Custom ERP & CRM development',
      'Billing, inventory & workflow automation',
      'Role-based access and audit logs',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'React', 'Redis', 'Docker'],
    slaChip: 'Enterprise SLA • High Security',
    process: [
      { step: 'Discovery', detail: 'Stakeholder interviews, process mapping, scope document.' },
      { step: 'Architecture', detail: 'Data model, module boundaries, security & roles design.' },
      { step: 'Build & integrate', detail: 'Iterative delivery with staging demos every week.' },
      { step: 'Rollout', detail: 'Training, migration, hypercare and handover docs.' },
    ],
    price: '₹45,000 – ₹1,80,000',
    timeline: '3–6 Wks',
    deployments: '120+ Deployments',
  },
  {
    slug: 'web-applications',
    title: 'Full-Stack Web Development',
    short: 'Websites, portals and SaaS products built with Next.js and React.',
    icon: Globe,
    chip: 'Cloud Portals',
    headline: 'Web apps that stay fast as you grow',
    description:
      'We build SaaS products, customer portals and internal web apps on Next.js and React, with clean APIs behind them. Login, billing and monitoring are part of the build, not an afterthought.',
    deliverables: [
      'Next.js & React web applications',
      'Fast pages — sub-second load targets',
      'Works offline and on mobile',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS'],
    slaChip: 'Core Web Vitals 99+ • PWA Ready',
    process: [
      { step: 'Product framing', detail: 'User journeys, information architecture, design system.' },
      { step: 'Incremental delivery', detail: 'Vertical slices shipped behind feature flags.' },
      { step: 'Scale testing', detail: 'Load tests, query profiling, caching strategy.' },
      { step: 'Handover', detail: 'Docs, runbooks and knowledge transfer sessions.' },
    ],
    price: '₹20,000 – ₹75,000',
    timeline: '2–4 Wks',
    deployments: '250+ Portals',
  },
  {
    slug: 'mobile-applications',
    title: 'Mobile App Development',
    short: 'Android and iOS apps — native or built with Flutter and React Native.',
    icon: Smartphone,
    chip: 'Mobile Apps',
    headline: 'Mobile products users keep on their home screen',
    description:
      'Native Android and iOS, or cross-platform with Flutter and React Native. We ship apps with offline support, video and calling features, push notifications and a smooth release on the Play Store and App Store.',
    deliverables: [
      'Native Swift & Kotlin apps',
      'Flutter & React Native cross-platform builds',
      'Store submission handled for you',
    ],
    stack: ['Kotlin', 'Swift', 'Flutter', 'React Native', 'WebRTC', 'Firebase', 'Expo'],
    slaChip: 'Native Swift & Kotlin • 60 FPS',
    process: [
      { step: 'UX-first design', detail: 'Wireframes and clickable prototypes before code.' },
      { step: 'Agile sprints', detail: 'Two-week sprints with TestFlight/internal tracks.' },
      { step: 'Hardening', detail: 'Crash analytics, performance profiling, accessibility pass.' },
      { step: 'Release', detail: 'Store assets, phased rollout and post-launch monitoring.' },
    ],
    price: '₹35,000 – ₹1,20,000',
    timeline: '3–5 Wks',
    deployments: '90+ Apps',
  },
  {
    slug: '3d-game-development',
    title: 'High-End 3D Game Development',
    short: '3D mobile and browser games with live events and ad revenue built in.',
    icon: Gamepad2,
    chip: '3D Game Engine',
    headline: 'Games that players come back to',
    description:
      'From small WebGL games to full 3D mobile titles, we build games for Android, iOS and the browser. Gameplay, physics, live events, ads and analytics are all handled in-house.',
    deliverables: [
      '2D/3D game design and prototypes',
      'Android, iOS and WebGL builds at 60 FPS',
      'In-app purchases and ad integration',
    ],
    stack: ['Unity', 'Cocos Creator', 'Three.js', 'WebGL', 'Photon', 'Firebase', 'PlayFab'],
    slaChip: '60 FPS Target • Device Matrix QA',
    process: [
      { step: 'Concept & mechanics', detail: 'Core loop design, reference analysis, vertical slice prototype.' },
      { step: 'Production', detail: 'Art, audio, systems implementation with weekly playable builds.' },
      { step: 'Polish & QA', detail: 'Device matrix testing, balancing, crash-free sessions > 99.5%.' },
      { step: 'Launch & live-ops', detail: 'Store release, telemetry, events and iterative updates.' },
    ],
    price: '₹60,000 – ₹2,50,000',
    timeline: '4–8 Wks',
    deployments: '35+ Renders',
  },
  {
    slug: 'battle-royale-architecture',
    title: 'Battle Royale & Multiplayer Architecture',
    short: 'Real-time multiplayer servers, from 8-player rooms to 100-player battle royales.',
    icon: Crosshair,
    chip: 'Esports Netcode',
    headline: 'Multiplayer that stays fair and fast under load',
    description:
      'Multiplayer games live or die on their servers. We build matchmaking, rooms, anti-cheat foundations and tournament systems that hold 60fps with 8 players or 100.',
    deliverables: [
      'Server-authoritative game networking',
      'Matchmaking, rooms & reconnection',
      'Tournaments and live spectating',
    ],
    stack: ['Unity', 'Mirror', 'Photon', 'Node.js', 'Redis', 'WebSocket', 'AWS'],
    slaChip: 'Sub-50ms Sync • Anti-Cheat Ready',
    process: [
      { step: 'Netcode design', detail: 'Authority model, tick rate, prediction & reconciliation.' },
      { step: 'Room infrastructure', detail: 'Sharding, autoscaling game servers, region routing.' },
      { step: 'Load validation', detail: 'Simulated CCU tests, latency matrix, failover drills.' },
      { step: 'Live operations', detail: 'Telemetry, seasons, ranked ladders, patch pipelines.' },
    ],
    price: '₹80,000 – ₹3,50,000',
    timeline: '5–9 Wks',
    deployments: 'High-Concurrency',
  },
  {
    slug: 'ott-streaming',
    title: 'OTT Video Streaming Infrastructure',
    short: 'Live and on-demand video platforms with fast, buffer-free playback.',
    icon: Radio,
    chip: 'Media Tech',
    headline: 'Streaming infrastructure without the buffering',
    description:
      'We handle the full video pipeline — ingest, transcoding, CDN delivery and the player itself. Built for live events and video libraries, targeting sub-second start times and 99.9% uptime.',
    deliverables: [
      'Live and on-demand video ingest',
      'Global CDN with adaptive bitrate player',
      'DRM-ready packaging and viewership analytics',
    ],
    stack: ['FFmpeg', 'Node.js', 'HLS/DASH', 'AWS Media', 'Cloudflare', 'Redis', 'MongoDB'],
    slaChip: 'Sub-Second CDN • ABR',
    process: [
      { step: 'Pipeline design', detail: 'Ingest → transcode → package → deliver topology.' },
      { step: 'Player integration', detail: 'Custom or Shaka/hls.js players with QoS beacons.' },
      { step: 'Scale test', detail: 'Concurrent-viewer load tests across edge regions.' },
      { step: 'Operate', detail: 'Monitoring, alerting, cost-per-stream dashboards.' },
    ],
    price: '₹70,000 – ₹3,00,000',
    timeline: '4–7 Wks',
    deployments: 'Sub-Second CDN',
  },
  {
    slug: 'admob-monetization',
    title: 'Google AdMob Mediation & Yield',
    short: 'AdMob setup and tuning to earn more from every impression.',
    icon: Coins,
    chip: 'AdTech Yield',
    headline: 'More ad revenue from the same traffic',
    description:
      'We set up AdMob mediation with in-app bidding across Meta, Unity Ads, AppLovin and others, then tune placements until revenue is steady. You get simple reports showing what actually earns.',
    deliverables: [
      'AdMob mediation & bidding setup',
      'Waterfall tuning across ad networks',
      'eCPM reports and A/B tests',
    ],
    stack: ['AdMob', 'Firebase', 'AppLovin', 'Unity Ads', 'Meta AN', 'BigQuery'],
    slaChip: 'Automated Waterfall • Yield Ops',
    process: [
      { step: 'Audit', detail: 'Current monetization review, fill-rate & eCPM baseline.' },
      { step: 'Mediation build', detail: 'Network wiring, bidding groups, floor experiments.' },
      { step: 'Optimize', detail: 'Waterfall tuning, placement design, UX-safe formats.' },
      { step: 'Report', detail: 'Yield dashboards, monthly optimization retainer option.' },
    ],
    price: '₹15,000 – ₹50,000',
    timeline: '1–2 Wks',
    deployments: 'Automated Waterfall',
  },
  {
    slug: 'meta-audience-network',
    title: 'Meta / Facebook Audience Network',
    short: 'Meta Audience Network integration for apps on Android, iOS and Flutter.',
    icon: Megaphone,
    chip: 'Meta Bidding',
    headline: 'Get Meta ads working properly in your app',
    description:
      'We integrate the Meta Audience Network SDK alongside AdMob, set up bidding and pick the right ad formats. Consent and privacy signals are configured correctly, so nothing breaks in review.',
    deliverables: [
      'Meta AN SDK and bidding setup',
      'Rewarded, interstitial and banner formats',
      'Privacy and consent signals configured',
    ],
    stack: ['Meta AN', 'AdMob', 'Flutter', 'React Native', 'Kotlin', 'Swift'],
    slaChip: 'Programmatic SDKs • 1–2 Wks',
    process: [
      { step: 'Integration', detail: 'SDK wiring, placement inventory, mediation groups.' },
      { step: 'Compliance', detail: 'ATT/consent signals, data-processing checks.' },
      { step: 'Optimize', detail: 'Format mix, frequency caps, experiment setup.' },
    ],
    price: '₹15,000 – ₹45,000',
    timeline: '1–2 Wks',
    deployments: 'Programmatic SDKs',
  },
  {
    slug: 'seo-aso',
    title: 'Enterprise Technical SEO & ASO',
    short: 'Technical SEO for Google and optimization for the app stores.',
    icon: Search,
    chip: 'SEO & ASO',
    headline: 'Be found — on Google and on the stores',
    description:
      'We fix the technical side of SEO — crawlability, page speed, structured data — and improve your store listings with the right keywords, screenshots and reviews. Progress you can track in Search Console.',
    deliverables: [
      'Technical SEO audit and fixes',
      'Structured data markup',
      'App store listing optimization (ASO)',
    ],
    stack: ['Search Console', 'Lighthouse', 'Schema.org', 'App Store Connect', 'Play Console'],
    slaChip: 'Rank #1 Entity Indexing',
    process: [
      { step: 'Audit', detail: 'Crawl, index, vitals & competitive gap analysis.' },
      { step: 'Implement', detail: 'On-page, schema, internal linking, speed fixes.' },
      { step: 'ASO pass', detail: 'Keywords, creatives, localization, review strategy.' },
      { step: 'Monitor', detail: 'Rank tracking, monthly reporting, iteration.' },
    ],
    price: '₹18,000 – ₹60,000',
    timeline: '2–3 Wks',
    deployments: 'Rank #1 Entity Indexing',
  },
];

/* ============================== MILESTONES ============================== */

export interface Milestone {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  desc: string;
  chip: string;
  tone: 'blue' | 'emerald' | 'indigo' | 'purple';
}

export const MILESTONES: Milestone[] = [
  {
    value: 128,
    suffix: '+',
    label: 'Enterprise Deployments',
    desc: 'SaaS products, ERPs, integrations and media systems delivered to date.',
    chip: '100% On-Spec',
    tone: 'blue',
  },
  {
    value: 99.9,
    decimals: 1,
    suffix: '%',
    label: 'Network Uptime',
    desc: 'Monitored across regions, with automatic failover when something goes down.',
    chip: 'High SLA',
    tone: 'emerald',
  },
  {
    value: 2,
    suffix: 'M+',
    label: 'Lines of Code Shipped',
    desc: 'Production TypeScript, Dart, Kotlin and C# across web, mobile and game engines.',
    chip: 'Audited Commits',
    tone: 'indigo',
  },
  {
    value: 45,
    suffix: '+',
    label: 'Cloud & Game Engines',
    desc: 'Multiplayer, WebGL and cloud projects delivered across these platforms.',
    chip: '60 FPS Netcode',
    tone: 'purple',
  },
];

/* ============================== PRICING (9) ============================== */

export interface PriceCard {
  slug: string;
  title: string;
  chip: string;
  price: string;
  blurb: string;
  deployments: string;
  timeline: string;
}

export const PRICING: PriceCard[] = [
  { slug: 'custom-it-software', title: 'Custom IT Software & ERP', chip: 'Enterprise Systems', price: '₹45,000 – ₹1,80,000', blurb: 'ERP and CRM software for growing businesses.', deployments: '120+ Deployments', timeline: '3–6 Wks' },
  { slug: 'web-applications', title: 'Full-Stack Web Apps & Portals', chip: 'Cloud Portals', price: '₹20,000 – ₹75,000', blurb: 'Next.js/React portals with API-first backends.', deployments: '250+ Portals', timeline: '2–4 Wks' },
  { slug: 'mobile-applications', title: 'Native Mobile Apps', chip: 'Mobile Apps', price: '₹35,000 – ₹1,20,000', blurb: 'Android/iOS native & cross-platform builds.', deployments: '90+ Apps', timeline: '3–5 Wks' },
  { slug: '3d-game-development', title: 'High-End 3D Game Dev', chip: '3D Game Engine', price: '₹60,000 – ₹2,50,000', blurb: '3D mobile & WebGL titles with live-ops.', deployments: '35+ Renders', timeline: '4–8 Wks' },
  { slug: 'battle-royale-architecture', title: 'Battle Royale & Multiplayer', chip: 'Esports Netcode', price: '₹80,000 – ₹3,50,000', blurb: 'High-concurrency real-time game servers.', deployments: 'High-Concurrency', timeline: '5–9 Wks' },
  { slug: 'ott-streaming', title: 'OTT Video Streaming Infra', chip: 'Media Tech', price: '₹70,000 – ₹3,00,000', blurb: 'Live & VOD delivery with ABR players.', deployments: 'Sub-Second CDN', timeline: '4–7 Wks' },
  { slug: 'admob-monetization', title: 'AdMob Mediation & Yield', chip: 'AdTech Yield', price: '₹15,000 – ₹50,000', blurb: 'Waterfall + bidding revenue optimization.', deployments: 'Automated Waterfall', timeline: '1–2 Wks' },
  { slug: 'meta-audience-network', title: 'Meta Audience Network', chip: 'Meta Bidding', price: '₹15,000 – ₹45,000', blurb: 'Meta demand integration & mediation.', deployments: 'Programmatic SDKs', timeline: '1–2 Wks' },
  { slug: 'seo-aso', title: 'Technical SEO & ASO', chip: 'SEO & ASO', price: '₹18,000 – ₹60,000', blurb: 'Entity indexing & store optimization.', deployments: 'Rank #1 Indexing', timeline: '2–3 Wks' },
];

/* ============================== TESTIMONIALS ============================== */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  tone: 'blue' | 'purple' | 'emerald' | 'indigo';
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Dream Ads rebuilt our entire operations stack in six weeks. Month-end close went from nine days to under two days — their ERP team understands business process, not just code.',
    name: 'Dr. Arvind Mehta',
    role: 'CTO',
    company: 'StreamVibe Media',
    initials: 'AM',
    tone: 'blue',
  },
  {
    quote:
      'The multiplayer netcode they delivered held 60fps under our tournament load without a single desync complaint. Rare engineering discipline for the budget.',
    name: 'Rajesh Ramanathan',
    role: 'VP Engineering',
    company: 'Titan Interactive',
    initials: 'RR',
    tone: 'purple',
  },
  {
    quote:
      'Our field team finally has an offline-first app that never loses data. Support response has been same-day every single time over fourteen months.',
    name: 'Siddharth Singhania',
    role: 'Head of Digital',
    company: 'Apex Logistics',
    initials: 'SS',
    tone: 'emerald',
  },
  {
    quote:
      'Ad mediation yield jumped 38% within the first month of their optimization retainer. Clear reporting, no vanity metrics — just revenue.',
    name: 'Elena Rostova',
    role: 'Monetization Lead',
    company: 'Nexus Apps',
    initials: 'ER',
    tone: 'indigo',
  },
];

/* ============================== FAQ (12 in 3 groups) ============================== */

export interface FaqGroup {
  title: string;
  sub: string;
  icon: 'scale' | 'stopwatch' | 'shield';
  items: { q: string; a: string; mono?: string }[];
}

export const FAQS: FaqGroup[] = [
  {
    title: 'Statutory Compliance',
    sub: 'Registration, tax and director details',
    icon: 'scale',
    items: [
      {
        q: 'Is Dream Ads a registered company?',
        a: 'Yes. Dream Ads Multi Solutions Private Limited is registered with the Registrar of Companies, Kolkata. It was incorporated on 28 July 2026 and its MCA status is Active.',
        mono: 'CIN: U62011WR2026PTC295658',
      },
      {
        q: 'How do I verify your GST and PAN?',
        a: 'Check our GSTIN and PAN on the government GST and Income Tax portals. Both are shown here and printed on every invoice we send.',
        mono: 'GSTIN: 19AAMCD9416G1ZA · PAN: AAMCD9416G',
      },
      {
        q: 'Do your directors have DINs?',
        a: 'Yes. The MCA has allotted DINs to both directors — Biswajit Chakraborty (DIN 11857323) and Ranajit Adhikari (DIN 11857324). You can look both up on the MCA portal.',
      },
      {
        q: 'How is client data privacy handled?',
        a: 'We follow the DPDPA: access is role-based, activity is logged, and each client\u2019s data is kept separate. Nothing is reused across projects without written consent.',
      },
    ],
  },
  {
    title: 'Service Delivery Timelines',
    sub: 'How long things take, and how we keep to it',
    icon: 'stopwatch',
    items: [
      {
        q: 'How long does a typical project take?',
        a: 'Web portals take 2\u20134 weeks, mobile apps 3\u20135 weeks and ERP systems 3\u20136 weeks. Bigger multiplayer or streaming platforms run 5\u20139 weeks, with milestones along the way.',
      },
      {
        q: 'How do game projects progress?',
        a: 'Every game project moves through vertical slice, production, polish and live-ops. Each phase ends with a playable build that you approve before we start the next.',
      },
      {
        q: 'What uptime SLAs do you offer post-launch?',
        a: 'Our infrastructure retainers include a 99.9% uptime SLA with agreed response times. You also get monitoring, alerts and written runbooks at handover.',
      },
      {
        q: 'Can the timeline be shortened?',
        a: 'Yes. A dedicated team can cut timelines by 30\u201340%, depending on scope. Expedited work is quoted separately and includes daily standups with your team.',
      },
    ],
  },
  {
    title: 'Contract Security & IP',
    sub: 'NDAs, IP transfer and code audits',
    icon: 'shield',
    items: [
      {
        q: 'Who owns the code you write for us?',
        a: 'You do. Ownership of the code, designs and documents transfers to you on final payment. We keep no licence over your product.',
      },
      {
        q: 'Do you sign NDAs before project discussions?',
        a: 'Yes. We sign a mutual NDA before any technical discussion — either your document or our standard template.',
      },
      {
        q: 'Is source-code escrow and audit available?',
        a: 'Yes, on enterprise projects. We can run independent code audits, and repositories can sit under your organisation from day one.',
      },
      {
        q: 'How does milestone-based billing work?',
        a: 'Most projects split 40/30/30 across kickoff, mid-point and delivery. Fixed-scope work never goes over the agreed quote without a change order you sign.',
      },
    ],
  },
];

/* ============================== LEADERSHIP ============================== */

export interface Leader {
  name: string;
  role: string;
  badge: string;
  initials: string;
  tone: 'blue' | 'indigo' | 'slate';
  mandate: string;
  mandateLabel: string;
  points: string[];
  meta: string;
  status: string;
}

export const LEADERSHIP: Leader[] = [
  {
    name: 'Biswajit Chakraborty',
    role: 'Chief Executive Officer & Director',
    badge: 'Chief Executive Head',
    initials: 'BC',
    tone: 'blue',
    mandate: 'Directs enterprise technology architecture, digital product delivery and full-scale IT operations across all verticals.',
    mandateLabel: 'Core Mandate',
    points: [
      'Owns technical architecture decisions across web, mobile & game verticals',
      'Leads client engagement, scoping and delivery governance',
      'Drives engineering culture, hiring and quality standards',
    ],
    meta: 'DIN: 11857323 · Appointed: 28/07/2026',
    status: 'Full Operations Lead',
  },
  {
    name: 'Ranajit Adhikari',
    role: 'Director',
    badge: 'Board of Directors',
    initials: 'RA',
    tone: 'indigo',
    mandate: 'Statutory governance, financial oversight and corporate compliance aligned with the Companies Act, 2013.',
    mandateLabel: 'Statutory Mandate',
    points: [
      'Board governance & regulatory filings with RoC Kolkata',
      'Financial controls, budgeting & vendor oversight',
      'Compliance, risk management & statutory reporting',
    ],
    meta: 'DIN: 11857324',
    status: 'DIN Verified',
  },
  {
    name: 'Dream Ads Engineering',
    role: 'Delivery & Operations',
    badge: 'Executive Management',
    initials: 'DE',
    tone: 'slate',
    mandate: 'A multidisciplinary squad of engineers, designers and live-ops specialists executing every engagement to SLA.',
    mandateLabel: 'Delivery Mandate',
    points: [
      'Cross-functional squads: web, mobile, game & infrastructure',
      'Agile sprints with weekly staging demos',
      'Post-launch monitoring, live-ops & retainer support',
    ],
    meta: 'Squad-based Delivery',
    status: 'Active Squad',
  },
];

/* ============================== PROJECTS ============================== */

export interface Project {
  id: string;
  title: string;
  category: 'Game Development' | 'Mobile Apps' | 'Enterprise Systems' | 'Web Applications';
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'battle-royale-arena',
    title: 'Arena Blitz — Battle Royale Mini',
    category: 'Game Development',
    summary: '60-player WebGL battle royale with real-time sync and seasonal live-ops.',
    problem: 'Client needed a browser game with AAA feel but sub-3s load on mid-tier mobiles.',
    solution: 'Object-pooled networking, atlas-compressed assets and region-sharded Photon rooms cut load time to 1.8s and held 60fps on mid-range Android.',
    stack: ['Unity', 'WebGL', 'Photon', 'Redis', 'PlayFab'],
  },
  {
    id: 'quiz-live-show',
    title: 'QuizLive — Interactive Trivia Show',
    category: 'Game Development',
    summary: 'Live hosted trivia with 50k concurrent viewers and instant payouts.',
    problem: 'Latency between host video and answer lock caused unfair results at scale.',
    solution: 'Server-authoritative answer windows with NTP-synced locks and WebSocket fanout handled 50k CCU with sub-200ms answer adjudication.',
    stack: ['Three.js', 'Node.js', 'WebSocket', 'MongoDB', 'AWS'],
  },
  {
    id: 'field-force-app',
    title: 'FieldForce — Sales Tracking App',
    category: 'Mobile Apps',
    summary: 'Offline-first field employee tracking with geo-fenced attendance.',
    problem: 'Sales team in low-connectivity regions lost daily activity data.',
    solution: 'Offline queue with conflict-free sync, geo-fenced check-ins and manager dashboards — 100% data capture even after 48h offline.',
    stack: ['Flutter', 'SQLite', 'Node.js', 'PostgreSQL', 'Mapbox'],
  },
  {
    id: 'stream-connect',
    title: 'StreamConnect — Live Calling SDK',
    category: 'Mobile Apps',
    summary: 'In-app 1:1 and group video calling with virtual gifting layer.',
    problem: 'Third-party calling SDK costs scaled unpredictably with DAU.',
    solution: 'Hybrid WebRTC mesh for small rooms, SFU for large ones plus adaptive bitrate — call cost per user dropped 46%.',
    stack: ['React Native', 'WebRTC', 'Janus', 'Firebase', 'AWS'],
  },
  {
    id: 'nimbus-erp',
    title: 'Nimbus ERP — Manufacturing Suite',
    category: 'Enterprise Systems',
    summary: 'End-to-end ERP: procurement, inventory, production & GST billing.',
    problem: 'Plant ran on 14 disconnected spreadsheets with no audit trail.',
    solution: 'Modular ERP with role-based approvals, barcode inventory and GST invoicing — month-end close went from 9 days to 26 hours.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'ledgerdesk-crm',
    title: 'LedgerDesk — CRM & Invoicing',
    category: 'Enterprise Systems',
    summary: 'CRM with automated follow-ups, estimates and receivables aging.',
    problem: 'Sales follow-ups were manual and receivables aged past 90 days.',
    solution: 'Workflow engine with scheduled touchpoints and aging dashboards reduced DSO by 31% in one quarter.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'BullMQ'],
  },
  {
    id: 'orbit-saas',
    title: 'Orbit — Multi-tenant SaaS Portal',
    category: 'Web Applications',
    summary: 'White-label analytics SaaS serving 40+ client organizations.',
    problem: 'Per-client forks of the codebase made fixes a 10× effort.',
    solution: 'Tenant-scoped data model, feature flags and branded theming — one codebase ships updates to all 40 tenants simultaneously.',
    stack: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Terraform'],
  },
  {
    id: 'mission-control',
    title: 'Mission Control — Ops Dashboard',
    category: 'Web Applications',
    summary: 'Real-time operations cockpit streaming metrics from 200+ devices.',
    problem: 'Ops teams polled databases every 30s causing load spikes.',
    solution: 'Event-driven pipeline with WebSocket subscriptions and downsampling — dashboard refresh in <1s with 70% fewer DB reads.',
    stack: ['React', 'Node.js', 'Socket.IO', 'TimescaleDB', 'Grafana'],
  },
];

/* ============================== JOBS ============================== */

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  experience: string;
  responsibilities: string[];
  requirements: string[];
}

export const JOBS: Job[] = [
  {
    id: 'senior-game-dev',
    title: 'Senior Game Developer (Unity)',
    department: 'Game Engineering',
    location: 'Remote / Murshidabad, WB',
    type: 'Full-time',
    experience: '4+ years',
    responsibilities: ['Own gameplay systems end-to-end', 'Optimize for mid-tier mobiles', 'Ship live-ops events'],
    requirements: ['Strong C# & Unity', 'Multiplayer experience with Photon or Mirror', 'Published titles on store'],
  },
  {
    id: 'fullstack-node',
    title: 'Full-Stack Developer (Node.js / React)',
    department: 'Product Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    experience: '3+ years',
    responsibilities: ['Build REST/GraphQL APIs', 'Craft React/Next.js frontends', 'Review architecture decisions'],
    requirements: ['Expert Node.js & TypeScript', 'React/Next.js production experience', 'PostgreSQL or MongoDB'],
  },
  {
    id: 'flutter-dev',
    title: 'Flutter Mobile Developer',
    department: 'Mobile Engineering',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    responsibilities: ['Develop cross-platform apps', 'Integrate SDKs & payments', 'Own store releases'],
    requirements: ['Solid Dart & Flutter', 'Native channel experience', 'Play Store / App Store shipped apps'],
  },
  {
    id: 'devops-engineer',
    title: 'DevOps / Cloud Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    responsibilities: ['Manage VPS/Nginx/Docker fleets', 'Automate CI/CD & backups', 'Monitoring & incident response'],
    requirements: ['Linux & Nginx mastery', 'Docker/compose in production', 'Backup/DR playbook experience'],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer (Product)',
    department: 'Design',
    location: 'Remote',
    type: 'Contract',
    experience: '2+ years',
    responsibilities: ['Design flows & prototypes', 'Maintain design systems', 'Partner with engineering on QA polish'],
    requirements: ['Figma expertise', 'Strong visual/interaction sense', 'Portfolio of shipped products'],
  },
  {
    id: 'intern-engineer',
    title: 'Software Engineering Intern',
    department: 'Engineering',
    location: 'Hybrid — Murshidabad, WB',
    type: 'Internship',
    experience: '0–1 years',
    responsibilities: ['Ship features with mentorship', 'Write tests & docs', 'Participate in code reviews'],
    requirements: ['CS fundamentals', 'One of: JS, Python, Java', 'Eagerness to learn'],
  },
];
