export default {
  slug: 'ngo-threat-intel',
  intro:
    'OSINT research on ransomware, data breaches and DDoS affecting more than 60 nonprofit and non-governmental organizations, written to inform their defensive decisions.',
  meta: [
    { label: 'Institution', value: 'Kean Center for Cybersecurity' },
    { label: 'Scope', value: '60+ nonprofits and NGOs', measured: true },
    { label: 'Focus', value: 'Ransomware, breaches and DDoS' },
  ],
  sections: [
    {
      type: 'prose',
      heading: 'Why nonprofits',
      paragraphs: [
        'Nonprofits and NGOs hold sensitive donor databases, run critical community services and support humanitarian work, often on tight IT budgets with few dedicated security staff. That makes them valuable, vulnerable targets for opportunistic ransomware groups, state-aligned hacktivists and phishing operators.',
        'As a Threat Intelligence Analyst Intern at Kean University’s Center for Cybersecurity, I investigated publicly reported incidents in these sectors for the Non-Profit Cyber Incident Repository (NPCIR): incident reports, adversary tactics, techniques and procedures (TTPs), and countermeasures that help over 60 organizations anticipate active campaigns.',
      ],
    },
    {
      type: 'pair',
      left: {
        heading: 'Research responsibilities',
        ordered: true,
        items: [
          { term: 'OSINT incident collection', text: 'Investigated disclosed ransomware events, data exfiltration notices, defacements and DDoS campaigns across news feeds, security advisories and disclosure portals.' },
          { term: 'MITRE ATT&CK mapping', text: 'Mapped observed behaviors to MITRE ATT&CK enterprise techniques (Initial Access, Persistence, Defense Evasion, Exfiltration).' },
          { term: 'NPCIR dataset contribution', text: 'Normalized incident records by sector, organization size, attack vector, ransom demand and remediation indicators.' },
          { term: 'Defensive briefings', text: 'Wrote reports that turn attack narratives into prioritized guidance for resource-constrained IT leaders.' },
          { term: 'Operational security (OPSEC)', text: 'Kept strict ethical and operational boundaries: sanitized research environments and no dark-web credential trading platforms.' },
        ],
      },
      right: {
        heading: 'Intelligence concepts',
        items: [
          { term: 'Actionable over passive data', text: 'Raw feeds are noisy. Intelligence extracts the context that informs firewall rules, patch schedules and user awareness.' },
          { term: 'Sector-specific threat modeling', text: 'Why NGO threat profiles differ from enterprise banking, for example politically motivated hacktivism against pure extortion.' },
          { term: 'IOC hygiene', text: 'Higher-order indicators (TTPs and tooling) over fragile, short-lived ones like hashes and ephemeral IPs.' },
          { term: 'Defensive enablement', text: 'Practical controls with the most risk reduction: MFA enforcement, immutable backups, external exposure audits.' },
        ],
      },
    },
    {
      type: 'links',
      heading: 'Non-Profit Cyber Incident Repository (NPCIR)',
      text: 'An academic initiative maintained through the Kean University Center for Cybersecurity: an open, standardized dataset of cyber incidents for researchers, practitioners and nonprofit leaders who need real-world risk metrics.',
      items: [
        { label: 'Kean Center for Cybersecurity', href: 'https://www.kean.edu/academics/college-business-and-public-management/center-cybersecurity-1' },
        { label: 'CAE Community cyber defense', href: 'https://www.caecommunity.org/cop-cyber-defense/cae-cd-student-cyber-clubs' },
      ],
    },
    {
      type: 'lessons',
      heading: 'Key findings',
      items: [
        { title: 'Identity and credentials dominate', text: 'Most initial-access compromises in the nonprofits examined came from phishing against email and cloud accounts without enforced multi-factor authentication (MFA).' },
        { title: 'Exfiltration before encryption', text: 'Ransomware operators increasingly use double extortion, taking donor and employee PII before deploying encryptors, so offline backups alone are no longer enough.' },
        { title: 'External surface hygiene', text: 'Passive OSINT reconnaissance repeatedly found exposed remote access ports (RDP, VNC) and unpatched web content management systems, showing the need for external asset discovery.' },
        { title: 'Reporting has to land', text: 'Security metrics only work if executives understand them. Translating malware indicators into business impact and concrete mitigations is the analyst’s core skill.' },
      ],
    },
  ],
  stack: [
    'MITRE ATT&CK framework', 'Shodan', 'VirusTotal Intelligence', 'Maltego OSINT link analysis',
    'MISP (Malware Information Sharing Platform)', 'Python (OSINT scraping and parsing)', 'Jupyter Notebooks',
    'Non-Profit Cyber Incident Repository (NPCIR)',
  ],
  skills: [
    'Open-source intelligence (OSINT)', 'Adversary TTP mapping', 'IOC extraction and validation',
    'Nonprofit threat modeling', 'Actionable defensive intelligence', 'Ethical research and OPSEC standards',
  ],
};
