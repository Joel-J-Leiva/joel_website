import { Link } from 'react-router-dom';
import { School, Server, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mt-lg mb-xl flex flex-col md:flex-row items-center gap-lg">
        <div className="flex-1 space-y-md">
          <div className="font-code-sm text-code-sm text-primary mb-sm">&gt; system.whoami()</div>
          <h1 className="font-headline-lg text-4xl md:text-headline-lg text-on-surface leading-tight break-words">
            Joel Joseph Leiva Castillo<br />
            <span className="text-3xl md:text-4xl text-on-surface-variant">(Joel Leiva)</span>
          </h1>
          <div className="flex flex-wrap gap-sm font-code-sm text-code-sm text-secondary-fixed-dim">
            <span>[ Cybersecurity Student ]</span>
            <span>[ Threat Intelligence Analyst ]</span>
            <span>[ Ethical Hacker-in-Training ]</span>
          </div>
          <div className="flex flex-wrap gap-sm font-code-sm text-code-sm text-tertiary-fixed-dim mb-md">
            <span>[ Home Lab Builder ]</span>
            <span>[ OSINT Researcher ]</span>
            <span>[ Photographer ]</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl border-l-2 border-outline-variant pl-sm py-xs">
            I’m a cybersecurity student at Kean University focused on threat intelligence, ethical hacking, network defense, SIEM monitoring, OSINT, and hands-on security labs.
          </p>
          <div className="flex gap-md pt-sm">
            <Link to="/projects" className="bg-primary text-on-primary font-label-caps text-label-caps px-md py-sm rounded glow-blue hover:bg-primary-fixed transition-colors border border-primary text-center inline-block">
              View Projects
            </Link>
            <Link to="/about" className="bg-transparent text-on-surface font-label-caps text-label-caps px-md py-sm rounded border border-outline-variant hover:border-secondary-fixed-dim hover:text-secondary-fixed-dim transition-colors text-center inline-block">
              About Me
            </Link>
          </div>
        </div>
        <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[400px] shrink-0 mt-8 md:mt-0">
          <div className="absolute inset-0 border border-primary rounded-xl glow-blue transform rotate-3"></div>
          <div className="absolute inset-0 border border-secondary-fixed-dim rounded-xl glow-green transform -rotate-3"></div>
          <img 
            alt="Joel Leiva portrait" 
            className="absolute inset-0 w-full h-full object-cover object-top rounded-xl border border-surface-variant" 
            src="/images/joel-photos/Home-Page.jpg"
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-xs bg-surface-container-high px-sm py-xs rounded border border-surface-variant">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
            <span className="font-code-sm text-code-sm text-on-surface">ONLINE</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full text-center font-code-sm text-code-sm text-outline-variant my-lg">
        --- [ EOF hero_module ] ---
      </div>

      {/* Current Focus Section */}
      <section className="mb-xl">
        <h2 className="font-terminal-heading text-terminal-heading text-on-surface mb-lg border-b border-surface-variant pb-sm flex items-center gap-sm">
          <span className="text-primary">&gt;</span> current_focus.log
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {/* Card 1 */}
          <div className="bg-surface-container border border-surface-variant rounded-lg p-md hover:border-primary transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-surface-variant group-hover:bg-primary transition-colors"></div>
            <div className="flex items-start justify-between mb-sm mt-md">
              <School className="text-primary text-3xl" size={32} />
              <span className="font-code-sm text-code-sm text-primary bg-surface px-2 py-1 rounded border border-primary glow-blue-badge">Active</span>
            </div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-xs">CERTIFICATION</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Studying for CompTIA Security+</p>
          </div>
          {/* Card 2 */}
          <div className="bg-surface-container border border-surface-variant rounded-lg p-md hover:border-secondary-fixed-dim transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-surface-variant group-hover:bg-secondary-fixed-dim transition-colors"></div>
            <div className="flex items-start justify-between mb-sm mt-md">
              <Server className="text-secondary-fixed-dim text-3xl" size={32} />
              <span className="font-code-sm text-code-sm text-secondary-fixed-dim bg-transparent px-2 py-1 rounded border border-secondary-fixed-dim glow-green-badge">Deploying</span>
            </div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-xs">INFRASTRUCTURE</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Building comprehensive home lab</p>
          </div>
          {/* Card 3 */}
          <div className="bg-surface-container border border-surface-variant rounded-lg p-md hover:border-primary transition-colors group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-surface-variant group-hover:bg-primary transition-colors"></div>
            <div className="flex items-start justify-between mb-sm mt-md">
              <Shield className="text-primary text-3xl" size={32} />
              <span className="font-code-sm text-code-sm text-primary bg-surface px-2 py-1 rounded border border-primary glow-blue-badge">Ongoing</span>
            </div>
            <h3 className="font-label-caps text-label-caps text-on-surface mb-xs">ANALYSIS</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Researching cyber incidents for NGOs</p>
          </div>
          {/* Card 4 */}
          <div className="bg-surface-container border border-surface-variant rounded-lg p-md hover:border-tertiary-fixed-dim transition-colors group relative overflow-hidden md:col-span-2 lg:col-span-3">
            <div className="absolute top-0 left-0 w-full h-1 bg-surface-variant group-hover:bg-tertiary-fixed-dim transition-colors"></div>
            <div className="flex flex-col md:flex-row gap-md mt-md">
              <div className="flex-1">
                <h3 className="font-label-caps text-label-caps text-on-surface mb-xs">SKILL DEVELOPMENT</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">Developing proficiency in core SOC tools and operating systems.</p>
                <div className="flex flex-wrap gap-sm font-code-sm text-code-sm">
                  <span className="bg-surface border border-primary glow-blue-badge px-2 py-1 rounded text-primary">Paessler PRTG</span>
                  <span className="bg-surface border border-primary glow-blue-badge px-2 py-1 rounded text-primary">Elastic</span>
                  <span className="bg-surface border border-primary glow-blue-badge px-2 py-1 rounded text-primary">Wazuh</span>
                  <span className="bg-surface border border-primary glow-blue-badge px-2 py-1 rounded text-primary">N8N</span>
                  <span className="bg-surface border border-primary glow-blue-badge px-2 py-1 rounded text-primary">MITRE ATT&CK</span>
                  <span className="bg-surface border border-primary glow-blue-badge px-2 py-1 rounded text-primary">VirusTotal</span>
                  <span className="bg-surface border border-primary glow-blue-badge px-2 py-1 rounded text-primary">IANA</span>
                  <span className="bg-surface border border-primary glow-blue-badge px-2 py-1 rounded text-primary">YARA-X</span>
                </div>
              </div>
              <div className="md:w-1/3 bg-surface border border-surface-variant rounded p-sm font-code-sm text-code-sm text-on-surface-variant">
                <div className="text-primary mb-xs">$ tail -f skills.log</div>
                <div className="opacity-70">&gt; Parsing network traffic...</div>
                <div className="opacity-70">&gt; Configuring SIEM alerts...</div>
                <div className="opacity-70">&gt; Auditing system logs...</div>
                <div className="text-secondary-fixed-dim animate-pulse">_</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
