// One source for the nav and the footer.
// Shape: { label, to } for routes; { label, href, external: true } for files and other sites.
export const primaryNav = [
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Certifications', to: '/achievements' },
  { label: 'About', to: '/about' },
  { label: 'Photography', to: '/photography' },
];

export const footerColumns = [
  {
    heading: 'Site',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Projects', to: '/projects' },
      { label: 'Experience', to: '/experience' },
      { label: 'Certifications', to: '/achievements' },
      { label: 'About', to: '/about' },
      { label: 'Photography', to: '/photography' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Documents',
    links: [
      { label: 'Resume (PDF)', href: '/documents/joel-leiva-resume.pdf', external: true },
      { label: 'Cover letter (PDF)', href: '/documents/joel-leiva-cover-letter.pdf', external: true },
    ],
  },
  {
    heading: 'Elsewhere',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joel-leiva0410/', external: true },
      { label: 'GitHub', href: 'https://github.com/Joel-J-Leiva', external: true },
    ],
  },
];
