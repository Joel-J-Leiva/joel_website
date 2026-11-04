import { Link } from 'react-router-dom';
import { footerColumns } from '../data/nav';
import { profile } from '../data/profile';
import CopyEmail from './CopyEmail';
import Asterisk from './ui/Asterisk';

/** Index columns: the wordmark and the email, then the site's real links. */
export default function Footer() {
  return (
    <footer className="relative mt-[var(--section-gap)] border-t border-rule bg-paper-3">
      <Asterisk className="absolute right-[var(--gutter)] top-10 h-6 w-6 text-accent" />
      <div className="container grid gap-12 py-16 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
        <div className="min-w-0 space-y-4">
          <p className="font-sans text-lg font-semibold text-ink">{profile.name}</p>
          <p className="max-w-[40ch] text-muted">
            {profile.role}, {profile.org}. {profile.availability}
          </p>
          <CopyEmail />
        </div>
        {footerColumns.map((col) => (
          <div key={col.heading} className="min-w-0">
            <h2 className="mb-4 text-xl">
              {col.heading}
            </h2>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} viewTransition className="link no-underline hover:underline">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="link no-underline hover:underline">
                      {l.label}
                      <span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-rule">
        <div className="container flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.shortName}</p>
          <p>{profile.education.degree} ({profile.education.focus}), {profile.education.school}</p>
        </div>
      </div>
    </footer>
  );
}
