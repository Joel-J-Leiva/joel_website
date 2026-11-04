import { Link } from 'react-router-dom';

/**
 * One button style for the whole site.
 * `to` renders a router Link, `href` an anchor, neither a <button>.
 * variant: 'primary' (lime fill, one per screen) | 'secondary' (outlined pill).
 * icon: an optional React element; on the primary variant it sits after the label in a dark disc (.btn__ico).
 */
export default function Button({ to, href, variant = 'secondary', external = false, icon = null, className = '', children, ...rest }) {
  const primary = variant === 'primary';
  const cls = `btn ${primary ? 'btn--primary' : ''} ${className}`.trim();
  const content = icon ? (
    primary ? (
      <>
        {children}
        <span className="btn__ico" aria-hidden="true">
          {icon}
        </span>
      </>
    ) : (
      <>
        {icon}
        {children}
      </>
    )
  ) : (
    children
  );
  if (to) {
    return (
      <Link to={to} viewTransition className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={cls} {...ext} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  );
}
