import { ShieldCheck, Terminal, ExternalLink, Database } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function NGOThreatIntel() {
  const techStack = [
    'Maltego', 'Shodan', 'MITRE ATT&CK', 'VirusTotal', 
    'MISP', 'Python (OSINT scripts)', 'Jupyter Notebooks'
  ];

  const keySkills = [
    'OSINT Gathering', 'Threat Modeling', 'IOC Analysis', 
    'Adversary Profiling', 'Report Writing', 'Data Correlation'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <BackToProjects position="top" />

      <header className="mb-16 border-l-4 border-primary-container pl-6 py-2">
        <div className="flex items-center gap-2 text-primary font-code-sm text-sm mb-4">
          <span className="opacity-70">&gt;</span> project.open("ngo-threat-intel")
        </div>
        <h1 className="font-terminal-heading text-4xl text-on-surface mb-4">
          NPCIR Non-Profit & NGO Threat Intelligence Project
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          Open-source intelligence (OSINT) and threat intelligence research focused on identifying cyber incidents, attack trends, and common threat patterns affecting Non-Profit and Non-Governmental Organization (NGO) sectors.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary-container">&gt;</span> overview.load()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 blur-[80px] rounded-full"></div>
          <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
            Non-Profit organizations and Non-Governmental Organizations (NGOs) often handle sensitive data, support vulnerable communities, and operate with limited cybersecurity resources, making them attractive targets for financially motivated cybercriminals, hacktivists, and other threat actors.
          </p>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            This project involved conducting OSINT-based research into publicly reported cyber incidents affecting Non-Profits and NGOs. The work supported the Non-Profit Cyber Incident Repository (NPCIR), a Kean University Center for Cybersecurity dataset focused on collecting and organizing publicly disclosed cyber incidents impacting these sectors.
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
              Threat Intelligence Research Intern
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Conducted open-source threat intelligence research on publicly reported cyber incidents affecting Non-Profit and NGO sectors.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Reviewed incidents involving ransomware, data breaches, website defacement, DoS/DDoS activity, phishing, and other cyber threats.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Helped organize cyber incident information to support the Non-Profit Cyber Incident Repository (NPCIR).</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Used publicly available sources to identify incident details, affected organizations, attack types, and available indicators.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Supported research intended to help students, researchers, cybersecurity practitioners, Non-Profits, and NGOs better understand sector-specific cyber risk.</li>
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
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>OSINT Collection:</strong> Gathering cyber incident information from public and disclosed sources.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Sector-Specific Threat Intelligence:</strong> Studying cyber risks affecting Non-Profit and NGO sectors.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Incident Categorization:</strong> Organizing incidents by attack type, affected organization, and available public details.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Dataset Support:</strong> Helping maintain research data for cybersecurity education and awareness.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Responsible Research:</strong> Avoiding the use of dark web material, credentials, or sensitive private information.</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-tertiary-fixed">&gt;</span> dataset.request()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="bg-surface-container-high p-4 rounded-full flex-shrink-0">
              <Database size={32} className="text-tertiary-fixed" />
            </div>
            <div className="flex-1">
              <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
                The Non-Profit Cyber Incident Repository (NPCIR) is maintained through the Kean University Center for Cybersecurity and provides a publicly sourced dataset of cyber incidents affecting Non-Profit and NGO sectors. Organizations, researchers, students, cybersecurity practitioners, and relevant stakeholders can request access through the official Kean University NPCIR page.
              </p>
              <p className="text-on-surface-variant text-sm italic mb-6">
                Access requests are reviewed through Kean University's official NPCIR process.
              </p>
              <a 
                href="https://www.kean.edu/academics/college-business-and-public-management/center-cybersecurity-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-tertiary-fixed/10 text-tertiary-fixed border border-tertiary-fixed/30 hover:border-tertiary-fixed hover:bg-tertiary-fixed/20 transition-all rounded font-code-sm font-semibold"
              >
                Request / View Dataset Access <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary-container">&gt;</span> project.resources()
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container rounded-lg border border-outline-variant p-6 flex flex-col h-full hover:border-primary-container transition-colors">
            <h3 className="text-on-surface font-semibold text-lg mb-2">CAE-CD Student Cyber Clubs</h3>
            <p className="text-on-surface-variant flex-1 mb-6">
              CAE Community cyber defense student club initiative and community resource.
            </p>
            <a 
              href="https://www.caecommunity.org/cop-cyber-defense/cae-cd-student-cyber-clubs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-surface-container-high text-primary-container border border-primary-container/30 hover:border-primary-container rounded transition-colors font-code-sm"
            >
              Visit CAE Community Page <ExternalLink size={16} />
            </a>
          </div>
          
          <div className="bg-surface-container rounded-lg border border-outline-variant p-6 flex flex-col h-full hover:border-primary-container transition-colors">
            <h3 className="text-on-surface font-semibold text-lg mb-2">Kean University NPCIR Dataset</h3>
            <p className="text-on-surface-variant flex-1 mb-6">
              Kean University Center for Cybersecurity page for the Non-Profit Cyber Incident Repository (NPCIR), including information about the dataset and how to request access.
            </p>
            <a 
              href="https://www.kean.edu/academics/college-business-and-public-management/center-cybersecurity-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-surface-container-high text-primary-container border border-primary-container/30 hover:border-primary-container rounded transition-colors font-code-sm"
            >
              View NPCIR Dataset Page <ExternalLink size={16} />
            </a>
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
              NGOs face a unique threat landscape. Unlike corporations targeted primarily for ransomware, NGOs are frequently targeted for espionage and disruption by state-sponsored actors.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">02.</span>
              Maintaining strict OPSEC during OSINT investigations is paramount to avoid exposing the investigator's identity or organization.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">03.</span>
              Attribution is notoriously difficult. Cybercriminals frequently use proxy infrastructure, making it hard to definitively link an attack to a specific actor based solely on IP addresses.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">04.</span>
              A significant amount of reconnaissance can be performed passively, highlighting the importance of managing an organization's public digital footprint.
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
