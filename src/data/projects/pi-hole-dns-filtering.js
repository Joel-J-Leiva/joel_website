export default {
  slug: 'pi-hole-dns-filtering',
  intro:
    'A dedicated DNS sinkhole on a Raspberry Pi 5 that blocks malicious domains and trackers and logs local egress queries.',
  meta: [
    { label: 'Hardware', value: 'Raspberry Pi 5' },
    { label: 'Role', value: 'Local DNS sinkhole' },
    { label: 'Deployment', value: 'Staged canary testing' },
  ],
  sections: [
    {
      type: 'prose',
      heading: 'Why DNS',
      paragraphs: [
        'DNS is the first step of almost every outbound connection. Phishing lures, drive-by malware downloads and command-and-control (C2) callbacks all depend on resolving a domain name.',
        'I deployed Pi-hole on a dedicated Raspberry Pi 5 as the DNS resolver and sinkhole for internal endpoints. To avoid network-wide disruption or blocking essential campus services, I rolled it out in stages: single test clients first, then tuning regex patterns and curated threat lists, and validating query latency before widening the deployment.',
      ],
    },
    {
      type: 'pair',
      left: {
        heading: 'Implementation',
        ordered: true,
        items: [
          { term: 'OS and static network binding', text: 'Raspberry Pi OS (64-bit), a static LAN IP and a reserved DHCP binding on the gateway router.' },
          { term: 'Pi-hole FTLDNS engine', text: 'Pi-hole core installed, with the web console behind password-authenticated HTTPS.' },
          { term: 'Threat blocklist curation', text: 'Lists targeting active malware domains, phishing kits, C2 infrastructure and telemetry tracking.' },
          { term: 'Upstream DNS security', text: 'Outbound queries sent to privacy-focused upstream resolvers with DNSSEC validation, guarding against DNS spoofing.' },
          { term: 'Staged canary validation', text: 'Individual test workstations pointed at the Pi-hole to find false positives without affecting the wider home network.' },
        ],
      },
      right: {
        heading: 'Security value',
        items: [
          { term: 'Defense in depth', text: 'Stops initial infection stages before web content, scripts or payloads reach the endpoint.' },
          { term: 'C2 disruption', text: 'Infected-host beaconing resolves to `0.0.0.0`, starving malware of instructions.' },
          { term: 'Egress visibility', text: 'Real-time logging of query types (A, AAAA, PTR, HTTPS) exposes unexpected background traffic from IoT devices and apps.' },
          { term: 'Safe rollout', text: 'No untested changes made directly on production network gateways.' },
        ],
      },
    },
    {
      type: 'lessons',
      heading: 'What I learned',
      items: [
        { title: 'Neutralize before the connection', text: 'DNS-layer controls are among the highest-leverage defenses. Denying resolution neutralizes attacker infrastructure before a TCP handshake or TLS negotiation happens.' },
        { title: 'Canary phasing prevents outages', text: 'Strict blocking on a shared router without testing breaks legitimate workflows. Rolling out on personal systems first let me tune blocklists and document allowlists safely.' },
        { title: 'Curation never stops', text: 'Threat feeds degrade. Defense needs ongoing review of blocked-query spikes, regex tuning and an active allowlist for necessary single sign-on and CDN domains.' },
        { title: 'Know the limits', text: 'A DNS sinkhole cannot inspect encrypted payloads or stop direct IP connections (for example, hardcoded C2 IPs). It has to be paired with host firewalls, endpoint monitoring and secure web gateways.' },
      ],
    },
    {
      type: 'links',
      heading: 'The wider lab',
      text: 'How this Raspberry Pi DNS server fits with the rest of the home networking and virtualization lab.',
      items: [{ label: 'Home lab networking architecture', to: '/projects/home-lab-networking' }],
    },
  ],
  stack: [
    'Raspberry Pi 5', 'Pi-hole DNS sinkhole', 'FTLDNS engine', 'Curated threat blocklists', 'Raspberry Pi OS (64-bit)',
    'Local DNS conditioning', 'Upstream DoH / DNSSEC', 'DHCP / static IP reservation',
  ],
  skills: [
    'DNS-layer threat blocking', 'Network visibility and logging', 'Defense-in-depth strategy',
    'Staged canary deployment', 'C2 domain neutralization', 'Linux system hardening',
  ],
};
