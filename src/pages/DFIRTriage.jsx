import { ShieldCheck, Terminal, Cpu, HardDrive } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function DFIRTriage() {
  const techStack = [
    'Raspberry Pi 5', 'Velociraptor', 'YARA-X', 'Ollama (qwen3:1.7b)', 
    'NetworkManager Hotspot', 'Bash/PowerShell', 'LILYGO T-Display', 'Offline Forensic Sandbox'
  ];

  const keySkills = [
    'Automated Triage Ingestion', 'Local LLM Summarization', 'YARA Rule Scanning', 
    'Linux Administration', 'Field Network Isolation', 'Incident Response Automation'
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-16">
      <BackToProjects position="top" />

      {/* Header */}
      <header className="border-l-4 border-cyan-500 pl-6 py-2">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <span>&gt; project.open("dfir-triage-station")</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold">[ Field Tool ]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 tracking-tight">
          DFIR Portable Triage Station
        </h1>
        <p className="mt-3 text-slate-300 text-lg max-w-3xl leading-relaxed">
          A portable, field-ready Digital Forensics and Incident Response (DFIR) triage station engineered on a Raspberry Pi 5. Provides an isolated analysis hotspot for automated artifact collection, signature scanning, and local offline LLM case briefing.
        </p>
      </header>

      {/* Overview Card */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider font-semibold border-b border-slate-800 pb-2">
          <Cpu size={16} />
          <span>Operational Objectives &amp; System Capabilities</span>
        </div>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          When triaging potentially compromised endpoints on-site, connecting to enterprise or public networks risks alert telemetry leakage, Command and Control (C2) callback triggers, or lateral infection. 
        </p>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          This project solved that operational challenge by building an air-gapped field workstation. The station generates its own isolated Wi-Fi hotspot, serves cross-platform triage launchers (Windows, macOS, Linux), runs Velociraptor artifact extraction, scans collections with YARA-X, and generates executive case briefs completely offline using a quantized local LLM.
        </p>
      </section>

      {/* Dual Column: Role & Security Work */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Implementation Role */}
        <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono font-semibold text-sm border-b border-slate-800 pb-2">
              <Terminal size={16} />
              <span>Engineering &amp; Implementation</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>Configured a dedicated mobile hotspot subnet (10.13.37.1/24) via NetworkManager to avoid address collisions in the field.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>Wrote cross-platform launcher scripts (PowerShell &amp; Bash) enabling one-click forensic extraction.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>Automated file ingestion pipelines to extract, decompress, and verify SHA-256 integrity hashes of uploaded case ZIPs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>Integrated YARA-X to scan structured JSON evidence and raw file headers for malicious indicators.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-0.5">▹</span>
                <span>Integrated Ollama running Qwen3 (1.7B) locally on the Pi 5 to generate rapid summary reports without internet access.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Security Controls */}
        <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-mono font-semibold text-sm border-b border-slate-800 pb-2">
              <ShieldCheck size={16} />
              <span>Security Concepts &amp; Containment Controls</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span><strong>Network Isolation:</strong> Zero uplink connection prevents malware from beaconing to C2 servers during active triage.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span><strong>Privacy-Preserving AI:</strong> 100% on-device inference ensures sensitive customer or enterprise hostnames never leak to external LLM APIs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span><strong>Forensic Integrity:</strong> Cryptographic verification prevents partial case corruption or tampered evidence.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-0.5">▹</span>
                <span><strong>Rapid Field Triage:</strong> Eliminates manual USB sneaker-net transfer procedures, accelerating time-to-insight.</span>
              </li>
            </ul>
          </div>
        </section>

      </div>

      {/* Hardware Photography View */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300 font-semibold">
            <HardDrive size={16} className="text-cyan-400" />
            <span>Field Workstation Hardware Display</span>
          </div>
          <span className="text-xs font-mono text-slate-500">DFIR-Triage-Station.jpg</span>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-950/80 p-4 flex items-center justify-center overflow-hidden">
          <img 
            src="/projects/dfir-triage-station/DFIR-Triage-Station.jpg" 
            alt="DFIR Triage Station Hardware" 
            className="w-full max-w-xl h-auto rounded border border-slate-800 shadow-xl"
          />
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
        <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-3 mt-6">
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

      {/* Operational Lessons Learned */}
      <section className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2 border-b border-slate-800 pb-2">
          <Terminal size={14} className="text-cyan-400" />
          <span>Operational Takeaways &amp; Engineering Lessons</span>
        </h3>
        <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">01.</span>
            <p>
              <strong>Hotspot Subnet Pinning:</strong> Default Linux hotspot configurations can dynamically assign subnets that conflict with corporate networks. Pinning a dedicated subnet (e.g. 10.13.37.1/24) guaranteed predictable routing and static DHCP leases for laptops.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">02.</span>
            <p>
              <strong>Structured Evidence vs. Raw Dumps:</strong> Velociraptor's structured JSON artifact output allowed targeted YARA-X scanning of command lines and autorun entries in seconds, bypassing the processing bottleneck of raw disk dumps.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-cyan-400 font-mono font-bold mt-0.5">03.</span>
            <p>
              <strong>Local LLMs for Incident Response:</strong> Small language models running locally on edge hardware provide immense value for synthesizing long forensic log catalogs into concise incident summaries while maintaining total operational security.
            </p>
          </div>
        </div>
      </section>

      <BackToProjects position="bottom" />
    </div>
  );
}

