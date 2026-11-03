import { Link } from 'react-router-dom';

/**
 * One button style for the whole site.
 * `to` renders a router Link, `href` an anchor, neither a <button>.
 * variant: 'primary' (amber fill, one per screen) | 'secondary' (outline).
 */
export default function Button({ to, href, variant = 'secondary', external = false, className = '', children, ...rest }) {
  const cls = `btn ${variant === 'primary' ? 'btn--primary' : ''} ${className}`.trim();
  if (to) {
    return (
      <Link to={to} viewTransition className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={cls} {...ext} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
