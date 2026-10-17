import { ShieldCheck, Terminal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackToProjects from '../components/BackToProjects';

export default function PiHole() {
  const techStack = [
    'Raspberry Pi 5',
    'Pi-hole DNS Sinkhole',
    'FTLDNS Engine',
    'Curated Threat Blocklists',
    'Raspberry Pi OS (64-bit)',
    'Local DNS Conditioning',
    'Upstream DoH / DNSSEC',
    'DHCP / Static IP Reservation'
  ];

  const keySkills = [
    'DNS-Layer Threat Blocking',
    'Network Visibility & Logging',
    'Defense-in-Depth Strategy',
    'Staged Canary Deployment',
    'C2 Domain Neutralization',
    'Linux System Hardening'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16 px-4">
      <BackToProjects position="top" />

      {/* Header */}
      <header className="mb-12 border-l-4 border-cyber-cyan pl-6 py-2">
        <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs mb-3 uppercase tracking-wider">
          <span className="opacity-70">&gt;</span> network.dns_security // sinkhole_engine
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
          Pi-hole DNS Filtering & Domain Defense
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          Deployment of a dedicated, hardware-isolated DNS sinkhole on a Raspberry Pi 5 to intercept malicious domain resolutions, block telemetry and ad-trackers, and inspect local egress query activity.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-900/90 text-cyber-cyan border border-cyber-cyan/30 rounded text-xs font-mono">
            Hardware: Raspberry Pi 5
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-900/90 text-cyber-emerald border border-cyber-emerald/30 rounded text-xs font-mono">
            Role: Local DNS Sinkhole
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-900/90 text-amber-400 border border-amber-400/30 rounded text-xs font-mono">
            Deployment: Staged Canary Testing
          </span>
        </div>
      </header>

      {/* Overview */}
      <section className="mb-12">
        <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2 font-mono">
            <span className="text-cyber-cyan">&gt;</span> 01_PROJECT_OBJECTIVE
          </h2>
          <p className="text-slate-300 leading-relaxed text-base mb-4">
            Domain Name System (DNS) queries represent the first stage of almost every outbound network connection. Malicious campaigns—ranging from phishing lures and drive-by malware downloads to command-and-control (C2) callbacks—depend heavily on domain name resolution.
          </p>
          <p className="text-slate-300 leading-relaxed text-base">
            This project deployed Pi-hole on a dedicated Raspberry Pi 5 acting as an authoritative DNS resolver and sinkhole for internal endpoints. To prevent network-wide disruption or accidental blocking of essential campus services, a staged rollout methodology was followed: testing single client machines first, fine-tuning regex patterns and curated threat lists, and validating query latency before widening deployment.
          </p>
        </div>
      </section>

      {/* Architecture & Implementation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono border-b border-dark-700 pb-3">
            <Terminal size={20} className="text-cyber-cyan" />
            <span className="text-cyber-cyan">&gt;</span> Technical Implementation
          </h2>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">01.</span>
              <span><strong>OS & Static Network Binding:</strong> Deployed 64-bit Raspberry Pi OS, assigned static LAN IP, and reserved DHCP binding on the gateway router.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">02.</span>
              <span><strong>Pi-hole FTLDNS Engine:</strong> Installed Pi-hole core and configured the web management console with password-authenticated HTTPS access.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">03.</span>
              <span><strong>Threat Blocklist Curation:</strong> Integrated specialized lists targeting active malware domains, phishing kits, C2 infrastructure, and telemetry tracking.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">04.</span>
              <span><strong>Upstream DNS Security:</strong> Routed outbound queries through privacy-focused upstream resolvers with DNSSEC validation enabled to guard against DNS spoofing.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">05.</span>
              <span><strong>Staged Canary Validation:</strong> Manually pointed individual test workstations to the Pi-hole IP to evaluate false positives without impacting the wider home network.</span>
            </li>
          </ul>
        </section>

        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono border-b border-dark-700 pb-3">
            <ShieldCheck size={20} className="text-cyber-emerald" />
            <span className="text-cyber-emerald">&gt;</span> Security Controls & Value
          </h2>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Defense-in-Depth:</strong> Prevents initial infection stages before web content, scripts, or payloads can download to the endpoint.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">C2 Communication Disruption:</strong> Sinks infected host beaconing attempts to <code className="text-xs bg-dark-950 px-1 py-0.5 rounded text-cyber-cyan">0.0.0.0</code>, starving malware of instructions.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Granular Egress Visibility:</strong> Real-time logging of query types (A, AAAA, PTR, HTTPS) exposes unexpected outbound background traffic from IoT devices and apps.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Safe Operational Deployment:</strong> Demonstrates real-world IT/SecOps discipline—avoiding untested changes directly on production network gateways.
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Engineering Lessons & Operational Insights */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono">
          <span className="text-cyber-cyan">&gt;</span> 02_ENGINEERING_LESSONS_LEARNED
        </h2>
        <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">Lesson 01</span>
              <h3 className="text-slate-100 font-semibold mb-2">Pre-Execution Network Neutralization</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                DNS-layer controls are among the highest-leverage defensive mechanisms available. By denying domain resolution, an attacker’s infrastructure is neutralized before a TCP handshake or TLS negotiation ever occurs.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">Lesson 02</span>
              <h3 className="text-slate-100 font-semibold mb-2">Canary Phasing Prevents Outages</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enforcing strict domain blocking on a shared router without testing will inevitably break legitimate workflows. Staged rollout onto personal systems allowed fine-tuning blocklists and documenting allowlists safely.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">Lesson 03</span>
              <h3 className="text-slate-100 font-semibold mb-2">Continuous Curation & False Positive Triage</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Threat feeds degrade over time. Effective defense requires ongoing review of blocked query spikes, regex tuning, and maintaining an active whitelist for necessary single-sign-on and CDN domains.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">Lesson 04</span>
              <h3 className="text-slate-100 font-semibold mb-2">Scope & Defense-in-Depth Realism</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A DNS sinkhole cannot inspect encrypted payloads or protect against direct IP connections (e.g., hardcoded C2 IPs). It must be paired with host firewalls, endpoint monitoring, and secure web gateways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6">
          <h2 className="text-base font-bold text-slate-100 mb-4 font-mono text-cyber-cyan">
            &gt; Technology Environment
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
          <h2 className="text-base font-bold text-slate-100 mb-4 font-mono text-cyber-emerald">
            &gt; Core Competencies
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

      {/* Link to Home Lab */}
      <section className="bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-dark-700/80 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-slate-100 font-semibold mb-1">Explore the Wider Lab Environment</h3>
          <p className="text-slate-400 text-sm">See how this Raspberry Pi DNS server connects with the rest of the home networking and virtualization lab.</p>
        </div>
        <Link 
          to="/projects/home-lab-network"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 hover:border-cyber-cyan hover:bg-cyber-cyan/20 rounded-lg text-sm font-semibold transition-all whitespace-nowrap"
        >
          View Home Lab Setup <ArrowRight size={16} />
        </Link>
      </section>

      <BackToProjects position="bottom" />
    </div>
  );
}
