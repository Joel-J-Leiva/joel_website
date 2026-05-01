import { Activity, Search, Bug, Shield, Server, Megaphone, Download } from 'lucide-react';

export default function About() {
  return (
    <div className="relative w-full min-h-full">
      <div className="about-cyber-bg pointer-events-none absolute inset-0 z-0"></div>
      <div className="flex flex-col gap-lg relative z-10">
      {/* Hero / Bio Section */}
      <section className="flex flex-col gap-md">
        <div className="font-terminal-heading text-terminal-heading text-primary">
          &gt; whoami<span className="animate-pulse">_</span>
        </div>
        <div className="bg-surface-container border border-outline-variant rounded-DEFAULT p-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-surface-container-high border-b border-outline-variant flex items-center px-4">
            <span className="font-code-sm text-code-sm text-on-surface-variant">profile.sh</span>
          </div>
          <div className="mt-8 flex flex-col md:flex-row gap-lg items-start">
            <img 
              alt="Joel Leiva about profile photo" 
              className="w-48 h-48 rounded-DEFAULT border border-primary object-cover transition-all duration-300" 
              src="/images/joel-photos/About-Me.jpg"
            />
            <div className="flex flex-col gap-sm">
              <p className="font-body-md text-body-md text-on-surface">
                Joel is a Computer Science: Cybersecurity student at Kean University, expected to graduate in May 2027. His focus includes SOC operations, threat intelligence, ethical hacking, OSINT, and hands-on security labs. Outside of cybersecurity, he is also interested in photography, economics, and geopolitics.
              </p>
              <div className="font-code-sm text-code-sm text-surface-tint mt-4">
                [ SYS_INFO ]
              </div>
              <ul className="font-code-sm text-code-sm text-on-surface-variant grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <li className="break-words"><span className="text-primary">&gt;</span> Skills: Splunk, Wireshark, Kali, Proxmox, AD/DNS, VPN, Paessler PRTG, Elastic, Wazuh, N8N, MITRE ATT&CK, VirusTotal, IANA, YARA-X, Pi-hole, Raspberry Pi, Linux, Windows, Ubuntu, Parrot, DHCP, ARP, NAT, SSL/TLS, Dovecot, Postfix</li>
                <li><span className="text-primary">&gt;</span> Status: <span className="inline-block w-2 h-2 rounded-full bg-secondary-fixed mr-1"></span>Active / Researching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="font-code-sm text-code-sm text-outline-variant w-full text-center -my-sm">
        --- [ EOF ] ---
      </div>

      {/* Downloads Section */}
      <section className="flex flex-col gap-md">
        <h2 className="font-terminal-heading text-terminal-heading text-on-surface flex items-center gap-sm">
          <span className="text-primary">&gt;</span> documents.download()
        </h2>
        <div className="flex flex-wrap gap-md mt-sm">
          <a href="/documents/joel-leiva-resume.pdf" download="joel-leiva-resume.pdf" className="flex items-center gap-sm bg-surface border border-outline-variant hover:border-primary transition-colors p-md rounded group text-on-surface">
            <Download className="text-primary group-hover:glow-active transition-all" size={24} />
            <span className="font-code-sm text-code-sm uppercase">Download Resume</span>
          </a>
          <a href="/documents/joel-leiva-cover-letter.pdf" download="joel-leiva-cover-letter.pdf" className="flex items-center gap-sm bg-surface border border-outline-variant hover:border-primary transition-colors p-md rounded group text-on-surface">
            <Download className="text-primary group-hover:glow-active transition-all" size={24} />
            <span className="font-code-sm text-code-sm uppercase">Download Cover Letter</span>
          </a>
        </div>
      </section>

      <div className="font-code-sm text-code-sm text-outline-variant w-full text-center -my-sm">
        --- [ EOF ] ---
      </div>

      {/* What I'm Building Toward */}
      <section className="flex flex-col gap-md">
        <h2 className="font-terminal-heading text-terminal-heading text-on-surface">What I'm Building Toward</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="bg-surface border border-outline-variant p-md hover:border-primary transition-colors group">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="text-primary group-hover:glow-active" size={24} />
              <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Security Ops</h3>
            </div>
          </div>
          <div className="bg-surface border border-outline-variant p-md hover:border-primary transition-colors group">
            <div className="flex items-center gap-2 mb-4">
              <Search className="text-primary group-hover:glow-active" size={24} />
              <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Threat Intel</h3>
            </div>
          </div>
          <div className="bg-surface border border-outline-variant p-md hover:border-primary transition-colors group">
            <div className="flex items-center gap-2 mb-4">
              <Bug className="text-primary group-hover:glow-active" size={24} />
              <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Ethical Hacking</h3>
            </div>
          </div>
          <div className="bg-surface border border-outline-variant p-md hover:border-primary transition-colors group">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-primary group-hover:glow-active" size={24} />
              <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Network Defense</h3>
            </div>
          </div>
          <div className="bg-surface border border-outline-variant p-md hover:border-primary transition-colors group">
            <div className="flex items-center gap-2 mb-4">
              <Server className="text-primary group-hover:glow-active" size={24} />
              <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Home Lab</h3>
            </div>
          </div>
          <div className="bg-surface border border-outline-variant p-md hover:border-primary transition-colors group">
            <div className="flex items-center gap-2 mb-4">
              <Megaphone className="text-primary group-hover:glow-active" size={24} />
              <h3 className="font-label-caps text-label-caps text-on-surface uppercase">Cyber Awareness</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="font-code-sm text-code-sm text-outline-variant w-full text-center -my-sm">
        --- [ EOF ] ---
      </div>

      {/* Skills Section */}
      <section className="flex flex-col gap-md">
        <h2 className="font-terminal-heading text-terminal-heading text-on-surface">&gt; skills.list()</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="border border-outline-variant bg-surface-container-low p-md">
            <h3 className="font-label-caps text-label-caps text-primary uppercase mb-4 border-b border-outline-variant pb-2">Security Tools</h3>
            <div className="font-code-sm text-code-sm text-on-surface-variant grid grid-cols-2 gap-2">
              <div>Splunk</div>
              <div>Wireshark</div>
              <div>OSINT</div>
              <div>Pi-hole</div>
              <div>Paessler PRTG</div>
              <div>Elastic</div>
              <div>Wazuh</div>
              <div>N8N</div>
              <div>MITRE ATT&CK</div>
              <div>VirusTotal</div>
              <div>IANA</div>
              <div>YARA-X</div>
            </div>
          </div>
          <div className="border border-outline-variant bg-surface-container-low p-md">
            <h3 className="font-label-caps text-label-caps text-primary uppercase mb-4 border-b border-outline-variant pb-2">Networking &amp; Infra</h3>
            <div className="font-code-sm text-code-sm text-on-surface-variant grid grid-cols-2 gap-2">
              <div>TCP/IP</div>
              <div>DNS</div>
              <div>DHCP</div>
              <div>ARP</div>
              <div>NAT</div>
              <div>SSL/TLS</div>
              <div>VPN</div>
              <div>Firewalls</div>
              <div>Switching</div>
              <div>Dovecot</div>
              <div>Postfix</div>
            </div>
          </div>
          <div className="border border-outline-variant bg-surface-container-low p-md">
            <h3 className="font-label-caps text-label-caps text-primary uppercase mb-4 border-b border-outline-variant pb-2">Systems</h3>
            <div className="font-code-sm text-code-sm text-on-surface-variant grid grid-cols-2 gap-2">
              <div>Linux</div>
              <div>Kali</div>
              <div>Raspberry Pi</div>
              <div>Windows</div>
              <div>Ubuntu</div>
              <div>Parrot</div>
            </div>
          </div>
          <div className="border border-outline-variant bg-surface-container-low p-md">
            <h3 className="font-label-caps text-label-caps text-primary uppercase mb-4 border-b border-outline-variant pb-2">Programming/Data</h3>
            <div className="font-code-sm text-code-sm text-on-surface-variant grid grid-cols-2 gap-2">
              <div>Python</div>
              <div>SQL</div>
              <div>Java</div>
              <div>HTML</div>
              <div>CSS</div>
              <div>Google Suite</div>
              <div>Microsoft 365</div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
