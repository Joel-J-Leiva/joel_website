import { FileText } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './icons';
import { profile } from '../data/profile';

const LINKS = [
  { id: 'linkedin', label: 'LinkedIn', href: profile.links.linkedin, Icon: LinkedinIcon },
  { id: 'github', label: 'GitHub', href: profile.links.github, Icon: GithubIcon },
  { id: 'resume', label: 'Resume', href: profile.links.resume, Icon: FileText },
];

/**
 * LinkedIn, GitHub and Resume, each opening in a new tab.
 * variant: 'icon' (44px round buttons named by hidden text) | 'text' (outlined buttons with a visible label).
 * omit: ids to leave out, for example ['resume'].
 */
export default function ProfileLinks({ variant = 'icon', omit = [], className = '' }) {
  const icon = variant === 'icon';
  return (
    <ul className={`${icon ? 'social' : 'flex flex-wrap gap-3'} ${className}`.trim()}>
      {LINKS.filter((l) => !omit.includes(l.id)).map(({ id, label, href, Icon }) => (
        <li key={id}>
          <a href={href} target="_blank" rel="noopener noreferrer" className={icon ? undefined : 'btn'}>
            <Icon size={17} aria-hidden="true" />
            {icon ? <span className="visually-hidden">{label}</span> : label}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
