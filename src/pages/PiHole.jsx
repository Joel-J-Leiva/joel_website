import { ShieldCheck, Server, Terminal, Lock } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function PiHole() {
  const techStack = [
    'Raspberry Pi 5', 'Pi-hole', 'DNS Sinkhole', 'Curated Blocklists', 
    'Raspberry Pi OS', 'Local Network Configuration'
  ];

  const keySkills = [
    'DNS Filtering', 'Network Visibility', 'Defense in Depth', 
    'Staged Deployment', 'Threat Reduction', 'Linux Administration'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <BackToProjects position="top" />

      <header className="mb-16 border-l-4 border-primary-container pl-6 py-2">
        <div className="flex items-center gap-2 text-primary font-code-sm text-sm mb-4">
          <span className="opacity-70">&gt;</span> project.open("pi-hole-dns-filtering")
        </div>
        <h1 className="font-terminal-heading text-4xl text-on-surface mb-4">
          Pi-hole DNS Filtering
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          A dedicated DNS filtering server deployed on a Raspberry Pi 5 to block known malicious domains and enhance home network security.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary-container">&gt;</span> overview.load()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 blur-[80px] rounded-full"></div>
          <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
            This project involved deploying Pi-hole on a Raspberry Pi 5 to act as a DNS sinkhole. It intercepts DNS requests and blocks those matching curated lists of malicious, phishing, scam, tracking, and adult-content domains.
          </p>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            Instead of immediately deploying Pi-hole across the entire network, I first configured my personal computer to use the Raspberry Pi’s DNS service. This allowed me to safely test the deployment, verify that DNS resolution was working correctly, and confirm that filtering rules were being enforced without disrupting other devices.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <section>
          <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
            <span className="text-secondary-fixed">&gt;</span> technical.impl()
          </h2>
          <div className="bg-surface-container rounded-lg border border-outline-variant p-6 h-full hover:border-secondary-fixed transition-colors">
            <p className="text-on-surface font-semibold mb-4 flex items-center gap-2">
              <Terminal size={18} className="text-secondary-fixed" />
              Technical Implementation
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Installed Raspberry Pi OS and ensured a stable network connection for the Pi.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Installed Pi-hole and accessed the web-based Admin Console.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Configured upstream DNS resolvers (e.g., Cloudflare/Google).</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Added curated blocklists for malware, phishing, and tracking domains.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Manually configured a single PC's DNS to use the Pi-hole for staged testing.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Monitored logs to verify blocked queries and ensure legitimate domains were unaffected.</li>
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
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Defense in Depth:</strong> Adding a DNS filtering layer before traffic reaches the endpoint.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Threat Reduction:</strong> Blocking command-and-control servers and phishing sites at the domain level.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Safe Testing:</strong> Validating changes on a single endpoint before network-wide rollout.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Network Visibility:</strong> Reviewing DNS query logs to identify suspicious activity or misconfigured apps.</li>
            </ul>
          </div>
        </section>
      </div>

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
              DNS plays a major role in cybersecurity. Controlling DNS resolution allows defenders to block threats before a system even attempts a connection.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">02.</span>
              Staged deployment is critical. Testing on a single computer prevented network-wide disruptions caused by potential misconfigurations.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">03.</span>
              DNS filtering requires ongoing maintenance. Blocklists must be updated, and false positives require adding allowlist exceptions.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">04.</span>
              Pi-hole does not replace endpoint protection, firewalls, or safe browsing habits; it is a complementary layer in a defense-in-depth strategy.
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
