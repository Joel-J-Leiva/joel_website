import { useState } from 'react';
import { Mail, Send, Check, Copy, AlertCircle, ShieldCheck, MapPin, ExternalLink } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('leivajo@kean.edu').then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2500);
      });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Please fill in all required fields (Name, Email, Message).'
      });
      return;
    }

    // Prepare direct mailto fallback link to ensure message is never discarded silently
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject || 'General Inquiry'} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:leivajo@kean.edu?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      // Open mail client with prefilled details
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">
      
      {/* Header */}
      <div className="border-l-4 border-cyan-500 pl-6 py-2">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <span>&gt; comms.connect()</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold">[ Channels Open ]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-3 text-slate-400 text-base max-w-3xl leading-relaxed">
          Open to discussions regarding cybersecurity roles, Security Operations opportunities, incident response analysis, threat research, and technical collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Connect Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Email Card */}
          <div className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden group hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Mail size={20} />
              </div>
              <button 
                onClick={copyEmail}
                className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-all"
                title="Copy email to clipboard"
              >
                {isCopied ? (
                  <>
                    <Check size={12} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Email</div>
            <a 
              href="mailto:leivajo@kean.edu" 
              className="text-base sm:text-lg font-mono font-semibold text-slate-100 hover:text-cyan-400 transition-colors block mt-1 break-all"
            >
              leivajo@kean.edu
            </a>
            <p className="text-xs text-slate-400 mt-2">
              Primary professional and academic email address. Monitored daily.
            </p>
          </div>

          {/* LinkedIn Card */}
          <a 
            href="https://www.linkedin.com/in/joel-leiva0410/" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden block group hover:border-cyan-500/50 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <LinkedinIcon size={20} />
              </div>
              <ExternalLink size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Professional Profile</div>
            <div className="text-base font-mono font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors mt-1">
              linkedin.com/in/joel-leiva0410
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Connect for verified employment history, recommendations, and cybersecurity network updates.
            </p>
          </a>

          {/* GitHub Card */}
          <a 
            href="https://github.com/Joel-J-Leiva" 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 shadow-xl relative overflow-hidden block group hover:border-cyan-500/50 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GithubIcon size={20} />
              </div>
              <ExternalLink size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Source Code &amp; Repositories</div>
            <div className="text-base font-mono font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors mt-1">
              github.com/Joel-J-Leiva
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Browse public repositories, lab scripts, defense tool implementations, and web projects.
            </p>
          </a>

          {/* Location / Institution */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-400 font-mono">
            <MapPin size={16} className="text-cyan-400 shrink-0" />
            <span>Kean University &bull; Union, New Jersey, USA</span>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-xl relative">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-cyan-400" />
                <h2 className="text-lg font-bold font-mono text-slate-100">Send a Direct Message</h2>
              </div>
              <span className="text-xs font-mono text-slate-500">SECURE INTAKE</span>
            </div>

            {formStatus.submitted ? (
              <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                  <Check size={24} />
                </div>
                <h3 className="text-lg font-bold font-mono text-slate-100">Message Dispatched!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your email client has been prepared with your message directly to <strong>leivajo@kean.edu</strong>. You may also email me directly at any time.
                </p>
                <button
                  onClick={() => setFormStatus({ submitting: false, submitted: false, error: null })}
                  className="mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200 rounded transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {formStatus.error && (
                  <div className="p-3 rounded bg-red-950/50 border border-red-500/50 text-red-300 text-xs font-mono flex items-center gap-2">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{formStatus.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider block">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded px-3 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider block">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@organization.com"
                      className="w-full bg-slate-950/80 border border-slate-800 rounded px-3 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider block">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Cybersecurity Opportunity / Technical Discussion"
                    className="w-full bg-slate-950/80 border border-slate-800 rounded px-3 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider block">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your role, inquiry, or potential collaboration..."
                    className="w-full bg-slate-950/80 border border-slate-800 rounded px-3 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-y"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full sm:w-auto px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formStatus.submitting ? (
                      <span>Encrypting &amp; Routing...</span>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] font-mono text-slate-500 mt-2">
                    Note: Submissions generate an authenticated direct transmission to leivajo@kean.edu without tracking cookies.
                  </p>
                </div>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
