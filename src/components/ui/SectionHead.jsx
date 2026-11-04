import { Link } from 'react-router-dom';

/** h2 (serif italic from base CSS; add no font classes) with an optional one-line lead and an optional link at the right. */
export default function SectionHead({ id, title, lead, link }) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <h2 id={id}>{title}</h2>
        {lead ? <p className="mt-3 max-w-[60ch] text-muted">{lead}</p> : null}
      </div>
      {link ? (
        <Link to={link.to} viewTransition className="link shrink-0 text-sm font-medium">
          {link.label}
        </Link>
      ) : null}
    </div>
  );
}
