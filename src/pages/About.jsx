import { Shield, Server, Terminal, Download, FileText, GraduationCap, Layers, Network, Search, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const skillDomains = [
    {
      category: 'Security Operations & SIEM',
      icon: <Shield className="text-cyan-400" size={18} />,
      skills: [
        'Enterprise SIEM Monitoring',
        'CrowdStrike (EDR, SIEM)',
        'Stellar Cyber (SIEM)',
        'Wazuh SIEM / XDR',
        'Security Alert Triage',
        'Incident Investigation',
        'Log Correlation & Syslog Analysis',
        'False-Positive Reduction',
        'Standard Operating Procedures (SOPs)'
      ]
    },
    {
      category: 'Threat Intelligence & Security Research',
      icon: <Search className="text-emerald-400" size={18} />,
      skills: [
        'Open-Source Threat Intelligence (OSINT)',
        'Ransomware & Breach Analysis',
        'Non-Profit Cyber Incident Repository (NPCIR)',
        'MITRE ATT&CK Mapping',
        'Indicator of Compromise (IOC) Analysis',
        'VirusTotal & Threat Intel Feeds',
        'Threat Reporting for Decision-Makers'
      ]
    },
    {
      category: 'Network Security & Identity Infrastructure',
      icon: <Network className="text-sky-400" size={18} />,
      skills: [
        'Okta (IdP) & Access Management',
        'Google Admin & Workspace Security',
        'Active Directory & DNS Services',
        'LAN / WAN / DMZ Segmentation',
        'Firewall Policies & NAT',
        'Static Routing & IP Subnetting',
        'DNS Sinkholing (Pi-hole)',
        'VPN / Secure Tunnels',
        'Wireshark Traffic Analysis',
        'Postfix & Dovecot TLS Mail Servers'
      ]
    },
    {
      category: 'Linux, Systems & Virtualization',
      icon: <Server className="text-purple-400" size={18} />,
      skills: [
        'Proxmox Virtual Environment (VE)',
        'Red Hat Enterprise Linux (RHEL)',
        'Ubuntu & Debian Administration',
        'Kali Linux Security Workstation',
        'VirtualBox VM Orchestration',
        'Raspberry Pi 5 Deployments',
        'Physical Server Rack Mounting & PoE'
      ]
    },
    {
      category: 'Scripting, Automation & Detection',
      icon: <Terminal className="text-amber-400" size={18} />,
      skills: [
        'Bash Shell Scripting',
        'Python Automation & Data Parsing',
        'PowerShell Administration',
        'SQL Database Queries',
        'Velociraptor Artifact Collection',
        'YARA-X Rule Scanning',
        'Local LLM Integration (Ollama / Qwen)'
      ]
    },
    {
      category: 'Security Frameworks & Standards',
      icon: <Lock className="text-rose-400" size={18} />,
      skills: [
        'CIS Benchmarks (OS Baseline Auditing)',
        'Least-Privilege Access Control',
        'Zero Trust Principles',
        'File Integrity Monitoring (FIM)',
        'Security Configuration Assessment (SCA)',
        'Vulnerability Remediation Prioritization'
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16">
      
      {/* Header */}
      <div className="border-l-4 border-cyan-500 pl-6 py-2">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <span>&gt; system.cat("/etc/biography.md")</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold">[ Profile Verified ]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 tracking-tight">
          About Joel Leiva
        </h1>
        <p className="mt-3 text-slate-300 text-lg max-w-3xl leading-relaxed">
          Security Operations Analyst, threat intelligence researcher, and computer science student dedicated to practical defensive engineering, SIEM event correlation, and workflow automation.
        </p>
      </div>

      {/* Main Biography Card */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          {/* Portrait Photo */}
          <div className="w-full md:w-56 shrink-0 space-y-3 text-center">
            <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl mx-auto max-w-[240px]">
              <img 
                alt="Joel Leiva" 
                className="w-full h-64 object-cover object-top" 
                src="/images/joel-photos/About-Me.jpg"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md rounded px-2 py-1 border border-slate-800 text-[11px] font-mono text-cyan-400 text-center">
                Union, New Jersey
              </div>
            </div>
            
            <div className="text-xs font-mono text-slate-400 space-y-1">
              <div>Kean University</div>
              <div className="text-emerald-400 font-semibold">&bull; Active in SecOps &bull;</div>
            </div>
          </div>

          {/* Narrative Bio */}
          <div className="flex-1 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Computer Science student at Kean University specializing in Cybersecurity and actively working as a <strong>Junior Security Operations (SecOps) Analyst</strong> with Kean University Information Technology. In this enterprise role, I monitor security telemetry through an enterprise SIEM platform, triage alerts, investigate suspicious cases, and collaborate directly with Networking, Cloud Engineering, and IT Security leadership to protect an environment serving more than 20,000 students and staff.
            </p>
            <p>
              A major driver in my work is operational efficiency and analyst enablement. I develop automation scripts to streamline repetitive triage tasks and designed an internal AI-assisted SecOps knowledge platform to accelerate onboarding for future analysts, providing structured SOPs and investigative workflows.
            </p>
            <p>
              In parallel, my experience as a <strong>Threat Intelligence and Analyst Intern</strong> with Kean’s Center for Cybersecurity involved conducting OSINT research on ransomware campaigns, data breaches, and DDoS activity impacting non-governmental organizations, contributing actionable reports to a consortium of more than 60 non-profits.
            </p>
            <p>
              My hands-on technical foundation is built on practical infrastructure engineering: configuring segmented Proxmox virtual enterprise topologies (LAN/WAN/DMZ), deploying firewall policies, hardening Linux services (RHEL, Postfix, Dovecot TLS), and running self-hosted cloud labs including a dedicated Wazuh SIEM/XDR environment on Linode.
            </p>
          </div>

        </div>
      </section>

      {/* Education & Verified Status */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Education Card */}
        <div className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <GraduationCap size={22} />
            </div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
              Formal Education
            </div>
            <h3 className="text-xl font-bold font-mono text-slate-100">
              Bachelor of Science in Computer Science
            </h3>
            <div className="text-sm font-mono text-slate-300 font-medium">
              Specializing in Cybersecurity
            </div>
            <div className="text-sm text-slate-400">
              Kean University &bull; Union, NJ
            </div>
            <p className="text-xs text-slate-400 pt-1 leading-relaxed">
              Curriculum focused on network security, operating system security, algorithms, data structures, and defensive computing.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500">Expected Graduation:</span>
            <span className="text-cyan-400 font-semibold px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
              May 2027
            </span>
          </div>
        </div>

        {/* Professional Philosophy Card */}
        <div className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Layers size={22} />
            </div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
              Operational Focus
            </div>
            <h3 className="text-xl font-bold font-mono text-slate-100">
              Defensive Pragmatism
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I believe modern cybersecurity requires bridging analytical threat detection with practical systems engineering. Theoretical controls only work when backed by verified configurations, tested logging pipelines, and operational playbooks that reduce analyst cognitive load during active incidents.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Primary Focus:</span>
            <span className="text-emerald-400 font-semibold">Enterprise SecOps &amp; Defense</span>
          </div>
        </div>

      </section>

      {/* Official Documents Download Section */}
      <section className="bg-gradient-to-r from-cyan-950/20 to-slate-900 border border-cyan-500/30 rounded-xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">Verified Materials</div>
            <h2 className="text-xl font-bold font-mono text-slate-100 mt-1">
              Download Official Credentials
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">PDF FORMAT &bull; AUTHENTICATED</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          
          {/* Resume Download Card */}
          <a
            href="/documents/joel-leiva-resume.pdf"
            download="Joel-Leiva-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-400 transition-all group flex items-start justify-between shadow-sm"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                <FileText size={16} />
                <span>Joel-Leiva-Resume.pdf</span>
              </div>
              <h4 className="text-base font-bold text-slate-100 font-mono group-hover:text-cyan-300 transition-colors">
                Official Technical Resume
              </h4>
              <p className="text-xs text-slate-400">
                Full chronological employment, certifications, technical skill matrix, and project documentation.
              </p>
            </div>
            <div className="p-2 rounded bg-slate-900 text-slate-400 group-hover:text-cyan-400 transition-colors shrink-0 ml-3">
              <Download size={18} />
            </div>
          </a>

          {/* Cover Letter Download Card */}
          <a
            href="/documents/joel-leiva-cover-letter.pdf"
            download="Joel-Leiva-Cover-Letter.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-emerald-400 transition-all group flex items-start justify-between shadow-sm"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                <FileText size={16} />
                <span>Joel-Leiva-Cover-Letter.pdf</span>
              </div>
              <h4 className="text-base font-bold text-slate-100 font-mono group-hover:text-emerald-300 transition-colors">
                Professional Cover Letter
              </h4>
              <p className="text-xs text-slate-400">
                Detailed statement of SecOps experience, automation projects, and organizational contribution.
              </p>
            </div>
            <div className="p-2 rounded bg-slate-900 text-slate-400 group-hover:text-emerald-400 transition-colors shrink-0 ml-3">
              <Download size={18} />
            </div>
          </a>

        </div>
      </section>

      {/* Structured Skills Section Organized Across 6 Domains */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-slate-100 flex items-center gap-2">
              <span className="text-cyan-400">&gt;</span> Technical Competencies &amp; Skills Matrix
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Grouped into functional disciplines based on verified hands-on experience and lab implementations.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">NO ARBITRARY PERCENTAGES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillDomains.map((domain, idx) => (
            <div 
              key={idx}
              className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800">
                  {domain.icon}
                  <h3 className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                    {domain.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {domain.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-xs font-mono text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 text-xs mt-0.5">▹</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800 text-xs font-mono text-slate-400">
        <div>&gt; End of profile record</div>
        <div className="flex items-center gap-4">
          <Link to="/achievements" className="text-cyan-400 hover:underline">
            View Certifications &amp; Achievements &gt;
          </Link>
          <span>&bull;</span>
          <Link to="/photography" className="hover:text-slate-200">
            View Photography &gt;
          </Link>
        </div>
      </div>

    </div>
  );
}

