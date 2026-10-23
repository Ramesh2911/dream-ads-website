export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: 'game' | 'software' | 'mobile' | 'web' | 'cloud';
  headline: string;
  description: string;
  deliverables: string[];
  stack: string[];
  process: { step: string; detail: string }[];
  accent: 'cyan' | 'indigo';
}

export const SERVICES: Service[] = [
  {
    slug: 'game-development',
    title: 'Game Development',
    short: '2D/3D mobile games, WebGL mini-games and live interactive streaming experiences.',
    icon: 'game',
    headline: 'Games engineered for retention & revenue',
    description:
      'From hyper-casual WebGL mini-games to full 3D mobile titles and live interactive streaming games, we build performant, monetizable experiences across Android, iOS and the browser. Our pipelines cover gameplay systems, physics, live-ops events, ad mediation and analytics.',
    deliverables: [
      '2D/3D game design & prototyping',
      'Android / iOS / WebGL builds',
      'Live streaming interactive game engines',
      'In-app purchase & ad monetization integration',
      'Live-ops events, leaderboards & anti-cheat basics',
      'Store submission & performance optimization',
    ],
    stack: ['Unity', 'Cocos Creator', 'Three.js', 'WebGL', 'Photon', 'Firebase', 'PlayFab'],
    process: [
      { step: 'Concept & mechanics', detail: 'Core loop design, reference analysis, vertical slice prototype.' },
      { step: 'Production', detail: 'Art, audio, systems implementation with weekly playable builds.' },
      { step: 'Polish & QA', detail: 'Device matrix testing, balancing, crash-free sessions > 99.5%.' },
      { step: 'Launch & live-ops', detail: 'Store release, telemetry, events and iterative updates.' },
    ],
    accent: 'cyan',
  },
  {
    slug: 'enterprise-software',
    title: 'Custom Enterprise Software',
    short: 'ERP, CRM, billing, invoicing and automated business systems built to your process.',
    icon: 'software',
    headline: 'Office software that fits your business, not the reverse',
    description:
      'We design and build custom ERP, CRM, billing, inventory and workflow-automation systems that replace spreadsheets and disconnected tools. Role-based access, audit trails and reporting come as standard — so operations scale without chaos.',
    deliverables: [
      'Process discovery & system architecture',
      'ERP / CRM / HRM module development',
      'Billing, invoicing & GST-ready documents',
      'Workflow automation & approvals',
      'Role-based dashboards & analytics',
      'Data migration from legacy tools',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'React', 'Redis', 'Docker'],
    process: [
      { step: 'Discovery', detail: 'Stakeholder interviews, process mapping, scope document.' },
      { step: 'Architecture', detail: 'Data model, module boundaries, security & roles design.' },
      { step: 'Build & integrate', detail: 'Iterative delivery with staging demos every week.' },
      { step: 'Rollout', detail: 'Training, migration, hypercare and handover docs.' },
    ],
    accent: 'indigo',
  },
  {
    slug: 'mobile-applications',
    title: 'Mobile Application Development',
    short: 'Native Android/iOS, Flutter and React Native apps with streaming & calling SDKs.',
    icon: 'mobile',
    headline: 'Mobile products users keep on their home screen',
    description:
      'Native Android/iOS or cross-platform Flutter & React Native — we ship production apps with clean architecture, offline-first data and rich media. Experienced with live streaming, video/audio calling SDKs, push notifications and app-store compliance.',
    deliverables: [
      'Native Android (Kotlin) & iOS (Swift) apps',
      'Flutter / React Native cross-platform builds',
      'Live streaming & WebRTC calling integrations',
      'Push notifications & deep linking',
      'Offline sync & secure local storage',
      'Play Store / App Store submission support',
    ],
    stack: ['Kotlin', 'Swift', 'Flutter', 'React Native', 'WebRTC', 'Firebase', 'Expo'],
    process: [
      { step: 'UX-first design', detail: 'Wireframes and clickable prototypes before code.' },
      { step: 'Agile sprints', detail: 'Two-week sprints with TestFlight/internal tracks.' },
      { step: 'Hardening', detail: 'Crash analytics, performance profiling, accessibility pass.' },
      { step: 'Release', detail: 'Store assets, phased rollout and post-launch monitoring.' },
    ],
    accent: 'cyan',
  },
  {
    slug: 'web-applications',
    title: 'Web Application Engineering',
    short: 'SaaS platforms, Next.js/React enterprise portals and microservices.',
    icon: 'web',
    headline: 'SaaS platforms & enterprise portals built to scale',
    description:
      'We engineer multi-tenant SaaS products, customer portals and internal enterprise web apps with modern React/Next.js frontends and API-first backends. Microservice-ready architecture, auth, billing and observability baked in from day one.',
    deliverables: [
      'SaaS multi-tenant architecture',
      'Next.js / React enterprise portals',
      'REST & GraphQL API design',
      'SSO, RBAC and audit logging',
      'Subscription billing integrations',
      'CI/CD pipelines & observability',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS'],
    process: [
      { step: 'Product framing', detail: 'User journeys, information architecture, design system.' },
      { step: 'Incremental delivery', detail: 'Vertical slices shipped behind feature flags.' },
      { step: 'Scale testing', detail: 'Load tests, query profiling, caching strategy.' },
      { step: 'Handover', detail: 'Docs, runbooks and knowledge transfer sessions.' },
    ],
    accent: 'indigo',
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud Infrastructure & API Architecture',
    short: 'Node/Python services, aaPanel/Nginx VPS deployments and database backups.',
    icon: 'cloud',
    headline: 'Infrastructure that stays up, scales down, costs less',
    description:
      'From single VPS setups with aaPanel/Nginx to containerized deployments, we architect reliable infrastructure: automated database backups, SSL, monitoring, staging/production separation and API gateways your team can actually operate.',
    deliverables: [
      'VPS provisioning (aaPanel / Nginx / Docker)',
      'CI/CD & zero-downtime deployments',
      'Database backup & disaster recovery plans',
      'SSL, firewall, WAF & rate limiting',
      'Uptime monitoring & alerting',
      'API gateway & microservice orchestration',
    ],
    stack: ['Nginx', 'aaPanel', 'Docker', 'GitHub Actions', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
    process: [
      { step: 'Audit', detail: 'Current stack review, risk and cost assessment.' },
      { step: 'Blueprint', detail: 'Topology, environments, backup & rollback strategy.' },
      { step: 'Implement', detail: 'IaC-style configs, pipelines, monitoring dashboards.' },
      { step: 'Operate', detail: 'Handover runbooks, on-call guidance, optional retainer.' },
    ],
    accent: 'cyan',
  },
];

export interface Project {
  id: string;
  title: string;
  category: 'Game Development' | 'Mobile Apps' | 'Enterprise Systems' | 'Web Applications';
  summary: string;
  problem: string;
  solution: string;
  stack: string[];
  accent: 'cyan' | 'indigo';
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
    accent: 'cyan',
  },
  {
    id: 'quiz-live-show',
    title: 'QuizLive — Interactive Trivia Show',
    category: 'Game Development',
    summary: 'Live hosted trivia with 50k concurrent viewers and instant payouts.',
    problem: 'Latency between host video and answer lock caused unfair results at scale.',
    solution: 'Server-authoritative answer windows with NTP-synced locks and WebSocket fanout handled 50k CCU with sub-200ms answer adjudication.',
    stack: ['Three.js', 'Node.js', 'WebSocket', 'MongoDB', 'AWS'],
    accent: 'indigo',
  },
  {
    id: 'field-force-app',
    title: 'FieldForce — Sales Tracking App',
    category: 'Mobile Apps',
    summary: 'Offline-first field employee tracking with geo-fenced attendance.',
    problem: 'Sales team in low-connectivity regions lost daily activity data.',
    solution: 'Offline queue with conflict-free sync, geo-fenced check-ins and manager dashboards — 100% data capture even after 48h offline.',
    stack: ['Flutter', 'SQLite', 'Node.js', 'PostgreSQL', 'Mapbox'],
    accent: 'cyan',
  },
  {
    id: 'stream-connect',
    title: 'StreamConnect — Live Calling SDK',
    category: 'Mobile Apps',
    summary: 'In-app 1:1 and group video calling with virtual gifting layer.',
    problem: 'Third-party calling SDK costs scaled unpredictably with DAU.',
    solution: 'Hybrid WebRTC mesh for small rooms, SFU for large ones plus adaptive bitrate — call cost per user dropped 46%.',
    stack: ['React Native', 'WebRTC', 'Janus', 'Firebase', 'AWS'],
    accent: 'indigo',
  },
  {
    id: 'nimbus-erp',
    title: 'Nimbus ERP — Manufacturing Suite',
    category: 'Enterprise Systems',
    summary: 'End-to-end ERP: procurement, inventory, production & GST billing.',
    problem: 'Plant ran on 14 disconnected spreadsheets with no audit trail.',
    solution: 'Modular ERP with role-based approvals, barcode inventory and GST invoicing — month-end close went from 9 days to 26 hours.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    accent: 'cyan',
  },
  {
    id: 'ledgerdesk-crm',
    title: 'LedgerDesk — CRM & Invoicing',
    category: 'Enterprise Systems',
    summary: 'CRM with automated follow-ups, estimates and receivables aging.',
    problem: 'Sales follow-ups were manual and receivables aged past 90 days.',
    solution: 'Workflow engine with scheduled touchpoints and aging dashboards reduced DSO by 31% in one quarter.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'BullMQ'],
    accent: 'indigo',
  },
  {
    id: 'orbit-saas',
    title: 'Orbit — Multi-tenant SaaS Portal',
    category: 'Web Applications',
    summary: 'White-label analytics SaaS serving 40+ client organizations.',
    problem: 'Per-client forks of the codebase made fixes a 10× effort.',
    solution: 'Tenant-scoped data model, feature flags and branded theming — one codebase ships updates to all 40 tenants simultaneously.',
    stack: ['Next.js', 'GraphQL', 'PostgreSQL', 'AWS', 'Terraform'],
    accent: 'cyan',
  },
  {
    id: 'mission-control',
    title: 'Mission Control — Ops Dashboard',
    category: 'Web Applications',
    summary: 'Real-time operations cockpit streaming metrics from 200+ devices.',
    problem: 'Ops teams polled databases every 30s causing load spikes.',
    solution: 'Event-driven pipeline with WebSocket subscriptions and downsampling — dashboard refresh in <1s with 70% fewer DB reads.',
    stack: ['React', 'Node.js', 'Socket.IO', 'TimescaleDB', 'Grafana'],
    accent: 'indigo',
  },
];

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
    requirements: ['Strong C# & Unity', 'Multiplayer/experience with Photon or Mirror', 'Published titles on store'],
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
    requirements: ['CS fundamentals', 'One of: JS, Python, Java', ' Eagerness to learn'],
  },
];
