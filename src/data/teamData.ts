export type Department =
  | 'All'
  | 'Leadership & Operations'
  | 'Discord & Community'
  | 'Streaming & Creator'
  | 'Video & Creative'
  | 'Social Media & Marketing'
  | 'Client Success & QA';

export interface TeamMember {
  id: string;
  roleId: string;
  name: string;
  initials: string;
  jobTitle: string;
  department: Department;
  bio: string;
  responsibilities: string[];
  skills: string[];
  availability: 'Available for Projects' | 'Allocated to Retainers' | 'Accepting New Clients';
  timezone: string;
  portfolioHighlight: string;
}

export const teamDirectory: TeamMember[] = [
  // Leadership & Operations
  {
    id: 'team-01',
    roleId: 'DIR-01',
    name: 'Superb Apex Director',
    initials: 'SAD',
    jobTitle: 'Agency Director & Lead Strategist',
    department: 'Leadership & Operations',
    bio: 'Oversees high-level creative direction, project scoping, and cross-departmental delivery across all Superb Apex creator accounts.',
    responsibilities: [
      'Client onboarding alignment & scoping calls',
      'Quality assurance across all delivered assets',
      'Architecting multi-platform growth strategies',
    ],
    skills: ['Creative Direction', 'Project Scoping', 'Creator Operations', 'Brand Strategy'],
    availability: 'Accepting New Clients',
    timezone: 'UTC / EST',
    portfolioHighlight: 'Creator Brand Architecture & Scaling',
  },
  {
    id: 'team-02',
    roleId: 'OPS-02',
    name: 'Superb Apex Operations',
    initials: 'SAO',
    jobTitle: 'Operations & Workflow Manager',
    department: 'Leadership & Operations',
    bio: 'Manages daily production sprint schedules, client asset pipelines, turnaround deadlines, and staff shift allocations at Superb Apex Digital.',
    responsibilities: [
      'Sprint coordination & calendar oversight',
      'Client portal and secure credential vault management',
      'Delivery timeline accountability',
    ],
    skills: ['Sprint Planning', 'Client Portals', 'Asana / ClickUp', 'Process Optimization'],
    availability: 'Allocated to Retainers',
    timezone: 'UTC+1 / CET',
    portfolioHighlight: 'Turnaround Pipeline Management',
  },
  {
    id: 'team-03',
    roleId: 'PM-03',
    name: 'Superb Apex Project Lead',
    initials: 'SAP',
    jobTitle: 'Senior Project Manager',
    department: 'Leadership & Operations',
    bio: 'Primary liaison for one-time client projects, tracking revision milestones, creative feedback, and sign-offs for Superb Apex clients.',
    responsibilities: [
      'Single point of contact for active project stages',
      'Client revision tracking and milestone updates',
      'Final asset packaging and intellectual property transfer',
    ],
    skills: ['Client Communication', 'Milestone Tracking', 'Notion Systems', 'Quality Review'],
    availability: 'Available for Projects',
    timezone: 'UTC / GMT',
    portfolioHighlight: 'End-to-End Client Milestones',
  },

  // Discord & Community
  {
    id: 'team-04',
    roleId: 'DISC-01',
    name: 'Apex Discord Architect',
    initials: 'ADA',
    jobTitle: 'Senior Discord Server Architect',
    department: 'Discord & Community',
    bio: 'Specialist in complex server role hierarchies, zero-trust permission auditing, bot orchestration, and automated community onboarding.',
    responsibilities: [
      'Discord category and channel taxonomy blueprinting',
      'Permission containment and anti-leak configuration',
      'Custom webhook alerts and multi-bot integrations',
    ],
    skills: ['Discord API', 'Permission Matrices', 'Bot Orchestration', 'Onboarding Flows'],
    availability: 'Available for Projects',
    timezone: 'UTC-5 / EST',
    portfolioHighlight: 'Enterprise-Grade Discord Infrastructure',
  },
  {
    id: 'team-05',
    roleId: 'DISC-02',
    name: 'Apex Moderation Lead',
    initials: 'AML',
    jobTitle: 'Community Moderation Lead',
    department: 'Discord & Community',
    bio: 'Supervises moderation shift schedules, anti-raid defensive bot scripting, staff handbooks, and incident escalation protocols.',
    responsibilities: [
      'Moderator shift scheduling and handoffs',
      'Community rule enforcement and ticket management',
      'Weekly community sentiment reporting',
    ],
    skills: ['Crisis Management', 'Community Guidelines', 'Staff Training', 'Raid Prevention'],
    availability: 'Accepting New Clients',
    timezone: 'UTC+2 / EET',
    portfolioHighlight: 'Community Safety & Incident Playbooks',
  },
  {
    id: 'team-06',
    roleId: 'DISC-03',
    name: 'Apex Community Lead',
    initials: 'ACL',
    jobTitle: 'Community Engagement Coordinator',
    department: 'Discord & Community',
    bio: 'Designs and hosts interactive community activations, including weekly game nights, voice Q&As, and engagement prompts.',
    responsibilities: [
      'Weekly community activation schedules',
      'Voice channel stage event production',
      'Engagement poll campaigns and reward systems',
    ],
    skills: ['Event Production', 'Stage Channels', 'Gamification', 'Member Retention'],
    availability: 'Available for Projects',
    timezone: 'UTC / GMT',
    portfolioHighlight: 'Interactive Community Event Series',
  },

  // Streaming & Creator
  {
    id: 'team-07',
    roleId: 'STRM-01',
    name: 'Apex Broadcast Engineer',
    initials: 'ABE',
    jobTitle: 'Lead Twitch & Broadcast Engineer',
    department: 'Streaming & Creator',
    bio: 'Broadcast technician specializing in OBS scene architecture, low-latency audio routing, Stream Deck mapping, and encoding stability.',
    responsibilities: [
      'OBS Studio / Streamlabs profile architecture',
      'Microphone EQ, noise suppression, and multi-track VOD setup',
      'Technical live troubleshooting during creator rehearsals',
    ],
    skills: ['OBS Studio', 'Audio Engineering', 'Stream Deck', 'Encoding Optimization'],
    availability: 'Available for Projects',
    timezone: 'UTC-4 / EDT',
    portfolioHighlight: 'Broadcast Engineering & Audio Mastering',
  },
  {
    id: 'team-08',
    roleId: 'STRM-02',
    name: 'Apex Motion Designer',
    initials: 'AMD',
    jobTitle: 'Stream Motion Graphics Designer',
    department: 'Streaming & Creator',
    bio: 'Animates broadcast overlays, custom stinger transitions with sound effects, alert popups, and Starting Soon motion scenes.',
    responsibilities: [
      'Custom stinger scene transition development (.webm alpha)',
      'Looping background screen motion graphics',
      'StreamElements / Streamlabs alert widget styling',
    ],
    skills: ['After Effects', 'Motion Design', 'Alpha WebM', 'Twitch Emotes'],
    availability: 'Accepting New Clients',
    timezone: 'UTC+1 / CET',
    portfolioHighlight: 'Motion Broadcast Packaging Suites',
  },

  // Video & Creative Production
  {
    id: 'team-09',
    roleId: 'VID-01',
    name: 'Apex Senior Editor',
    initials: 'ASE',
    jobTitle: 'Senior Video Editor & Post-Producer',
    department: 'Video & Creative',
    bio: 'Master of high-retention editing pacing, kinetic sound design, visual storytelling, and narrative momentum for YouTube videos.',
    responsibilities: [
      'Long-form video editing in Premiere Pro & DaVinci Resolve',
      'Dynamic retention pacing and dead-air trimming',
      'Layered sound design, audio leveling, and color grading',
    ],
    skills: ['Premiere Pro', 'DaVinci Resolve', 'Sound Design', 'Retention Pacing'],
    availability: 'Allocated to Retainers',
    timezone: 'UTC / GMT',
    portfolioHighlight: 'High-Retention Narrative Video Editing',
  },
  {
    id: 'team-10',
    roleId: 'VID-02',
    name: 'Apex Packaging Specialist',
    initials: 'APS',
    jobTitle: 'High-CTR Thumbnail Specialist',
    department: 'Video & Creative',
    bio: 'Specialist in thumbnail psychology, high-contrast visual hierarchy, facial expression grading, and mobile thumbnail readability.',
    responsibilities: [
      'Packaging concept ideation alongside video titles',
      'High-contrast thumbnail compositing & typography design',
      'A/B test variation generation for click-through testing',
    ],
    skills: ['Photoshop', 'Visual Hierarchy', 'Click-Through Strategy', 'Compositing'],
    availability: 'Available for Projects',
    timezone: 'UTC-5 / EST',
    portfolioHighlight: 'High-CTR YouTube Packaging Suites',
  },
  {
    id: 'team-11',
    roleId: 'VID-03',
    name: 'Apex Shorts Editor',
    initials: 'ASh',
    jobTitle: 'Short-Form Video Editor (Shorts/TikTok)',
    department: 'Video & Creative',
    bio: 'Focuses on 9:16 vertical video pacing, 3-second hook mechanics, kinetic animated subtitle styling, and audio trend matching.',
    responsibilities: [
      'Vertical clip extraction from long-form streams and podcasts',
      'Dynamic animated word-by-word subtitles and graphics',
      'Fast-paced hook optimization for TikTok & YouTube Shorts',
    ],
    skills: ['Short-Form Video', 'CapCut / Premiere', 'Kinetic Typography', 'Hook Strategy'],
    availability: 'Accepting New Clients',
    timezone: 'UTC+2 / CEST',
    portfolioHighlight: 'Viral Short-Form Content Repurposing',
  },

  // Social Media & Marketing
  {
    id: 'team-12',
    roleId: 'SOC-01',
    name: 'Apex Social Strategist',
    initials: 'ASS',
    jobTitle: 'Social Media Strategist & Copywriter',
    department: 'Social Media & Marketing',
    bio: 'Crafts creator brand tone of voice, editorial calendar roadmaps, thread writing on X, and educational carousel graphics.',
    responsibilities: [
      'Monthly editorial content calendar scheduling',
      'High-authority thread copywriting and carousel design',
      'Trend discovery and audience engagement reporting',
    ],
    skills: ['Copywriting', 'Content Calendars', 'Audience Growth', 'X & Instagram Strategy'],
    availability: 'Allocated to Retainers',
    timezone: 'UTC / EST',
    portfolioHighlight: 'Organic Content Architecture & Calendars',
  },
  {
    id: 'team-13',
    roleId: 'SOC-02',
    name: 'Apex Brand Designer',
    initials: 'ABD',
    jobTitle: 'Brand Identity & Visual Designer',
    department: 'Social Media & Marketing',
    bio: 'Designs vector logos, custom twitch emotes, subscriber badge tiers, merchandise assets, and comprehensive brand guidebooks.',
    responsibilities: [
      'Primary logo and icon system design',
      'Vector Twitch badges, emotes, and channel panels',
      'Social header packages and brand guidelines manuals',
    ],
    skills: ['Illustrator', 'Figma', 'Vector Iconography', 'Badge Tier Systems'],
    availability: 'Available for Projects',
    timezone: 'UTC+1 / CET',
    portfolioHighlight: 'Creator Brand Ecosystems & Badges',
  },

  // Client Success & QA
  {
    id: 'team-14',
    roleId: 'QA-01',
    name: 'Apex QA Specialist',
    initials: 'AQA',
    jobTitle: 'Quality Assurance & Delivery Specialist',
    department: 'Client Success & QA',
    bio: 'Audits every export before client review: checks aspect ratios, audio peaks, color grading, permissions, and download links.',
    responsibilities: [
      'Strict pre-delivery checklist verification across all orders',
      'Asset resolution, alpha transparency, and bitrate inspection',
      'Link health and permission testing on customer servers',
    ],
    skills: ['Quality Auditing', 'Technical Checklist Review', 'Asset Validation', 'Zero-Defect Standard'],
    availability: 'Available for Projects',
    timezone: 'UTC / GMT',
    portfolioHighlight: 'Zero-Defect Quality Assurance Operations',
  },
  {
    id: 'team-15',
    roleId: 'CS-02',
    name: 'Apex Client Partner',
    initials: 'ACP',
    jobTitle: 'Client Success & Retainer Lead',
    department: 'Client Success & QA',
    bio: 'Ensures monthly retainer clients receive timely weekly reporting, dedicated review links, and responsive priority support at Superb Apex Digital.',
    responsibilities: [
      'Monthly client satisfaction reviews & check-ins',
      'Retainer scope monitoring and revision resolution',
      'Secure offboarding and asset archive transfers',
    ],
    skills: ['Client Success', 'Retainer Health', 'Account Management', 'Feedback Loops'],
    availability: 'Accepting New Clients',
    timezone: 'UTC-5 / EST',
    portfolioHighlight: 'Long-Term Creator Partnership Management',
  },
];
