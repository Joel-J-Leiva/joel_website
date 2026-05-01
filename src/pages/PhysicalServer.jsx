import { ShieldCheck, Server, Terminal, Lock } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function PhysicalServer() {
  const techStack = [
    'Physical Server Rack', 'Power Distribution Unit (PDU)', 'TP-Link Switch', 
    'Video Management / NVR', 'PoE IP Cameras', 'Network Traffic Analysis'
  ];

  const keySkills = [
    'Physical Security', 'Hardware Mounting', 'Cable Management', 
    'Surveillance Deployment', 'Network Traffic Awareness', 'Power Organization'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <BackToProjects position="top" />

      <header className="mb-16 border-l-4 border-primary-container pl-6 py-2">
        <div className="flex items-center gap-2 text-primary font-code-sm text-sm mb-4">
          <span className="opacity-70">&gt;</span> project.open("physical-server-nvr")
        </div>
        <h1 className="font-terminal-heading text-4xl text-on-surface mb-4">
          Physical Server Rack & NVR Deployment
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          Deployment of a physical server rack environment supporting switching, power, NVR systems, and a PoE-based IP camera network.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary-container">&gt;</span> overview.load()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 blur-[80px] rounded-full"></div>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            This project focused on building the physical infrastructure for a secure and stable lab environment. I assembled a physical server rack supporting 5 devices, including switching infrastructure, power distribution, and NVR systems. I also deployed a PoE-based IP camera network with 5 cameras, integrating them through an unmanaged switch and NVR to improve monitoring coverage and gain hands-on experience with network traffic analysis.
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
              Infrastructure Technician
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Built and organized a physical server rack supporting 5 devices.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Integrated switching infrastructure, power distribution, and NVR systems into the rack environment.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Deployed a PoE-based IP camera network with 5 cameras.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Connected camera infrastructure through an unmanaged switch and NVR.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Improved monitoring coverage for the lab environment.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Gained hands-on experience with physical network infrastructure, device cabling, and network traffic analysis.</li>
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
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Physical Infrastructure:</strong> Centralizing lab equipment in a structured rack environment.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Monitoring Coverage:</strong> Using IP cameras and NVR systems to improve visibility over the lab area.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Power Organization:</strong> Supporting stable operations through organized power distribution via a PDU.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Switching Infrastructure:</strong> Connecting devices through switching hardware for reliable network communication.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Network Traffic Awareness:</strong> Using the deployment to gain hands-on exposure to camera/NVR traffic patterns and analysis.</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-tertiary-fixed">&gt;</span> infrastructure.view()
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-surface-container rounded-lg border border-outline-variant p-4 overflow-hidden">
            <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex items-center gap-2 mb-4 rounded-t">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
              <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
              <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant text-xs">Server-1.jpg</span>
            </div>
            <div className="rounded border border-surface-variant overflow-hidden flex items-center justify-center bg-black/20 p-4 aspect-square">
              <img 
                src="/projects/physical-server-nvr/Server-1.jpg" 
                alt="Physical server rack and NVR infrastructure" 
                className="w-full h-full object-cover rounded glow-effect"
              />
            </div>
          </div>
          <div className="bg-surface-container rounded-lg border border-outline-variant p-4 overflow-hidden">
            <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex items-center gap-2 mb-4 rounded-t">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
              <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
              <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant text-xs">Server-2.jpg</span>
            </div>
            <div className="rounded border border-surface-variant overflow-hidden flex items-center justify-center bg-black/20 p-4 aspect-square">
              <img 
                src="/projects/physical-server-nvr/Server-2.jpg" 
                alt="PoE camera network equipment" 
                className="w-full h-full object-cover rounded glow-effect"
              />
            </div>
          </div>
          <div className="bg-surface-container rounded-lg border border-outline-variant p-4 overflow-hidden md:col-span-2">
            <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex items-center gap-2 mb-4 rounded-t">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
              <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
              <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant text-xs">Server-VMS.jpg</span>
            </div>
            <div className="rounded border border-surface-variant overflow-hidden flex items-center justify-center bg-black/20 p-4 max-h-96">
              <img 
                src="/projects/physical-server-nvr/Server-VMS.jpg" 
                alt="NVR and switching infrastructure" 
                className="w-full h-full object-cover rounded glow-effect"
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
              Power over Ethernet (PoE) simplifies surveillance deployment significantly, reducing the need for localized power supplies near cameras and centralizing power distribution.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">02.</span>
              Thermal management is a real concern in enclosed racks; planning for airflow and active cooling is required to prevent hardware degradation.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">03.</span>
              Physical security and cable management are just as important as network configuration when building a reliable and organized lab infrastructure.
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
