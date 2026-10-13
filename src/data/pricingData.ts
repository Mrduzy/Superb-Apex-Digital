export interface PricingPlan {
  id: string;
  name: string;
  category: 'one-time' | 'monthly';
  serviceType: 'Discord' | 'Twitch' | 'YouTube' | 'Social' | 'Full Agency';
  price: string;
  numericPrice: number;
  periodLabel: string;
  summary: string;
  badgeText?: string;
  popular?: boolean;
  deliverables: string[];
  scopeLimits: string;
  revisions: string;
  turnaround: string;
}

export const allPricingPlans: PricingPlan[] = [
  // One-time Setups
  {
    id: 'plan-discord-starter',
    name: 'Discord Starter Setup',
    category: 'one-time',
    serviceType: 'Discord',
    price: '$249',
    numericPrice: 249,
    periodLabel: 'one-time investment',
    summary: 'Turnkey foundational setup for new creators and gaming community launches.',
    deliverables: [
      'Up to 20 structured channels & 5 categorized zones',
      'Clean 5-tier role hierarchy with permission containment',
      'Essential bot automation (welcome embeds, auto-roles, link filters)',
      'Formatted community rules & announcements channels',
      'Full permission leak audit before live launch',
      '7 Days post-launch admin warranty & handover guide',
    ],
    scopeLimits: 'Single server instance up to 25 channels',
    revisions: '2 Rounds of channel/role adjustments',
    turnaround: '3–4 Business Days',
  },
  {
    id: 'plan-discord-pro',
    name: 'Discord Enterprise Architecture',
    category: 'one-time',
    serviceType: 'Discord',
    price: '$599',
    numericPrice: 599,
    popular: true,
    periodLabel: 'one-time investment',
    summary: 'Hardened security, Discord native onboarding, ticket bot system, and custom graphics.',
    deliverables: [
      'Unlimited organized channels & category taxonomy',
      'Advanced role hierarchy with zero-trust permission isolation',
      'Discord native Onboarding API flow with role assignment quiz',
      'Private support ticket bot system with staff transcripts',
      'Custom graphic pack (server icon, banner, 5 branded embeds)',
      'Anti-raid defense & automated moderation filters',
      '14 Days post-launch priority support',
    ],
    scopeLimits: 'Single production server + staging server sandbox',
    revisions: '3 Rounds of comprehensive layout feedback',
    turnaround: '5–7 Business Days',
  },
  {
    id: 'plan-twitch-pro',
    name: 'Twitch Broadcast Suite',
    category: 'one-time',
    serviceType: 'Twitch',
    price: '$680',
    numericPrice: 680,
    periodLabel: 'one-time investment',
    summary: 'Complete animated stream graphics, sound-synced stinger, and technical OBS audio configuration.',
    deliverables: [
      'Full animated overlay system (cam frame, gameplay banner, alerts)',
      '4 Animated stream screens (Starting Soon, BRB, Ending, Chatting)',
      'Custom sound-synced Stinger transition (.webm alpha)',
      'Channel banner, 8 profile panels, 5 custom sub emotes',
      'StreamElements alert animations & chat box theme',
      '60-Min 1-on-1 Remote OBS audio/video setup session',
    ],
    scopeLimits: 'Single creator channel assets',
    revisions: '2 Rounds of motion/design revisions',
    turnaround: '7–10 Business Days',
  },
  {
    id: 'plan-youtube-starter',
    name: 'YouTube Flagship Video Production',
    category: 'one-time',
    serviceType: 'YouTube',
    price: '$340',
    numericPrice: 340,
    periodLabel: 'one-time investment',
    summary: 'Full post-production for one flagship long-form video with high-CTR thumbnail.',
    deliverables: [
      'High-retention editing for up to 15 min finished runtime',
      'Kinetic motion text, zoom pacing, and sound design layer',
      'Color correction and broadcast-standard vocal leveling',
      '1 Custom high-CTR thumbnail with cutout compositing',
      '1 Repurposed 9:16 vertical Short with animated captions',
      'Master 4K/1080p ProRes & MP4 video deliverables',
    ],
    scopeLimits: 'Up to 90 min raw footage input',
    revisions: '2 Full timeline revision passes',
    turnaround: '3–4 Business Days',
  },

  // Monthly Retainers
  {
    id: 'plan-discord-mod-monthly',
    name: 'Active Community Moderation',
    category: 'monthly',
    serviceType: 'Discord',
    price: '$790',
    numericPrice: 790,
    periodLabel: 'per month',
    summary: 'Dedicated daily moderation coverage, event coordination, and server health oversight.',
    deliverables: [
      '8 Hours daily dedicated active moderation during peak traffic',
      'Rapid support ticket handling and staff escalation',
      'Bi-weekly community voice/game night event coordination',
      'Weekly activity summaries and member retention reporting',
      'Continuous bot uptime maintenance and permission audits',
      'Dedicated Discord specialist point of contact',
    ],
    scopeLimits: 'Covers up to 10,000 active server members',
    revisions: 'Ongoing continuous adjustments',
    turnaround: 'Daily Active Shifts',
  },
  {
    id: 'plan-youtube-retainer',
    name: 'Monthly YouTube Video Producer',
    category: 'monthly',
    serviceType: 'YouTube',
    price: '$1,290',
    numericPrice: 1290,
    popular: true,
    periodLabel: 'per month',
    summary: 'Turnkey weekly video post-production partnership delivering 4 videos and 8 shorts every month.',
    deliverables: [
      '4 Polished long-form videos edited per month (up to 18 min each)',
      '4 Custom primary thumbnails + 4 A/B test variations',
      '8 Repurposed 9:16 YouTube Shorts / TikTok clips with captions',
      'Dedicated senior editor and shared private cloud workspace',
      'Story review links with frame-accurate timestamp commenting',
      'Guaranteed 72h turnaround on raw footage drafts',
    ],
    scopeLimits: '4 Video episodes per 30-day billing cycle',
    revisions: '2 Revisions per video episode',
    turnaround: 'Weekly Publishing Cadence',
  },
  {
    id: 'plan-social-omnichannel',
    name: 'Omnichannel Social Management',
    category: 'monthly',
    serviceType: 'Social',
    price: '$1,450',
    numericPrice: 1450,
    periodLabel: 'per month',
    summary: 'Daily presence across X, Instagram, TikTok, and YouTube Community with dedicated copywriter.',
    deliverables: [
      '30 Branded social posts per month (graphics, carousels, text)',
      '16 Edited short-form vertical reels / TikToks per month',
      'Monthly editorial content calendar scheduled 7 days in advance',
      'Daily audience engagement & mention monitoring (60 min daily)',
      'Cross-posting across 4 designated social channels',
      'Comprehensive monthly analytics and retention report',
    ],
    scopeLimits: 'Up to 4 managed social platform accounts',
    revisions: 'Full pre-publishing review on every asset',
    turnaround: 'Daily Scheduled Content',
  },
  {
    id: 'plan-full-agency',
    name: 'Complete Creator Studio Partner',
    category: 'monthly',
    serviceType: 'Full Agency',
    price: '$2,850',
    numericPrice: 2850,
    periodLabel: 'per month',
    summary: 'The all-in-one growth engine: Discord moderation, weekly YouTube editing, and social management.',
    deliverables: [
      'Full Discord community moderation and event management',
      '4 Long-form YouTube videos + 4 custom thumbnails',
      '16 Vertical short-form videos (Shorts, Reels, TikTok)',
      '20 Branded social graphics and carousels',
      'Weekly strategic sync call with Agency Director',
      'Priority emergency support via private Slack/Discord channel',
    ],
    scopeLimits: 'Full dedicated creator ecosystem support',
    revisions: 'Priority expedited revision turnarounds',
    turnaround: 'Dedicated Agency Sprint',
  },
];

export interface AddOnItem {
  id: string;
  name: string;
  price: string;
  cost: number;
  description: string;
}

export const availableAddOns: AddOnItem[] = [
  {
    id: 'addon-thumb-pack',
    name: 'Additional 3x High-CTR Thumbnails',
    price: '$120',
    cost: 120,
    description: 'A/B test packages with cutouts and headline typography.',
  },
  {
    id: 'addon-short-pack',
    name: 'Additional 5x Repurposed Shorts',
    price: '$190',
    cost: 190,
    description: 'Vertical 9:16 cuts with animated dynamic subtitles and SFX.',
  },
  {
    id: 'addon-stinger',
    name: 'Custom Animated Stinger Transition',
    price: '$150',
    cost: 150,
    description: 'Sound-synced .webm alpha transition for OBS and editing.',
  },
  {
    id: 'addon-bot-custom',
    name: 'Custom Discord Webhook / Bot Script',
    price: '$180',
    cost: 180,
    description: 'Custom automated alert or role-sync integration.',
  },
  {
    id: 'addon-audit',
    name: 'Emergency Server Permission Audit',
    price: '$140',
    cost: 140,
    description: 'Fast 24-hour vulnerability scan and role isolation fix.',
  },
];
