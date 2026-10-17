import { ShieldCheck, Terminal, Network, Cpu, AlertTriangle } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function PhysicalServer() {
  const techStack = [
    'Physical Server Rack Enclosure',
    'Rackmount PDU (Power Distribution Unit)',
    'TP-Link Gigabit Switching',
    'PoE (Power over Ethernet) Infrastructure',
    'Network Video Recorder (NVR)',
    '5x PoE High-Definition IP Cameras',
    'Cat6 Ethernet Termination & Patching',
    'Network Traffic Analysis (Wireshark)'
  ];

  const keySkills = [
    'Physical Infrastructure Engineering',
    'Rack Mounting & Equipment Positioning',
    'Structured Cable Management',
    'PoE Power Budgeting',
    'Network Device Isolation',
    'Hardware Diagnostics & Thermal Management'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16 px-4">
      <BackToProjects position="top" />

      {/* Header */}
      <header className="mb-12 border-l-4 border-cyber-cyan pl-6 py-2">
        <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs mb-3 uppercase tracking-wider">
          <span className="opacity-70">&gt;</span> infrastructure.hardware // lab_deployment
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
          Physical Server Rack & Surveillance Infrastructure
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          Assembly, power distribution, structured cabling, and network integration of a physical server rack environment supporting switching hardware, storage, and a 5-node PoE IP camera surveillance system.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-900/90 text-cyber-cyan border border-cyber-cyan/30 rounded text-xs font-mono">
            Environment: Physical Lab Enclosure
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-900/90 text-cyber-emerald border border-cyber-emerald/30 rounded text-xs font-mono">
            Endpoints: 5 Devices + 5 PoE Cameras
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dark-900/90 text-amber-400 border border-amber-400/30 rounded text-xs font-mono">
            Focus: Infrastructure & Cable Engineering
          </span>
        </div>
      </header>

      {/* Scope Disclaimer / Technical Distinction Banner */}
      <div className="mb-12 bg-dark-900/90 border border-amber-500/30 rounded-xl p-5 flex items-start gap-4">
        <AlertTriangle className="text-amber-400 flex-shrink-0 mt-0.5" size={22} />
        <div>
          <h4 className="text-slate-100 font-semibold text-sm font-mono uppercase tracking-wide text-amber-400 mb-1">
            Engineering Scope & Distinction Note
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            This project represents physical infrastructure engineering, power organization, and device-level networking. While surveillance equipment provides facility visibility and creates live network traffic streams for packet analysis, physical surveillance alone is not represented as an enterprise cybersecurity monitoring or SIEM solution.
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2 font-mono">
            <span className="text-cyber-cyan">&gt;</span> 01_INFRASTRUCTURE_OBJECTIVE
          </h2>
          <p className="text-slate-300 leading-relaxed text-base mb-4">
            Reliable cybersecurity operations depend fundamentally on robust physical and network infrastructure. Even the most sophisticated SIEM or defensive controls become vulnerable if hardware is haphazardly wired, uncooled, or prone to single points of power failure.
          </p>
          <p className="text-slate-300 leading-relaxed text-base">
            This project focused on the hands-on deployment of an organized server rack enclosure supporting 5 core devices. Work included mounting and securing switching infrastructure, implementing organized AC power distribution via a rackmount PDU, terminating structured Cat6 cabling, and configuring a dedicated 5-camera PoE IP surveillance network connected through an unmanaged switch to a Network Video Recorder (NVR).
          </p>
        </div>
      </section>

      {/* Technical Responsibilities & Security Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono border-b border-dark-700 pb-3">
            <Terminal size={20} className="text-cyber-cyan" />
            <span className="text-cyber-cyan">&gt;</span> Infrastructure Deployment Tasks
          </h2>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">01.</span>
              <span><strong>Rack Assembly & Equipment Sizing:</strong> Assembled physical rack enclosure, planning U-height allocations for airflow, thermal dissipation, and ease of maintenance.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">02.</span>
              <span><strong>Power Distribution (PDU):</strong> Mounted and balanced power leads across an organized PDU to eliminate messy power strips and reduce fire or disconnect risks.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">03.</span>
              <span><strong>PoE IP Camera Network:</strong> Deployed 5 IP surveillance cameras powered entirely over Ethernet (802.3af/at), eliminating high-voltage AC drops near camera mounts.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">04.</span>
              <span><strong>Cabling & Termination:</strong> Terminated, labeled, and routed Cat6 patch runs using horizontal management bars to maintain clean cable discipline.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">05.</span>
              <span><strong>Network & Storage Integration:</strong> Connected camera feeds to the NVR for video ingestion, local storage allocation, and streaming validation.</span>
            </li>
          </ul>
        </section>

        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono border-b border-dark-700 pb-3">
            <ShieldCheck size={20} className="text-cyber-emerald" />
            <span className="text-cyber-emerald">&gt;</span> Operational & Defensive Insights
          </h2>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Physical Security Alignment:</strong> Establishes baseline environmental security for physical servers, network hardware, and access perimeters.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Traffic Stream Inspection:</strong> Video streaming generates continuous multicast and RTSP traffic, serving as a live testbed for packet inspection and bandwidth analysis.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Power & Thermal Resilience:</strong> Proper rack spacing and PDU distribution prevent hardware throttling and unplanned downtime from electrical surges.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Network Segmentation Awareness:</strong> Highlights why IoT and video devices must be segregated from administrative subnets to limit potential attack surfaces.
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Hardware Gallery - Using Real Project Assets */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono">
          <span className="text-cyber-cyan">&gt;</span> 02_PHYSICAL_HARDWARE_GALLERY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 overflow-hidden flex flex-col">
            <div className="bg-dark-950 px-4 py-2 border-b border-dark-700 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Server-1.jpg</span>
              <span className="text-[10px] font-mono text-cyber-cyan bg-cyber-cyan/10 px-2 py-0.5 rounded">RACK_ENCLOSURE</span>
            </div>
            <div className="p-4 bg-dark-950/40 flex-1 flex items-center justify-center">
              <img 
                src="/projects/physical-server-nvr/Server-1.jpg" 
                alt="Physical server rack and NVR infrastructure" 
                className="w-full h-64 object-cover rounded-lg border border-dark-700"
              />
            </div>
            <div className="p-4 border-t border-dark-800 text-xs text-slate-400">
              Rackmount chassis assembly with centralized PDU and multi-device mounting.
            </div>
          </div>

          <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 overflow-hidden flex flex-col">
            <div className="bg-dark-950 px-4 py-2 border-b border-dark-700 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Server-2.jpg</span>
              <span className="text-[10px] font-mono text-cyber-emerald bg-cyber-emerald/10 px-2 py-0.5 rounded">POE_CAMERA_NODES</span>
            </div>
            <div className="p-4 bg-dark-950/40 flex-1 flex items-center justify-center">
              <img 
                src="/projects/physical-server-nvr/Server-2.jpg" 
                alt="PoE camera network equipment" 
                className="w-full h-64 object-cover rounded-lg border border-dark-700"
              />
            </div>
            <div className="p-4 border-t border-dark-800 text-xs text-slate-400">
              PoE IP cameras and cabling termination for structured video feed routing.
            </div>
          </div>

          <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 overflow-hidden flex flex-col md:col-span-2 lg:col-span-1">
            <div className="bg-dark-950 px-4 py-2 border-b border-dark-700 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Server-VMS.jpg</span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">NVR_MANAGEMENT</span>
            </div>
            <div className="p-4 bg-dark-950/40 flex-1 flex items-center justify-center">
              <img 
                src="/projects/physical-server-nvr/Server-VMS.jpg" 
                alt="NVR and switching infrastructure" 
                className="w-full h-64 object-cover rounded-lg border border-dark-700"
              />
            </div>
            <div className="p-4 border-t border-dark-800 text-xs text-slate-400">
              Network Video Recorder (NVR) and switching infrastructure integration.
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Lessons */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono">
          <span className="text-cyber-cyan">&gt;</span> 03_HARDWARE_LESSONS_LEARNED
        </h2>
        <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">01. PoE Efficiency</span>
              <p className="text-slate-400 text-sm leading-relaxed">
                PoE dramatically simplifies IoT and surveillance deployments by consolidating data and DC electrical power into a single Cat6 run, centralizing backup battery support.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">02. Thermal Dynamics</span>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enclosed rack chassis quickly accumulate heat from switches, transformers, and continuous NVR disk writes. Strategic vertical spacing and ventilation are required to prevent component failure.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <span className="text-xs font-mono text-cyber-cyan uppercase tracking-wider block mb-1">03. Cable Discipline</span>
              <p className="text-slate-400 text-sm leading-relaxed">
                Structured labeling and strain relief prevent accidental disconnections during routine maintenance and accelerate physical troubleshooting in enterprise data centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6">
          <h2 className="text-base font-bold text-slate-100 mb-4 font-mono text-cyber-cyan flex items-center gap-2">
            <Cpu size={18} /> Technology Environment
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map(tech => (
              <span key={tech} className="px-3 py-1 bg-dark-950 text-slate-300 font-mono text-xs rounded border border-dark-700">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6">
          <h2 className="text-base font-bold text-slate-100 mb-4 font-mono text-cyber-emerald flex items-center gap-2">
            <Network size={18} /> Core Competencies
          </h2>
          <div className="flex flex-wrap gap-2">
            {keySkills.map(skill => (
              <span key={skill} className="px-3 py-1 bg-dark-950 text-slate-300 font-mono text-xs rounded border border-dark-700">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>

      <BackToProjects position="bottom" />
    </div>
  );
}
