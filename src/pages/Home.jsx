import { FileText } from 'lucide-react';
import Seo from '../components/Seo';
import Button from '../components/ui/Button';
import SectionHead from '../components/ui/SectionHead';
import Reading from '../components/ui/Reading';
import SignalBar from '../components/ui/SignalBar';
import { tones } from '../components/ui/tones';
import ProjectRow from '../components/ProjectRow';
import CopyEmail from '../components/CopyEmail';
import { LinkedinIcon, GithubIcon } from '../components/icons';
import { profile } from '../data/profile';
import { experience, formatMonth } from '../data/experience';
import { featuredProjects, homeCase as sca, projects } from '../data/projects';
import { toolkit } from '../data/skills';


function Hero() {
  const typed = `${profile.whoami.command}`;
  return (
    <section aria-labelledby="hero-title" className="container grid items-center gap-8 py-10 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,640px)_420px] lg:justify-center lg:gap-24 lg:py-12">
      <div className="min-w-0">
        <SignalBar className="mb-8" />
        <h1 id="hero-title" className="lg:max-w-[12ch]">{profile.headline}</h1>
        <p className="lead mt-6 text-ink-2">{profile.heroSentence}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={profile.links.resume} external variant="primary">
            <FileText size={16} aria-hidden="true" />
            Read my resume
          </Button>
          <Button to="/contact">Get in touch</Button>
        </div>
      </div>

      <figure className="panel mx-auto w-full max-w-[420px] overflow-hidden lg:mx-0">
        <div data-slot="portrait" className="aspect-[16/9] w-full sm:aspect-[4/3] lg:aspect-[4/5]">
          <img src={profile.portraitHome.src} srcSet={profile.portraitHome.srcSet} sizes="(min-width: 1024px) 420px, (min-width: 640px) 560px, 100vw" alt={profile.portraitHome.alt} width="1200" height="1800" fetchPriority="high" decoding="async" />
        </div>
        <figcaption className="border-t border-rule bg-paper-3 px-5 py-4">
          <p className="measured text-ink-2">
            <span className="text-accent">$ </span>
            <span className="typed" style={{ '--typed-steps': typed.length }}>{typed}</span>
          </p>
          <p className="measured mt-1 text-cool">
            {profile.whoami.output}
            <span className="caret ml-1" aria-hidden="true" />
          </p>
          <dl className="mt-4 hidden grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-1 border-t border-rule pt-4 text-sm sm:grid">
            {profile.record.map((row) => (
              <div key={row.label} className="contents">
                <dt className="text-muted">{row.label}</dt>
                <dd className="measured text-ink-2">{row.value}</dd>
              </div>
            ))}
          </dl>
        </figcaption>
      </figure>
    </section>
  );
}

function Readings() {
  return (
    <section aria-label="By the numbers" className="container mt-[var(--section-gap-s)]">
      <div className="panels sm:grid-cols-3">
        {profile.readings.map((r) => (
          <Reading key={r.label} {...r} />
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section aria-labelledby="work-title" className="container mt-[var(--section-gap)]">
      <SectionHead id="work-title" title="Featured projects" lead="Labs, field tools and research, each written up as a case." link={{ to: '/projects', label: `All ${projects.length} projects` }} />
      <ol className="panels" role="list">
        {featuredProjects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} thumb={false} />
        ))}
      </ol>
    </section>
  );
}

function Trail() {
  return (
    <section aria-labelledby="trail-title" className="container mt-[var(--section-gap)] grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-24">
      <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
        <h2 id="trail-title">Where I work</h2>
        <p className="mt-4 max-w-[40ch] text-muted">Two current roles and the internship that started it.</p>
        <p className="mt-6 text-sm text-muted">Daily tools</p>
        <p className="mt-2 max-w-[40ch] text-ink-2">{toolkit.slice(0, 8).join(', ')}.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/experience">Full experience</Button>
          <Button to="/about">Full toolkit</Button>
        </div>
      </div>
      <ol className="trail space-y-10" role="list">
        {experience.map((job) => (
          <li key={job.id} className="relative pl-10">
            <span className={`trail-mark top-2 ${tones[job.tone].bar} ${tones[job.tone].border}`} aria-hidden="true" />
            <p className="measured text-cool">
              {formatMonth(job.start)} to {formatMonth(job.end)}
            </p>
            <h3 className={`mt-2 ${tones[job.tone].text}`}>{job.shortRole}</h3>
            <p className="mt-1 text-ink-2">
              {job.org}, {job.unit}
            </p>
            <p className="mt-3 max-w-[60ch] text-muted">{job.short}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CaseSca() {
  const failPct = (sca.failing / sca.total) * 100;
  return (
    <section aria-labelledby="case-title" className="mt-[var(--section-gap)] border-y border-rule bg-paper-3 py-[var(--section-gap-s)]">
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-24">
        <div className="min-w-0">
          <p className="text-sm text-muted">{sca.source}</p>
          <h2 id="case-title" className="mt-3">{sca.claim}</h2>
          <p className="mt-6 max-w-[52ch] text-muted">
            {sca.text}
          </p>
          <Button to={`/projects/${sca.slug}`} className="mt-8">Read the case</Button>
        </div>
        <div className="panel min-w-0 p-6 sm:p-8">
          <p className="text-sm text-muted">{sca.caption}</p>
          <div className="mt-6 grid grid-cols-3 gap-6">
            <div>
              <p className="reading text-bad">{sca.failing}</p>
              <p className="mt-2 text-sm text-muted">Failing</p>
            </div>
            <div>
              <p className="reading text-ok">{sca.passing}</p>
              <p className="mt-2 text-sm text-muted">Passing</p>
            </div>
            <div>
              <p className="reading">{sca.total}</p>
              <p className="mt-2 text-sm text-muted">Checks</p>
            </div>
          </div>
          <div className="proportion mt-8" role="img" aria-label={`${sca.failing} failing and ${sca.passing} passing of ${sca.total} checks`}>
            <span className="bg-bad" style={{ width: `${failPct}%` }} />
            <span className="bg-ok" style={{ width: `${100 - failPct}%`, animationDelay: '120ms' }} />
          </div>
          <p className="measured mt-4 text-cool">{Math.round(failPct)}% failing on first scan</p>
        </div>
      </div>
    </section>
  );
}

function Close() {
  return (
    <section aria-labelledby="contact-title" className="container mt-[var(--section-gap)]">
      <div className="panel p-8 sm:p-12 lg:p-16">
        <h2 id="contact-title" className="max-w-[18ch]">Hiring for security operations?</h2>
        <p className="mt-4 max-w-[48ch] text-muted">{profile.availability} Email is fastest.</p>
        <CopyEmail className="mt-8" large />
        <div className="mt-10 flex flex-wrap gap-3 border-t border-rule pt-8">
          <Button href={profile.links.resume} external variant="primary">
            <FileText size={16} aria-hidden="true" />
            Read my resume<span className="visually-hidden"> (opens in a new tab)</span>
          </Button>
          <Button href={profile.links.linkedin} external>
            <LinkedinIcon /> LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
          </Button>
          <Button href={profile.links.github} external>
            <GithubIcon /> GitHub<span className="visually-hidden"> (opens in a new tab)</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <Readings />
      <FeaturedProjects />
      <Trail />
      <CaseSca />
      <Close />
    </>
  );
}
