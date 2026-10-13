export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  platform: 'Discord' | 'Twitch' | 'YouTube' | 'Cross-Platform';
  timeline: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverablesDelivered: string[];
  concreteOutcomes: {
    metric: string;
    label: string;
  }[];
  testimonialNote: string;
  isConceptProject: boolean;
}

export const conceptCaseStudies: CaseStudy[] = [
  {
    id: 'case-01',
    title: 'Gaming Community Infrastructure & Anti-Raid Overhaul',
    clientType: 'Indie Game Studio & 14,000-Member Discord',
    platform: 'Discord',
    timeline: '6 Business Days',
    summary:
      'Transformed an unorganized Discord server facing frequent raid attempts into a structured community hub with native onboarding and automated ticket workflows.',
    challenge:
      'The studio community was plagued by spam raids, administrative permissions accidentally assigned to general moderators, unindexed channels, and member drop-off within 24 hours of joining.',
    solution:
      'We redesigned the channel taxonomy into 6 intuitive category groups, configured zero-trust role permissions, deployed private ticket bots with staff audit logs, and integrated Discord native Onboarding with game-interest roles.',
    deliverablesDelivered: [
      'Complete role hierarchy rebuild stripping unauthorized admin flags',
      'Interactive Discord native onboarding questionnaire',
      'Automated raid protection bot with captcha verification threshold',
      'Private staff ticket system with automated transcript backups',
      'Branded rules, announcements, and channel banner embeds',
    ],
    concreteOutcomes: [
      { metric: '0', label: 'Security Breaches Post-Launch' },
      { metric: '+84%', label: 'Member Retention in First 7 Days' },
      { metric: '< 8 min', label: 'Average Support Ticket Response Time' },
    ],
    testimonialNote:
      'Concept Project: Modeled after actual agency production workflows. Demonstrates our standardized Discord architecture deliverables and permission audit methodologies.',
    isConceptProject: true,
  },
  {
    id: 'case-02',
    title: 'Twitch Partner Broadcast Rebranding & OBS Audio Engineering',
    clientType: 'Variety Creator (Twitch Partner)',
    platform: 'Twitch',
    timeline: '8 Business Days',
    summary:
      'Replaced outdated static overlays with a cohesive animated broadcast ecosystem and engineered low-latency OBS audio routing for DMCA-safe VODs.',
    challenge:
      'The creator was experiencing mic clipping during intense moments, stream audio muted on Twitch VODs due to copyright music, and visual disconnect across their scenes.',
    solution:
      'We built a custom animated broadcast suite with sound-synced stinger transitions, configured multi-track OBS audio separating Spotify and game audio from VOD track 6, and deployed custom StreamElements alert graphics.',
    deliverablesDelivered: [
      '4 Animated motion screens (Starting Soon, BRB, Just Chatting, Ending)',
      'Custom .webm alpha sound-synced Stinger scene transition',
      'OBS Studio scene collection profile with Elgato Stream Deck mapping',
      'Microphone VST filter chain (ReaEQ, ReaComp, Noise Suppression)',
      'Sub badge progression set (6 tiers) and 8 channel panels',
    ],
    concreteOutcomes: [
      { metric: '100%', label: 'DMCA-Safe VOD Audio Compliance' },
      { metric: '+38%', label: 'Sub Badge Conversion in First 30 Days' },
      { metric: '0 Frame Drops', label: 'OBS Encoding Stability Maintained' },
    ],
    testimonialNote:
      'Concept Project: Illustrates our technical streaming capabilities, hardware-aware OBS setup, and animated motion graphic deliverables.',
    isConceptProject: true,
  },
  {
    id: 'case-03',
    title: 'YouTube Creator Packaging & High-Retention Video Pipeline',
    clientType: 'Tech & Gaming Creator (Weekly Uploads)',
    platform: 'YouTube',
    timeline: 'Ongoing Monthly Retainer',
    summary:
      'Instituted a systematic post-production pipeline delivering 4 long-form videos, A/B tested thumbnails, and 8 vertical Shorts every month.',
    challenge:
      'The creator was suffering creator burnout editing their own 15-minute videos, with click-through rates stalling under 3.5% and viewer drop-off occurring before the 2-minute mark.',
    solution:
      'We took over raw-to-final post-production: established an energetic 3-second hook format, integrated motion callouts and SFX layering, and tested 2 distinct thumbnail compositions per video release.',
    deliverablesDelivered: [
      '4 Long-form 4K video edits per month with kinetic motion graphics',
      '4 Flagship thumbnails + 4 A/B test variations',
      '8 Repurposed 9:16 vertical Shorts with burnt-in animated captions',
      'Shared cloud workspace with frame-accurate timestamp review links',
    ],
    concreteOutcomes: [
      { metric: '7.8%', label: 'Average CTR Achieved (vs 3.4% Baseline)' },
      { metric: '+46%', label: 'Average View Duration Improvement' },
      { metric: '18h', label: 'Creator Time Saved Every Single Week' },
    ],
    testimonialNote:
      'Concept Project: Showcases our turnkey monthly YouTube retainer deliverables, thumbnail design principles, and Shorts repurposing workflow.',
    isConceptProject: true,
  },
  {
    id: 'case-04',
    title: 'Omnichannel Creator Launch: Unified Social, Stream & Server',
    clientType: 'New Creator Collective / Esports Org',
    platform: 'Cross-Platform',
    timeline: '12 Business Days',
    summary:
      'Coordinated a unified launch across Discord, Twitch, YouTube, and X with synchronized branding, guidelines, and publishing schedules.',
    challenge:
      'The organization had inconsistent logos, fragmented color palettes across platforms, unverified social handles, and no centralized hub for fans.',
    solution:
      'We designed an exhaustive creator brand system (logo suite, color codes, typography), constructed the flagship Discord server, built matching Twitch stream assets, and created 30 days of launch social content.',
    deliverablesDelivered: [
      'Master Brand Identity Guidelines (24-page PDF + vector sources)',
      'Turnkey Discord server with custom onboarding and verified bots',
      'Full Twitch broadcast overlay package and panels',
      '30-Day social media launch calendar with graphics and captions',
    ],
    concreteOutcomes: [
      { metric: '4 Platforms', label: 'Synchronized Launch on Same Day' },
      { metric: '2,400+', label: 'Community Members Joined First Weekend' },
      { metric: '100%', label: 'Commercial Rights & Asset Ownership Delivered' },
    ],
    testimonialNote:
      'Concept Project: Highlights our comprehensive agency package for organizations requiring multi-platform synchronization.',
    isConceptProject: true,
  },
];
