import { Link } from 'react-router-dom';
import { ShieldAlert, Server, Terminal, ExternalLink, ArrowRight, Activity, FileText, Mail } from 'lucide-react';

export default function Home() {
  const pillars = [
    {
      title: 'Security Operations & Incident Response',
      icon: <Activity className="text-cyan-400" size={24} />,
      accentColor: 'border-cyan-500/40 bg-cyan-950/20',
      description: 'Enterprise SIEM monitoring across 20,000+ campus users, security alert triage, incident case investigation, and custom workflow automation.',
      tags: ['SIEM Monitoring', 'Alert Triage', 'Incident Investigation', 'Workflow Automation', 'Analyst Enablement']
    },
    {
      title: 'Threat Intelligence & Security Research',
      icon: <ShieldAlert className="text-emerald-400" size={24} />,
      accentColor: 'border-emerald-500/40 bg-emerald-950/20',
      description: 'Structured open-source threat intelligence (OSINT) research on ransomware, breaches, and DDoS vectors supporting over 60 nonprofit and NGO organizations.',
      tags: ['OSINT Research', 'NPCIR Dataset', 'Ransomware Tracking', 'Defensive Reports', 'Threat Modeling']
    },
    {
      title: 'Network Security & Infrastructure Defense',
      icon: <Server className="text-sky-400" size={24} />,
      accentColor: 'border-sky-500/40 bg-sky-950/20',
      description: 'Hands-on network segmentation (LAN/WAN/DMZ), firewall policies, NAT, Proxmox virtualization, Linux system hardening, and DNS sinkholing.',
      tags: ['Proxmox VE', 'Firewall Policies', 'DMZ Segmentation', 'Linux Hardening', 'DNS Filtering']
    }
  ];

  const featuredProjects = [
    {
      id: 'ncyte-challenge',
      title: 'NCyTE Cybersecurity Career Challenge',
      category: 'Infrastructure & Network Defense',
      description: 'Managed a Proxmox-hosted multi-tier network environment with 10 endpoints over VPN, configuring firewall policies, LAN/WAN/DMZ segmentation, and an internal hardened RHEL mail server with Postfix & Dovecot TLS.',
      tags: ['Proxmox', 'LAN/WAN/DMZ', 'Firewall Policies', 'RHEL Hardening', 'Postfix/Dovecot TLS'],
      link: '/projects/ncyte-career-challenge'
    },
    {
      id: 'wazuh-siem',
      title: 'Personal Wazuh SIEM/XDR Cloud Lab',
      category: 'SecOps & Detection Engineering',
      description: 'Self-hosted Wazuh SIEM on Linode. Centralized log collection, event correlation, and evaluated 395 CIS benchmark security checks to establish prioritized OS hardening targets.',
      tags: ['Wazuh Manager', 'Linode Cloud', 'CIS Benchmarks', 'SCA Baseline', 'FIM'],
      link: '/projects/wazuh-siem-lab'
    },
    {
      id: 'dfir-triage',
      title: 'DFIR Portable Triage Station',
      category: 'Applied Incident Response',
      description: 'Portable forensics and triage station built on Raspberry Pi 5 with automated Velociraptor artifact collection, YARA-X scanning, and offline local LLM summarization.',
      tags: ['Raspberry Pi 5', 'Velociraptor', 'YARA-X', 'Local LLM', 'Forensics'],
      link: '/projects/dfir-triage-station'
    },
    {
      id: 'home-lab',
      title: 'Home Lab Networking & DNS Security',
      category: 'Network Engineering',
      description: 'Hands-on home lab with structured Cat6a cabling, switching, VirtualBox Ubuntu/Kali VMs, and a Raspberry Pi 5 running Pi-hole for network-wide malicious domain sinkholing.',
      tags: ['Raspberry Pi 5', 'Pi-hole', 'DNS Sinkhole', 'VirtualBox', 'Traffic Visibility'],
      link: '/projects/home-lab-networking'
    }
  ];

  return (
    <div className="space-y-20">
      
      {/* Hero Section */}
      <section className="pt-4 pb-8 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Text Content */}
        <div className="flex-1 space-y-6 text-left">
          
          {/* Terminal Intro */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <span>&gt; system.whoami()</span>
            <span className="text-slate-600">::</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              SecOps Analyst
            </span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-slate-100 tracking-tight leading-tight">
              Joel Joseph Leiva Castillo
              <span className="block text-2xl sm:text-3xl text-slate-400 font-normal mt-1">
                (Joel Leiva)
              </span>
            </h1>
            <p className="text-base sm:text-lg font-mono font-medium text-cyan-400 pt-1">
              Security Operations &bull; Threat Intelligence &bull; Network Defense
            </p>
          </div>

          {/* Core Professional Bio */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl border-l-2 border-cyan-500/50 pl-4 py-1">
            Junior Security Operations (SecOps) Analyst at Kean University supporting an enterprise environment of over 20,000 students and staff. Specializing in SIEM monitoring, alert triage, incident investigations, operational automation, threat intelligence research, and practical infrastructure security.
          </p>

          {/* Core Competency Badges */}
          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-slate-900/90 text-cyan-300 border border-slate-800">
              [ Enterprise SecOps Analyst ]
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900/90 text-emerald-300 border border-slate-800">
              [ Threat Intelligence Researcher ]
            </span>
            <span className="px-2.5 py-1 rounded bg-slate-900/90 text-sky-300 border border-slate-800">
              [ Network Defense &amp; Infrastructure ]
            </span>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Link 
              to="/projects" 
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider rounded transition-all shadow-[0_0_20px_rgba(0,212,255,0.35)] flex items-center gap-2"
            >
              <span>View My Projects</span>
              <ArrowRight size={14} />
            </Link>

            <a 
              href="/documents/joel-leiva-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider rounded border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-2"
            >
              <FileText size={14} />
              <span>View My Resume</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/joel-leiva0410/" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2.5 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 font-mono text-xs rounded border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink size={12} />
            </a>

            <Link 
              to="/contact" 
              className="px-4 py-2.5 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 font-mono text-xs rounded border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-1.5"
            >
              <Mail size={14} />
              <span>Contact Me</span>
            </Link>
          </div>

        </div>

        {/* Right Photo Column */}
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 shrink-0 group">
          <div className="absolute inset-0 border border-cyan-500/40 rounded-xl glow-cyan transform rotate-3 transition-transform group-hover:rotate-1"></div>
          <div className="absolute inset-0 border border-emerald-500/30 rounded-xl glow-green transform -rotate-3 transition-transform group-hover:-rotate-1"></div>
          
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
            <img 
              alt="Joel Leiva portrait" 
              className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]" 
              src="/images/joel-photos/Home-Page.jpg"
            />
            {/* Live Status Overlay */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-[#080d18]/90 px-3 py-1.5 rounded-md border border-slate-800 text-xs font-mono backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-200">SECOPS // ACTIVE</span>
            </div>
          </div>
        </div>

      </section>

      {/* Enterprise Snapshot Bar */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="pt-3 md:pt-0">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">20,000+</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Enterprise Users Protected</div>
          </div>
          <div className="pt-3 md:pt-0">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">60+</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">NGOs Aided with Threat Intel</div>
          </div>
          <div className="pt-3 md:pt-0">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-sky-400">395</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">CIS Security Checks Audited</div>
          </div>
          <div className="pt-3 md:pt-0">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">May 2027</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">BS CS: Cybersecurity (Kean)</div>
          </div>
        </div>
      </section>

      {/* 3 Pillars of Expertise */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold font-mono text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">&gt;</span> Core Areas of Expertise
          </h2>
          <span className="text-xs font-mono text-slate-500">PRACTITIONER FOUNDATION</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-xl border bg-[#0b1220]/80 ${pillar.accentColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold font-mono text-slate-100">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {pillar.tags.map(tag => (
                  <span key={tag} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-400 border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verified Professional Experience Spotlight */}
      <section className="bg-gradient-to-r from-[#0b1220] to-[#0d1627] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Enterprise Experience</div>
            <h2 className="text-xl sm:text-2xl font-bold font-mono text-slate-100 mt-1">
              Active Security Operations Leadership
            </h2>
          </div>
          <Link 
            to="/experience"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-semibold group"
          >
            <span>View Complete Experience Timeline</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: SecOps */}
          <div className="p-5 rounded-lg bg-slate-950/70 border border-cyan-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                Current Role
              </span>
              <span className="text-xs font-mono text-slate-500">June 2026 – Present</span>
            </div>
            <h3 className="font-bold font-mono text-slate-100 text-base">
              Junior SecOps Analyst
            </h3>
            <div className="text-xs font-medium text-cyan-400">
              Kean University IT
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Monitors SIEM telemetry, triages security cases, collaborates with network &amp; cloud teams on threat mitigation, and engineered an internal AI-assisted SecOps knowledge platform for analyst onboarding.
            </p>
          </div>

          {/* Card 2: Strategic Ops */}
          <div className="p-5 rounded-lg bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                Current Role
              </span>
              <span className="text-xs font-mono text-slate-500">Aug 2026 – Present</span>
            </div>
            <h3 className="font-bold font-mono text-slate-100 text-base">
              Strategic Operations Manager
            </h3>
            <div className="text-xs font-medium text-cyan-400">
              House of Hearts
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Leads digital infrastructure and technology access initiatives, ensuring operational reliability and collaborating with leadership on organizational technical capacity.
            </p>
          </div>

          {/* Card 3: Threat Intel */}
          <div className="p-5 rounded-lg bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-700">
                Completed
              </span>
              <span className="text-xs font-mono text-slate-500">Sept 2025 – May 2026</span>
            </div>
            <h3 className="font-bold font-mono text-slate-100 text-base">
              Threat Intelligence Intern
            </h3>
            <div className="text-xs font-medium text-cyan-400">
              Kean Center for Cybersecurity
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Researched ransomware, DDoS, and breach campaigns impacting 60+ NGOs, authoring intelligence reports and architecting physical cybersecurity laboratory hardware.
            </p>
          </div>

        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold font-mono text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">&gt;</span> Featured Technical Projects
          </h2>
          <Link 
            to="/projects"
            className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 font-semibold group"
          >
            <span>All Projects ({featuredProjects.length + 3})</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <article 
              key={project.id}
              className="bg-[#0b1220]/90 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <span className="text-slate-600 font-mono text-xs">&gt;</span>
                </div>
                
                <h3 className="text-xl font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={project.link}
                  className="w-full py-2.5 px-4 rounded bg-slate-900 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-center gap-2"
                >
                  <span>Inspect Technical Architecture &amp; Findings</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Tooling Radar */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
          <Terminal size={14} className="text-cyan-400" />
          <span>Core Security Tooling &amp; Infrastructure Stack</span>
        </h3>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          Technologies and platforms actively used in production enterprise operations, lab research, and system hardening:
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {[
            'CrowdStrike (EDR/SIEM)', 'Stellar Cyber (SIEM)', 'Okta (IdP)', 'Google Admin',
            'Wazuh SIEM/XDR', 'Splunk Enterprise', 'Velociraptor', 'YARA-X',
            'Proxmox VE', 'Firewall Policies & NAT', 'Active Directory & DNS', 'RHEL / Linux',
            'Postfix & Dovecot TLS', 'Pi-hole DNS Sinkholing', 'MITRE ATT&CK', 'VirusTotal',
            'Wireshark', 'Bash Automation', 'Python Scripting', 'Docker / VirtualBox', 'PoE Switching'
          ].map(tool => (
            <span 
              key={tool}
              className="px-3 py-1 bg-slate-900 text-slate-300 font-mono text-xs rounded border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
}

