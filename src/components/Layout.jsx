import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Rail from './Rail';

/**
 * On every client-side route change: scroll to the top, move focus to <main>, and announce
 * the new page's heading, so keyboard and screen reader users know the page changed.
 * The first load is left alone: the browser already announces it.
 */
function RouteChange({ onAnnounce }) {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (first.current) {
      first.current = false;
      return undefined;
    }
    // Wait for a lazy page to render its h1 and title.
    const id = setTimeout(() => {
      document.getElementById('main')?.focus({ preventScroll: true });
      const h1 = document.querySelector('#main h1');
      onAnnounce(h1?.textContent?.trim() || document.title);
    }, 400);
    return () => clearTimeout(id);
  }, [pathname, onAnnounce]);
  return null;
}

export default function Layout() {
  const [announcement, setAnnouncement] = useState('');
  return (
    <>
      <RouteChange onAnnounce={setAnnouncement} />
      <p className="visually-hidden" aria-live="polite" aria-atomic="true">
        {announcement}
      </p>
      <a href="#main" className="btn btn--primary fixed left-4 top-2 z-[400] -translate-y-20 focus:translate-y-0">
        Skip to content
      </a>
      <div className="page">
        <Nav />
        <main id="main" tabIndex={-1} className="outline-none">
          <Suspense fallback={<div className="min-h-[100svh]" aria-busy="true" />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
      {/* Fixed on screen; last in the DOM so the skip link and the nav come first in tab order. */}
      <Rail />
    </>
  );
}
