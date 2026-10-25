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
    short: 'Bespoke enterprise ERPs, CRM platforms, automated business workflows and multi-tenant backends.',
    icon: Code2,
    chip: 'Enterprise Systems',
    headline: 'Bespoke software engineered around your process',
    description:
      'We design and build custom ERP, CRM, billing, inventory and workflow-automation systems that replace spreadsheets and disconnected tools. Role-based access, audit trails and reporting come as standard — so operations scale without chaos.',
    deliverables: [
      'Bespoke cloud ERP & CRM custom architectures',
      'Automated enterprise business workflow pipelines',
      'High-security multi-tenant database structures',
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
    short: 'Scalable Next.js/React platforms, headless CMS integrations and high-performance corporate portals.',
    icon: Globe,
    chip: 'Cloud Portals',
    headline: 'SaaS platforms & enterprise portals built to scale',
    description:
      'We engineer multi-tenant SaaS products, customer portals and internal enterprise web apps with modern React/Next.js frontends and API-first backends. Microservice-ready architecture, auth, billing and observability baked in from day one.',
    deliverables: [
      'Next.js, React & TypeScript enterprise portals',
      'Sub-second Core Web Vitals performance',
      'PWA & offline-first responsive architectures',
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
    short: 'Native Swift & Kotlin apps, cross-platform Flutter/React Native with 60 FPS interfaces.',
    icon: Smartphone,
    chip: 'Mobile Apps',
    headline: 'Mobile products users keep on their home screen',
    description:
      'Native Android/iOS or cross-platform Flutter & React Native — we ship production apps with clean architecture, offline-first data and rich media. Experienced with live streaming, video/audio calling SDKs, push notifications and app-store compliance.',
    deliverables: [
      'Native Swift (iOS) & Kotlin (Android) codebases',
      'High-performance Flutter & React Native frameworks',
      'Biometric authentication & store compliance',
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
    short: 'Immersive 3D mobile & WebGL titles with physics, live-ops and monetization pipelines.',
    icon: Gamepad2,
    chip: '3D Game Engine',
    headline: 'Games engineered for retention & revenue',
    description:
      'From hyper-casual WebGL mini-games to full 3D mobile titles and live interactive streaming games, we build performant, monetizable experiences across Android, iOS and the browser. Our pipelines cover gameplay systems, physics, live-ops events, ad mediation and analytics.',
    deliverables: [
      '2D/3D game design & prototyping',
      'Android / iOS / WebGL builds with 60 FPS targets',
      'In-app purchase & ad monetization integration',
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
    short: 'High-concurrency netcode, tournament nodes and real-time sync for competitive games.',
    icon: Crosshair,
    chip: 'Esports Netcode',
    headline: 'Battle-tested multiplayer netcode at scale',
    description:
      'Real-time multiplayer demands server-authoritative design. We architect matchmaking, room sharding, anti-cheat foundations and tournament infra that holds 60fps sync under competitive load — from 8-player rooms to 100-player battle royales.',
    deliverables: [
      'Server-authoritative multiplayer netcode',
      'Matchmaking, room sharding & reconnection',
      'Tournament brackets & live spectating',
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
    short: 'Low-latency live & VOD platforms with CDN, DRM-ready pipelines and adaptive bitrate.',
    icon: Radio,
    chip: 'Media Tech',
    headline: 'Streaming infrastructure without the buffering',
    description:
      'End-to-end OTT engineering: ingest, transcoding ladders, CDN distribution, adaptive bitrate players and monetization hooks. Built for live events and VOD libraries with sub-second latency targets and 99.9% delivery SLAs.',
    deliverables: [
      'Live & VOD ingest with transcoding ladders',
      'CDN distribution & adaptive bitrate players',
      'DRM-ready packaging & analytics dashboard',
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
    short: 'Automated waterfall & bidding mediation setup maximizing eCPM across networks.',
    icon: Coins,
    chip: 'AdTech Yield',
    headline: 'Ad revenue engineered, not left to chance',
    description:
      'We configure and optimize AdMob mediation with in-app bidding across Meta Audience Network, Unity Ads, AppLovin and more. Waterfall tuning, A/B experiments and eCPM analytics turn impressions into predictable revenue.',
    deliverables: [
      'AdMob mediation & in-app bidding setup',
      'Multi-network waterfall optimization',
      'eCPM analytics & A/B experiment framework',
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
    short: 'Programmatic SDK integration & bidding for Meta demand across apps and platforms.',
    icon: Megaphone,
    chip: 'Meta Bidding',
    headline: 'Unlock Meta demand with clean SDK integration',
    description:
      'Native integration of Meta Audience Network with bidding, format best-practices and mediation alongside AdMob. Privacy-compliant signals, banner/interstitial/rewarded placements tuned for both UX and revenue.',
    deliverables: [
      'Meta AN SDK & bidding integration',
      'Rewarded, interstitial & banner best practices',
      'Privacy-compliant signal configuration',
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
    short: 'Rank-first entity indexing, schema engineering and app store optimization.',
    icon: Search,
    chip: 'SEO & ASO',
    headline: 'Be found — on Google and on the stores',
    description:
      'Technical SEO foundations: crawl architecture, Core Web Vitals, schema.org entity markup and content systems. Paired with ASO: keyword-driven store listings, screenshot funnels and review velocity strategies that lift install conversion.',
    deliverables: [
      'Technical SEO audit & implementation',
      'Schema.org entity & knowledge-graph markup',
      'ASO keyword strategy & store listing optimization',
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
    desc: 'SaaS platforms, bespoke ERPs, banking integrations and high-load media systems shipped.',
    chip: '100% On-Spec',
    tone: 'blue',
  },
  {
    value: 99.9,
    decimals: 1,
    suffix: '%',
    label: 'Network Uptime',
    desc: 'Multi-region edge failover with sub-second health re-routing across cloud zones.',
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
    desc: 'Battle-ready multiplayer architectures, WebGL pipelines and cloud topologies delivered.',
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
  { slug: 'custom-it-software', title: 'Custom IT Software & ERP', chip: 'Enterprise Systems', price: '₹45,000 – ₹1,80,000', blurb: 'Bespoke ERP/CRM for growing operations.', deployments: '120+ Deployments', timeline: '3–6 Wks' },
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
    sub: 'MCA, RoC Kolkata & Regulatory Filings',
    icon: 'scale',
    items: [
      {
        q: 'What is the corporate standing of Dream Ads Multi Solutions?',
        a: 'Dream Ads Multi Solutions Private Limited is a Private Incorporated company registered with the Registrar of Companies, Kolkata (West Bengal). It was incorporated on 28 July 2026 and currently operates with an Active MCA status.',
        mono: 'CIN: U62011WR2026PTC295658',
      },
      {
        q: 'How can I verify the company\'s tax credentials?',
        a: 'The company\'s GSTIN and PAN can be verified on the official Government of India GST and Income Tax portals. Both identifiers are displayed publicly on our governance page and corporate communications.',
        mono: 'GSTIN: 19AAMCD9416G1ZA · PAN: AAMCD9416G',
      },
      {
        q: 'Are the directors MCA and DIN verified?',
        a: 'Yes. Both directors hold active Director Identification Numbers (DINs) verified through the MCA portal. Their appointments are on the public registry and available for inspection.',
      },
      {
        q: 'How is client data privacy handled?',
        a: 'We follow DPDPA-aligned data handling practices with role-based access, audit logging and least-privilege policies. Project data is segregated per client and never reused across engagements without written consent.',
      },
    ],
  },
  {
    title: 'Service Delivery Timelines',
    sub: 'Sprint Cadence, SLAs & Milestone Phases',
    icon: 'stopwatch',
    items: [
      {
        q: 'What are typical enterprise delivery turnarounds?',
        a: 'Web portals deliver in 2–4 weeks, mobile apps in 3–5 weeks and custom ERP systems in 3–6 weeks. Larger multiplayer and streaming platforms run 5–9 weeks with milestone gates.',
      },
      {
        q: 'How do 3D game and multiplayer projects handle milestone gates?',
        a: 'Every game engagement runs vertical-slice → production → polish → live-ops phases, each with a playable build demo and sign-off before the next phase begins.',
      },
      {
        q: 'What uptime SLAs do you offer post-launch?',
        a: 'Infrastructure retainers include 99.9% uptime SLAs with defined incident response windows. Monitoring, alerting and documented runbooks are delivered with every production handover.',
      },
      {
        q: 'Can you expedite with a dedicated squad?',
        a: 'Yes. Dedicated squads can compress timelines by 30–40% depending on scope. Expedited engagements are quoted separately and include daily standups with your stakeholders.',
      },
    ],
  },
  {
    title: 'Contract Security & IP',
    sub: 'Bilateral NDAs, 100% IP Transfer & Audits',
    icon: 'shield',
    items: [
      {
        q: 'Who owns the intellectual property of the delivered work?',
        a: 'You do. 100% IP transfer of custom code, designs and documentation is included in every contract upon final milestone payment. We claim no residual licence over your product.',
      },
      {
        q: 'Do you sign NDAs before project discussions?',
        a: 'Yes. Mutual NDA coverage is standard before any technical deep-dive. We can countersign your paper or provide our standard mutual NDA template.',
      },
      {
        q: 'Is source-code escrow and audit available?',
        a: 'Source escrow arrangements and independent code audits are available on enterprise engagements. Repositories can be hosted entirely under your organisation from day one.',
      },
      {
        q: 'How does milestone-based billing work?',
        a: 'Engagements typically split 40/30/30 across kickoff, mid-milestone and delivery. Fixed-scope projects never exceed the agreed quote without a signed change order.',
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
    meta: 'Appointed: 28/07/2026',
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
    meta: 'DIN: Verified',
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
