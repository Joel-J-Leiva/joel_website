import { Check, Copy } from 'lucide-react';
import useCopyToClipboard from '../hooks/useCopyToClipboard';
import { profile } from '../data/profile';

/** The email as a mailto link, plus a copy button with a live status message. */
export default function CopyEmail({ className = '', large = false }) {
  const [status, copy] = useCopyToClipboard();
  const label = status === 'copied' ? 'Copied' : status === 'failed' ? 'Copy failed' : 'Copy';
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href={`mailto:${profile.email}`} className={`link measured ${large ? 'text-lg sm:text-xl' : ''}`}>
        {profile.email}
      </a>
      <button type="button" className="btn px-3 text-sm" onClick={() => copy(profile.email)} aria-label={`Copy email address ${profile.email}`}>
        {status === 'copied' ? <Check size={14} aria-hidden="true" className="text-ok" /> : <Copy size={14} aria-hidden="true" />}
        <span aria-hidden="true">{label}</span>
      </button>
      <span role="status" className="visually-hidden">
        {status === 'copied' ? 'Email address copied' : status === 'failed' ? 'Copy failed; select the address instead' : ''}
      </span>
    </div>
  );
}
