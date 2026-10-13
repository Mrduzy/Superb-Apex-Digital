export interface SecurityProtocol {
  id: string;
  title: string;
  shortRule: string;
  description: string;
  clientGuarantee: string;
}

export const securityProtocols: SecurityProtocol[] = [
  {
    id: 'sec-01',
    title: 'Zero Password Sharing Policy',
    shortRule: 'We never ask for your passwords or 2FA codes under any circumstances.',
    description:
      'We never request client account passwords, session cookies, or two-factor authentication codes. All platform work is completed using official delegated permissions, team member roles, or dedicated bot permissions.',
    clientGuarantee:
      'If anyone claiming to be our team requests your password, report it immediately. You retain 100% control over your account credentials at all times.',
  },
  {
    id: 'sec-02',
    title: 'Least-Privilege Role Delegation',
    shortRule: 'We request only the minimum required access permissions.',
    description:
      'When working on Discord servers or channel managers, we operate strictly under isolated roles (e.g. Server Manager / Bot Configurator) without requiring Master Ownership or Administrator over personal member data.',
    clientGuarantee:
      'Server ownership remains strictly with you. We configure servers via role delegation and surrender all active access upon project completion.',
  },
  {
    id: 'sec-03',
    title: '100% Client Asset Ownership',
    shortRule: 'All deliverables and master files belong exclusively to you.',
    description:
      'Upon final invoice settlement, all commercial rights, intellectual property, master source files (.AI, .PSD, .WebM, .JSON), and exported assets belong entirely to your brand.',
    clientGuarantee:
      'We do not retain proprietary locks, watermarks, or restricted licenses on completed client deliverables.',
  },
  {
    id: 'sec-04',
    title: 'Formal NDA & Confidentiality Standards',
    shortRule: 'Your upcoming launches, metrics, and unreleased content are protected.',
    description:
      'We treat all unreleased footage, unannounced channel rebrands, subscriber data, and community metrics with strict commercial confidentiality. NDAs are signed before project commencement upon request.',
    clientGuarantee:
      'No client footage or screenshots are ever shared publicly without explicit written consent.',
  },
  {
    id: 'sec-05',
    title: 'Documented Offboarding & Access Removal',
    shortRule: 'Structured offboarding checklist ensuring zero lingering access.',
    description:
      'Every project ends with an explicit offboarding protocol. We guide you through removing temporary collaborator roles, revoking staging bot keys, and confirming all permissions are clean.',
    clientGuarantee:
      'A formal written sign-off confirms the project is sealed and all temporary access privileges are formally terminated.',
  },
];

export interface SecurityFAQItem {
  question: string;
  answer: string;
}

export const securityFAQ: SecurityFAQItem[] = [
  {
    question: 'How do you configure my Discord server without taking Server Ownership?',
    answer:
      'We never require server ownership. You assign a temporary "System Architect" role with Manage Channels and Manage Roles permissions. We build the architecture, test with you, and you can revoke the role with one click at handover.',
  },
  {
    question: 'How do you edit YouTube videos or schedule posts without my login credentials?',
    answer:
      'For YouTube, you add our editor email as a delegated "Editor" or "Editor (Limited)" in YouTube Studio settings. This gives us video upload access with zero access to your Google Account password, payment details, or channel deletion rights. For social media, we use business manager collaborator tools (Meta Business Suite, Buffer) or deliver ready-to-post media packets.',
  },
  {
    question: 'What happens to my raw footage and files after the project is completed?',
    answer:
      'We store your raw footage and master files on encrypted cloud storage for 30 days after project completion for safety and revisions. After 30 days, files are archived or purged according to our data retention agreement, unless you have an active monthly retainer.',
  },
  {
    question: 'Do you use AI face generation for real staff or claim fake certifications?',
    answer:
      'Never. We do not invent fake employees, fake certificates, or deceptive social proofs. Our team directory uses clearly labeled role templates and transparent placeholder profiles until individual real team profiles are assigned.',
  },
  {
    question: 'What if an engagement needs to be cancelled or refunded?',
    answer:
      'We provide transparent milestone-based contracts. If work has not started, a full refund is issued. If work has commenced, we calculate prorated hours and deliver all assets completed to date. Monthly retainers may be cancelled with 14 days notice before the next billing cycle.',
  },
];
