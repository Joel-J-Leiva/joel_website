import { Download, FileText, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Asterisk from '../components/ui/Asterisk';
import Button from '../components/ui/Button';
import SectionHead from '../components/ui/SectionHead';
import Reading from '../components/ui/Reading';
import { tones } from '../components/ui/tones';
import ProjectRow from '../components/ProjectRow';
import ProfileLinks from '../components/ProfileLinks';
import CopyEmail from '../components/CopyEmail';
import { profile } from '../data/profile';
import { experience, formatMonth } from '../data/experience';
import { featuredProjects, homeCase as sca, projects } from '../data/projects';
import { toolkit } from '../data/skills';
import { earned, headlineCerts } from '../data/certifications';

/** before / <strong> / after, for heroLede and aboutShort. */
function Emphasis({ text }) {
  return (
    <>
      {text.before}
      <strong>{text.strong}</strong>
      {text.after}
    </>
  );
}

/** The serif line, with its "&" set in lime. Spaces stay as text so the accessible name reads naturally. */
function SerifLine({ text }) {
  const [before, ...rest] = text.split(' & ');
  if (!rest.length) return text;
  return (
    <>
      {before}{' '}
      <span className="amp">&amp;</span>{' '}
      {rest.join(' & ')}
    </>
  );
}

function Hero() {
  return (
    <div className="container">
      <section className="hero" aria-labelledby="hero-title">
        <div className="copy">
          <Asterisk variant="outline" className="star-xl" />
          <p className="hello">
            <Asterisk />
            Hi, I’m {profile.shortName}
          </p>
          <h1 id="hero-title" className="max-w-none">
            <span className="visually-hidden">Joel Leiva,</span>{' '}
            <span className="h1__a">{profile.hero.display}</span>{' '}
            <span className="h1__b">
              <SerifLine text={profile.hero.serif} />
            </span>
          </h1>
          <p className="lede">
            <Emphasis text={profile.heroLede} />
          </p>
          <div className="actions">
            <Button variant="primary" href={profile.links.resume} download icon={<Download size={16} />}>
              Download resume
            </Button>
            <Link to="/projects" viewTransition className="btn-round">
              <span className="disc">
                <Play aria-hidden="true" fill="currentColor" strokeWidth={0} />
              </span>
              <span>
                See projects<small>{profile.hero.projectsNote}</small>
              </span>
            </Link>
          </div>
        </div>

        <div className="status-row">
          <span className="inline-flex items-center gap-3">
            <span className="status-dot" aria-hidden="true" />
            <span className="label">{profile.status}</span>
          </span>
          <ProfileLinks variant="icon" />
        </div>

        <div className="plate">
          <figure className="photo">
            <div data-slot="portrait">
              <img
                src={profile.portraitHome.src}
                srcSet={profile.portraitHome.srcSet}
                sizes="(min-width: 900px) 340px, 84vw"
                alt={profile.portraitHome.alt}
                width="900"
                height="1350"
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <span className="place">{profile.location}</span>
              <span className="label">{profile.org}</span>
            </figcaption>
          </figure>
          <div className="badge" aria-hidden="true">
            <svg className="badge__ring" viewBox="0 0 120 120" focusable="false">
              <defs>
                <path id="ring-path" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
              </defs>
              <text>
                <textPath href="#ring-path" textLength="274">
                  {profile.hero.badge}
                </textPath>
              </text>
            </svg>
            <span className="badge__core">{profile.hero.monogram}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function Bento() {
  return (
    <div className="container">
      <section className="bento" aria-label="About and impact">
        <article className="tile about">
          <div className="about__head">
            <h2>About</h2>
            <span className="pill">
              {profile.education.short} · {profile.education.expected}
            </span>
          </div>
          <p>
            <Emphasis text={profile.aboutShort} />
          </p>
          <ul className="skills">
            {profile.focus.map((item) => (
              <li key={item}>
                <Asterisk />
                {item}
              </li>
            ))}
          </ul>
          <div className="certs">
            <h3 className="certs__title">Certified</h3>
            <ul className="certs__list" role="list">
              {headlineCerts.map((c) => (
                <li key={c} className="pill">
                  {c}
                </li>
              ))}
            </ul>
            <Link to="/achievements" viewTransition className="link text-sm">
              All {earned.length} certifications
            </Link>
          </div>
          <p className="avail">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}{' '}
            <Link to="/contact" viewTransition>
              Get in touch
            </Link>
          </p>
        </article>
        {profile.readings.map((r) => (
          <Reading key={r.label} {...r} />
        ))}
      </section>
    </div>
  );
}

function FeaturedProjects() {
  return (
    <section aria-labelledby="work-title" className="container mt-[var(--section-gap)]">
      <SectionHead id="work-title" title="Featured projects" lead="Labs, field tools and research, each written up as a case." link={{ to: '/projects', label: `All ${projects.length} projects` }} />
      <ol className="panels" role="list">
        {featuredProjects.map((p) => (
          <ProjectRow key={p.slug} project={p} thumb={false} />
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
            <p className="measured text-ink-2">
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
          <p className="measured mt-4 text-ink-2">{Math.round(failPct)}% failing on first scan</p>
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
          <ProfileLinks variant="text" omit={['resume']} />
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
      <Bento />
      <FeaturedProjects />
      <Trail />
      <CaseSca />
      <Close />
    </>
  );
}
