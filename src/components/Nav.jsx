import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { primaryNav } from '../data/nav';
import { profile } from '../data/profile';

const linkCls = ({ isActive }) =>
  `rounded-pill px-3 py-2 text-sm font-medium transition-colors duration-short ease-out hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
    isActive ? 'text-ink underline decoration-accent decoration-2 underline-offset-[10px]' : 'text-muted'
  }`;

/** Slab nav: a full-width bar, wordmark left, destinations centre, the contact action right. */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuId = useId();
  const toggleRef = useRef(null);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the menu when the route changes (adjusting state during render, per React docs).
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-[300] border-b border-rule bg-paper-3">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link to="/" viewTransition className="rounded-pill text-lg font-medium tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
          {profile.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} viewTransition className={linkCls} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" viewTransition className="btn text-sm">
            Contact
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="btn min-h-0 p-2 md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <nav id={menuId} aria-label="Primary" hidden={!open} className="border-t border-rule bg-paper-3 md:hidden">
        <ul className="container flex flex-col py-3">
          {[...primaryNav, { label: 'Contact', to: '/contact' }].map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} viewTransition className={({ isActive }) => `block rounded-pill px-3 py-3 text-base ${isActive ? 'text-ink' : 'text-muted'} hover:text-ink focus-visible:outline focus-visible:outline-2`}>
                {({ isActive }) => (
                  <span className="flex items-center justify-between">
                    {item.label}
                    {isActive ? <span className="h-2 w-2 rounded-[2px] bg-accent" aria-hidden="true" /> : null}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
