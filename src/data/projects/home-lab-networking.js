export default {
  slug: 'home-lab-networking',
  intro:
    'A physical and virtual lab for practicing switching, Linux administration, DNS sinkholing and defensive traffic analysis.',
  meta: [
    { label: 'Cabling', value: 'Cat6a shielded' },
    { label: 'Switching', value: 'TP-Link gigabit switch' },
    { label: 'Always-on node', value: 'Raspberry Pi 5' },
    { label: 'Virtual machines', value: 'Ubuntu and Kali Linux' },
  ],
  sections: [
    {
      type: 'prose',
      heading: 'Why a home lab',
      paragraphs: [
        'Security operations rest on a working knowledge of networking and host operating systems. To test controls without risking production, I built a lab that combines wired infrastructure, dedicated microcomputers and virtual workloads.',
        'It runs on Cat6a cabling and a gigabit TP-Link switch, with a Raspberry Pi 5 as a network-wide DNS sinkhole (Pi-hole), local storage, and VirtualBox hosting isolated Ubuntu and Kali Linux virtual machines.',
      ],
    },
    {
      type: 'pair',
      left: {
        heading: 'Network administration',
        items: [
          { text: 'Terminated and structured Cat6a shielded patch cables for dependable gigabit switching.' },
          { text: 'Configured a TP-Link switch to distribute wired connectivity to lab devices.' },
          { text: 'Deployed a Raspberry Pi 5 on Raspberry Pi OS (64-bit) as an always-on infrastructure node.' },
          { text: 'Ran VirtualBox with Kali Linux for testing and Ubuntu Server for system services.' },
          { text: 'Standardized static IP addressing for persistent server reachability and DNS mapping.' },
        ],
      },
      right: {
        heading: 'Defensive workflows',
        items: [
          { term: 'DNS-level threat blocking', text: 'Sinkholing known phishing domains, ransomware C2 domains and telemetry trackers before resolution.' },
          { term: 'Traffic inspection', text: 'Monitoring outbound DNS queries for abnormal lookup patterns or beaconing.' },
          { term: 'Isolated sandboxing', text: 'Launching offensive tools in Kali VMs behind host-only/NAT network adapters.' },
          { term: 'Host hardening', text: 'SSH key-only authentication, with password logins disabled on all headless nodes.' },
        ],
      },
    },
    {
      type: 'gallery',
      heading: 'The hardware',
      images: [
        {
          src: '/projects/home-lab-networking/Homelab.jpg',
          alt: 'Home lab network hardware',
          caption: 'Lab hardware infrastructure.',
          width: 3072,
          height: 4080,
        },
      ],
    },
    {
      type: 'lessons',
      heading: 'What I learned, and what is next',
      items: [
        { title: 'Usability against strict defense', text: 'Aggressive third-party DNS blocklists can break legitimate web features or CDN endpoints. Tuning allowlists taught me to balance security posture against availability.' },
        { title: 'Next on the roadmap', text: 'A network TAP or managed-switch port mirror (SPAN) feeding raw packet captures into an intrusion detection engine (Suricata or Zeek) for automated threat hunting.' },
      ],
    },
  ],
  stack: [
    'Raspberry Pi 5', 'Pi-hole (DNS sinkhole)', 'TP-Link unmanaged switch', 'VirtualBox', 'Ubuntu Server / Desktop',
    'Kali Linux', 'Cat6a shielded cabling', 'OpenMediaVault / NAS', 'DNS over HTTPS (DoH)', 'Local subnetting',
  ],
  skills: [
    'DNS sinkholing and filtering', 'Hardware cabling and switching', 'Linux system administration',
    'Virtual machine isolation', 'Traffic flow visibility', 'Future monitoring planning',
  ],
};
