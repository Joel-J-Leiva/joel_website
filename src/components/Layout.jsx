import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-16 min-h-screen flex flex-col">
        <main className="flex-grow pt-xl pb-xl px-gutter max-w-[1200px] mx-auto w-full">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
