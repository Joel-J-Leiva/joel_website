import Seo from '../components/Seo';
import SectionHead from '../components/ui/SectionHead';
import Reading from '../components/ui/Reading';
import Chip from '../components/ui/Chip';
import { statusTone } from '../components/ui/status';
import SignalBar from '../components/ui/SignalBar';
import { tones } from '../components/ui/tones';

const issuerTone = { CompTIA: 'blue', Fortinet: 'green', Zscaler: 'violet', Cisco: 'sky' };
const toneOf = (source = '') => tones[issuerTone[source.split(' ')[0]] ?? 'violet'];
import { earned, inProgress, academic } from '../data/certifications';

const honorSocieties = academic.filter((a) => a.type === 'Honor society').length;

const readings = [
  { value: earned.length, label: 'Industry certifications earned', tone: 'blue' },
  { value: inProgress.length, label: 'Certification in progress', tone: 'sky' },
  { value: honorSocieties, label: 'Honor society memberships', tone: 'violet' },
];

function Row({ source, title, description, chip, tone, date }) {
  return (
    <li className="relative grid gap-3 p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8 sm:p-8">
      <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1 ${toneOf(source).bar}`} />
      <div className="min-w-0">
        <p className={`text-sm ${toneOf(source).text}`}>{source}</p>
        <h3 className="mt-1 text-lg">{title}</h3>
        <p className="mt-3 max-w-[64ch] text-muted">{description}</p>
      </div>
      <div className="flex flex-wrap items-start gap-3 sm:flex-col sm:items-end">
        <Chip tone={tone}>{chip}</Chip>
        {date ? <p className={/\d/.test(date) ? 'measured text-cool' : 'text-sm text-muted'}>{date}</p> : null}
      </div>
    </li>
  );
}

function CredentialList({ id, title, lead, items }) {
  return (
    <section aria-labelledby={id} className="container mt-[var(--section-gap)]">
      <SectionHead id={id} title={title} lead={lead} />
      <ul className="panels" role="list">
        {items.map((c) => (
          <Row key={c.title} source={c.issuer} title={c.title} description={c.description} chip={c.status} tone={statusTone(c.status)} />
        ))}
      </ul>
    </section>
  );
}

export default function Achievements() {
  return (
    <>
      <Seo
        title="Certifications"
        description="CompTIA Security+, Fortinet and Zscaler certifications, CCNA in progress, and academic honors at Kean University."
      />

      <section className="container pt-16 pb-[var(--section-gap-s)] sm:pt-24 lg:pt-[var(--section-gap-s)]">
        <SignalBar className="mb-8" />
        <h1>Certifications</h1>
        <p className="lead mt-6 max-w-[56ch] text-ink-2">
          Industry certifications, current study, and academic honors.
        </p>
      </section>

      <section aria-label="Credential counts" className="container">
        <div className="panels sm:grid-cols-3">
          {readings.map((r) => (
            <Reading key={r.label} {...r} />
          ))}
        </div>
      </section>

      <CredentialList id="earned-title" title="Earned" lead="Industry certifications from CompTIA, Fortinet and Zscaler." items={earned} />
      <CredentialList id="progress-title" title="In progress" items={inProgress} />

      <section aria-labelledby="academic-title" className="container mt-[var(--section-gap)]">
        <SectionHead id="academic-title" title="Academic and honors" lead="BS in Computer Science, expected May 2027." />
        <ul className="panels" role="list">
          {academic.map((a) => (
            <Row key={a.title} source={a.institution} title={a.title} description={a.description} chip={a.type} tone="neutral" date={a.date} />
          ))}
        </ul>
      </section>
    </>
  );
}
