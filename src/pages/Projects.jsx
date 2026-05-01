import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const sections = [
    {
      visibleLabel: 'Featured Project',
      projects: [
        {
          id: 'ncyte_challenge.exe',
          title: 'NCyTE Career Challenge',
          description: 'Deployment of enterprise-grade virtualized environments for security challenge infrastructure.',
          tags: ['Proxmox', 'VPN', 'AD/DNS', 'NetSeg'],
          link: '/projects/ncyte-career-challenge'
        }
      ]
    },
    {
      visibleLabel: 'Home Lab',
      projects: [
        {
          id: 'dfir_triage.sh',
          title: 'DFIR Triage Station',
          description: 'A home-lab digital forensics and incident response workstation for collecting, organizing, and reviewing triage artifacts during security investigations.',
          tags: ['DFIR', 'Triage', 'Forensics', 'Incident Response'],
          link: '/projects/dfir-triage-station'
        },
        {
          id: 'pihole_blocker.bin',
          title: 'Pi-Hole DNS Filtering',
          description: 'Network-wide ad and tracker blocking implementation utilizing localized DNS sinkholing.',
          tags: ['DNS', 'Threat Blocking', 'Pi-hole'],
          link: '/projects/pi-hole-dns-filtering'
        },
        {
          id: 'home_lab.sh',
          title: 'Home Lab Networking',
          description: 'Hands-on networking environment for practicing routing, switching, segmentation, Linux administration, and defensive security workflows.',
          tags: ['Networking', 'Linux', 'Switching', 'Raspberry Pi'],
          link: '/projects/home-lab-networking'
        }
      ]
    },
    {
      visibleLabel: 'Others',
      projects: [
        {
          id: 'rack_config.yaml',
          title: 'Physical Server/NVR',
          description: 'Physical infrastructure deployment including switching, Power over Ethernet, and IP camera network integration.',
          tags: ['PoE', 'IP Cameras', 'Switching'],
          link: '/projects/physical-server-nvr'
        },
        {
          id: 'ngo_intel.txt',
          title: 'NGO Threat Intel',
          description: 'Open-source intelligence gathering and ransomware strain analysis for non-governmental organization risk assessment.',
          tags: ['OSINT', 'Ransomware', 'Threat Intel'],
          link: '/projects/ngo-threat-intel'
        },
        {
          id: 'cyber_radio.mp3',
          title: 'C.Y.B.E.R. Radio',
          description: 'Educational broadcast platform focused on security awareness, threat communication, and technical literacy.',
          tags: ['Awareness', 'Education', 'Cybersecurity'],
          link: '/projects/cyber-radio'
        }
      ]
    }
  ];

  return (
    <>
      {/* Header */}
      <div className="mb-16 border-l-4 border-primary-container pl-6 py-2">
        <h1 className="font-terminal-heading text-terminal-heading text-primary-container flex items-center gap-3">
          <span className="text-surface-variant">&gt;</span> projects --showcase
          <span className="inline-block w-3 h-6 bg-primary-container animate-pulse ml-1"></span>
        </h1>
        <p className="mt-4 text-on-surface-variant font-code-sm text-code-sm max-w-2xl">
          [sys.log] Initializing visual directory of technical implementations, research, and infrastructure deployments.
        </p>
      </div>

      {/* Projects Sections */}
      <div className="flex flex-col gap-16">
        {sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
              <span className="text-primary-container">&gt;</span> {section.visibleLabel}
            </h2>
            <div className={`grid grid-cols-1 ${section.projects.length === 1 ? '' : 'md:grid-cols-2 lg:grid-cols-3'} gap-gutter`}>
              {section.projects.map((project) => (
                <article key={project.id} className="bg-surface-container rounded-lg border border-outline-variant hover:border-primary-container transition-all duration-300 flex flex-col group overflow-hidden glow-effect">
                  <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-error"></div>
                    <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
                    <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
                    <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant text-xs">{project.id}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-terminal-heading text-terminal-heading text-on-surface mb-3 group-hover:text-primary-container transition-colors">{project.title}</h3>
                    <p className="text-on-surface-variant mb-6 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-surface-bright text-primary font-code-sm text-code-sm text-xs rounded border border-outline-variant">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to={project.link} className="w-full py-3 border border-outline-variant text-on-surface font-code-sm text-code-sm rounded hover:border-secondary-fixed hover:text-secondary-fixed transition-colors flex items-center justify-center gap-2 glow-green">
                      <Eye size={16} /> View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 text-center text-on-surface-variant font-code-sm text-code-sm opacity-50">
        --- [ EOF ] ---
      </div>
    </>
  );
}
