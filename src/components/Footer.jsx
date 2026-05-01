import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('leivajo@kean.edu').then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = 'leivajo@kean.edu';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto bg-neutral-950 border-t border-neutral-800 bottom docked full-width">
      <div className="text-sm font-bold text-neutral-200">Joel Leiva</div>
      
      <div className="flex gap-6">
        <a 
          className="font-mono text-xs uppercase tracking-tighter text-neutral-600 hover:text-cyan-400 hover:glow-sm transition-all focus:ring-1 focus:ring-cyan-500" 
          href="https://www.linkedin.com/in/joel-leiva0410/" 
          target="_blank" 
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a 
          className="font-mono text-xs uppercase tracking-tighter text-neutral-600 hover:text-cyan-400 hover:glow-sm transition-all focus:ring-1 focus:ring-cyan-500" 
          href="https://github.com/Joel-J-Leiva?tab=repositories" 
          target="_blank" 
          rel="noreferrer"
        >
          GitHub
        </a>
        <button 
          onClick={copyEmail}
          className="font-mono text-xs uppercase tracking-tighter text-neutral-600 hover:text-cyan-400 hover:glow-sm transition-all focus:ring-1 focus:ring-cyan-500" 
        >
          {isCopied ? "Email Copied!" : "Email"}
        </button>
      </div>

      <div className="font-mono text-xs uppercase tracking-tighter text-cyan-400 text-center md:text-right">© 2024 Joel Leiva | Secure. Analyze. Protect.</div>
    </footer>
  );
}
