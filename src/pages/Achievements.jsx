import { School, Clock, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Achievements() {
  const completedCerts = [
    {
      title: 'CompTIA Security+ (SY0-701)',
      issuer: 'CompTIA',
      status: 'Earned',
      description: 'Validates foundational cybersecurity technical skills across threats, attacks and vulnerabilities, security architecture, security operations, incident response, and governance.',
      badgeColor: 'border-emerald-500/40 bg-emerald-950/30 text-emerald-400'
    },
    {
      title: 'Fortinet Certified Associate Cybersecurity (FCA)',
      issuer: 'Fortinet',
      status: 'Earned',
      description: 'Validates associate-level technical proficiency in cybersecurity gateway controls, security architecture fundamentals, and threat mitigation.',
      badgeColor: 'border-cyan-500/40 bg-cyan-950/30 text-cyan-400'
    },
    {
      title: 'Fortinet Certified Fundamentals Cybersecurity (FCF)',
      issuer: 'Fortinet',
      status: 'Earned',
      description: 'Validates core cybersecurity fundamentals, threat landscape dynamics, and basic network defense concepts.',
      badgeColor: 'border-cyan-500/40 bg-cyan-950/30 text-cyan-400'
    },
    {
      title: 'Zero Trust Cyber Associate (ZTCA)',
      issuer: 'Zscaler',
      status: 'Earned',
      description: 'Validates understanding of Zero Trust architecture, secure access service edge (SASE), least-privilege boundary enforcement, and identity verification.',
      badgeColor: 'border-emerald-500/40 bg-emerald-950/30 text-emerald-400'
    },
    {
      title: 'Fundamentals of Cybersecurity',
      issuer: 'Zscaler',
      status: 'Earned',
      description: 'Core concepts covering enterprise threat vectors, attack surfaces, multi-layered defensive security, and cloud risk mitigation.',
      badgeColor: 'border-emerald-500/40 bg-emerald-950/30 text-emerald-400'
    },
    {
      title: 'Introduction to Networking for Cyber Professionals',
      issuer: 'Zscaler',
      status: 'Earned',
      description: 'Foundational enterprise networking concepts including IP routing, OSI/TCP layers, DNS resolution, and perimeter security.',
      badgeColor: 'border-emerald-500/40 bg-emerald-950/30 text-emerald-400'
    }
  ];

  const inProgressCerts = [
    {
      title: 'Cisco Certified Network Associate (CCNA 200-301)',
      issuer: 'Cisco',
      status: 'In Progress / Professional Study',
      description: 'Actively studying routing protocols, IP services, VLAN segmentation, switch port security, ACLs, and network infrastructure fundamentals.',
      badgeColor: 'border-sky-500/40 bg-sky-950/30 text-sky-400'
    }
  ];

  const academicHonors = [
    {
      title: 'Bachelor of Science in Computer Science: Cybersecurity',
      institution: 'Kean University — Union, NJ',
      date: 'Expected May 2027',
      description: 'Major curriculum in Computer Science with dedicated specialization coursework in Cybersecurity, network security, operating system security, and systems analysis.',
      type: 'Degree Program'
    },
    {
      title: 'Alpha Alpha Alpha Honor Society (Tri-Alpha)',
      institution: 'Kean University Chapter',
      date: 'Inducted 2025',
      description: 'National academic honor society recognizing high academic achievement among first-generation college students.',
      type: 'Honor Society'
    },
    {
      title: 'Epsilon Epsilon Omega Honor Society',
      institution: 'Kean University EOF',
      date: 'Recognized Member',
      description: 'Academic honor society recognizing academic excellence within the Educational Opportunity Fund program.',
      type: 'Honor Society'
    },
    {
      title: 'Photographer of the Year Award',
      institution: 'Frank J. Cicarell Academy',
      date: '2023',
      description: 'Awarded for outstanding visual composition, digital media leadership, and photographic storytelling.',
      type: 'Achievement'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16 pb-16">
      
      {/* Header */}
      <div className="border-l-4 border-cyan-500 pl-6 py-2">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2">
          <span>&gt; certs.audit()</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 font-semibold">[ Verification Standard ]</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-slate-100 tracking-tight">
          Certifications &amp; Achievements
        </h1>
        <p className="mt-3 text-slate-300 text-lg max-w-3xl leading-relaxed">
          Accredited industry certifications, active professional credentials, academic milestones, and university honor society memberships.
        </p>
      </div>

      {/* Summary KPI Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
            {completedCerts.length}
          </div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
            Earned Credentials
          </div>
        </div>
        <div className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold font-mono text-amber-400">
            {inProgressCerts.length}
          </div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
            Active Targets
          </div>
        </div>
        <div className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">
            2
          </div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
            Honor Societies
          </div>
        </div>
        <div className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-4 text-center">
          <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">
            May 2027
          </div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-1">
            BS Graduation
          </div>
        </div>
      </div>

      {/* Section 1: Earned Industry Certifications */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-emerald-400" size={20} />
            <h2 className="text-xl font-bold font-mono text-slate-100">
              Earned Industry Certifications
            </h2>
          </div>
          <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30">
            VERIFIED CREDENTIALS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {completedCerts.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-[#0b1220]/90 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded border ${cert.badgeColor}`}>
                    {cert.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold font-mono text-slate-100">
                  {cert.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Verified Issuer: {cert.issuer}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={12} /> Validated
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Certifications In Progress & Active Study */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="text-amber-400" size={20} />
            <h2 className="text-xl font-bold font-mono text-slate-100">
              Certifications in Progress &amp; Active Pursuit
            </h2>
          </div>
          <span className="text-xs font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-950/40 border border-amber-500/30">
            ACTIVE PREPARATION
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inProgressCerts.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-[#0b1220]/90 border border-amber-500/30 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded border ${cert.badgeColor}`}>
                    {cert.status}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold font-mono text-slate-100">
                  {cert.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Target: Professional Certification</span>
                <span className="text-amber-400 flex items-center gap-1">
                  <Clock size={12} /> In Progress
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Academic Milestones & Honor Societies */}
      <section className="space-y-6">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <School className="text-purple-400" size={20} />
            <h2 className="text-xl font-bold font-mono text-slate-100">
              Academic Milestones &amp; Honor Societies
            </h2>
          </div>
          <span className="text-xs font-mono text-purple-400 px-2 py-0.5 rounded bg-purple-950/40 border border-purple-500/30">
            ACADEMIC MERIT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academicHonors.map((honor, idx) => (
            <div 
              key={idx}
              className="bg-[#0b1220]/90 border border-slate-800 rounded-xl p-6 flex flex-col justify-between shadow-lg"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                    {honor.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {honor.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-mono text-slate-100">
                  {honor.title}
                </h3>

                <div className="text-xs font-mono text-cyan-400 font-medium">
                  {honor.institution}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed pt-1">
                  {honor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800 text-xs font-mono text-slate-400">
        <div>&gt; End of achievements verification log</div>
        <div className="flex items-center gap-4">
          <Link to="/experience" className="text-cyan-400 hover:underline">
            View Professional Experience &gt;
          </Link>
          <span>&bull;</span>
          <Link to="/projects" className="hover:text-slate-200">
            View Projects &gt;
          </Link>
        </div>
      </div>

    </div>
  );
}

