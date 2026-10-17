import { useState } from 'react';
import { ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'ncyte-career-challenge',
      title: 'NCyTE Cybersecurity Career Challenge',
      category: 'infrastructure',
      categoryLabel: 'Infrastructure & Network Defense',
      badge: 'Completed',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40',
      description: 'Hands-on management of a Proxmox-hosted, multi-tier enterprise network environment with 10 endpoints over VPN. Configured firewall policies, NAT, static routing, and LAN/WAN/DMZ segmentation. Hardened an internal RHEL mail server using Postfix, Dovecot, SASL authentication, and TLS encryption.',
      tags: ['Proxmox VE', 'Firewall Policies', 'LAN/WAN/DMZ', 'RHEL Hardening', 'Postfix/Dovecot TLS', 'NAT & Routing'],
      link: '/projects/ncyte-career-challenge'
    },
    {
      id: 'wazuh-siem-lab',
      title: 'Personal Wazuh SIEM/XDR Cloud Lab',
      category: 'secops',
      categoryLabel: 'Security Operations & Detection',
      badge: 'Active Lab',
      badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40',
      description: 'Self-hosted Wazuh SIEM and OpenSearch indexer deployed on Linode. Centralized syslog and agent telemetry over TLS, automated alert correlation for threat detection, and conducted a CIS benchmark security configuration assessment evaluating 395 checks to guide OS hardening.',
      tags: ['Wazuh SIEM', 'Linode Cloud', 'OpenSearch Indexer', 'CIS Benchmarks', 'SCA Baseline', 'FIM'],
      link: '/projects/wazuh-siem-lab'
    },
    {
      id: 'dfir-triage-station',
      title: 'DFIR Portable Triage Station',
      category: 'homelab',
      categoryLabel: 'Incident Response & Forensics',
      badge: 'Active Project',
      badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-950/40',
      description: 'Mobile incident response workstation engineered on Raspberry Pi 5. Provides an isolated field hotspot for automated Velociraptor endpoint triage artifact ingestion, YARA-X scanning, and local privacy-preserving LLM case summarization.',
      tags: ['Raspberry Pi 5', 'Velociraptor', 'YARA-X', 'Local LLM (Ollama)', 'Hotspot Triage', 'DFIR Automation'],
      link: '/projects/dfir-triage-station'
    },
    {
      id: 'home-lab-networking',
      title: 'Home Lab Networking Architecture',
      category: 'homelab',
      categoryLabel: 'Systems & Network Engineering',
      badge: 'Active Lab',
      badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-950/40',
      description: 'Hands-on home lab built with structured Cat6a cabling, unmanaged switching, Raspberry Pi devices, and VirtualBox virtualization (Ubuntu & Kali Linux) for practicing system administration, traffic flow analysis, and defense testing.',
      tags: ['Structured Cabling', 'TP-Link Switching', 'VirtualBox', 'Ubuntu / Kali', 'Traffic Visibility'],
      link: '/projects/home-lab-networking'
    },
    {
      id: 'pi-hole-dns-filtering',
      title: 'Pi-hole DNS Filtering & Threat Sinkhole',
      category: 'infrastructure',
      categoryLabel: 'Perimeter Defense & DNS',
      badge: 'Completed',
      badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40',
      description: 'Dedicated DNS sinkhole deployed on a Raspberry Pi 5. Intercepts DNS queries and blocks traffic to known malicious domains, phishing endpoints, and aggressive tracking servers using curated threat intelligence blocklists.',
      tags: ['Raspberry Pi 5', 'Pi-hole', 'DNS Sinkhole', 'Threat Blocklists', 'Defense in Depth', 'Traffic Logging'],
      link: '/projects/pi-hole-dns-filtering'
    },
    {
      id: 'physical-server-nvr',
      title: 'Physical Server Rack & Laboratory Infrastructure',
      category: 'infrastructure',
      categoryLabel: 'Hardware & Physical Infrastructure',
      badge: 'Completed',
      badgeColor: 'border-slate-500/40 text-slate-300 bg-slate-900',
      description: 'Physical deployment supporting switching infrastructure, Power over Ethernet (PoE) hardware, PDU power organization, and an IP camera network integrated with an NVR system to strengthen physical security and device cabling discipline.',
      tags: ['PoE Switching', 'Server Rack Mounting', 'PDU Organization', 'IP Camera Network', 'NVR Management'],
      link: '/projects/physical-server-nvr'
    },
    {
      id: 'ngo-threat-intel',
      title: 'NPCIR Non-Profit Threat Intelligence Research',
      category: 'intel',
      categoryLabel: 'Threat Intelligence & OSINT',
      badge: 'Completed',
      badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40',
      description: 'Open-source threat intelligence research for the Kean Center for Cybersecurity Non-Profit Cyber Incident Repository (NPCIR). Analyzed ransomware strains, DoS/DDoS patterns, and breach incidents to produce intelligence reports for 60+ non-profit organizations.',
      tags: ['OSINT Research', 'NPCIR Dataset', 'MITRE ATT&CK', 'Threat Intelligence Reporting', 'Ransomware Analysis'],
      link: '/projects/ngo-threat-intel'
    },
    {
      id: 'cyber-radio',
      title: 'C.Y.B.E.R. Radio & Awareness Research',
      category: 'intel',
      categoryLabel: 'Cyber Education & Outreach',
      badge: 'Completed',
      badgeColor: 'border-slate-500/40 text-slate-300 bg-slate-900',
      description: 'Kean Center for Cybersecurity initiative broadcast over WKNJ 90.3 FM. Communicated digital safety, phishing awareness, and password hygiene to university and public listeners, accompanied by an academic research case study on technical risk communication.',
      tags: ['Cybersecurity Awareness', 'Risk Communication', 'Public Outreach', 'Academic Case Study', 'WKNJ 90.3 FM'],
      link: '/projects/cyber-radio'
    }
  ];

  const filterTabs = [
    { key: 'all', label: 'All Projects' },
    { key: 'secops', label: 'SecOps & Detection' },
    { key: 'infrastructure', label: 'Network Defense & Infra' },
    { key: 'homelab', label: 'Home Lab & DFIR' },
    { key: 'intel', label: 'Threat Intel & Research' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-16">
      
      {/* Header */}
      <div className="border-l-4 border-cyan-500 pl-6 py-2">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <span>&gt; projects.index()</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold">[ {projects.length} Total Implementations ]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 tracking-tight">
          Technical Projects &amp; Implementations
        </h1>
        <p className="mt-3 text-slate-300 text-base max-w-3xl leading-relaxed">
          Architectural deep dives into enterprise lab environments, cloud SIEM deployment, network segmentation, DFIR automation, and defensive threat intelligence.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
        <div className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1.5 hidden sm:flex">
          <Filter size={14} />
          <span>FILTER:</span>
        </div>
        {filterTabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
              activeFilter === tab.key
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,212,255,0.3)]'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <article 
            key={project.id}
            className="bg-[#0b1220]/90 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-xl group"
          >
            <div className="space-y-4">
              
              {/* Card Meta Header */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  {project.categoryLabel}
                </span>
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${project.badgeColor}`}>
                  {project.badge}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>

            </div>

            <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-4">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900/90 text-slate-400 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Link to Detail Page */}
              <Link
                to={project.link}
                className="w-full py-2.5 px-4 rounded bg-slate-900 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>View Full Architecture &amp; Controls</span>
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>

            </div>
          </article>
        ))}
      </div>

      {/* Bottom Info Bar */}
      <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div>&gt; All projects represent documented implementations, virtual environments, or authorized research.</div>
        <Link to="/contact" className="text-cyan-400 hover:underline shrink-0">
          Inquire About Code or Lab Architecture &gt;
        </Link>
      </div>

    </div>
  );
}

