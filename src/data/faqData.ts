export interface FAQCategory {
  category: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export const comprehensiveFAQ: FAQCategory[] = [
  {
    category: 'General & Onboarding',
    items: [
      {
        question: 'Who is this agency designed for?',
        answer:
          'We partner with content creators, livestreamers, gaming studios, web3 collectives, podcasts, and online businesses who need dependable, professional production and community management without the overhead of hiring full-time internal staff.',
      },
      {
        question: 'How do one-time projects compare to monthly retainers?',
        answer:
          'One-time projects (like a Discord Server Setup or Streamer Visual Kit) have a fixed price, dedicated scope, and specific turnaround timeline. Monthly retainers (like Community Moderation or YouTube Video Producer) provide dedicated weekly deliverables, ongoing coverage, and continuous priority communication.',
      },
      {
        question: 'How quickly can work begin after I submit a quote request?',
        answer:
          'We review inquiries within 24 hours. Once your scope is agreed and initial invoice is settled, discovery and production sprints begin within 1 to 2 business days.',
      },
      {
        question: 'Can I customize packages or combine multiple services?',
        answer:
          'Yes. We regularly build custom packages combining Discord architecture, Twitch graphics, video post-production, and social media scheduling. Use our Request a Quote form to select multiple services for a unified proposal.',
      },
    ],
  },
  {
    category: 'Discord & Community',
    items: [
      {
        question: 'Do you create new servers from scratch or optimize existing ones?',
        answer:
          'Both. For new servers, we design the entire channel hierarchy, onboarding, roles, and bots from day one. For existing servers, we run a thorough security audit, identify permission vulnerabilities, clean up dead channels, and modernize the setup with zero disruption to active members.',
      },
      {
        question: 'Do you develop custom Discord bots?',
        answer:
          'We specialize in configuring, orchestrating, and securing established industry-standard bots (Carl, Dyno, Ticket Tool, Mee6). For specialized requirements, we also engineer custom Node.js/Python Discord bots for custom database lookups, role synchronization, or proprietary automated triggers.',
      },
      {
        question: 'Will our server experience downtime during a revamp?',
        answer:
          'Zero downtime. We build and test all categories, permissions, and embeds on an isolated staging server. Once verified with you, we mirror the changes to your production server during low-traffic hours.',
      },
    ],
  },
  {
    category: 'Twitch & Video Production',
    items: [
      {
        question: 'What video editing software do your editors use?',
        answer:
          'Our team primarily uses Adobe Premiere Pro, DaVinci Resolve Studio, and Adobe After Effects. We deliver in master ProRes, H.264/H.265 MP4, and provide full project archives upon request.',
      },
      {
        question: 'How do you handle footage transfer and video revisions?',
        answer:
          'You upload footage to our encrypted cloud workspace (Google Drive / Dropbox / Frame.io). For revisions, we provide interactive review links where you can click anywhere on the video player timeline to leave exact timestamped notes.',
      },
      {
        question: 'Do you guarantee YouTube views or follower counts?',
        answer:
          'No. As an ethical agency, we never make false claims or guarantee arbitrary algorithmic metrics like subscriber counts or viral views. What we guarantee is high-standard creative execution, retention-tested editing, high-contrast packaging, and broadcast-grade quality.',
      },
    ],
  },
  {
    category: 'Revisions, Billing & Terms',
    items: [
      {
        question: 'What is your revision policy?',
        answer:
          'All one-time packages include 2 to 3 rounds of structured revisions within the agreed scope. Revision requests are addressed within 24 to 48 hours. Any major pivot outside the original Scope of Work is quoted transparently before proceeding.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept bank transfers, major credit cards via Stripe, and official electronic payments with itemized commercial invoices. For one-time projects, a 50% deposit commences work and 50% is due upon final approved delivery.',
      },
      {
        question: 'How can I cancel a monthly retainer?',
        answer:
          'Monthly retainers require no long-term lock-in. You may pause or cancel your retainer with 14 days written notice prior to your next monthly billing date.',
      },
    ],
  },
];
