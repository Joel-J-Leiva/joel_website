import CaseSection from './CaseSection';
import { GithubIcon } from '../icons';

/** Code repositories: name, what it is, its stack as plain text, and a link out. */
export default function ReposSection({ heading, items = [] }) {
  return (
    <CaseSection heading={heading}>
      <ul className="panels md:grid-cols-2" role="list">
        {items.map((repo) => (
          <li key={repo.href} className="flex flex-col p-6 sm:p-8">
            <h3>{repo.name}</h3>
            <p className="mt-3 text-muted">{repo.text}</p>
            {repo.tags?.length ? (
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-2" role="list" aria-label="Built with">
                {repo.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}
            <a href={repo.href} target="_blank" rel="noopener noreferrer" className="link mt-6 inline-flex items-center gap-2 self-start">
              <GithubIcon /> {repo.name} on GitHub<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </CaseSection>
  );
}
