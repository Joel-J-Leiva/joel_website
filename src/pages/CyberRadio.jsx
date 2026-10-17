import { ShieldCheck, ExternalLink, Download, FileText, Radio, Users, Mic } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function CyberRadio() {
  const techStack = [
    'Cybersecurity Awareness Outreach',
    'Risk Communication & Translation',
    'Phishing & Social Engineering Education',
    'Multi-Factor Authentication (MFA) Advocacy',
    'Qualitative Research Case Study',
    'Inductive Thematic Analysis',
    'WKNJ 90.3 FM Studio Infrastructure',
    'Kean Center for Cybersecurity'
  ];

  const keySkills = [
    'Technical Risk Communication',
    'Cross-Disciplinary Team Collaboration',
    'Audience-Centric Security Training',
    'Live Broadcast & Public Speaking',
    'Qualitative Academic Research',
    'Cyber Hygiene Advocacy'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16 px-4">
      <BackToProjects position="top" />

      {/* Header */}
      <header className="mb-12 border-l-4 border-cyber-cyan pl-6 py-2">
        <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs mb-3 uppercase tracking-wider">
          <span className="opacity-70">&gt;</span> security_awareness // radio_broadcast_initiative
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
          C.Y.B.E.R. — Connecting Your Brain to Everyday Risks
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-6">
          A student-driven cybersecurity radio talk show and qualitative research case study evaluating how interactive broadcast media strengthens communication, teamwork, and risk translation skills among cyber defenders.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="https://www.kean.edu/academics/college-business-and-public-management/center-cybersecurity-5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30 hover:border-cyber-cyan hover:bg-cyber-cyan/20 transition-all rounded-lg text-sm font-semibold"
          >
            Official Kean C.Y.B.E.R. Page <ExternalLink size={15} />
          </a>
          <a 
            href="/projects/cyber-radio/Kean%20C.Y.B.E.R%20Research%20Poster.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-900 text-slate-200 border border-dark-700 hover:border-dark-600 transition-all rounded-lg text-sm font-semibold"
          >
            <Download size={15} /> View Academic Research Poster
          </a>
        </div>
      </header>

      {/* Overview */}
      <section className="mb-12">
        <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2 font-mono">
            <span className="text-cyber-cyan">&gt;</span> 01_PROJECT_CONCEPT_&_ORIGIN
          </h2>
          <p className="text-slate-300 leading-relaxed text-base mb-4">
            Technical defense is only half the cybersecurity equation; human behavior and organizational communication constitute the front line of defense. <strong>C.Y.B.E.R. ("Connecting Your Brain to Everyday Risks")</strong> was conceived at the Kean Center for Cybersecurity to make digital safety intuitive, conversational, and directly responsive to campus community members.
          </p>
          <p className="text-slate-300 leading-relaxed text-base">
            Broadcast over Kean University's WKNJ 90.3 FM radio station, the initiative provided an interactive platform where students addressed real questions from listeners regarding phishing lures, credential security, data privacy, social engineering, and practical device protection. The broadcast initiative subsequent expanded into a formal academic case study investigating how broadcast experiential learning accelerates crucial non-technical "power skills."
          </p>
        </div>
      </section>

      {/* Responsibilities & Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono border-b border-dark-700 pb-3">
            <Mic size={20} className="text-cyber-cyan" />
            <span className="text-cyber-cyan">&gt;</span> Broadcast & Research Contributions
          </h2>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">01.</span>
              <span><strong>Live Broadcast Delivery:</strong> Co-hosted a 30-minute live radio segment addressing real questions collected from undergraduate students, staff, and local listeners.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">02.</span>
              <span><strong>Technical Risk Translation:</strong> Distilled complex cybersecurity mechanisms (e.g., SIM swapping, OAuth phishing, password entropy) into practical, memorable metaphors.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">03.</span>
              <span><strong>Collaborative Rehearsal & Coordination:</strong> Coordinated with co-hosts, assigning topic coverage, anticipating live callers, and maintaining disciplined segment timing.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-cyan font-mono mt-0.5">04.</span>
              <span><strong>Qualitative Data Collection:</strong> Participated in post-show debriefs, surveys, and reflections that provided raw data for the academic case study on power skill development.</span>
            </li>
          </ul>
        </section>

        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono border-b border-dark-700 pb-3">
            <ShieldCheck size={20} className="text-cyber-emerald" />
            <span className="text-cyber-emerald">&gt;</span> Security Topics Communicated
          </h2>
          <ul className="space-y-3.5 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Social Engineering & Phishing:</strong> Dissecting emotional urgency, fake university alerts, and how to inspect sender headers and URLs.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Multi-Factor Authentication (MFA):</strong> Explaining why passwords alone fail, demystifying authenticator apps, and warning against push-bombing fatigue.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Digital Footprint & Privacy:</strong> Educating users on mobile app permissions, geolocation sharing, and managing public social media exposure.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-cyber-emerald font-mono mt-0.5">▹</span>
              <div>
                <strong className="text-slate-100">Credential Management:</strong> Championing password managers, passphrases, and discontinuing risky password reuse across personal and academic portals.
              </div>
            </li>
          </ul>
        </section>
      </div>

      {/* Academic Research Case Study Breakdown */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2 font-mono">
          <span className="text-cyber-cyan">&gt;</span> 02_QUALITATIVE_RESEARCH_CASE_STUDY
        </h2>
        <div className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-dark-700 pb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-100">
                Building Power Skills in Cybersecurity Through Experiential Broadcast Outreach
              </h3>
              <p className="text-sm text-slate-400 font-mono">Center for Cybersecurity Research Group // Spring 2026</p>
            </div>
            <span className="text-xs font-mono bg-cyber-cyan/10 text-cyber-cyan px-3 py-1 rounded border border-cyber-cyan/30">
              ACADEMIC_CASE_STUDY
            </span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Cybersecurity hiring managers consistently emphasize that technical prowess must be paired with communication, collaboration, and accountability. This case study analyzed the learning trajectory of five undergraduate cybersecurity students designing and executing a live broadcast.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <h4 className="text-sm font-semibold text-cyber-cyan font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                <FileText size={16} /> Research Methodology
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 leading-relaxed">
                <li>• <strong>Cohort:</strong> 5 undergraduate cybersecurity students.</li>
                <li>• <strong>Format:</strong> Live 30-minute broadcast on WKNJ 90.3 FM.</li>
                <li>• <strong>Data Sources:</strong> Qualitative student reflections, pre/post broadcast surveys, planning documentation, and instructor debrief logs.</li>
                <li>• <strong>Analysis:</strong> Inductive thematic coding to identify growth across core professional competencies.</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-dark-950/60 border border-dark-800">
              <h4 className="text-sm font-semibold text-cyber-emerald font-mono uppercase tracking-wider mb-2 flex items-center gap-2">
                <Users size={16} /> Documented Outcomes
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 leading-relaxed">
                <li>• <strong>Translational Agility:</strong> Demonstrated measurable improvement in explaining abstract security principles without relying on jargon.</li>
                <li>• <strong>Team Cohesion:</strong> Accelerated trust and mutual accountability under unscripted live broadcast conditions.</li>
                <li>• <strong>Confidence:</strong> Reduced public speaking anxiety when addressing non-technical stakeholders—critical for SOC analyst reporting.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <section className="bg-dark-900/80 rounded-xl border border-dark-700/80 p-6">
          <h2 className="text-base font-bold text-slate-100 mb-4 font-mono text-cyber-cyan flex items-center gap-2">
            <Radio size={18} /> Outreach & Media Tools
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
            <Users size={18} /> Core Competencies
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
