import { Terminal, FileCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Experience() {
  const experiences = [
    {
      role: 'Junior Security Operations (SecOps) Analyst',
      organization: 'Kean University — Information Technology',
      location: 'Union, NJ',
      period: 'June 2026 – Present',
      status: 'Current Role',
      statusColor: 'emerald',
      scope: 'Enterprise Environment • 20,000+ Students & Staff',
      summary: 'Conduct continuous enterprise security monitoring, alert triage, and incident investigations within Kean University’s Information Technology environment. Work cross-functionally to mitigate security risks and engineer workflow automation tools that accelerate analyst response capabilities.',
      highlights: [
        'Monitor enterprise security events via SIEM platform, conducting real-time alert triage and in-depth security case investigations to identify threats and reduce false positives.',
        'Assess incident scope, severity, and potential blast radius across hybrid campus network infrastructure serving more than 20,000 academic and administrative users.',
        'Collaborate daily with the Networking Team, Cloud Engineering Team, and Director of IT Security to correlate events, validate indicators of compromise (IOCs), and execute targeted remediation actions.',
        'Develop automation scripts (Bash/Python) to streamline repetitive triage workflows, eliminate manual data lookups, and increase operational response efficiency.',
        'Designed and engineered an internal AI-assisted SecOps knowledge platform that accelerates onboarding for new analysts by providing standardized guidance on triage procedures, investigation playbooks, and standard operating procedures (SOPs).'
      ],
      technologies: [
        'Stellar Cyber (SIEM)',
        'CrowdStrike (EDR, SIEM)',
        'Okta (IdP)',
        'SIEM Platform & Alert Triage',
        'Incident Investigation',
        'Threat Hunting',
        'Workflow Automation',
        'AI Analyst Knowledge Base',
        'Log Correlation & Detection'
      ]
    },
    {
      role: 'Strategic Operations Manager',
      organization: 'House of Hearts — Department of Operations',
      location: 'New Jersey',
      period: 'August 2026 – Present',
      status: 'Current Role',
      statusColor: 'cyan',
      scope: 'Organizational Operations & Technology Infrastructure',
      summary: 'Direct technology and access advancement initiatives to strengthen operational capacity and ensure high-availability digital services for community programs and organization personnel.',
      highlights: [
        'Lead Information Technology and Access Advancement initiatives, modernizing organizational technology capabilities to support staff, operational programs, and community services.',
        'Organize, maintain, and support the foundation’s digital infrastructure, engineering targeted technology solutions to enhance operational reliability, data consistency, and process efficiency.',
        'Collaborate directly with executive leadership to evaluate technical requirements, formulate strategic technology plans, and align resource allocation with organizational objectives.'
      ],
      technologies: [
        'Google Admin',
        'Digital Infrastructure Management',
        'Operational Strategy',
        'Systems Reliability',
        'Technology Leadership',
        'Cross-Functional Operations'
      ]
    },
    {
      role: 'Threat Intelligence and Analyst Intern',
      organization: 'Kean University — Center for Cybersecurity',
      location: 'Union, NJ',
      period: 'September 2025 – May 2026',
      status: 'Completed',
      statusColor: 'slate',
      scope: 'Center for Cybersecurity • NPCIR Threat Research & Lab Engineering',
      summary: 'Conducted open-source threat intelligence (OSINT) research on malicious campaigns impacting vulnerable non-governmental sectors and architected physical lab infrastructure for security research.',
      highlights: [
        'Conducted structured open-source threat intelligence (OSINT) research focused on ransomware strains, data breaches, DoS/DDoS vectors, and emergent threat actor tactics impacting nonprofit and NGO organizations.',
        'Authored detailed intelligence reports to inform defensive decision-making, threat awareness, and proactive risk reduction across a consortium of more than 60 nonprofit organizations.',
        'Contributed curated incident data to the Non-Profit Cyber Incident Repository (NPCIR), organizing indicators of compromise, affected sectors, and adversary methodologies.',
        'Designed and deployed physical cybersecurity laboratory infrastructure, integrating network switches, Power over Ethernet (PoE) hardware, network-attached storage (NAS), power distribution units (PDU), and surveillance systems for hands-on technical research.'
      ],
      technologies: [
        'OSINT Gathering',
        'Threat Intelligence Reporting',
        'Ransomware Analysis',
        'NPCIR Dataset',
        'Physical Lab Deployment',
        'PoE Switching & PDU',
        'Adversary Profiling'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="border-l-4 border-cyan-500 pl-6 py-2">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <span>&gt; career.timeline()</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ENTERPRISE VERIFIED
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 tracking-tight">
          Professional Experience
        </h1>
        <p className="mt-3 text-slate-400 text-base max-w-3xl leading-relaxed">
          Demonstrated hands-on experience in enterprise Security Operations, active threat monitoring across 20,000+ users, applied threat intelligence research, and operational infrastructure management.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-10 relative before:absolute before:inset-0 before:left-3 md:before:left-6 before:w-0.5 before:bg-slate-800 before:content-['']">
        {experiences.map((exp, idx) => (
          <article 
            key={idx} 
            className="relative pl-8 md:pl-14 group"
          >
            {/* Timeline Dot */}
            <div className={`absolute left-1 md:left-4 top-5 w-4 h-4 rounded-full border-2 bg-[#080d18] transition-all ${
              exp.statusColor === 'emerald' 
                ? 'border-emerald-400 group-hover:bg-emerald-400/20 shadow-[0_0_12px_rgba(16,185,129,0.5)]' 
                : exp.statusColor === 'cyan'
                ? 'border-cyan-400 group-hover:bg-cyan-400/20 shadow-[0_0_12px_rgba(0,212,255,0.4)]'
                : 'border-slate-500 group-hover:border-slate-300'
            }`}></div>

            {/* Experience Card */}
            <div className="bg-[#0b1220]/90 border border-slate-800/90 rounded-xl p-6 sm:p-8 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
              
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-800/80">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-100 font-mono">
                      {exp.role}
                    </h2>
                    {exp.status === 'Current Role' && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-950/60 text-emerald-400 border border-emerald-500/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Active Role
                      </span>
                    )}
                  </div>
                  <div className="text-cyan-400 font-medium text-base">
                    {exp.organization} &bull; <span className="text-slate-400 text-sm">{exp.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end font-mono text-xs text-slate-400 shrink-0">
                  <span className="px-3 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-semibold">
                    {exp.period}
                  </span>
                  <span className="text-slate-500 mt-1">{exp.scope}</span>
                </div>
              </div>

              {/* Role Summary */}
              <p className="mt-5 text-slate-300 leading-relaxed text-sm sm:text-base">
                {exp.summary}
              </p>

              {/* Responsibilities */}
              <div className="mt-5 space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <Terminal size={14} className="text-cyan-400" />
                  Key Responsibilities &amp; Impact
                </h3>
                <ul className="space-y-2.5">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <span className="text-cyan-400 text-base leading-none mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-mono text-slate-500 mr-2">Environment:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </article>
        ))}
      </div>

      {/* Callout: Enterprise SecOps Highlights */}
      <section className="bg-gradient-to-r from-cyan-950/30 to-slate-900/60 border border-cyan-500/30 rounded-xl p-6 sm:p-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold">
              <Sparkles size={16} />
              <span>INNOVATION IN OPERATIONS</span>
            </div>
            <h3 className="text-xl font-bold font-mono text-slate-100">
              Internal AI-Assisted Analyst Knowledge Platform
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Designed and built internally within Kean University Information Technology to bridge the knowledge gap for incoming SecOps analysts. Standardizes alert triage workflows, references internal standard operating procedures, and enhances operational readiness.
            </p>
          </div>
          <Link
            to="/projects"
            className="shrink-0 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* Cross Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800 text-xs font-mono text-slate-400">
        <div>&gt; End of career mission log</div>
        <div className="flex items-center gap-4">
          <a 
            href="/documents/joel-leiva-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline flex items-center gap-1"
          >
            <FileCheck size={14} /> Download Official Resume (PDF)
          </a>
          <span>&bull;</span>
          <Link to="/contact" className="hover:text-slate-200">
            Get In Touch &gt;
          </Link>
        </div>
      </div>

    </div>
  );
}
