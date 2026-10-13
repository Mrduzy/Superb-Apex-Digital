export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  billingType: 'one-time' | 'monthly';
  turnaround: string;
  description: string;
  deliverables: string[];
  recommendedFor: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imageSrc: string;
  accentColor: string;
  categories: {
    title: string;
    items: string[];
  }[];
  packages: ServicePackage[];
  deliverableBreakdown: string[];
  workflowSteps: {
    step: string;
    title: string;
    description: string;
  }[];
}

import discordImg from '@/src/assets/images/discord_community_hub_1791912758835.jpg';
import twitchImg from '@/src/assets/images/twitch_broadcast_desk_1791912759767.jpg';
import youtubeImg from '@/src/assets/images/youtube_editing_suite_1791912760119.jpg';
import socialImg from '@/src/assets/images/social_editorial_workspace_1791912759144.jpg';
import heroImg from '@/src/assets/images/hero_digital_studio_1791912757575.jpg';

export const servicesData: ServiceDetail[] = [
  {
    id: 'discord',
    slug: 'discord',
    title: 'Discord Server Architecture & Management',
    shortDescription:
      'Turn chaotic chats into high-retention community hubs with hardened permissions, automated onboarding, custom bots, and structured moderation.',
    fullDescription:
      'We architect, design, and manage professional Discord ecosystems for creators, gaming titles, web3 collectives, and online businesses. Every server is built with zero-trust role hierarchies, clean visual category naming, ticket workflows, and anti-spam protocols.',
    iconName: 'MessageSquare',
    imageSrc: discordImg,
    accentColor: '#6366f1',
    categories: [
      {
        title: 'Server Creation & Infrastructure',
        items: [
          'Full category and channel taxonomy blueprinting',
          'Fine-grained role hierarchy & permission matrix',
          'Clean onboarding flow & Discord Onboarding API integration',
          'Read-only rules, announcements, and resource libraries',
          'Voice channel architecture & automated temporary channels',
          'VIP, sponsor, and subscriber gated channels',
        ],
      },
      {
        title: 'Server Branding & Visual Identity',
        items: [
          'Custom server icons, animated banners, and splash art',
          'Unicode aesthetic channel formatting & symbol standards',
          'Custom emoji suites (static & animated) and reaction packs',
          'Custom server sticker sets matching creator branding',
          'Branded welcome banner templates and automated embeds',
        ],
      },
      {
        title: 'Bots & Workflow Automation',
        items: [
          'Multi-purpose bot orchestration (Carl, Dyno, Ticket Tool, Mee6)',
          'Role reaction & self-assignable interest badges',
          'Custom private support ticket system with staff logs',
          'Automated moderation rules, raid prevention, and link filters',
          'Cross-platform webhook alerts (Twitch live, YouTube uploads, X tweets)',
        ],
      },
      {
        title: 'Security Audits & Optimization',
        items: [
          'Comprehensive permission leak vulnerability scans',
          'Dangerous administrator role stripping & containment',
          'Ghost channel pruning and category decluttering',
          '2FA moderation mandate setup & staff audit log review',
          'Detailed optimization report with actionable recommendations',
        ],
      },
    ],
    packages: [
      {
        id: 'discord-starter',
        name: 'Discord Starter Setup',
        price: '$249',
        billingType: 'one-time',
        turnaround: '3–4 business days',
        description: 'Ideal for emerging creators and new community launches needing clean, organized foundations.',
        deliverables: [
          'Up to 20 structured channels & 5 category groups',
          'Standard role hierarchy (Owner, Mod, VIP, Member, Muted)',
          'Essential bot setup (welcome embeds, auto-roles, moderation)',
          'Basic rules, FAQ, and announcement embeds',
          'Permissions audit & testing before handover',
          'Admin handover guide & 7 days post-launch support',
        ],
        recommendedFor: 'New streamers, podcasters, and small creator projects.',
      },
      {
        id: 'discord-pro',
        name: 'Discord Professional Architecture',
        price: '$599',
        billingType: 'one-time',
        turnaround: '5–7 business days',
        description: 'Comprehensive setup for growing brands requiring hardened security, tickets, and custom visuals.',
        deliverables: [
          'Unlimited organized channels & advanced category system',
          'Multi-tier role hierarchy with permission containment',
          'Discord native Onboarding configuration with quiz rules',
          'Support ticket bot system with private staff transcripts',
          'Full branded graphic suite (server icon, banner, 5 embeds)',
          'Automated social feed integrations (Twitch/YT/X)',
          'Raid protection & anti-nuke automated defense',
          'Staff moderation playbook & 14 days warranty support',
        ],
        recommendedFor: 'Established creators, gaming orgs, and digital businesses.',
      },
      {
        id: 'discord-retainer',
        name: 'Active Community Moderation',
        price: '$790 / mo',
        billingType: 'monthly',
        turnaround: 'Ongoing daily coverage',
        description: 'Dedicated team moderation coverage, event scheduling, and ongoing community health oversight.',
        deliverables: [
          'Dedicated moderation shifts covering peak engagement hours',
          'Active chat engagement, toxicity monitoring, and rule enforcement',
          'Support ticket handling and escalation to core team',
          'Bi-weekly community voice/game night event coordination',
          'Weekly activity and health metric summaries',
          'Continuous bot maintenance and server backup maintenance',
        ],
        recommendedFor: 'Active creator communities with 1,000+ members.',
      },
    ],
    deliverableBreakdown: [
      'Master Server Architecture Document',
      'Role & Permission Access Matrix Spreadsheet',
      'Original Figma/PNG Asset Source Files (Icons, Banners, Embeds)',
      'Staff Training & Moderation Guidelines Handbook',
      'Complete Backup Snapshot of Server Configuration',
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Community Scope & Audit',
        description: 'We analyze your target audience, existing community pain points, and specific bot requirements.',
      },
      {
        step: '02',
        title: 'Staging Server Construction',
        description: 'We build the full architecture on an isolated staging server with complete permission testing.',
      },
      {
        step: '03',
        title: 'Security & Permission Validation',
        description: 'Every role is tested from alternate accounts to guarantee zero accidental administrative access.',
      },
      {
        step: '04',
        title: 'Live Server Migration & Handover',
        description: 'We transfer or sync the architecture to your live server, walk your team through the setup, and deliver documentation.',
      },
    ],
  },
  {
    id: 'twitch',
    slug: 'twitch',
    title: 'Twitch Broadcast Branding & Stream Setup',
    shortDescription:
      'Elevate your live stream with broadcast-grade graphics, optimized OBS scenes, custom alerts, audio routing, and seamless creator branding.',
    fullDescription:
      'We turn standard live streams into immersive, high-production creator broadcasts. From custom animated overlays and scene transitions to technical OBS Studio performance tuning, we ensure your stream looks and sounds immaculate.',
    iconName: 'Tv',
    imageSrc: twitchImg,
    accentColor: '#a855f7',
    categories: [
      {
        title: 'Stream Graphics & Channel Identity',
        items: [
          'Custom animated stream overlays (cam borders, gameplay frames)',
          'Starting Soon, BRB, Stream Ending, and Offline screens',
          'Custom Stinger scene transitions with audio cue',
          'Modular stream panels with crisp vector typography',
          'Custom Twitch sub badges and tier-based emote suites',
          'Chat overlay themes formatted for ultra-clean readability',
        ],
      },
      {
        title: 'Technical Broadcast Engineering',
        items: [
          'OBS Studio / Streamlabs OBS scene collection configuration',
          'Hardware encoding optimization (NVENC, AV1, x264 rate control)',
          'Microphone audio filters (VST EQ, compression, noise gate/suppression)',
          'Multi-track audio routing for DMCA-safe Twitch VOD audio',
          'Elgato Stream Deck profile mapping and hotkey presets',
        ],
      },
      {
        title: 'Interactive Alerts & Widgets',
        items: [
          'Custom sound alerts for follows, subscriptions, raids, and cheers',
          'Dynamic goal bars (follower goals, charity meters, sub targets)',
          'Streamelements / Streamlabs bot commands and timer setups',
          'Channel points reward ideas and interactive redeems',
        ],
      },
      {
        title: 'Content Repurposing for Streamers',
        items: [
          'Live stream highlight clipping guidelines',
          'Vertical 9:16 short-form reel templates for TikTok & Shorts',
          'Stream schedule graphics updated weekly',
        ],
      },
    ],
    packages: [
      {
        id: 'twitch-starter',
        name: 'Streamer Visual Kit',
        price: '$290',
        billingType: 'one-time',
        turnaround: '4–5 business days',
        description: 'Essential visual identity package for aspiring and affiliate streamers.',
        deliverables: [
          'Static stream overlays (cam frame, gameplay banner)',
          '3 Core screens (Starting Soon, BRB, Stream Ending)',
          'Matching Offline channel banner & 8 profile panels',
          'Basic alert graphic styling (Follow, Sub, Raid)',
          'Easy OBS scene import package with setup guide',
        ],
        recommendedFor: 'New streamers upgrading from generic free overlays.',
      },
      {
        id: 'twitch-pro',
        name: 'Broadcast Production Suite',
        price: '$680',
        billingType: 'one-time',
        turnaround: '7–10 business days',
        description: 'Full animated broadcast package with custom stinger and technical OBS setup consultation.',
        deliverables: [
          'Full animated overlay system with loopable motion graphics',
          '4 Animated screens (Starting Soon, Just Chatting, BRB, Ending)',
          'Custom sound-synced Stinger transition (.webm alpha format)',
          'Complete panel set + 5 custom emote designs + sub badges',
          'Custom alert animations integrated into StreamElements',
          '1-on-1 Remote OBS audio/video configuration session (60 min)',
        ],
        recommendedFor: 'Affiliate and Partner creators seeking broadcast-level quality.',
      },
      {
        id: 'twitch-monthly',
        name: 'Stream Content Retainer',
        price: '$650 / mo',
        billingType: 'monthly',
        turnaround: 'Weekly delivery',
        description: 'Ongoing stream clipping, short-form editing, and weekly schedule assets.',
        deliverables: [
          '12 Short-form stream highlight clips per month (TikTok/Reels/Shorts)',
          'Weekly branded stream schedule graphics',
          'New monthly emote or channel reward asset',
          'Monthly audio and stream health checkup',
        ],
        recommendedFor: 'Active streamers streaming 15+ hours weekly.',
      },
    ],
    deliverableBreakdown: [
      'Rendered Motion Assets (.webm with alpha transparency)',
      'Static High-Res PNG / SVG Graphics',
      'Ready-to-import OBS Scene Collection JSON file',
      'Microphone EQ & Filter Preset Values Sheet',
      'Comprehensive Streamer Launch Checklist',
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Aesthetic Direction & Brand Intake',
        description: 'We review your creator personality, game genre focus, and preferred color palette.',
      },
      {
        step: '02',
        title: 'Static Concept Proofs',
        description: 'We design the static overlay proofs, screens, and typography for your direct feedback.',
      },
      {
        step: '03',
        title: 'Motion Animation & Sound Design',
        description: 'Once approved, we animate the screens, alerts, and compile the custom stinger transition.',
      },
      {
        step: '04',
        title: 'OBS Packaging & Technical Review',
        description: 'We deliver clean plug-and-play files and verify optimal hardware encoding settings.',
      },
    ],
  },
  {
    id: 'youtube',
    slug: 'youtube',
    title: 'YouTube Channel Packaging & Video Editing',
    shortDescription:
      'High-click-through thumbnail design, retention-focused video editing, shorts repurposing, and strategic channel packaging.',
    fullDescription:
      'We help creators turn raw footage into high-retention video assets that perform. From psychology-driven thumbnail compositions and titles to professional pacing, sound design, and Shorts repurposing, we handle post-production so you can focus on shooting.',
    iconName: 'PlaySquare',
    imageSrc: youtubeImg,
    accentColor: '#ef4444',
    categories: [
      {
        title: 'Packaging & Click-Through Design',
        items: [
          'Custom high-CTR thumbnail design tested across mobile and desktop',
          'Thumbnail A/B test variations with distinct visual hooks',
          'Channel banner & avatar art optimized for TV, desktop, and mobile',
          'Video title ideation & keyword positioning assistance',
          'Standardized video description & chapter formatting templates',
        ],
      },
      {
        title: 'Video Post-Production & Editing',
        items: [
          'Long-form video editing in 4K/1080p (Premiere Pro & DaVinci Resolve)',
          'Pacing optimization, jump cut trimming, and dead-air elimination',
          'Custom on-screen motion typography, popups, and callouts',
          'Sound design, background track ducking, and vocal mastering',
          'Color correction and cinematic tone grading',
        ],
      },
      {
        title: 'Shorts & Multi-Format Repurposing',
        items: [
          'Vertical 9:16 Shorts editing with dynamic animated captions',
          'Hook-focused trimming of long-form videos and podcast episodes',
          'Sound effects and dynamic zoom pacing for vertical platforms',
          'Custom intro hooks designed for 3-second retention spikes',
        ],
      },
      {
        title: 'Channel Optimization & Audits',
        items: [
          'Channel metadata, tags, and playlist organization',
          'End screen and info card template standardization',
          'Audience retention drop-off analysis and editing feedback',
        ],
      },
    ],
    packages: [
      {
        id: 'yt-thumbnails',
        name: 'High-CTR Thumbnail Pack',
        price: '$210',
        billingType: 'one-time',
        turnaround: '48h per thumbnail',
        description: 'Batch of 5 custom thumbnails crafted for maximum click-through rate.',
        deliverables: [
          '5 Custom designed YouTube thumbnails (1280x720 16:9)',
          'Photoshop / high-res PNG formats',
          'Clean cutouts, background compositing, and readable typography',
          '2 Revision rounds per thumbnail design',
        ],
        recommendedFor: 'Creators who edit their own videos but need professional packaging.',
      },
      {
        id: 'yt-starter-edit',
        name: 'Single Video Production',
        price: '$340',
        billingType: 'one-time',
        turnaround: '3–4 business days',
        description: 'Full post-production for one flagship long-form video (up to 15 min final duration).',
        deliverables: [
          'Full rough-to-final edit with story pacing and jump cuts',
          'Sound design, royalty-free background music, and audio leveling',
          'Motion graphics, lower thirds, and callout popups',
          '1 Matching high-CTR thumbnail included',
          '1 Repurposed vertical YouTube Short included',
          'Up to 2 revision rounds',
        ],
        recommendedFor: 'Creators testing our production quality on a major project.',
      },
      {
        id: 'yt-monthly-producer',
        name: 'Monthly Video Production Retainer',
        price: '$1,290 / mo',
        billingType: 'monthly',
        turnaround: 'Weekly publishing schedule',
        description: 'Turnkey post-production partnership delivering 4 polished videos every month.',
        deliverables: [
          '4 Long-form edited videos (up to 18 min runtime each)',
          '4 Custom primary thumbnails + 4 A/B test variations',
          '8 Vertical YouTube Shorts / TikToks edited from the footage',
          'Dedicated video editor and project manager',
          'Shared private cloud folder with fast review workflow',
        ],
        recommendedFor: 'Weekly uploading creators and business YouTube channels.',
      },
    ],
    deliverableBreakdown: [
      'Master 4K / 1080p ProRes & MP4 Video Masters',
      'Vertical 9:16 MP4 Shorts Masters with burnt-in captions',
      'High-Resolution Thumbnail Files (.PNG & editable .PSD)',
      'Timestamp & Chapter Breakdown Text File',
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Footage Upload & Creative Brief',
        description: 'You upload raw footage to our secure cloud workspace with your desired video vision.',
      },
      {
        step: '02',
        title: 'Story Assembly & Rough Cut',
        description: 'We assemble the narrative, trim fluff, and share a rough cut link for timeline feedback.',
      },
      {
        step: '03',
        title: 'Pacing, Motion & Sound Polish',
        description: 'We layer SFX, background score, kinetic motion text, color grading, and thumbnail design.',
      },
      {
        step: '04',
        title: 'Final Export & Repurposing',
        description: 'You receive final video masters plus matched vertical shorts and thumbnail assets.',
      },
    ],
  },
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Management & Content Production',
    shortDescription:
      'Strategic organic content creation, multi-platform publishing calendars, carousel designs, and community interaction.',
    fullDescription:
      'We engineer consistent, authoritative social media presence across X (Twitter), Instagram, TikTok, LinkedIn, and YouTube Community. From high-value carousel graphics to short-form video pipelines, we keep your audience engaged and growing.',
    iconName: 'Share2',
    imageSrc: socialImg,
    accentColor: '#3b82f6',
    categories: [
      {
        title: 'Content Strategy & Planning',
        items: [
          'Brand voice guidelines & core content pillars formulation',
          'Monthly editorial content calendars mapped to creator milestones',
          'Hashtag, keyword, and trending topic research',
          'Competitor analysis & organic hook blueprinting',
        ],
      },
      {
        title: 'Visual Content Production',
        items: [
          'Educational carousel designs (Instagram & LinkedIn)',
          'High-impact static quote and announcement graphics',
          'Meme curation and community-specific culture posts',
          'Story template packs and interactive poll visuals',
        ],
      },
      {
        title: 'Short-Form Video (TikTok / Reels)',
        items: [
          'Scripting and hook formatting for short-form video',
          'Vertical video editing with auto-captions and audio syncing',
          'Repurposing podcasts, streams, and YouTube videos into snackable clips',
        ],
      },
      {
        title: 'Publishing & Community Management',
        items: [
          'Scheduled publishing via Buffer, Metricool, or native tools',
          'Profile bio, banner, and Linktree / landing page optimization',
          'Daily comment response & inbound mention management (optional)',
          'Monthly performance report detailing reach, saves, and follower trends',
        ],
      },
    ],
    packages: [
      {
        id: 'social-starter',
        name: 'Brand Kit & Content Starter',
        price: '$350',
        billingType: 'one-time',
        turnaround: '4 business days',
        description: 'Complete visual identity overhaul across all your social channels.',
        deliverables: [
          'Unified header banners for X, YouTube, Twitch, and LinkedIn',
          'Matching profile avatars and bio copywriting',
          '5 Reusable Canva / Figma post and carousel templates',
          'Brand typography and color guide sheet',
        ],
        recommendedFor: 'Creators rebranding or synchronizing their social profiles.',
      },
      {
        id: 'social-monthly-creator',
        name: 'Creator Social Retainer',
        price: '$750 / mo',
        billingType: 'monthly',
        turnaround: 'Continuous weekly schedule',
        description: 'Full organic content creation and scheduled publishing for active creators.',
        deliverables: [
          '16 Branded posts per month (mix of carousels, statics, and graphics)',
          '8 Edited short-form vertical reels / TikToks per month',
          'Monthly editorial calendar previewed 7 days in advance',
          'Scheduled publishing to 2 primary platforms',
          'Monthly analytics review and iteration call',
        ],
        recommendedFor: 'Creators and personal brands wanting consistent social output.',
      },
      {
        id: 'social-omnichannel',
        name: 'Omnichannel Growth Retainer',
        price: '$1,450 / mo',
        billingType: 'monthly',
        turnaround: 'Continuous daily schedule',
        description: 'Complete cross-platform management across 4 platforms with daily community engagement.',
        deliverables: [
          '30 Branded social posts per month (daily presence)',
          '16 Short-form reels / TikToks / Shorts per month',
          'Daily engagement & mention monitoring (60 min daily)',
          'Publishing across X, Instagram, TikTok, and YouTube Community',
          'Dedicated social strategist and copywriter',
          'Detailed monthly analytics dashboard with growth insights',
        ],
        recommendedFor: 'Established brands and high-growth creator teams.',
      },
    ],
    deliverableBreakdown: [
      'Monthly Editorial Content Calendar (Notion / Google Sheets)',
      'Ready-to-Post High-Resolution Media Files (PNG / MP4)',
      'Editable Template Source Links (Figma / Canva)',
      'Copywriting Document with Captions & Hashtag Sets',
      'Monthly Performance & Audience Insights PDF Report',
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Brand Voice Discovery',
        description: 'We audit your previous content to codify your tone, values, and visual style.',
      },
      {
        step: '02',
        title: 'Editorial Calendar Mapping',
        description: 'Every month starts with a complete calendar draft for your review and approval.',
      },
      {
        step: '03',
        title: 'Batch Production & Proofing',
        description: 'We design graphics, edit clips, write captions, and submit all assets for one-click approval.',
      },
      {
        step: '04',
        title: 'Scheduled Publishing & Reporting',
        description: 'Assets are scheduled at peak engagement hours with active monthly reporting.',
      },
    ],
  },
  {
    id: 'community-management',
    slug: 'community-management',
    title: 'Community Management & Moderation Staffing',
    shortDescription:
      'Professional moderation teams, member onboarding, event coordination, and escalation protocols for online communities.',
    fullDescription:
      'A toxic or inactive community costs you members every single day. We provide trained, professional community managers and moderators who enforce guidelines, greet newcomers, resolve conflicts, and run engaging events.',
    iconName: 'Users',
    imageSrc: heroImg,
    accentColor: '#10b981',
    categories: [
      {
        title: 'Staffing & Moderation Operations',
        items: [
          'Vetted and trained moderator shifts covering up to 24/7',
          'Toxicity mitigation, anti-harassment enforcement, and ban audits',
          'Standardized incident escalation protocols and staff handbooks',
          'Daily moderator shift change logs and ticket handling',
        ],
      },
      {
        title: 'Community Engagement & Retention',
        items: [
          'Active conversational prompts to keep discussion channels vibrant',
          'Organized weekly community events (Q&As, game nights, watch parties)',
          'Welcome ambassador workflows for high-touch member onboarding',
          'Community sentiment tracking and feedback loop reporting',
        ],
      },
    ],
    packages: [
      {
        id: 'comm-audit',
        name: 'Community Health Audit & Playbook',
        price: '$390',
        billingType: 'one-time',
        turnaround: '4 business days',
        description: 'Complete diagnostic review of your community health, rules, and moderation efficiency.',
        deliverables: [
          'Comprehensive 15-page Community Health Audit report',
          'Revised Community Rules and Code of Conduct document',
          'Staff Moderation Handbook with incident escalation flowcharts',
          '60-minute staff training strategy call',
        ],
        recommendedFor: 'Communities experiencing growing pains or staff burnout.',
      },
      {
        id: 'comm-retainer',
        name: 'Professional Moderation Team',
        price: '$890 / mo',
        billingType: 'monthly',
        turnaround: 'Ongoing active coverage',
        description: 'Trained moderation staff providing reliable chat oversight and member support.',
        deliverables: [
          '8 Hours daily active moderation during peak traffic hours',
          'Member support ticket resolution within 30 minutes',
          'Weekly community engagement event coordination',
          'Weekly activity report and incident log digest',
          'Dedicated Senior Community Manager oversight',
        ],
        recommendedFor: 'Growing creator and gaming communities with 2,000+ members.',
      },
    ],
    deliverableBreakdown: [
      'Comprehensive Community Rules & Policy Document',
      'Moderator Operations Manual & Escalation Hierarchy',
      'Automated Ticket & Incident Logging Setup',
      'Weekly Health & Member Retention Metrics Report',
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Community Assessment',
        description: 'We audit your server history, active hours, and recent rule violation patterns.',
      },
      {
        step: '02',
        title: 'Handbook & Protocol Drafting',
        description: 'We formalize your community rules and define clear action tiers (Warn, Mute, Kick, Ban).',
      },
      {
        step: '03',
        title: 'Staff Integration',
        description: 'Our trained moderators integrate into your staff channels and begin active coverage.',
      },
      {
        step: '04',
        title: 'Continuous Review',
        description: 'We provide weekly health digests and adjust staff shift timing based on activity metrics.',
      },
    ],
  },
  {
    id: 'creator-branding',
    slug: 'creator-branding',
    title: 'Creator Branding & Digital Identity',
    shortDescription:
      'Distinctive logos, typography systems, vector badge suites, motion ident stings, and complete brand style guides.',
    fullDescription:
      'We craft iconic visual identities built specifically for the creator economy. Unlike generic corporate branding agencies, we understand how a brand must live across a 28x28px Twitch emote, a Discord server icon, and a massive 4K YouTube banner.',
    iconName: 'Sparkles',
    imageSrc: heroImg,
    accentColor: '#ec4899',
    categories: [
      {
        title: 'Visual Identity & Logo Suites',
        items: [
          'Primary creator wordmark & responsive brand mark',
          'Monochrome, inverted, and transparent lockups',
          'Color palette specification (primary, secondary, and stream accent)',
          'Display and body typography pairing guidelines',
        ],
      },
      {
        title: 'Creator Asset Ecosystem',
        items: [
          'Twitch subscriber badges (1m, 3m, 6m, 1y, 2y tier progressions)',
          'Custom emoji & reaction suites formatted for Discord and Twitch',
          'Stream Deck icon packs matching creator aesthetic',
          'Merchandise-ready vector graphics and apparel mockups',
        ],
      },
    ],
    packages: [
      {
        id: 'brand-essential',
        name: 'Creator Identity Essentials',
        price: '$450',
        billingType: 'one-time',
        turnaround: '5 business days',
        description: 'Foundational branding kit for creators launching or refining their identity.',
        deliverables: [
          'Custom primary logo mark & wordmark',
          'Color palette specifications and font system',
          'Banner suite for Twitch, YouTube, and X (Twitter)',
          '3 Twitch sub badge tier designs',
          'Full vector (SVG, EPS, AI) and high-res PNG file delivery',
        ],
        recommendedFor: 'Creators needing a cohesive, professional look across all platforms.',
      },
      {
        id: 'brand-full',
        name: 'Complete Brand Master Kit',
        price: '$890',
        billingType: 'one-time',
        turnaround: '8–10 business days',
        description: 'Exhaustive brand ecosystem with animated logo sting, full badge progressions, and style guide.',
        deliverables: [
          'Complete logo suite with 3 distinct concept directions',
          'Comprehensive 20-page Brand Style Guidelines PDF',
          '6 Tier sub badge progression + 10 custom emotes',
          '3-second animated Logo Sting / Intro motion graphic',
          'Social banners, avatars, and video watermark graphics',
          '100% Commercial rights and master source files',
        ],
        recommendedFor: 'Full-time creators and esports teams ready for permanent brand equity.',
      },
    ],
    deliverableBreakdown: [
      'Comprehensive Brand Guidelines PDF (Colors, Fonts, Spacing)',
      'Vector Master Files (.AI, .EPS, .SVG)',
      'Exported Platform Packs (Twitch, YouTube, Discord, X)',
      'Commercial Rights Certificate of Asset Ownership',
    ],
    workflowSteps: [
      {
        step: '01',
        title: 'Creative Moodboard & Direction',
        description: 'We explore visual themes, moodboards, and creator inspirations to define aesthetic tone.',
      },
      {
        step: '02',
        title: 'Logo Concept Exploration',
        description: 'We present 3 unique logo concepts with real-world application mockups.',
      },
      {
        step: '03',
        title: 'Refinement & Asset Expansion',
        description: 'Your selected direction is refined, and expanded into badges, banners, and typography rules.',
      },
      {
        step: '04',
        title: 'Master Delivery & Rights Handover',
        description: 'We pack organized vector master files with full commercial intellectual property ownership.',
      },
    ],
  },
];
