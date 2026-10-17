import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Check, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('leivajo@kean.edu').then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = 'leivajo@kean.edu';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
      } catch (err) {
        console.error('Failed to copy', err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <footer className="w-full bg-[#060911] border-t border-slate-800/80 mt-20 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <ShieldCheck className="text-cyan-400" size={14} />
              </div>
              <span className="text-base font-bold text-slate-100 font-mono tracking-tight">
                Joel Joseph Leiva Castillo
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Junior Security Operations (SecOps) Analyst at Kean University Information Technology. Dedicated to enterprise SIEM monitoring, threat intelligence research, incident investigations, and practical network defense.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Cybersecurity Opportunities &amp; Technical Collaboration</span>
            </div>
          </div>

          {/* Col 2: Fast Links */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-slate-200 uppercase tracking-wider font-semibold border-b border-slate-800 pb-1">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/experience" className="hover:text-cyan-400 transition-colors">Experience Matrix</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-400 transition-colors">Technical Projects</Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-cyan-400 transition-colors">Certifications &amp; Education</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">About &amp; Skills</Link>
              </li>
              <li>
                <Link to="/photography" className="hover:text-cyan-400 transition-colors">Photography Archive</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Form</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-slate-200 uppercase tracking-wider font-semibold border-b border-slate-800 pb-1">
              Connectivity
            </div>
            <div className="flex flex-col gap-2">
              <a 
                href="https://www.linkedin.com/in/joel-leiva0410/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
              >
                <LinkedinIcon size={14} className="text-cyan-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://github.com/Joel-J-Leiva" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
              >
                <GithubIcon size={14} className="text-cyan-400" />
                <span>GitHub Repositories</span>
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="/documents/joel-leiva-resume.pdf"
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors group"
              >
                <FileText size={14} className="text-cyan-400" />
                <span>Resume (PDF)</span>
                <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <button 
                onClick={copyEmail}
                className="flex items-center gap-2 text-left hover:text-cyan-400 transition-colors py-1 px-2 -ml-2 rounded hover:bg-slate-900 border border-transparent hover:border-slate-800"
                title="Click to copy email address"
              >
                {isCopied ? (
                  <>
                    <Check size={14} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">leivajo@kean.edu (Copied!)</span>
                  </>
                ) : (
                  <>
                    <Mail size={14} className="text-cyan-400" />
                    <span>leivajo@kean.edu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
          <div className="text-slate-400">
            &copy; {new Date().getFullYear()} Joel Leiva &bull; Enterprise SecOps &bull; Threat Intelligence &bull; Network Defense
          </div>
          <div className="text-slate-400 flex items-center gap-3">
            <span>Kean University &bull; BS Computer Science (Cybersecurity)</span>
            <span className="text-slate-700">|</span>
            <span className="text-cyan-400">STATUS: OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
