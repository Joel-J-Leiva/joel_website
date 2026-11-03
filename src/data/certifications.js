// Credentials from the original Achievements page. Earned/in-progress: {title, issuer, status, description}.
// Academic: {title, institution, date, type, description}.
export const earned = [
  {
    title: 'CompTIA Security+ (SY0-701)',
    issuer: 'CompTIA',
    status: 'Earned',
    description: 'Foundational cybersecurity skills across threats, attacks and vulnerabilities, security architecture, security operations, incident response and governance.',
  },
  {
    title: 'Fortinet Certified Associate Cybersecurity (FCA)',
    issuer: 'Fortinet',
    status: 'Earned',
    description: 'Associate-level proficiency in cybersecurity gateway controls, security architecture fundamentals and threat mitigation.',
  },
  {
    title: 'Fortinet Certified Fundamentals Cybersecurity (FCF)',
    issuer: 'Fortinet',
    status: 'Earned',
    description: 'Core cybersecurity fundamentals, the threat landscape and basic network defense concepts.',
  },
  {
    title: 'Zero Trust Cyber Associate (ZTCA)',
    issuer: 'Zscaler',
    status: 'Earned',
    description: 'Zero Trust architecture, secure access service edge (SASE), least-privilege boundary enforcement and identity verification.',
  },
  {
    title: 'Fundamentals of Cybersecurity',
    issuer: 'Zscaler',
    status: 'Earned',
    description: 'Enterprise threat vectors, attack surfaces, layered defensive security and cloud risk mitigation.',
  },
  {
    title: 'Introduction to Networking for Cyber Professionals',
    issuer: 'Zscaler',
    status: 'Earned',
    description: 'Enterprise networking foundations: IP routing, OSI and TCP layers, DNS resolution and perimeter security.',
  },
];

export const inProgress = [
  {
    title: 'Cisco Certified Network Associate (CCNA 200-301)',
    issuer: 'Cisco',
    status: 'In progress',
    description: 'Studying routing protocols, IP services, VLAN segmentation, switch port security, ACLs and network infrastructure fundamentals.',
  },
];

export const academic = [
  {
    title: 'Bachelor of Science in Computer Science: Cybersecurity',
    institution: 'Kean University, Union, NJ',
    date: 'Expected May 2027',
    type: 'Degree program',
    description: 'Computer Science major with specialization coursework in cybersecurity, network security, operating system security and systems analysis.',
  },
  {
    title: 'Alpha Alpha Alpha Honor Society (Tri-Alpha)',
    institution: 'Kean University Chapter',
    date: 'Inducted 2025',
    type: 'Honor society',
    description: 'National academic honor society recognizing high academic achievement among first-generation college students.',
  },
  {
    title: 'Epsilon Epsilon Omega Honor Society',
    institution: 'Kean University EOF',
    date: 'Recognized member',
    type: 'Honor society',
    description: 'Academic honor society recognizing academic excellence within the Educational Opportunity Fund program.',
  },
  {
    title: 'Photographer of the Year Award',
    institution: 'Frank J. Cicarell Academy',
    date: '2023',
    type: 'Achievement',
    description: 'Awarded for visual composition, digital media leadership and photographic storytelling.',
  },
];

export const certifications = { earned, inProgress, academic };
