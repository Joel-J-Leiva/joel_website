import { ExternalLink, Server, Terminal, Mail, Network } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function NCyTEChallenge() {
  const techStack = [
    'Proxmox VE', 'OpenVPN Tunnels', 'PFSense/Routers', 'Firewall Policies', 'NAT & Aliases',
    'Static Routing', 'LAN/WAN/DMZ Segmentation', 'Active Directory & DNS', 'DHCP Services',
    'Red Hat Enterprise Linux (RHEL)', 'Postfix (MTA)', 'Dovecot (MDA/IMAP)', 'SMTP Submission (587)',
    'IMAPS (993)', 'SASL Authentication', 'TLS Encryption', 'MariaDB / Database Server',
    'Apache/IIS Web Servers', 'Windows 10/11 Endpoints', 'Linux System Hardening'
  ];

  const keySkills = [
    'Enterprise Network Segmentation',
    'Firewall Rule Engineering & Aliases',
    'NAT & Static Routing Policies',
    'Active Directory & DNS Configuration',
    'Hardened Linux Mail Infrastructure',
    'TLS/SSL Certificate Enforcement',
    'Least-Privilege Network Access',
    'System Hardening (RHEL & Windows)'
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">
      <BackToProjects position="top" />

      {/* Header */}
      <header className="border-l-4 border-cyan-500 pl-6 py-2">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <span>&gt; project.open("ncyte-career-challenge")</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold">[ Enterprise Virtual Lab ]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 tracking-tight">
          NCyTE Cybersecurity Career Challenge
        </h1>
        <p className="mt-3 text-slate-300 text-lg max-w-3xl leading-relaxed">
          Comprehensive virtual enterprise infrastructure project hosted on Proxmox VE. Focused on multi-tier network segmentation, perimeter firewall enforcement, Windows &amp; Linux system hardening, and secure service deployment.
        </p>
      </header>

      {/* Architecture Overview */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold border-b border-slate-800 pb-2">
          <Server size={16} />
          <span>Multi-Tier Virtual Enterprise Environment</span>
        </div>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The NCyTE Virtual Cybersecurity Career Challenge required managing and securing a complex enterprise network topology hosted on a remote Proxmox hypervisor. Access was facilitated securely over encrypted VPN tunnels to an isolated network containing approximately <strong>10 distinct endpoints and servers</strong>.
        </p>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          The environment mirrored real-world corporate infrastructure, comprising perimeter routers and firewalls, Active Directory Domain Services (AD DS) and DNS servers, web application nodes, internal and public mail servers, a database server, and multiple Windows and Linux client endpoints.
        </p>
      </section>

      {/* Distinction: Intended Environment vs. Joel's Implemented Controls */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Intended Architecture */}
        <div className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800 pb-2">
              01 // Environment Design &amp; Architecture
            </div>
            <h3 className="text-lg font-bold font-mono text-slate-100">
              Multi-Zone Enterprise Topology
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span><strong>Proxmox Hypervisor:</strong> Virtualized environment hosting ~10 nodes over secure VPN.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span><strong>Segmented Zones:</strong> Distinct LAN, WAN, and DMZ interfaces to isolate publicly accessible services from the internal core.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span><strong>Core Directory Services:</strong> Windows Server executing Active Directory, DNS, and DHCP.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span><strong>Tiered Endpoints:</strong> Web frontend servers, internal mail infrastructure, relational database server, and administrative client workstations.</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
            Target Environment Profile
          </div>
        </div>

        {/* Joel's Implemented Controls */}
        <div className="bg-[#0b1220]/90 border border-cyan-500/40 rounded-xl p-6 flex flex-col justify-between shadow-lg">
          <div className="space-y-3">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold border-b border-slate-800 pb-2">
              02 // Configurations &amp; Controls Implemented
            </div>
            <h3 className="text-lg font-bold font-mono text-slate-100">
              Defensive Measures Executed
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span><strong>Firewall &amp; NAT Policies:</strong> Configured least-privilege egress/ingress firewall rules, Network Address Translation (NAT), static routing tables, and port aliases.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span><strong>Traffic Isolation:</strong> Enforced strict boundary rules preventing DMZ services from initiating unauthorized sessions into the internal LAN.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span><strong>OS Hardening:</strong> Audited and hardened Windows and Linux operating systems, disabling legacy protocols, closing unused ports, and applying credential policies.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span><strong>Service Hardening:</strong> Configured TLS/SSL encryption and secure authentication across web and email transport.</span>
              </li>
            </ul>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-cyan-400 font-semibold">
            &bull; Verified Implementation
          </div>
        </div>

      </section>

      {/* Deep-Dive: Hardened RHEL Mail Server */}
      <section className="bg-gradient-to-br from-slate-900 to-[#0b1526] border border-cyan-500/40 rounded-xl p-6 sm:p-8 shadow-2xl relative">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold mb-2">
          <Mail size={16} />
          <span>ENTERPRISE SERVICE HARDENING HIGHLIGHT</span>
        </div>
        <h2 className="text-2xl font-bold font-mono text-slate-100 mb-4">
          Internal RHEL Mail Server Deployment &amp; Hardening
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          A core achievement within the challenge was engineering and securing an internal enterprise mail server on <strong>Red Hat Enterprise Linux (RHEL)</strong>, ensuring end-to-end cryptographic confidentiality and authentication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold">MTA / Submission (Postfix)</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Configured Postfix as the Mail Transfer Agent supporting SMTP Submission on port 587. Enforced mandatory TLS encryption and SASL authentication to reject plaintext relay and unauthenticated mail delivery.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold">MDA / Retrieval (Dovecot)</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Configured Dovecot for secure mailbox delivery and IMAPS access on port 993 with SSL/TLS certificates. Disabled unencrypted IMAP/POP protocols and restricted mailbox file permissions.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold">Authentication &amp; Relaying</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Implemented SASL authentication mechanisms linked with local system credentials. Implemented strict anti-open-relay controls and domain validation to mitigate spoofing.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
            <div className="text-xs font-mono text-cyan-400 font-semibold">Host Firewall Service Hardening</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hardened the RHEL host firewall (<code className="text-cyan-300">firewalld</code>), restricting mail ports exclusively to authorized subnets and logging invalid connection requests.
            </p>
          </div>
        </div>
      </section>

      {/* Network Infrastructure Diagram */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300 font-semibold">
            <Network size={16} className="text-cyan-400" />
            <span>Virtual Network Topology Diagram</span>
          </div>
          <span className="text-xs font-mono text-slate-500">network-diagram.png</span>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-4 flex items-center justify-center overflow-hidden">
          <img 
            src="/projects/ncyte/network-diagram.png" 
            alt="NCyTE Virtual Infrastructure Network Diagram" 
            className="w-full max-w-2xl h-auto rounded border border-slate-800 shadow-xl"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-400 pt-2">
          <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
            <div className="text-cyan-400 font-bold">Hypervisor</div>
            <div>Proxmox VE Cluster</div>
          </div>
          <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
            <div className="text-cyan-400 font-bold">Perimeter</div>
            <div>Firewall &amp; NAT Aliases</div>
          </div>
          <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
            <div className="text-cyan-400 font-bold">Zones</div>
            <div>LAN, WAN &amp; DMZ</div>
          </div>
          <div className="p-3 bg-slate-900/60 rounded border border-slate-800">
            <div className="text-cyan-400 font-bold">Endpoints</div>
            <div>~10 Virtual Hosts</div>
          </div>
        </div>
      </section>

      {/* Associated Project Web Applications */}
      <section className="space-y-4">
        <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
          <h3 className="font-mono text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Terminal size={14} className="text-cyan-400" />
            <span>Associated Deployed Repositories</span>
          </h3>
          <span className="text-xs font-mono text-slate-500">GITHUB REPOSITORIES</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-lg bg-[#0b1220]/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold font-mono text-slate-100 text-base">Itzamna Defense Systems</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full-stack web application developed for the challenge scenario featuring user authentication, quote requests, and database connectivity on RHEL.
              </p>
              <div className="flex flex-wrap gap-1 text-[11px] font-mono text-slate-400 pt-1">
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">Node.js</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">Express</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">MySQL</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">RHEL</span>
              </div>
            </div>
            <a 
              href="https://github.com/Joel-J-Leiva/itzamna-defense-systems" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-2 px-3 text-xs font-mono font-semibold text-slate-200 hover:text-cyan-400 bg-slate-900 hover:bg-slate-850 rounded border border-slate-700 hover:border-cyan-500/50 flex items-center justify-center gap-1.5 transition-all"
            >
              <span>View Repository</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="p-5 rounded-lg bg-[#0b1220]/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold font-mono text-slate-100 text-base">Itzamna Helpdesk System</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Internal ticketing system built with CSRF protection, password hashing (bcrypt), and MariaDB backend for deployment behind an IIS reverse proxy.
              </p>
              <div className="flex flex-wrap gap-1 text-[11px] font-mono text-slate-400 pt-1">
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">Node.js</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">MariaDB</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">IIS Proxy</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">CSRF Defense</span>
              </div>
            </div>
            <a 
              href="https://github.com/Joel-J-Leiva/itzamna-helpdesk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-2 px-3 text-xs font-mono font-semibold text-slate-200 hover:text-emerald-400 bg-slate-900 hover:bg-slate-850 rounded border border-slate-700 hover:border-emerald-500/50 flex items-center justify-center gap-1.5 transition-all"
            >
              <span>View Repository</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Environment Stack */}
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

      {/* Key Lessons Learned */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2 border-b border-slate-800 pb-2">
          <Terminal size={14} className="text-cyan-400" />
          <span>Operational Lessons Learned</span>
        </h3>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">01.</span>
            <p>
              <strong>Implicit Deny &amp; Routing Precedence:</strong> Troubleshooting multi-tier connectivity demonstrated that implicit-deny rules and static routing metrics require careful logging and sequencing to avoid blocking necessary cross-zone DNS and authentication traffic.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">02.</span>
            <p>
              <strong>Cryptographic Service Hardening:</strong> Standard mail transport defaults to plaintext unless explicitly configured with mandatory TLS, SASL mechanisms, and certificate enforcement, emphasizing that security must be engineered deliberately rather than assumed.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">03.</span>
            <p>
              <strong>Defensive Architecture Realism:</strong> Separating external public-facing web applications in a DMZ from critical databases and internal mail servers reflects real-world defense-in-depth principles.
            </p>
          </div>
        </div>
      </section>

      <BackToProjects position="bottom" />
    </div>
  );
}

