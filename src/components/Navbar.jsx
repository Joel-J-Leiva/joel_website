import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, FileText, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/achievements' },
    { name: 'About', path: '/about' },
    { name: 'Photography', path: '/photography' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-[#080d18]/90 backdrop-blur-md border-b border-slate-800/80 z-50 transition-all">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand & Status Pill */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all">
              <Shield className="text-cyan-400" size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-100 font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                Joel Leiva
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider -mt-1 hidden sm:inline">
                SecOps &amp; Defense
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SEC_OPS // ACTIVE</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.path === '/projects' && location.pathname.startsWith('/projects/'));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded transition-all ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button: View Resume */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/documents/joel-leiva-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-500/60 hover:text-cyan-400 px-3 py-1.5 rounded transition-all shadow-sm"
          >
            <FileText size={14} className="text-cyan-400" />
            <span>Resume</span>
            <ExternalLink size={12} className="opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/documents/joel-leiva-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-cyan-400 border border-cyan-500/40 px-2 py-1 rounded bg-cyan-950/30"
          >
            Resume
          </a>
          <button 
            className="p-1.5 text-slate-300 hover:text-cyan-400 border border-slate-800 rounded bg-slate-900" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0a0f1d]/98 px-4 pt-3 pb-5 flex flex-col gap-2 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-1 border-b border-slate-800/60 text-xs font-mono text-slate-400">
            <span>NAVIGATION MATRIX</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              ONLINE
            </span>
          </div>
          {links.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.path === '/projects' && location.pathname.startsWith('/projects/'));
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-sm px-3 py-2 rounded flex items-center justify-between transition-colors ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 font-semibold'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-slate-600 text-xs">&gt;</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
