import { FileText } from 'lucide-react';
import Seo from '../components/Seo';
import SectionHead from '../components/ui/SectionHead';
import { profile } from '../data/profile';
import { skillDomains, toolkit } from '../data/skills';
import SignalBar from '../components/ui/SignalBar';
import { toneAt } from '../components/ui/tones';

const documents = [
  {
    label: 'Resume',
    href: profile.links.resume,
    file: 'Joel-Leiva-Resume.pdf',
    text: 'Employment, certifications, technical skills and projects.',
  },
  {
    label: 'Cover letter',
    href: profile.links.coverLetter,
    file: 'Joel-Leiva-Cover-Letter.pdf',
    text: 'SecOps experience, automation projects and organizational contribution.',
  },
];

function Bio() {
  return (
    <section aria-label="Biography" className="container grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-24">
      <figure className="panel mx-auto w-full max-w-[360px] min-w-0 overflow-hidden lg:mx-0">
        <div data-slot="portrait" className="aspect-[4/5] w-full">
          <img src={profile.portraitAbout.src} alt={profile.portraitAbout.alt} width="720" height="900" decoding="async" />
        </div>
        <figcaption className="border-t border-rule bg-paper-3 px-5 py-3 text-sm text-muted">{profile.location}</figcaption>
      </figure>
      <div className="min-w-0 space-y-5 text-ink-2">
        {profile.bio.map((p) => (
          <p key={p.slice(0, 24)} className="max-w-[64ch]">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}

function EducationPhilosophy() {
  const ed = profile.education;
  return (
    <section aria-labelledby="education-title" className="container mt-[var(--section-gap)]">
      <div className="panels md:grid-cols-2">
        <div className="flex flex-col p-6 sm:p-8">
          <p className="text-sm text-muted">Education</p>
          <h2 id="education-title" className="mt-2 text-title">
            {ed.degree}
          </h2>
          <p className="mt-2 text-ink-2">Specializing in {ed.focus}</p>
          <p className="mt-1 text-sm text-muted">
            {ed.school}, {ed.location}
          </p>
          <p className="mt-4 text-muted">{ed.summary}</p>
          <p className="mt-6 text-sm text-muted">
            Expected graduation <span className="measured text-cool">{ed.expected}</span>
          </p>
        </div>
        <div className="flex flex-col p-6 sm:p-8">
          <p className="text-sm text-muted">Approach</p>
          <h2 className="mt-2 text-title">Defensive pragmatism</h2>
          <p className="mt-4 text-muted">{profile.philosophy}</p>
        </div>
      </div>
    </section>
  );
}

function Documents() {
  return (
    <section aria-labelledby="documents-title" className="container mt-[var(--section-gap)]">
      <SectionHead id="documents-title" title="Documents" lead="Both are PDFs." />
      <ul className="panels" role="list">
        {documents.map((d) => (
          <li key={d.file}>
            <a href={d.href} download={d.file} target="_blank" rel="noopener noreferrer" className="row-link flex items-start gap-4 p-6 sm:p-8">
              <FileText size={20} aria-hidden="true" className="mt-1 shrink-0 text-muted" />
              <span className="min-w-0">
                <span className="block text-lg text-ink">{d.label}</span>
                <span className="measured mt-1 block break-all text-cool">{d.file}</span>
                <span className="mt-2 block text-muted">{d.text}</span>
              </span>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Skills() {
  return (
    <section aria-labelledby="skills-title" className="container mt-[var(--section-gap)]">
      <SectionHead id="skills-title" title="Skills" lead="Grouped by discipline, from work and lab builds." />
      <div className="panels md:grid-cols-2 lg:grid-cols-3">
        {skillDomains.map((d, i) => (
          <div key={d.domain} className="relative p-6 sm:p-8">
            <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${toneAt(i).bar}`} />
            <h3 className={`text-lg ${toneAt(i).text}`}>{d.domain}</h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-2" role="list">
              {d.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section aria-labelledby="toolkit-title" className="container mt-[var(--section-gap)]">
      <SectionHead id="toolkit-title" title="Toolkit" lead="Used in enterprise operations, lab research and system hardening." />
      <ul className="flex max-w-[80ch] flex-wrap gap-x-6 gap-y-2 text-ink-2" role="list">
        {toolkit.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Joel Leiva: Computer Science (Cybersecurity) student at Kean University and Junior Security Operations Analyst with Kean University IT."
      />
      <section className="container pt-16 pb-[var(--section-gap-s)] sm:pt-24 lg:pt-[var(--section-gap-s)]">
        <SignalBar className="mb-8" />
        <h1>About Joel Leiva</h1>
        <p className="lead mt-6 max-w-[56ch] text-ink-2">
          Security operations analyst, threat intelligence researcher and computer science student.
        </p>
      </section>
      <Bio />
      <EducationPhilosophy />
      <Documents />
      <Skills />
      <Toolkit />
    </>
  );
}
