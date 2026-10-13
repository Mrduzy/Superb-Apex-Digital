export interface ProcessStage {
  step: string;
  title: string;
  summary: string;
  clientActions: string[];
  agencyDeliverables: string[];
  duration: string;
}

export const agencyProcessStages: ProcessStage[] = [
  {
    step: '01',
    title: 'Discovery & Scope Alignment',
    summary:
      'We review your existing channels, creator goals, audience demographics, and project requirements through an intake form and kickoff sync.',
    clientActions: [
      'Submit the initial project or retainer inquiry form',
      'Share links to existing channels (Discord, Twitch, YouTube, Socials)',
      'Specify target launch deadline and any brand constraints',
    ],
    agencyDeliverables: [
      'Comprehensive Project Scope of Work (SOW)',
      'Itemized deliverables checklist with fixed investment quote',
      'Estimated milestone timeline and dedicated PM assignment',
    ],
    duration: '24–48 Hours',
  },
  {
    step: '02',
    title: 'Strategic Planning & Staging Setup',
    summary:
      'We build the operational roadmap, moodboards, channel taxonomy maps, or editorial calendar before producing final production assets.',
    clientActions: [
      'Review and approve visual direction moodboards or taxonomy sketches',
      'Provide delegated access or sandbox invite (never passwords)',
      'Confirm preferred software or bot ecosystem',
    ],
    agencyDeliverables: [
      'Taxonomy / Asset Blueprint Document',
      'Private cloud workspace folder setup (Google Drive / Figma)',
      'Isolated staging environment or scratch project files',
    ],
    duration: '1–2 Business Days',
  },
  {
    step: '03',
    title: 'Setup & Production Sprints',
    summary:
      'Our specialized designers, architects, and video editors execute the agreed deliverables in structured production sprints.',
    clientActions: [
      'Review milestone drafts as they are completed',
      'Provide concise, timestamped or contextual feedback',
    ],
    agencyDeliverables: [
      'Draft asset proofs, rough video cuts, or server channel builds',
      'Zero-defect QA review against technical checklist',
      'Progress updates every 48 hours via your preferred channel',
    ],
    duration: '3–7 Business Days',
  },
  {
    step: '04',
    title: 'Review, Revisions & Validation',
    summary:
      'We implement client feedback through defined revision rounds, test permissions, and verify zero technical defects before delivery.',
    clientActions: [
      'Test functionality from an alternate account or device',
      'Submit revision requests within the agreed scope window',
      'Sign off on final approved versions',
    ],
    agencyDeliverables: [
      'Refined assets and updated staging configurations',
      'Permission leak scans and audio/video rendering verification',
      'Final revision sign-off confirmation',
    ],
    duration: '1–3 Business Days',
  },
  {
    step: '05',
    title: 'Handover, Training & Ongoing Support',
    summary:
      'We transfer full commercial rights and master source files, provide staff documentation, and remain on standby during your launch.',
    clientActions: [
      'Revoke temporary agency staging access or delegate permanent roles',
      'Download master source files to your secure backup storage',
      'Begin publishing or launch community activations',
    ],
    agencyDeliverables: [
      'Master source files (.AI, .PSD, .ProRes, .JSON, .WebM)',
      'Written administrator handbook or Loom video walkthrough',
      '7 to 14 days post-handover warranty coverage (or monthly retainer kickoff)',
    ],
    duration: 'Launch Day & Beyond',
  },
];
