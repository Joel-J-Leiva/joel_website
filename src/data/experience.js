// Dates are ISO months so they sort and render as measured values; `end: null` means current.
export const experience = [
  {
    id: 'kean-secops',
    tone: 'lime',
    role: 'Junior Security Operations Analyst',
    shortRole: 'Junior SecOps Analyst',
    org: 'Kean University',
    unit: 'Information Technology',
    location: 'Union, NJ',
    start: '2026-06',
    end: null,
    scope: 'Enterprise environment, 25,000+ students, faculty and staff',
    summary:
      'Around-the-clock enterprise threat monitoring, identity investigations and incident tracking for Kean University IT, plus automation that speeds up analyst response.',
    short:
      'Runs 24/7 threat monitoring in Stellar Cyber SIEM and CrowdStrike Falcon, investigates identity and sign-in activity in Okta, tracks incidents in Freshservice, and built an internal AI-assisted knowledge platform for analyst onboarding.',
    highlights: [
      'Run 24/7 enterprise threat monitoring in Stellar Cyber SIEM and CrowdStrike Falcon, triaging endpoint and network security alerts to cut false positives and assess incident scope.',
      'Administer identity lifecycle management, access controls and abnormal sign-in investigations across campus domains in Okta.',
      'Manage incident triage, escalation and resolution tracking in Freshservice, working with the Network and Cloud Engineering teams on remediation.',
      'Support security operations that safeguard campus digital infrastructure serving 25,000+ students, faculty and staff.',
      'Write Bash and Python automation that removes manual lookups from repetitive triage workflows.',
      'Designed and built an internal AI-assisted SecOps knowledge platform that onboards new analysts with standard triage procedures, investigation playbooks and SOPs.',
    ],
    tools: ['Stellar Cyber SIEM', 'CrowdStrike Falcon', 'Okta (IAM, SSO, MFA)', 'Freshservice (ITSM)', '24/7 network monitoring', 'Threat triage', 'Incident investigation', 'Workflow automation', 'AI analyst knowledge base'],
  },
  {
    id: 'house-of-hearts',
    tone: 'sage',
    role: 'Strategic Operations and IT Manager',
    shortRole: 'Strategic Operations and IT Manager',
    org: 'House of Hearts Network',
    unit: 'Department of Operations',
    location: 'New Jersey',
    start: '2026-08',
    end: null,
    scope: 'Identity, access and cloud resources for staff and community services',
    summary:
      'Manages the organization’s identity, access and cloud resources, and works with leadership to modernize its technology.',
    short:
      'Manages identity and role-based access in Google Admin, administers resources in Google Cloud Platform, and works with leadership to modernize the organization’s technology.',
    highlights: [
      'Manage the digital identity lifecycle, authorization policies and role-based access controls (IAM) in the Google Admin Portal to secure staff and service communications.',
      'Administer the organization’s resources in Google Cloud Platform (GCP) through the Google Cloud Console, for infrastructure reliability and identity auditing.',
      'Work directly with executive leadership to modernize technology infrastructure, improving operational resilience and technology-supported community services.',
    ],
    tools: ['Google Admin Portal (IAM)', 'Google Cloud Platform (GCP)', 'Role-based access control', 'Identity lifecycle management', 'Identity auditing', 'Technology leadership'],
  },
  {
    id: 'kean-threat-intel',
    tone: 'dusk',
    role: 'Threat Intelligence Analyst Intern',
    shortRole: 'Threat Intelligence Analyst Intern',
    org: 'Kean University',
    unit: 'Center for Cybersecurity',
    location: 'Union, NJ',
    start: '2025-09',
    end: '2026-05',
    scope: 'NPCIR threat research and lab engineering',
    summary:
      'Open-source threat intelligence research on campaigns against nonprofits and NGOs, and the physical lab infrastructure used for research.',
    short:
      'Researched ransomware, DDoS and breach campaigns affecting 60+ NGOs, wrote intelligence reports, and built physical lab hardware.',
    highlights: [
      'Researched ransomware strains, data breaches, DoS and DDoS vectors and emerging threat-actor tactics affecting nonprofit and NGO organizations, using open sources.',
      'Wrote intelligence reports that informed defensive decisions and risk reduction across a consortium of more than 60 nonprofits.',
      'Contributed curated incident data to the Non-Profit Cyber Incident Repository (NPCIR): indicators of compromise, affected sectors and adversary methods.',
      'Designed and deployed the physical lab: network switches, PoE hardware, network-attached storage, power distribution units and surveillance systems.',
    ],
    tools: ['OSINT gathering', 'Threat intelligence reporting', 'Ransomware analysis', 'NPCIR dataset', 'Physical lab deployment', 'PoE switching and PDU', 'Adversary profiling'],
  },
];

export const knowledgePlatform = {
  title: 'Internal AI-assisted analyst knowledge platform',
  text: 'Built inside Kean University IT to close the knowledge gap for incoming SecOps analysts. It standardizes alert triage, points to internal SOPs, and shortens the time to operational readiness.',
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** '2026-06' → 'Jun 2026'; null → 'Present'. */
export function formatMonth(iso) {
  if (!iso) return 'Present';
  const [y, m] = iso.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}
