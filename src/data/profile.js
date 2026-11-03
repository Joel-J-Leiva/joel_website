export const profile = {
  name: 'Joel Joseph Leiva Castillo',
  shortName: 'Joel Leiva',
  role: 'Junior Security Operations Analyst',
  org: 'Kean University IT',
  location: 'Union, New Jersey',
  school: 'Kean University',
  email: 'leivajo@kean.edu',
  links: {
    linkedin: 'https://www.linkedin.com/in/joel-leiva0410/',
    linkedinLabel: 'linkedin.com/in/joel-leiva0410',
    github: 'https://github.com/Joel-J-Leiva',
    githubLabel: 'github.com/Joel-J-Leiva',
    resume: '/documents/joel-leiva-resume.pdf',
    coverLetter: '/documents/joel-leiva-cover-letter.pdf',
  },
  portraitHome: {
    src: '/images/joel-photos/Home-Page-900.webp',
    srcSet: '/images/joel-photos/Home-Page-640.webp 640w, /images/joel-photos/Home-Page-900.webp 900w, /images/joel-photos/Home-Page.webp 1200w',
    alt: 'Joel Leiva, portrait',
  },
  portraitAbout: { src: '/images/joel-photos/About-Me.webp', alt: 'Joel Leiva' },
  // Hero: a headline of seven words or fewer and one sentence.
  headline: 'Joel Leiva, security operations analyst.',
  heroSentence: 'I triage SIEM alerts for 25,000+ students, faculty and staff at Kean University.',
  // The one terminal touch: typed once under the portrait.
  whoami: { command: 'whoami', output: 'joel.leiva, secops analyst' },
  // The hero's record under the whoami line: facts from the experience data, set in the measured face.
  record: [
    { label: 'Role', value: 'junior secops analyst' },
    { label: 'Org', value: 'kean university it' },
    { label: 'Since', value: '2026-06' },
    { label: 'Scope', value: '25,000+ users' },
    { label: 'Graduates', value: '2027-05, bs cs' },
  ],
  availability: 'Open to cybersecurity roles and technical collaboration.',
  // Figures stated on the original site; never add one that is not sourced here.
  readings: [
    { value: 25000, suffix: '+', label: 'Students, faculty and staff in the environment I monitor', source: 'Kean University IT', tone: 'blue' },
    { value: 60, suffix: '+', label: 'Nonprofits that received our threat intelligence reports', source: 'Kean Center for Cybersecurity', tone: 'green' },
    { value: 395, label: 'CIS checks assessed on my Wazuh lab host', source: 'Wazuh SIEM lab', to: '/projects/wazuh-siem-lab', tone: 'violet' },
  ],
  bio: [
    'I study Computer Science (Cybersecurity) at Kean University and work as a Junior Security Operations Analyst with Kean University IT. I run 24/7 threat monitoring in Stellar Cyber SIEM and CrowdStrike Falcon, investigate identity and sign-in activity in Okta, track incidents in Freshservice, and work with the Network and Cloud Engineering teams to protect an environment of more than 25,000 students, faculty and staff.',
    'Much of my work is about making analysts faster. I write automation scripts for repetitive triage tasks, and I designed an internal AI-assisted SecOps knowledge platform that gives new analysts structured SOPs and investigation workflows.',
    'Before that, as a Threat Intelligence Analyst Intern at Kean’s Center for Cybersecurity, I researched ransomware campaigns, data breaches and DDoS activity against nonprofits, and contributed reports to a consortium of more than 60 of them.',
    'My hands-on base is infrastructure: segmented Proxmox topologies (LAN, WAN, DMZ) behind OPNsense firewalls, PRTG monitoring, hardened Linux services (RHEL, Postfix, Dovecot with TLS), and self-hosted labs, including a Wazuh SIEM on Linode.',
  ],
  philosophy:
    'Detection only works on top of verified configuration, tested logging pipelines and playbooks that lower an analyst’s load during an incident. I try to build both halves.',
  education: {
    degree: 'Bachelor of Science in Computer Science',
    focus: 'Cybersecurity',
    school: 'Kean University',
    location: 'Union, NJ',
    expected: 'May 2027',
    summary: 'Coursework in network security, operating system security, algorithms, data structures and defensive computing.',
  },
};
