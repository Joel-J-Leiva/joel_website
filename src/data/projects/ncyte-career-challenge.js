export default {
  slug: 'ncyte-career-challenge',
  intro:
    'A virtual enterprise on Proxmox VE: multi-tier segmentation behind OPNsense firewalls, centralized identity, 24/7 monitoring and secure service deployment.',
  meta: [
    { label: 'Hypervisor', value: 'Proxmox VE cluster' },
    { label: 'Dates', value: 'Feb 2026 to May 2026', measured: true },
    { label: 'Perimeter', value: 'OPNsense firewalls and NAT' },
    { label: 'Zones', value: 'LAN, WAN and DMZ' },
    { label: 'Endpoints', value: '~10 virtual hosts', measured: true },
  ],
  sections: [
    {
      type: 'prose',
      heading: 'A multi-tier virtual enterprise',
      paragraphs: [
        'The VCCC / NCyTE Virtual Cybersecurity Career Challenge meant managing and securing an enterprise network hosted on a remote Proxmox hypervisor, reached over encrypted VPN tunnels. The isolated network held about 10 endpoints and servers.',
        'It mirrored real corporate infrastructure: OPNsense perimeter firewalls, Active Directory and DNS for centralized identity, an Nginx reverse proxy in front of the web tier, internal and public mail servers, a back-end SQL database server, and Windows and Linux client endpoints.',
      ],
    },
    {
      type: 'pair',
      left: {
        heading: 'The environment as designed',
        items: [
          { term: 'Proxmox hypervisor', text: 'Virtualized environment hosting ~10 nodes over secure VPN.' },
          { term: 'Segmented zones', text: 'Distinct LAN, WAN and DMZ interfaces isolate publicly accessible services from the internal core.' },
          { term: 'Core directory services', text: 'Active Directory (AD) and DNS for centralized identity, plus DHCP.' },
          { term: 'Tiered endpoints', text: 'An Nginx reverse proxy and web frontends, internal mail infrastructure, a back-end SQL database server and administrative client workstations.' },
        ],
      },
      right: {
        heading: 'The controls I implemented',
        items: [
          { term: 'Firewall and NAT policies', text: 'OPNsense firewalls with custom least-privilege rules, Network Address Translation (NAT), static routing tables and port aliases.' },
          { term: 'Traffic isolation', text: 'Strict boundary rules stop DMZ services from initiating unauthorized sessions into the internal LAN.' },
          { term: 'OS hardening', text: 'Audited and hardened Windows and Linux: disabled legacy protocols, closed unused ports, applied credential policies.' },
          { term: 'Service hardening', text: 'TLS/SSL encryption and secure authentication across web and email transport.' },
          { term: '24/7 monitoring', text: 'PRTG Network Monitor for continuous visibility into endpoint availability, interface traffic and latency across critical server nodes.' },
        ],
      },
    },
    {
      type: 'list',
      heading: 'Hardening the internal RHEL mail server',
      text: 'A core piece of the challenge: an internal mail server on Red Hat Enterprise Linux (RHEL) with end-to-end encryption and authentication.',
      items: [
        { term: 'MTA and submission (Postfix)', text: 'Postfix as the Mail Transfer Agent with SMTP submission on port `587`. Mandatory TLS and SASL authentication reject plaintext relay and unauthenticated delivery.' },
        { term: 'MDA and retrieval (Dovecot)', text: 'Dovecot for mailbox delivery and IMAPS on port `993` with SSL/TLS certificates. Unencrypted IMAP/POP disabled and mailbox file permissions restricted.' },
        { term: 'Authentication and relaying', text: 'SASL authentication tied to local system credentials, with strict anti-open-relay controls and domain validation to mitigate spoofing.' },
        { term: 'Host firewall', text: 'Hardened the RHEL host firewall (`firewalld`): mail ports open only to authorized subnets, invalid connection requests logged.' },
      ],
    },
    {
      type: 'gallery',
      heading: 'Network topology',
      images: [
        {
          src: '/projects/ncyte/network-diagram.png',
          alt: 'NCyTE virtual infrastructure network diagram',
          caption: 'Virtual network topology: perimeter, LAN, WAN and DMZ zones on the Proxmox host.',
          width: 1920,
          height: 1080,
        },
      ],
    },
    {
      type: 'repos',
      heading: 'Repositories built for the scenario',
      items: [
        {
          name: 'Itzamna Defense Systems',
          text: 'Full-stack web application for the challenge scenario with user authentication, quote requests and database connectivity on RHEL.',
          tags: ['Node.js', 'Express', 'MySQL', 'RHEL'],
          href: 'https://github.com/Joel-J-Leiva/itzamna-defense-systems',
        },
        {
          name: 'Itzamna Helpdesk System',
          text: 'Internal ticketing system with CSRF protection, bcrypt password hashing and a MariaDB backend, deployed behind an IIS reverse proxy.',
          tags: ['Node.js', 'MariaDB', 'IIS proxy', 'CSRF defense'],
          href: 'https://github.com/Joel-J-Leiva/itzamna-helpdesk',
        },
      ],
    },
    {
      type: 'lessons',
      heading: 'What I learned',
      items: [
        { title: 'Implicit deny and routing precedence', text: 'Troubleshooting multi-tier connectivity showed that implicit-deny rules and static routing metrics need careful logging and sequencing, or they block the cross-zone DNS and authentication traffic the network depends on.' },
        { title: 'Encryption has to be configured', text: 'Mail transport defaults to plaintext unless mandatory TLS, SASL and certificate enforcement are set. Security is engineered deliberately, not assumed.' },
        { title: 'Realistic defensive architecture', text: 'Keeping public-facing web applications in a DMZ, apart from critical databases and internal mail servers, reflects real defense in depth.' },
      ],
    },
  ],
  stack: [
    'Proxmox VE', 'OpenVPN tunnels', 'OPNsense firewalls', 'Firewall policies', 'NAT and aliases',
    'Static routing', 'LAN/WAN/DMZ segmentation', 'Active Directory and DNS', 'DHCP services',
    'Red Hat Enterprise Linux (RHEL)', 'Postfix (MTA)', 'Dovecot (MDA/IMAP)', 'SMTP submission (587)',
    'IMAPS (993)', 'SASL authentication', 'TLS encryption', 'SQL database server', 'PRTG Network Monitor',
    'Nginx reverse proxy', 'Windows 10/11 endpoints', 'Linux system hardening',
  ],
  skills: [
    'Enterprise network segmentation', 'Firewall rule engineering and aliases', 'NAT and static routing policies',
    'Active Directory and DNS configuration', 'Hardened Linux mail infrastructure', 'TLS/SSL certificate enforcement',
    'Least-privilege network access', 'System hardening (RHEL and Windows)',
  ],
};
