import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BackToProjects({ position = 'top' }) {
  if (position === 'bottom') {
    return (
      <div className="text-center mt-12 border-t border-surface-variant pt-8">
        <Link 
          to="/projects" 
          className="inline-flex items-center justify-center gap-2 text-on-surface hover:text-primary transition-colors font-code-sm text-sm border border-outline-variant px-6 py-3 rounded glow-blue hover:border-primary w-fit mx-auto"
        >
          <ArrowLeft size={16} className="shrink-0" /> 
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <Link 
        to="/projects" 
        className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-code-sm text-sm w-fit"
      >
        <ArrowLeft size={16} className="shrink-0" /> 
        <span>Back to Projects</span>
      </Link>
    </div>
  );
}
