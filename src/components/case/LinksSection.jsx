import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import CaseSection from './CaseSection';

/** Related links. `to` is an internal route; `href` is an external page or a file in public/. */
export default function LinksSection({ heading, text, items = [] }) {
  return (
    <CaseSection heading={heading} text={text} label="Related links">
      <ul className="flex flex-wrap gap-x-8 gap-y-3" role="list">
        {items.map((item) => (
          <li key={item.to ?? item.href}>
            {item.to ? (
              <Link to={item.to} viewTransition className="link font-medium">
                {item.label}
              </Link>
            ) : (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-2 font-medium">
                {item.label}
                <ExternalLink size={14} aria-hidden="true" />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </CaseSection>
  );
}
