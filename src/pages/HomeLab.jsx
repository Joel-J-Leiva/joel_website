import { ShieldCheck, Terminal } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function HomeLab() {
  const techStack = [
    'Raspberry Pi 5', 'Pi-hole', 'TP-Link Switch', 
    'VirtualBox', 'Ubuntu / Kali Linux', 'Cat6a Cabling'
  ];

  const keySkills = [
    'DNS Filtering', 'Virtualization', 'Linux Administration', 
    'Network Architecture', 'Physical Infrastructure', 'Traffic Analysis'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <BackToProjects position="top" />

      <header className="mb-16 border-l-4 border-primary-container pl-6 py-2">
        <div className="flex items-center gap-2 text-primary font-code-sm text-sm mb-4">
          <span className="opacity-70">&gt;</span> project.open("home-lab-networking")
        </div>
        <h1 className="font-terminal-heading text-4xl text-on-surface mb-4">
          Home Lab Networking Architecture
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          A functional, wired home lab environment built to practice networking, Linux administration, DNS filtering, and defensive security workflows.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary-container">&gt;</span> overview.load()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 blur-[80px] rounded-full"></div>
          <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
            The primary goal of this project was to build a hands-on home lab environment for practicing networking, Linux administration, Raspberry Pi services, DNS filtering, and defensive security workflows.
          </p>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            The lab uses physical cabling, an unmanaged network switch, Linux virtual machines, and Raspberry Pi hardware to support experimentation with system administration, traffic analysis, and security controls in a safe and isolated testing environment.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <section>
          <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
            <span className="text-secondary-fixed">&gt;</span> role.execute()
          </h2>
          <div className="bg-surface-container rounded-lg border border-outline-variant p-6 h-full hover:border-secondary-fixed transition-colors">
            <p className="text-on-surface font-semibold mb-4 flex items-center gap-2">
              <Terminal size={18} className="text-secondary-fixed" />
              Network Administrator & Architect
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Built and maintained a home lab using Cat6a cabling, an unmanaged TP-Link switch, and Raspberry Pi hardware.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Configured and tested Linux virtual machines via VirtualBox, including Ubuntu and Kali, for system administration and security practice.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Deployed a Raspberry Pi 5 acting as a Network Attached Storage (NAS) device.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Implemented Pi-hole on a dedicated Raspberry Pi 5 for network-wide DNS filtering and threat-blocking experiments.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Practiced core networking concepts including TCP/IP, DNS, DHCP, traffic flow, and connectivity troubleshooting.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
            <span className="text-error">&gt;</span> security.controls()
          </h2>
          <div className="bg-surface-container rounded-lg border border-outline-variant p-6 h-full hover:border-error transition-colors">
            <p className="text-on-surface font-semibold mb-4 flex items-center gap-2">
              <ShieldCheck size={18} className="text-error" />
              Security Concepts Demonstrated
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>DNS filtering:</strong> Blocking known malicious, phishing, malware-related, and ad/tracker domains through Pi-hole.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Network visibility:</strong> Using the lab environment to observe traffic flow, understand DNS queries, and troubleshoot connectivity.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Linux administration:</strong> Managing Ubuntu/Kali virtual machines, patching vulnerabilities, and administrating Raspberry Pi services.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Defensive testing:</strong> Practicing security controls and analyzing threat simulations in a safe, isolated learning environment.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Infrastructure discipline:</strong> Using structured cabling, switching, and organized lab hardware to create a stable environment.</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-tertiary-fixed">&gt;</span> infrastructure.view()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-4 overflow-hidden">
          <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex items-center gap-2 mb-4 rounded-t">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
            <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
            <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant text-xs">Homelab.jpg</span>
          </div>
          <div className="rounded border border-surface-variant overflow-hidden flex items-center justify-center bg-black/20 p-8">
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-[0_0_20px_rgba(40,160,250,0.15)] flex-shrink-0">
              <img 
                src="/projects/home-lab-networking/Homelab.jpg" 
                alt="Home Lab Network Badge" 
                className="w-full h-full object-cover object-center scale-110"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-error">&gt;</span> lessons.learned()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8">
          <ul className="space-y-4 text-on-surface-variant leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">01.</span>
              Effective DNS filtering requires fine-tuning blocklists; aggressive lists can block legitimate services, teaching the balance between security and usability.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">02.</span>
              Virtualization overhead must be carefully managed; optimizing resource allocation for multiple Linux VMs ensures the host system remains stable.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">03.</span>
              Centralized storage via a Raspberry Pi NAS highlights the importance of reliable network pathways and structured IP management for easy access.
            </li>
          </ul>
        </div>
      </section>

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

      <BackToProjects position="bottom" />
    </div>
  );
}
