import { ShieldCheck, Server, Terminal, ExternalLink, Download, FileText } from 'lucide-react';
import BackToProjects from '../components/BackToProjects';

export default function CyberRadio() {
  const techStack = [
    'Cybersecurity Awareness', 'Public Speaking', 'Communication', 
    'Teamwork', 'Research', 'Qualitative Case Study', 'Cyber Education',
    'Risk Communication', 'Phishing Awareness', 'Digital Privacy',
    'MFA', 'Student Outreach', 'WKNJ 90.3', 'Kean Center for Cybersecurity'
  ];

  const keySkills = [
    'Communication', 'Teamwork', 'Collaboration', 
    'Confidence', 'Accountability', 'Professional Readiness'
  ];

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <BackToProjects position="top" />

      <header className="mb-16 border-l-4 border-primary-container pl-6 py-2">
        <div className="flex items-center gap-2 text-primary font-code-sm text-sm mb-4">
          <span className="opacity-70">&gt;</span> project.open("cyber-radio")
        </div>
        <h1 className="font-terminal-heading text-4xl text-on-surface mb-4">
          C.Y.B.E.R. — Connecting Your Brain to Everyday Risks
        </h1>
        <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed mb-6">
          A student-driven cybersecurity radio talk show created to answer real-world cyber questions, increase digital safety awareness, and strengthen communication, teamwork, and professional confidence.
        </p>
        <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed mb-6">
          C.Y.B.E.R. stands for “Connecting Your Brain to Everyday Risks.” It is a Kean Center for Cybersecurity radio show designed to make cybersecurity more accessible by allowing students and community members to ask questions about online safety, scams, hacking, privacy, phishing, passwords, multi-factor authentication, and everyday cyber concerns.
        </p>
        <a 
          href="https://www.kean.edu/academics/college-business-and-public-management/center-cybersecurity-5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container/10 text-primary-container border border-primary-container/30 hover:border-primary-container hover:bg-primary-container/20 transition-all rounded font-code-sm font-semibold"
        >
          View Official C.Y.B.E.R. Page <ExternalLink size={16} />
        </a>
      </header>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary-container">&gt;</span> overview.load()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-5 blur-[80px] rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary opacity-5 blur-[80px] rounded-full"></div>
          <p className="text-on-surface-variant leading-relaxed text-lg mb-4">
            The C.Y.B.E.R. Radio project was created as a student-driven cybersecurity awareness initiative through the Kean Center for Cybersecurity. The show gives students the opportunity to answer real cybersecurity questions from listeners in a live, accessible format. Instead of focusing only on technical demonstrations, the project emphasizes public communication, awareness, teamwork, and the ability to explain cybersecurity risks in a way that everyday audiences can understand.
          </p>
          <p className="text-on-surface-variant leading-relaxed text-lg">
            The project later became a research case study analyzing how a student-led cybersecurity radio show can strengthen power skills such as communication, collaboration, confidence, accountability, and professional readiness.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <section>
          <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
            <span className="text-secondary-fixed">&gt;</span> role.execute()
          </h2>
          <div className="bg-surface-container rounded-lg border border-outline-variant p-6 h-full hover:border-secondary-fixed transition-colors">
            <div className="flex justify-between items-start mb-4">
              <p className="text-on-surface font-semibold flex items-center gap-2">
                <Terminal size={18} className="text-secondary-fixed" />
                Cybersecurity Awareness Host / Student Research Contributor
              </p>
              <span className="text-xs font-code-sm bg-secondary-fixed/20 text-secondary-fixed px-2 py-1 rounded border border-secondary-fixed/30">Live Broadcast</span>
            </div>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Helped create and participate in a student-driven cybersecurity radio talk show at Kean University.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Supported a live 30-minute cybersecurity awareness broadcast focused on real questions from the community.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Helped explain cybersecurity topics such as phishing, scams, online safety, privacy, passwords, and multi-factor authentication in accessible language.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Collaborated with student team members to plan content, assign roles, rehearse responses, and prepare for audience questions.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Contributed to the research case study evaluating how the project strengthened communication, teamwork, and professional confidence.</li>
              <li className="flex items-start gap-2"><span className="text-secondary-fixed mt-1">▹</span> Helped demonstrate how cybersecurity students can translate technical knowledge into practical guidance for non-technical audiences.</li>
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
              Cybersecurity Awareness Concepts Demonstrated
            </p>
            <ul className="space-y-3 text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Cybersecurity Awareness:</strong> Helping audiences understand everyday cyber risks and safer online behavior.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Phishing & Scam Prevention:</strong> Explaining how to recognize suspicious messages, links, and social engineering tactics.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Digital Privacy:</strong> Discussing how individuals can protect personal information online.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Password Hygiene:</strong> Reinforcing strong passwords, password managers, and account security habits.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Multi-Factor Authentication:</strong> Encouraging MFA as a practical defense against account compromise.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Risk Communication:</strong> Translating technical cybersecurity topics into clear, audience-friendly explanations.</li>
              <li className="flex items-start gap-2"><span className="text-error mt-1">▹</span> <strong>Public Education:</strong> Using media and student-led outreach to improve community cyber awareness.</li>
            </ul>
          </div>
        </section>
      </div>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-tertiary-fixed">&gt;</span> research.case_study()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-6 md:p-8">
          <div className="flex justify-between items-start mb-6 border-b border-surface-variant pb-4">
            <h3 className="text-2xl font-terminal-heading text-tertiary-fixed">
              Research Case Study: Building Power Skills Through Cybersecurity Awareness
            </h3>
            <span className="hidden md:inline-block text-xs font-code-sm bg-tertiary-fixed/20 text-tertiary-fixed px-3 py-1 rounded border border-tertiary-fixed/30">Research Study</span>
          </div>
          
          <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
            This project was also developed into a research case study examining how a student-led cybersecurity radio show can strengthen power skills. The study found that communication, teamwork, and collaboration are essential for cybersecurity readiness and can be developed through experiential projects where students practice explaining technical topics to broad audiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-surface-container-high rounded p-5 border-l-2 border-tertiary-fixed">
              <h4 className="text-on-surface font-semibold mb-3 flex items-center gap-2">
                <FileText size={16} className="text-tertiary-fixed" /> Methods
              </h4>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li className="flex items-start gap-2"><span className="text-tertiary-fixed mt-1 text-xs">■</span> Student-led experiential project at Kean University</li>
                <li className="flex items-start gap-2"><span className="text-tertiary-fixed mt-1 text-xs">■</span> Spring 2026</li>
                <li className="flex items-start gap-2"><span className="text-tertiary-fixed mt-1 text-xs">■</span> Five undergraduate cybersecurity students</li>
                <li className="flex items-start gap-2"><span className="text-tertiary-fixed mt-1 text-xs">■</span> Live 30-minute cybersecurity awareness broadcast</li>
                <li className="flex items-start gap-2"><span className="text-tertiary-fixed mt-1 text-xs">■</span> Audience questions gathered through campus outreach</li>
                <li className="flex items-start gap-2"><span className="text-tertiary-fixed mt-1 text-xs">■</span> Data from reflections, surveys, planning documents, and debrief notes</li>
                <li className="flex items-start gap-2"><span className="text-tertiary-fixed mt-1 text-xs">■</span> Qualitative case study approach with inductive thematic analysis</li>
              </ul>
            </div>
            
            <div className="bg-surface-container-high rounded p-5 border-l-2 border-primary-container">
              <h4 className="text-on-surface font-semibold mb-3 flex items-center gap-2">
                <Server size={16} className="text-primary-container" /> Results
              </h4>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li className="flex items-start gap-2"><span className="text-primary-container mt-1 text-xs">■</span> Improved ability to explain technical concepts</li>
                <li className="flex items-start gap-2"><span className="text-primary-container mt-1 text-xs">■</span> Stronger collaboration and teamwork</li>
                <li className="flex items-start gap-2"><span className="text-primary-container mt-1 text-xs">■</span> Increased confidence speaking to a broad audience</li>
                <li className="flex items-start gap-2"><span className="text-primary-container mt-1 text-xs">■</span> Greater accountability during planning and execution</li>
                <li className="flex items-start gap-2"><span className="text-primary-container mt-1 text-xs">■</span> Better understanding of how interpersonal skills complement technical cybersecurity training</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-surface-container-high rounded p-5 border-l-2 border-secondary-fixed">
            <h4 className="text-on-surface font-semibold mb-2 text-secondary-fixed">Conclusion</h4>
            <p className="text-on-surface-variant text-sm mb-2">
              Media-based, peer-driven cybersecurity projects can build communication, teamwork, and professional readiness.
            </p>
            <p className="text-on-surface-variant text-sm">
              The project shows that cybersecurity education should develop both technical knowledge and human-centered communication skills.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-primary-container">&gt;</span> research.poster()
        </h2>
        <div className="bg-surface-container rounded-lg border border-outline-variant p-8 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mb-4">
            <FileText size={32} className="text-primary-container" />
          </div>
          <h3 className="text-xl font-terminal-heading text-on-surface mb-2">
            Case Study: Creation of a Student-Driven Radio Talk Show
          </h3>
          <p className="text-on-surface-variant mb-6 max-w-2xl">
            View the official research poster detailing the project's methodologies, findings, and the impact of the C.Y.B.E.R. Radio show on developing power skills among cybersecurity students.
          </p>
          <a 
            href="/projects/cyber-radio/Kean%20C.Y.B.E.R%20Research%20Poster.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container-high text-primary-container border border-primary-container/30 hover:border-primary-container hover:bg-primary-container/10 transition-colors rounded font-code-sm font-semibold"
          >
            <Download size={18} /> View Research Poster
          </a>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-terminal-heading text-2xl text-on-surface mb-6 border-b border-surface-variant pb-3 flex items-center gap-3">
          <span className="text-secondary-fixed">&gt;</span> official.links()
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-container rounded-lg border border-outline-variant p-6 flex flex-col h-full hover:border-secondary-fixed transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary opacity-5 blur-[40px] rounded-full"></div>
            <h3 className="text-on-surface font-semibold text-lg mb-2 z-10">Official Kean C.Y.B.E.R. Page</h3>
            <p className="text-on-surface-variant flex-1 mb-6 z-10">
              Kean University page for C.Y.B.E.R. — Connecting Your Brain to Everyday Risks, a student-powered cybersecurity radio show hosted through the Kean Center for Cybersecurity.
            </p>
            <div className="z-10">
              <a 
                href="https://www.kean.edu/academics/college-business-and-public-management/center-cybersecurity-5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-surface-container-high text-secondary-fixed border border-secondary-fixed/30 hover:border-secondary-fixed rounded transition-colors font-code-sm"
              >
                Visit Official Page <ExternalLink size={16} />
              </a>
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
