import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BackToProjects({ position = 'top' }) {
  if (position === 'bottom') {
    return (
      <div className="text-center mt-12 border-t border-slate-800 pt-8">
        <Link 
          to="/projects" 
          className="inline-flex items-center justify-center gap-2 text-slate-200 hover:text-cyan-400 bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/50 px-6 py-2.5 rounded font-mono text-xs uppercase tracking-wider transition-all shadow-sm group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          <span>Return to Projects Directory</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <Link 
        to="/projects" 
        className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors font-mono text-xs group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
        <span>&lt; Back to Projects Directory</span>
      </Link>
    </div>
  );
}
