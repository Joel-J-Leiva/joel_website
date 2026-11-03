import { Link, useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo';
import ProjectRow from '../components/ProjectRow';
import SignalBar from '../components/ui/SignalBar';
import { toneFor } from '../components/ui/tones';
import { categories, normalizeCategory, projects } from '../data/projects';

const STAGGER_MS = 50;

export default function Projects() {
  const [params, setParams] = useSearchParams();
  const filter = normalizeCategory(params.get('filter'));
  const shown = projects
    .map((project, i) => ({ project, number: i }))
    .filter(({ project }) => filter === 'all' || project.category === filter);
  const activeLabel = categories.find((c) => c.value === filter)?.label;

  const choose = (value) => {
    setParams(value === 'all' ? {} : { filter: value }, { replace: true, preventScrollReset: true });
  };

  return (
    <>
      <Seo
        title="Projects"
        description="Security labs, field tools and research by Joel Leiva: SIEM, network defense, DFIR, DNS filtering and threat intelligence."
      />
      <section className="container pt-16 pb-[var(--section-gap-s)] sm:pt-24 lg:pt-[var(--section-gap-s)]">
        <SignalBar className="mb-8" />
        <h1>Projects</h1>
        <p className="lead mt-6 max-w-[56ch] text-ink-2">
          Labs, field tools and research, each written up as a case with what I built and what I learned.
        </p>
      </section>

      <section aria-labelledby="index-title" className="container">
        <h2 id="index-title" className="visually-hidden">
          Project index
        </h2>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by area">
          {categories.map((c) => (
            <button key={c.value} type="button" className={`filter ${toneFor(c.value).pressed}`} aria-pressed={filter === c.value} onClick={() => choose(c.value)}>
              {c.label}
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted" aria-live="polite">
          <span className="measured">{shown.length}</span> of <span className="measured">{projects.length}</span> projects
          {filter === 'all' ? '' : `, ${activeLabel}`}
        </p>

        <ol key={filter} className="panels mt-6" role="list">
          {shown.map(({ project, number }, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={number}
              className="enter"
              style={{ animationDelay: `${i * STAGGER_MS}ms` }}
            />
          ))}
        </ol>

        <p className="mt-12 text-muted">
          Want the detail behind a lab or its code?{' '}
          <Link to="/contact" viewTransition className="link">
            Get in touch
          </Link>
          .
        </p>
      </section>
    </>
  );
}
