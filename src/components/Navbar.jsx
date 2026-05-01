import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Photography', path: '/photography' },
    { name: 'Achievements', path: '/achievements' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 h-16 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 z-50">
      <Link to="/" className="text-xl font-black text-cyan-400 font-mono tracking-tighter">Joel Leiva</Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`font-mono uppercase tracking-widest text-sm transition-colors ${
              location.pathname === link.path
                ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1'
                : 'text-neutral-500 hover:text-cyan-300'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Desktop Icons */}
      <div className="hidden md:flex gap-4">
        <Terminal className="text-cyan-400 hover:text-cyan-300 cursor-pointer" size={24} />
        <Shield className="text-cyan-400 hover:text-cyan-300 cursor-pointer" size={24} />
      </div>

      {/* Mobile Hamburger Button */}
      <button className="md:hidden text-cyan-400" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-neutral-950 border-b border-neutral-800 md:hidden flex flex-col p-4 gap-4 z-40">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-mono uppercase tracking-widest text-sm block ${
                location.pathname === link.path
                  ? 'text-cyan-400 font-bold'
                  : 'text-neutral-500 hover:text-cyan-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-4 mt-2">
            <Terminal className="text-cyan-400 hover:text-cyan-300 cursor-pointer" size={24} />
            <Shield className="text-cyan-400 hover:text-cyan-300 cursor-pointer" size={24} />
          </div>
        </div>
      )}
    </header>
  );
}
