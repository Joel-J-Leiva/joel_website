import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { primaryNav } from '../data/nav';
import { profile } from '../data/profile';
import Asterisk from './ui/Asterisk';
import ProfileLinks from './ProfileLinks';
import MotionToggle from './MotionToggle';

/**
 * Sticky nav: the brand left, pill links centre, the contact pill right.
 * The links show whenever they fit on one row; only when they do not does the menu button replace them.
 */
const [firstName, ...restName] = profile.shortName.split(' ');

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuId = useId();
  const toggleRef = useRef(null);
  const [lastPath, setLastPath] = useState(pathname);
  const barRef = useRef(null);
  const brandRef = useRef(null);
  const linksRef = useRef(null);
  const ctaRef = useRef(null);
  const [fits, setFits] = useState(true);

  // Measure the links' natural width against the bar. They stay laid out (but invisible) when they
  // do not fit, so the measurement keeps working as the window grows again.
  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar || typeof ResizeObserver === 'undefined') return undefined;
    const measure = () => {
      const cs = getComputedStyle(bar);
      const room = bar.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const gap = parseFloat(cs.columnGap) || 0;
      const need = brandRef.current.offsetWidth + linksRef.current.scrollWidth + ctaRef.current.offsetWidth + gap * 2;
      setFits(need <= room);
    };
    const ro = new ResizeObserver(measure);
    ro.observe(bar);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);

  // The menu only exists while the links do not fit.
  if (fits && open) setOpen(false);

  const away = fits ? '' : 'nav-away';

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
      <div ref={barRef} className="container relative flex h-[72px] items-center justify-between gap-6">
        <Link ref={brandRef} to="/" viewTransition className="brand">
          <Asterisk />
          {firstName} <em>{restName.join(' ')}</em>
        </Link>

        <nav aria-label="Primary" className={away}>
          <ul ref={linksRef} className="flex items-center gap-1 whitespace-nowrap">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} viewTransition className="nav__link" end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div ref={ctaRef} className={`shrink-0 ${away}`}>
          <Link to="/contact" viewTransition className="nav__cta">
            Contact
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="btn btn--icon"
          hidden={fits}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <nav id={menuId} aria-label="Primary" hidden={!open || fits} className="border-t border-rule bg-paper-3">
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
          <li aria-hidden="true" className="my-3 border-t border-rule" />
          <li className="px-3 py-2">
            <ProfileLinks variant="text" />
          </li>
          <li className="px-3 py-2">
            <MotionToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
