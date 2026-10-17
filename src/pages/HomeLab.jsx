import { ShieldCheck, Terminal, Server, Network } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function HomeLab() {
  const techStack = [
    'Raspberry Pi 5', 'Pi-hole (DNS Sinkhole)', 'TP-Link Unmanaged Switch', 
    'VirtualBox', 'Ubuntu Server / Desktop', 'Kali Linux', 'Cat6a Shielded Cabling',
    'OpenMediaVault / NAS', 'DNS over HTTPS (DoH)', 'Local Subnetting'
  ];

  const keySkills = [
    'DNS Sinkholing & Filtering', 'Hardware Cabling & Switching', 'Linux System Administration', 
    'Virtual Machine Isolation', 'Traffic Flow Visibility', 'Future Monitoring Planning'
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">
      <BackToProjects position="top" />

      {/* Header */}
      <header className="border-l-4 border-cyan-500 pl-6 py-2">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <span>&gt; project.open("home-lab-networking")</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold">[ Physical &amp; Virtual Lab ]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 tracking-tight">
          Home Lab Networking Architecture
        </h1>
        <p className="mt-3 text-slate-300 text-lg max-w-3xl leading-relaxed">
          A dedicated physical and virtual networking environment engineered for practicing switching, Linux administration, DNS sinkholing, and defensive traffic analysis.
        </p>
      </header>

      {/* Overview Card */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold border-b border-slate-800 pb-2">
          <Network size={16} />
          <span>Lab Philosophy &amp; Foundation</span>
        </div>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The foundation of solid cybersecurity operations is a deep, instinctual understanding of networking fundamentals and host operating systems. To test security controls without risking production disruption, I built an organized home lab combining physical wired infrastructure, dedicated microcomputers, and virtualized workloads.
        </p>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The lab features high-speed Cat6a cabling, a gigabit TP-Link network switch, a dedicated Raspberry Pi 5 operating as a network-wide DNS sinkhole (Pi-hole), local storage, and VirtualBox running isolated Ubuntu and Kali Linux virtual machines.
        </p>
      </section>

      {/* Dual Column: Role & Security Work */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Administrator Role */}
        <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono font-semibold text-sm border-b border-slate-800 pb-2">
              <Terminal size={16} />
              <span>Network Administration &amp; Setup</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>Terminated and structured Cat6a shielded patch cables for dependable gigabit switching.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>Configured a TP-Link switch to distribute wired connectivity to laboratory testing devices.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>Deployed a Raspberry Pi 5 executing Raspberry Pi OS (64-bit) as an always-on infrastructure node.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>Orchestrated VirtualBox hypervisors hosting Kali Linux for testing and Ubuntu Server for system services.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>Standardized static IP addressing schemes for persistent server reachability and DNS mapping.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Security Controls */}
        <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold text-sm border-b border-slate-800 pb-2">
              <ShieldCheck size={16} />
              <span>Defensive Security Workflows</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span><strong>DNS-Level Threat Blocking:</strong> Sinkholing known phishing, ransomware C2 domains, and telemetry trackers before resolution.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span><strong>Traffic Inspection:</strong> Monitoring outbound DNS queries to identify abnormal lookup patterns or beaconing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span><strong>Isolated Sandboxing:</strong> Safely launching offensive tools in Kali VMs behind Host-Only/NAT network adapters.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span><strong>Host Hardening:</strong> Applying SSH key-only authentication and disabling password logins across all headless nodes.</span>
              </li>
            </ul>
          </div>
        </section>

      </div>

      {/* Lab Photo View */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300 font-semibold">
            <Server size={16} className="text-cyan-400" />
            <span>Lab Hardware Infrastructure Artifact</span>
          </div>
          <span className="text-xs font-mono text-slate-500">Homelab.jpg</span>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-6 flex items-center justify-center overflow-hidden">
          <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-[0_0_25px_rgba(0,212,255,0.2)]">
            <img 
              src="/projects/home-lab-networking/Homelab.jpg" 
              alt="Home Lab Network Hardware" 
              className="w-full h-full object-cover object-center scale-110"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Tags */}
      <section className="space-y-3">
        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
          &gt; tech_environment.sys()
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map(tech => (
            <span 
              key={tech} 
              className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold mt-6 mb-3">
          &gt; key_skills.val()
        </div>
        <div className="flex flex-wrap gap-2">
          {keySkills.map(skill => (
            <span 
              key={skill} 
              className="px-2.5 py-1 text-xs font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Operational Takeaways & Future Roadmap */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2 border-b border-slate-800 pb-2">
          <Terminal size={14} className="text-cyan-400" />
          <span>Operational Takeaways &amp; Future Monitoring Enhancements</span>
        </h3>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">01.</span>
            <p>
              <strong>Usability vs. Strict Defense:</strong> Aggressive third-party DNS blocklists can intermittently break legitimate web features or CDN endpoints. Tuning whitelists taught the critical SecOps discipline of balancing security posture against operational availability.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">02.</span>
            <p>
              <strong>Future Security Roadmap:</strong> Planned lab improvements include integrating a Network TAP or managed switch port mirror (SPAN) to feed raw packet captures directly into an intrusion detection engine (Suricata or Zeek) for automated threat hunting.
            </p>
          </div>
        </div>
      </section>

      <BackToProjects position="bottom" />
    </div>
  );
}

