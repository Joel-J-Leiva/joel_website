import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a href="#main" className="btn btn--primary fixed left-4 top-2 z-[400] -translate-y-20 focus:translate-y-0">
        Skip to content
      </a>
      <Nav />
      <Suspense fallback={<div className="min-h-[100svh]" aria-busy="true" />}>
        <main id="main" tabIndex={-1} className="outline-none">
          <Outlet />
        </main>
        <Footer />
      </Suspense>
    </>
  );
}
