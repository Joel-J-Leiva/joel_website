import { ShieldCheck, Terminal, ExternalLink, Database, Globe, Search } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function NGOThreatIntel() {
  const techStack = [
    'MITRE ATT&CK Framework',
    'Shodan Search Engine',
    'VirusTotal Intelligence',
    'Maltego OSINT Link Analysis',
    'MISP (Malware Information Sharing Platform)',
    'Python (OSINT Scraping & Parsing)',
    'Jupyter Notebooks',
    'Non-Profit Cyber Incident Repository (NPCIR)'
  ];

  const keySkills = [
    'Open-Source Intelligence (OSINT)',
    'Adversary TTP Mapping',
    'IOC Extraction & Validation',
    'Nonprofit Threat Modeling',
    'Defensive Actionable Intelligence',
    'Ethical Research & OPSEC Standards'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16 px-4">
      <BackToProjects position="top" />

      {/* Header */}
      <header className="mb-12 border-l-4 border-cyber-cyan pl-6 py-2">
        <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs mb-3 uppercase tracking-wider">
          <span className="opacity-70">&gt;</span> threat_intelligence // npcir_research
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
          Non-Profit & NGO Threat Intelligence Research (NPCIR)
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          Open-source intelligence (OSINT) and threat intelligence research tracking ransomware, data breaches, and DDoS vectors affecting more than 60 non-profit and non-governmental organizations to inform defensive decision-making.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-900/90 text-cyber-cyan border border-cyber-cyan/30 rounded text-xs font-mono">
            Institution: Kean Center for Cybersecurity
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-900/90 text-cyber-emerald border border-cyber-emerald/30 rounded text-xs font-mono">
            Scope: 60+ Nonprofits & NGOs
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-900/90 text-amber-400 border border-amber-400/30 rounded text-xs font-mono">
            Focus: Ransomware, Breaches & DDoS
          </span>
        </div>
      </header>

      {/* Overview */}
      <section className="mb-12">
        <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2 font-mono">
            <span className="text-cyber-cyan">&gt;</span> 01_PROJECT_BACKGROUND_&_MISSION
          </h2>
          <p className="text-slate-300 leading-relaxed text-base mb-4">
            Non-Profit organizations and Non-Governmental Organizations (NGOs) maintain sensitive donor databases, provide critical community services, and support humanitarian initiatives—yet they frequently operate with severely constrained IT budgets and minimal dedicated cybersecurity personnel. This makes them high-value, vulnerable targets for opportunistic ransomware groups, state-aligned hacktivists, and phishing operators.
          </p>
          <p className="text-slate-300 leading-relaxed text-base">
            As a Threat Intelligence and Analyst Intern at Kean University's Center for Cybersecurity, I conducted OSINT investigations into publicly reported cyber incidents impacting these sectors. The research directly supported the <strong className="text-slate-100">Non-Profit Cyber Incident Repository (NPCIR)</strong>, synthesizing incident reports, adversary Tactics, Techniques, and Procedures (TTPs), and defensive countermeasures to help over 60 organizations anticipate and defend against active cyber campaigns.
          </p>
        </div>
      </section>

      {/* Research Methodology & Security Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono border-b border-dark-700 pb-3">
            <Terminal size={20} className="text-cyber-cyan" />
            <span className="text-cyber-cyan">&gt;</span> Analyst Research Responsibilities
          </h2>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">01.</span>
              <span><strong>OSINT Incident Collection:</strong> Systematically investigated disclosed ransomware events, data exfiltration notices, defacements, and DDoS campaigns across news feeds, security advisories, and disclosure portals.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">02.</span>
              <span><strong>MITRE ATT&CK Mapping:</strong> Mapped observed adversary behaviors back to MITRE ATT&CK enterprise techniques (Initial Access, Persistence, Defense Evasion, Exfiltration).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">03.</span>
              <span><strong>NPCIR Dataset Contribution:</strong> Normalized incident records by sector, organization size, attack vector, ransom demands, and technical remediation indicators.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">04.</span>
              <span><strong>Defensive Intelligence Briefings:</strong> Authored actionable reports translating complex attack narratives into prioritized defensive guidance for resource-constrained IT leaders.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">05.</span>
              <span><strong>Operational Security (OPSEC):</strong> Maintained strict ethical and operational boundaries, utilizing sanitized research environments and avoiding dark web credential trading platforms.</span>
            </li>
          </ul>
        </section>

        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono border-b border-dark-700 pb-3">
            <ShieldCheck size={20} className="text-cyber-emerald" />
            <span className="text-cyber-emerald">&gt;</span> Intelligence Concepts Demonstrated
          </h2>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Actionable vs. Passive Data:</strong> Raw threat feeds are noisy; true threat intelligence extracts context that informs firewall rules, patch schedules, and user awareness.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Sector-Specific Threat Modeling:</strong> Analyzed why NGO threat profiles differ drastically from enterprise banking (e.g., targeted politically-motivated hacktivism vs. pure extortion).
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Indicator of Compromise (IOC) Hygiene:</strong> Emphasized higher-order indicators (TTPs and tooling) over fragile, short-lived indicators like hashes and ephemeral IPs.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Defensive Enablement:</strong> Focused on practical controls (MFA enforcement, immutable backups, external exposure auditing) that deliver maximum risk reduction.
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Official Dataset Section */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono">
          <span className="text-cyber-cyan">&gt;</span> 02_REPOSITORY_ACCESS_&_INSTITUTIONAL_PARTNERS
        </h2>
        <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-cyber-cyan/10 p-4 rounded-xl border border-cyber-cyan/30 flex-shrink-0">
              <Database size={32} className="text-cyber-cyan" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Non-Profit Cyber Incident Repository (NPCIR)
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm mb-4">
                The Non-Profit Cyber Incident Repository is an academic initiative maintained through the Kean University Center for Cybersecurity. It serves as an open, standardized dataset of cyber incidents to support academic researchers, practitioners, and non-profit leaders looking to understand real-world risk metrics.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href="https://www.kean.edu/academics/college-business-and-public-management/center-cybersecurity-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 hover:border-cyber-cyan hover:bg-cyber-cyan/20 transition-all rounded-lg text-sm font-semibold"
                >
                  Kean Center for Cybersecurity <ExternalLink size={15} />
                </a>
                <a 
                  href="https://www.caecommunity.org/cop-cyber-defense/cae-cd-student-cyber-clubs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-950 text-slate-300 border border-dark-700 hover:border-dark-600 transition-all rounded-lg text-sm font-semibold"
                >
                  CAE Community Cyber Defense <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytical Findings & Takeaways */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono">
          <span className="text-cyber-cyan">&gt;</span> 03_KEY_ANALYTICAL_FINDINGS
        </h2>
        <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">Finding 01</span>
              <h3 className="text-slate-100 font-semibold mb-2">Identity & Credential Vectors Dominate</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The overwhelming majority of initial access compromises in examined non-profits stemmed from phishing campaigns targeting email and cloud accounts lacking enforced multi-factor authentication (MFA).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">Finding 02</span>
              <h3 className="text-slate-100 font-semibold mb-2">Exfiltration Preceding Encryption</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ransomware operators increasingly prioritize double-extortion tactics, exfiltrating donor and employee PII prior to deploying encryptors, eliminating the defensive sufficiency of offline backups alone.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">Finding 03</span>
              <h3 className="text-slate-100 font-semibold mb-2">External Surface Hygiene</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Passive OSINT reconnaissance repeatedly uncovered exposed remote access ports (RDP, VNC) and unpatched web content management systems, highlighting the critical need for external asset discovery.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">Finding 04</span>
              <h3 className="text-slate-100 font-semibold mb-2">Actionable Reporting Bridge</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Security metrics are only as effective as executive comprehension. Translating raw malware indicators into business impact and concrete risk mitigations is the essential skill of an intelligence analyst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6">
          <h2 className="text-base font-bold text-slate-100 mb-4 font-mono text-cyber-cyan flex items-center gap-2">
            <Search size={18} /> OSINT & Intelligence Tooling
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-dark-950 text-slate-300 font-mono text-xs rounded border border-dark-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6">
          <h2 className="text-base font-bold text-slate-100 mb-4 font-mono text-cyber-emerald flex items-center gap-2">
            <Globe size={18} /> Core Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {keySkills.map(skill => (
              <span key={skill} className="px-3 py-1 bg-dark-950 text-slate-300 font-mono text-xs rounded border border-dark-700">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      <BackToProjects position="bottom" />
    </div>
  );
}
