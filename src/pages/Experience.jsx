import { FileText } from 'lucide-react';
import Seo from '../components/Seo';
import Button from '../components/ui/Button';
import Chip from '../components/ui/Chip';
import SignalBar from '../components/ui/SignalBar';
import { tones } from '../components/ui/tones';
import { profile } from '../data/profile';
import { experience, knowledgePlatform, formatMonth } from '../data/experience';

function Role({ job }) {
  const current = !job.end;
  const t = tones[job.tone];
  return (
    <li className="relative pl-10">
      <span className={`trail-mark top-2 ${t.bar} ${t.border}`} aria-hidden="true" />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        <div className="min-w-0">
          <p className={`measured ${t.text}`}>
            {formatMonth(job.start)} to {formatMonth(job.end)}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3>{job.role}</h3>
            {current ? <Chip tone="person">Current</Chip> : null}
          </div>
          <p className="mt-2 text-ink-2">
            {job.org}, {job.unit}
          </p>
          <p className="mt-1 text-sm text-muted">
            {job.location}. {job.scope}.
          </p>
          <p className="mt-6 text-sm text-muted">Tools and practice</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-2" role="list">
            {job.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <p className="max-w-[64ch] text-lg text-ink-2">{job.summary}</p>
          <ul className="mt-6 max-w-[64ch] list-disc space-y-3 pl-5 text-muted marker:text-rule-2" role="list">
            {job.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <>
      <Seo
        title="Experience"
        description="Security operations at Kean University IT, operations at House of Hearts, and threat intelligence research for 60+ nonprofits."
      />

      <section className="container pt-16 pb-[var(--section-gap-s)] sm:pt-24 lg:pt-[var(--section-gap-s)]">
        <SignalBar className="mb-8" />
        <h1>Experience</h1>
        <p className="lead mt-6 max-w-[56ch] text-ink-2">
          Security operations for 25,000+ users, threat intelligence research, and operations infrastructure.
        </p>
      </section>

      <section aria-labelledby="roles-title" className="container">
        <h2 id="roles-title" className="visually-hidden">Roles</h2>
        <ol className="trail space-y-16" role="list">
          {experience.map((job) => (
            <Role key={job.id} job={job} />
          ))}
        </ol>
      </section>

      <section aria-labelledby="platform-title" className="container mt-[var(--section-gap)]">
        <div className="panel grid gap-6 p-6 sm:p-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <p className="text-sm text-muted">Built at Kean University IT</p>
          <div className="min-w-0">
            <h2 id="platform-title" className="text-title">
              {knowledgePlatform.title}
            </h2>
            <p className="mt-4 max-w-[64ch] text-ink-2">{knowledgePlatform.text}</p>
          </div>
        </div>
      </section>

      <section aria-label="Next steps" className="container mt-[var(--section-gap)] flex flex-wrap gap-3">
        <Button href={profile.links.resume} external variant="primary">
          <FileText size={16} aria-hidden="true" />
          Resume (PDF)
          <span className="visually-hidden"> (opens in a new tab)</span>
        </Button>
        <Button to="/contact">Get in touch</Button>
      </section>
    </>
  );
}
