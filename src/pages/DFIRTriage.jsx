import { ShieldCheck, Terminal } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function DFIRTriage() {
  const techStack = [
    'Raspberry Pi 5', 'Velociraptor', 'YARA-X', 'Ollama (qwen3:1.7b)', 
    'NetworkManager Hotspot', 'Bash/PowerShell', 'LILYGO T-Display'
  ];

  const keySkills = [
    'Automated Triage', 'Local LLM Summarization', 'YARA Rule Scanning', 
    'Linux Administration', 'Network Configuration', 'Incident Response Automation'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <BackToProjects position="top" />

      <header className="mb-16 border-l-4 border-primary-container pl-6 py-2">
        <div className="flex items-center gap-2 text-primary font-code-sm text-sm mb-4">
          <span className="opacity-70">&gt;</span> project.open("dfir-triage-station")
        </div>
        <h1 className="font-terminal-heading text-4xl text-on-surface mb-4">
          DFIR Triage Station
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
          A portable Digital Forensics and Incident Response (DFIR) triage station built on a Raspberry Pi 5.
        </p>
      </header>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary-container">&gt;</span> overview.load()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 blur-[80px] rounded-full"></div>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            This project developed a lightweight, mobile triage platform capable of hosting its own Wi-Fi network in the field. 
            It allows a laptop to connect directly, download triage launchers, run Velociraptor endpoint triage, upload resulting ZIP/log files, 
            and automatically ingest new collections. The system leverages YARA-X to scan structured results and files, 
            uses a local Ollama LLM to generate case summaries, and displays station status on a LILYGO T-Display.
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
              DFIR Infrastructure Builder & Operator
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Provisioned Raspberry Pi OS and configured a dedicated mobile Wi-Fi hotspot.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Built custom Windows, macOS, and Linux triage launcher scripts.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Automated ZIP extraction and ingestion logic to avoid manual transfers.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Integrated YARA-X for scanning collected endpoint artifacts.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Set up Ollama with Qwen3 for local, offline case summarization.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Programmed a LILYGO T-Display for visual station status updates.</li>
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
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Rapid endpoint artifact collection via Velociraptor.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Isolated, offline analysis environments using private hotspots.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Automated indicator scanning with YARA.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Duplicate collection protection via SHA-256 hashes.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Hardened intake scripts to prevent partial case corruption.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> Privacy-preserving local LLMs (no external cloud APIs used).</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-tertiary-fixed">&gt;</span> station.view()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-4 overflow-hidden">
          <div className="bg-surface-container-high px-4 py-2 border-b border-outline-variant flex items-center gap-2 mb-4 rounded-t">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
            <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
            <span className="ml-4 font-code-sm text-code-sm text-on-surface-variant text-xs">DFIR-Triage-Station.jpg</span>
          </div>
          <div className="rounded border border-surface-variant overflow-hidden flex items-center justify-center bg-black/20 p-4">
            <img 
              src="/projects/dfir-triage-station/DFIR-Triage-Station.jpg" 
              alt="DFIR Triage Station Hardware" 
              className="w-full md:w-1/2 h-auto rounded glow-effect"
            />
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
              NetworkManager's shared IPv4 mode requires pinning a specific subnet (like 10.13.37.1/24) to avoid default conflicts and ensure reliable DHCP.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">02.</span>
              YARA-X scanning structured JSON outputs is excellent for finding suspicious PowerShell patterns, but collecting selective raw files provides much stronger file-content coverage.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">03.</span>
              Local LLMs like Qwen3 (1.7b) running on a Pi 5 are highly effective for extracting executive briefs from YARA and Velociraptor outputs without exposing sensitive data.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-error font-bold mt-1">04.</span>
              macOS collection presents unique hurdles, often requiring Terminal Full Disk Access or administrative authorization to access protected paths like Application Support or LaunchDaemons.
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
