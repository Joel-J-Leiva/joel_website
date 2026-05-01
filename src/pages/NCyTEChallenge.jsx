import { ExternalLink, ShieldCheck, Server, Terminal, Lock } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function NCyTEChallenge() {
  const techStack = [
    'Proxmox', 'VPN', 'Routers', 'Firewalls', 'LAN/WAN/DMZ', 'NAT', 'Static Routing',
    'AD/DNS', 'DHCP', 'RHEL', 'Postfix', 'Dovecot', 'SMTP Submission', 'IMAPS',
    'SASL Auth', 'TLS Encryption', 'Web Servers', 'Mail Servers', 'Database Server',
    'Windows Clients', 'Linux Systems'
  ];

  const keySkills = [
    'Network Segmentation', 'Firewall Configuration', 'NAT', 'Static Routing',
    'AD/DNS', 'DHCP', 'Linux Administration', 'Mail Server Configuration',
    'TLS', 'Web Deployment', 'Database Integration', 'Secure Authentication',
    'Troubleshooting', 'Documentation'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16">
      {/* Back Button */}
      <BackToProjects position="top" />

      {/* Hero / Header */}
      <header className="mb-16 border-l-4 border-primary-container pl-6 py-2">
        <div className="flex items-center gap-2 text-primary font-code-sm text-sm mb-4">
          <span className="opacity-70">&gt;</span> project.open("ncyte-career-challenge")
        </div>
        <h1 className="font-terminal-heading text-4xl text-on-surface mb-4">
          NCyTE Career Challenge
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          A hands-on cybersecurity infrastructure project involving virtualized enterprise systems, segmentation, services, and defensive operations.
        </p>
      </header>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary-container">&gt;</span> overview.load()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 blur-[80px] rounded-full"></div>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            Managed a Proxmox-hosted, multi-tier network environment consisting of endpoints over VPN, routers, firewalls, web and mail servers, Active Directory/DNS, database services, and client endpoints. The project focused on enterprise-style infrastructure deployment, segmentation, secure services, and operational troubleshooting.
          </p>
        </div>
      </section>

      {/* My Role & Security Work Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* My Role */}
        <section>
          <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
            <span className="text-secondary-fixed">&gt;</span> role.execute()
          </h2>
          <div className="bg-surface-container rounded-lg border border-outline-variant p-6 h-full hover:border-secondary-fixed transition-colors">
            <p className="text-on-surface font-semibold mb-4 flex items-center gap-2">
              <Terminal size={18} className="text-secondary-fixed" />
              Student Analyst & Infrastructure Builder
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Building and managing virtualized infrastructure</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Configuring segmented networks</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Working with firewall policies and NAT</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Supporting internal services</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Troubleshooting connectivity</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Securing services</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Documenting project progress</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Deploying project-related websites</li>
            </ul>
          </div>
        </section>

        {/* Security Work */}
        <section>
          <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
            <span className="text-error">&gt;</span> security.controls()
          </h2>
          <div className="bg-surface-container rounded-lg border border-outline-variant p-6 h-full hover:border-error transition-colors">
            <p className="text-on-surface font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck size={18} className="text-error" />
              Defensive Measures Implemented
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Firewall policy configuration</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> NAT configuration</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Static routing</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Traffic segmentation</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Least-privilege network access</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Service hardening</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> TLS usage & Authentication configuration</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Defensive troubleshooting & Log review</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Infrastructure Map */}
      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-tertiary-fixed">&gt;</span> infrastructure.map()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-4 overflow-hidden">
          <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex items-center gap-2 mb-4 rounded-t">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
            <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
            <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant text-xs">network-diagram.png</span>
          </div>
          <div className="rounded border border-surface-variant overflow-hidden flex items-center justify-center bg-black/20 p-4">
            <img 
              src="/projects/ncyte/network-diagram.png" 
              alt="NCyTE Virtual Infrastructure Network Diagram" 
              className="w-full md:w-1/2 h-auto rounded glow-effect"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-on-surface-variant">
            <div className="flex flex-col gap-1">
              <span className="text-tertiary-fixed font-code-sm font-bold">Virtualization Layer</span>
              <span>Proxmox environment</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-tertiary-fixed font-code-sm font-bold">Segmented Zones</span>
              <span>LAN / WAN / DMZ</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-tertiary-fixed font-code-sm font-bold">Core Services</span>
              <span>AD/DNS, Mail, Web</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-tertiary-fixed font-code-sm font-bold">Access Controls</span>
              <span>Firewall Policies, VPN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary-container">&gt;</span> tech_environment.sys()
        </h2>
        <div className="flex flex-wrap gap-3">
          {techStack.map(tech => (
            <span key={tech} className="px-3 py-1.5 bg-surface-container text-primary-container font-code-sm text-sm rounded border border-primary-container/30 hover:border-primary-container transition-colors shadow-[0_0_10px_rgba(40,160,250,0.1)]">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Project Websites */}
      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary">&gt;</span> repositories.link()
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Repo 1 */}
          <article className="bg-surface-container rounded-lg border border-outline-variant hover:border-primary transition-all duration-300 flex flex-col p-6 glow-blue">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-terminal-heading text-xl text-on-surface">Itzamna Defense Systems</h3>
              <Server size={20} className="text-primary" />
            </div>
            <p className="text-on-surface-variant mb-6 flex-1">
              A full-stack website for a fictitious defense technology business featuring product listings, service quote requests, user authentication, cart functionality, checkout flow, and an AI chatbot assistant.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['HTML', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'RHEL'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-surface-bright text-primary font-code-sm text-xs rounded border border-outline-variant">
                  {tag}
                </span>
              ))}
            </div>
            <a 
              href="https://github.com/Joel-J-Leiva/itzamna-defense-systems" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 border border-outline-variant text-on-surface font-code-sm text-sm rounded hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2 glow-blue"
            >
              <ExternalLink size={16} /> View GitHub Repo
            </a>
          </article>

          {/* Repo 2 */}
          <article className="bg-surface-container rounded-lg border border-outline-variant hover:border-secondary-fixed transition-all duration-300 flex flex-col p-6 glow-green">
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-terminal-heading text-xl text-on-surface">Itzamna Helpdesk</h3>
              <Lock size={20} className="text-secondary-fixed" />
            </div>
            <p className="text-on-surface-variant mb-6 flex-1">
              A secure internal ticketing system built with Node.js, Express, MariaDB, and EJS for internal network deployment behind an IIS reverse proxy.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Node.js', 'Express', 'MariaDB', 'EJS', 'IIS Reverse Proxy', 'CSRF Protection', 'bcrypt'].map(tag => (
                <span key={tag} className="px-2 py-1 bg-surface-bright text-secondary-fixed font-code-sm text-xs rounded border border-outline-variant">
                  {tag}
                </span>
              ))}
            </div>
            <a 
              href="https://github.com/Joel-J-Leiva/itzamna-helpdesk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 border border-outline-variant text-on-surface font-code-sm text-sm rounded hover:border-secondary-fixed hover:text-secondary-fixed transition-colors flex items-center justify-center gap-2 glow-green"
            >
              <ExternalLink size={16} /> View GitHub Repo
            </a>
          </article>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-error">&gt;</span> lessons.learned()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8">
          <ul className="space-y-4 text-on-surface-variant leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">01.</span>
              Translating enterprise network concepts into a working lab environment requires meticulous planning and resource management.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">02.</span>
              Troubleshooting multi-tier connectivity issues often reveals hidden complexities in routing tables and firewall implicit-deny rules.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">03.</span>
              Coordinating services across segmented networks demands a strong grasp of DNS resolution and secure port requirements.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">04.</span>
              Understanding how strict security controls affect overall network usability and availability is critical for realistic deployment scenarios.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">05.</span>
              Documenting infrastructure decisions clearly is just as important as the technical execution itself.
            </li>
          </ul>
        </div>
      </section>

      {/* Key Skills */}
      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-secondary-fixed">&gt;</span> key_skills.val()
        </h2>
        <div className="flex flex-wrap gap-2">
          {keySkills.map(skill => (
            <span key={skill} className="px-3 py-1.5 bg-surface-container-high text-on-surface font-code-sm text-sm rounded border border-outline-variant">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom Back Button */}
      <BackToProjects position="bottom" />

    </div>
  );
}
