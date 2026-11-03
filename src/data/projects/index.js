// Index fields only. Each project's case-study content lives in ./<slug>.js and is
// loaded on demand by ProjectCaseStudy (import.meta.glob), so the home bundle stays small.

export const categories = [
  { value: 'all', label: 'All' },
  { value: 'secops', label: 'SecOps and detection' },
  { value: 'infrastructure', label: 'Network defense and infrastructure' },
  { value: 'homelab', label: 'Home lab and DFIR' },
  { value: 'intel', label: 'Threat intel and research' },
];

/** Returns a known category value; anything else falls back to 'all'. */
export function normalizeCategory(value) {
  return categories.some((c) => c.value === value) ? value : 'all';
}

export const projects = [
  {
    slug: 'ncyte-career-challenge',
    title: 'NCyTE Cybersecurity Career Challenge',
    category: 'infrastructure',
    area: 'Infrastructure and network defense',
    status: 'Completed',
    featured: true,
    summary:
      'Secured a 10-endpoint, multi-tier network in Proxmox VE over VPN: OPNsense firewalls and NAT across LAN/WAN/DMZ, AD and DNS, an Nginx reverse proxy, PRTG monitoring and a hardened RHEL mail server.',
    tags: ['Proxmox VE', 'OPNsense', 'LAN/WAN/DMZ', 'PRTG', 'RHEL hardening', 'Postfix/Dovecot TLS'],
    cover: { src: '/projects/ncyte/network-diagram.webp', alt: 'NCyTE virtual infrastructure network diagram' },
  },
  {
    slug: 'wazuh-siem-lab',
    title: 'Personal Wazuh SIEM/XDR cloud lab',
    category: 'secops',
    area: 'Security operations and detection',
    status: 'Active lab',
    featured: true,
    summary:
      'Self-hosted Wazuh SIEM and OpenSearch indexer on Linode: agent telemetry over TLS, alert correlation, and a CIS benchmark assessment of 395 checks that set the OS hardening backlog.',
    tags: ['Wazuh SIEM', 'Linode', 'OpenSearch indexer', 'CIS benchmarks', 'SCA baseline', 'FIM'],
    cover: null,
  },
  {
    slug: 'dfir-triage-station',
    title: 'DFIR portable triage station',
    category: 'homelab',
    area: 'Incident response and forensics',
    status: 'Active project',
    featured: true,
    summary:
      'A Raspberry Pi 5 field workstation with its own isolated hotspot: Velociraptor artifact collection, YARA-X scanning and offline LLM case summaries.',
    tags: ['Raspberry Pi 5', 'Velociraptor', 'YARA-X', 'Local LLM (Ollama)', 'Hotspot triage', 'DFIR automation'],
    cover: { src: '/projects/dfir-triage-station/DFIR-Triage-Station.webp', alt: 'DFIR triage station hardware' },
  },
  {
    slug: 'home-lab-networking',
    title: 'Home lab networking architecture',
    category: 'homelab',
    area: 'Systems and network engineering',
    status: 'Active lab',
    featured: true,
    summary:
      'Structured Cat6a cabling, switching, Raspberry Pi nodes and VirtualBox (Ubuntu and Kali) for practicing administration, traffic analysis and defense testing.',
    tags: ['Structured cabling', 'TP-Link switching', 'VirtualBox', 'Ubuntu / Kali', 'Traffic visibility'],
    cover: { src: '/projects/home-lab-networking/Homelab.webp', alt: 'Home lab network hardware' },
  },
  {
    slug: 'pi-hole-dns-filtering',
    title: 'Pi-hole DNS filtering and threat sinkhole',
    category: 'infrastructure',
    area: 'Perimeter defense and DNS',
    status: 'Completed',
    featured: false,
    summary:
      'A DNS sinkhole on a Raspberry Pi 5 that blocks known malicious, phishing and tracking domains with curated threat-intelligence blocklists.',
    tags: ['Raspberry Pi 5', 'Pi-hole', 'DNS sinkhole', 'Threat blocklists', 'Defense in depth', 'Query logging'],
    cover: null,
  },
  {
    slug: 'physical-server-nvr',
    title: 'Physical server rack and lab infrastructure',
    category: 'infrastructure',
    area: 'Hardware and physical infrastructure',
    status: 'Completed',
    featured: false,
    summary:
      'Rack assembly, PoE switching, PDU power distribution and a 5-camera IP network on an NVR, built with cabling discipline.',
    tags: ['PoE switching', 'Rack mounting', 'PDU', 'IP camera network', 'NVR'],
    cover: { src: '/projects/physical-server-nvr/Server-1.webp', alt: 'Physical server rack and NVR infrastructure' },
  },
  {
    slug: 'ngo-threat-intel',
    title: 'NPCIR nonprofit threat intelligence research',
    category: 'intel',
    area: 'Threat intelligence and OSINT',
    status: 'Completed',
    featured: false,
    summary:
      'OSINT research for the Kean Center for Cybersecurity’s Non-Profit Cyber Incident Repository: ransomware, DoS/DDoS and breach analysis reported to 60+ nonprofits.',
    tags: ['OSINT research', 'NPCIR dataset', 'MITRE ATT&CK', 'Threat reporting', 'Ransomware analysis'],
    cover: null,
  },
  {
    slug: 'cyber-radio',
    title: 'C.Y.B.E.R. radio and awareness research',
    category: 'intel',
    area: 'Cyber education and outreach',
    status: 'Completed',
    featured: false,
    summary:
      'A Kean Center for Cybersecurity show on WKNJ 90.3 FM about phishing, passwords and digital safety, with an academic case study on risk communication.',
    tags: ['Security awareness', 'Risk communication', 'Public outreach', 'Academic case study', 'WKNJ 90.3 FM'],
    cover: { src: '/projects/cyber-radio/C.Y.B.E.R..webp', alt: 'C.Y.B.E.R. radio show' },
  },
];

// The one case opened on the home page: the Wazuh SCA baseline (figures from the wazuh-siem-lab write-up).
export const homeCase = {
  slug: 'wazuh-siem-lab',
  source: 'From the Wazuh SIEM lab',
  claim: 'A fresh cloud host failed 258 of 395 CIS checks.',
  text: 'Default image settings, unhardened kernel parameters and missing audit rules. The failures became the hardening backlog, worked in priority order.',
  caption: 'Security configuration assessment, initial baseline',
  total: 395,
  failing: 258,
  passing: 137,
};

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

/** Previous and next projects in index order, wrapping around. */
export function getNeighbours(slug) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  };
}
