import { Shield, Server, Terminal, AlertTriangle, Layers } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function WazuhLab() {
  const techStack = [
    'Wazuh Manager',
    'Wazuh Indexer',
    'Wazuh Dashboard',
    'Linode Cloud Compute',
    'Linux (Ubuntu/Debian)',
    'Wazuh Agents',
    'Security Configuration Assessment (SCA)',
    'File Integrity Monitoring (FIM)',
    'CIS Benchmarks',
    'Syslog / Log Analysis',
    'TLS Agent Encryption',
    'Vulnerability Detection Engine'
  ];

  const keySkills = [
    'SIEM Deployment & Architecture',
    'Security Event Correlation',
    'Compliance & Baseline Auditing',
    'System Hardening Assessment',
    'Host-Based Intrusion Detection (HIDS)',
    'Cloud Security Engineering',
    'False-Positive Analysis',
    'Log Ingestion & Parsing'
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">
      <BackToProjects position="top" />

      {/* Header */}
      <header className="border-l-4 border-cyan-500 pl-6 py-2">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <span>&gt; project.open("wazuh-siem-xdr-lab")</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold">[ Active Lab ]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 tracking-tight">
          Personal Wazuh SIEM/XDR Cloud Lab
        </h1>
        <p className="mt-3 text-slate-300 text-lg max-w-3xl leading-relaxed">
          Self-hosted enterprise security monitoring platform deployed on Linode cloud infrastructure. Configured for centralized log collection, automated threat detection, file integrity monitoring, and rigorous CIS benchmark endpoint compliance assessment.
        </p>
      </header>

      {/* Overview Card */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-5">
          <Server className="text-cyan-400" size={22} />
          <h2 className="text-xl font-bold font-mono text-slate-100">
            Platform Architecture &amp; Objectives
          </h2>
        </div>
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            To deepen practical Security Operations (SecOps) skills outside of enterprise production systems, I engineered a dedicated, cloud-hosted security operations center (SOC) lab utilizing Wazuh on Linode. 
          </p>
          <p>
            The platform provides comprehensive visibility into host-level security telemetry, ingesting and correlating authentication records, system execution logs, network socket states, and configuration checks across monitored cloud endpoints through cryptographically secured TLS tunnels.
          </p>
          <p>
            The project serves as an active proving ground for crafting custom detection rules, evaluating CIS hardening benchmarks, simulating malicious activity, and analyzing alert triage procedures in a realistic adversary simulation space.
          </p>
        </div>
      </section>

      {/* Two-Column: Role & Security Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Role & Engineering */}
        <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all flex flex-col">
          <div className="flex items-center gap-2 text-cyan-400 font-mono font-semibold text-base mb-4 border-b border-slate-800 pb-3">
            <Terminal size={18} />
            <span>Implementation &amp; Engineering Work</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-300 flex-1">
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 mt-0.5">▹</span>
              <span><strong>Cloud Provisioning:</strong> Deployed and configured a dedicated Linux instance on Linode, architecting network access rules and firewall security groups to shield management consoles.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 mt-0.5">▹</span>
              <span><strong>Wazuh Stack Setup:</strong> Installed and integrated the core Wazuh Manager, OpenSearch-powered Wazuh Indexer, and web-based Wazuh Dashboard.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 mt-0.5">▹</span>
              <span><strong>Agent Onboarding:</strong> Deployed lightweight Wazuh agents across Linux endpoints, establishing mutual TLS authentication and registration key rotation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 mt-0.5">▹</span>
              <span><strong>Log Ingestion:</strong> Centralized syslog, SSH auth logs, systemd journals, and command-line execution telemetry into structured JSON indices.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyan-400 mt-0.5">▹</span>
              <span><strong>FIM Policies:</strong> Tuned real-time File Integrity Monitoring on critical directories including <code className="text-xs bg-slate-900 px-1 py-0.5 rounded text-cyan-300">/etc/pam.d</code>, <code className="text-xs bg-slate-900 px-1 py-0.5 rounded text-cyan-300">/etc/passwd</code>, and binary paths.</span>
            </li>
          </ul>
        </section>

        {/* Security Controls & Threat Detection */}
        <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all flex flex-col">
          <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold text-base mb-4 border-b border-slate-800 pb-3">
            <Shield size={18} />
            <span>Security Concepts &amp; Defensive Controls</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-300 flex-1">
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 mt-0.5">▹</span>
              <span><strong>Log Correlation &amp; Rule Engine:</strong> Leveraged automated correlation to detect suspicious SSH brute force attempts, unauthorized sudo elevations, and privilege escalation patterns.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 mt-0.5">▹</span>
              <span><strong>Endpoint Risk Assessment:</strong> Integrated the vulnerability detector to cross-reference installed package versions against National Vulnerability Database (NVD) CVE feeds.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 mt-0.5">▹</span>
              <span><strong>SCA Policy Verification:</strong> Analyzed system configurations against Center for Internet Security (CIS) standards to pinpoint baseline misconfigurations.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-400 mt-0.5">▹</span>
              <span><strong>False Positive Filtering:</strong> Practiced rule tuning and noise suppression to prevent alert fatigue and hone high-fidelity threat indicators.</span>
            </li>
          </ul>
        </section>

      </div>

      {/* Detailed Assessment Data: 395 Checks / 258 Initial Findings */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0b1526] border border-cyan-500/30 rounded-xl p-6 sm:p-8 shadow-2xl relative">
        <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-semibold mb-2">
          <AlertTriangle size={16} />
          <span>SECURITY CONFIGURATION ASSESSMENT (SCA) BASELINE FINDINGS</span>
        </div>
        <h2 className="text-2xl font-bold font-mono text-slate-100 mb-4">
          CIS Benchmark Assessment &amp; System Hardening Analysis
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          During initial host onboarding and baseline auditing, Wazuh's Security Configuration Assessment module evaluated a comprehensive profile of <strong>395 distinct security configuration checks</strong> against the operating system.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#070b13] border border-slate-800 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold font-mono text-slate-100">395</div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">Total Security Checks</div>
          </div>
          <div className="bg-[#070b13] border border-amber-500/40 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold font-mono text-amber-400">258</div>
            <div className="text-xs font-mono text-amber-300/80 uppercase tracking-wider mt-1">Initial Failing Baseline Checks</div>
          </div>
          <div className="bg-[#070b13] border border-emerald-500/40 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold font-mono text-emerald-400">137</div>
            <div className="text-xs font-mono text-emerald-300/80 uppercase tracking-wider mt-1">Initial Compliant Checks</div>
          </div>
        </div>

        {/* Context Note */}
        <div className="bg-slate-950/70 border-l-2 border-cyan-400 p-4 rounded text-xs sm:text-sm text-slate-300 space-y-2">
          <div className="font-semibold text-cyan-300 font-mono">Defensive Rigor &amp; Analysis:</div>
          <p className="leading-relaxed">
            The 258 failing checks represented default cloud-image configurations, unhardened kernel parameters, permissive system permissions, legacy service exposure, and missing auditing daemons (e.g., <code className="text-cyan-300">auditd</code> logging rules).
          </p>
          <p className="leading-relaxed">
            Rather than treating this as a simple score, this diagnostic telemetry established the prioritized hardening backlog. It gave direct insight into how default server templates introduce attack surface, guiding systematic remediation of critical service settings and logging pipelines.
          </p>
        </div>
      </section>

      {/* Visual Architecture Schematic */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8">
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
          <Layers size={16} className="text-cyan-400" />
          <span>Telemetry &amp; Detection Flow Pipeline</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center text-xs font-mono">
          <div className="bg-slate-900 border border-slate-700/80 rounded-lg p-4 flex flex-col justify-between">
            <div>
              <div className="text-cyan-400 font-bold mb-1">01. ENDPOINT AGENTS</div>
              <p className="text-slate-400 text-[11px] leading-tight">
                Linux &amp; Cloud Hosts collecting auth.log, syslogs, FIM hashes, and SCA benchmarks.
              </p>
            </div>
            <div className="text-emerald-400 mt-3 font-semibold">&bull; Encrypted TLS 1.3 &bull;</div>
          </div>

          <div className="bg-slate-900 border border-cyan-500/40 rounded-lg p-4 flex flex-col justify-between">
            <div>
              <div className="text-cyan-300 font-bold mb-1">02. WAZUH MANAGER</div>
              <p className="text-slate-400 text-[11px] leading-tight">
                Decodes raw logs, correlates against MITRE ATT&amp;CK signatures, evaluates severity alerts.
              </p>
            </div>
            <div className="text-cyan-400 mt-3 font-semibold">&bull; Rule Engine &bull;</div>
          </div>

          <div className="bg-slate-900 border border-slate-700/80 rounded-lg p-4 flex flex-col justify-between">
            <div>
              <div className="text-cyan-400 font-bold mb-1">03. INDEXER (OPENSEARCH)</div>
              <p className="text-slate-400 text-[11px] leading-tight">
                High-performance search engine indexing security events, SCA reports, and vulnerability data.
              </p>
            </div>
            <div className="text-blue-400 mt-3 font-semibold">&bull; Structured Indices &bull;</div>
          </div>

          <div className="bg-slate-900 border border-emerald-500/40 rounded-lg p-4 flex flex-col justify-between">
            <div>
              <div className="text-emerald-300 font-bold mb-1">04. SOC DASHBOARD</div>
              <p className="text-slate-400 text-[11px] leading-tight">
                Interactive analyst views for incident triage, threat timelines, compliance metrics, and investigation.
              </p>
            </div>
            <div className="text-emerald-400 mt-3 font-semibold">&bull; Analyst Interface &bull;</div>
          </div>
        </div>
      </section>

      {/* Tech Stack Tags */}
      <section className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
          <span>&gt; tech_stack.list()</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map(tech => (
            <span 
              key={tech} 
              className="px-3 py-1.5 bg-slate-900/90 text-cyan-300 font-mono text-xs rounded border border-cyan-500/30 hover:border-cyan-400 transition-colors shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 mt-6">
          &gt; key_skills.val()
        </h3>
        <div className="flex flex-wrap gap-2">
          {keySkills.map(skill => (
            <span 
              key={skill} 
              className="px-3 py-1.5 bg-slate-900/90 text-slate-300 font-mono text-xs rounded border border-slate-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
          <Terminal size={14} className="text-cyan-400" />
          <span>Operational Takeaways &amp; Engineering Lessons</span>
        </h3>
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">01.</span>
            <p>
              <strong>Baseline visibility is mandatory before enforcement:</strong> Running initial CIS scans revealed that security posture cannot be assumed; concrete telemetry is required to identify undocumented defaults before applying aggressive hardening rules that might disrupt services.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">02.</span>
            <p>
              <strong>Rule tuning prevents alert fatigue:</strong> Default SIEM alert rules often trigger on benign system automation and scheduled cron jobs. Customizing alert levels and adding targeted rule exclusions is critical to maintaining a responsive, high-fidelity monitoring pipeline.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">03.</span>
            <p>
              <strong>Direct translation to enterprise SecOps:</strong> Managing an end-to-end self-hosted Wazuh instance directly mirrors enterprise SIEM management workflows, reinforcing an understanding of agent communication protocols, index rotation, and detection engineering.
            </p>
          </div>
        </div>
      </section>

      <BackToProjects position="bottom" />
    </div>
  );
}
