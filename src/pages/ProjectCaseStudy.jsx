import { Suspense, use } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';
import Chip from '../components/ui/Chip';
import Asterisk from '../components/ui/Asterisk';
import { statusTone } from '../components/ui/status';
import { toneFor } from '../components/ui/tones';
import SectionRenderer from '../components/case/SectionRenderer';
import { getNeighbours, getProject } from '../data/projects';
import NotFound from './NotFound';

// Each case study is its own chunk, fetched only when its page opens.
const modules = import.meta.glob(['../data/projects/*.js', '!../data/projects/index.js']);
const cache = new Map();

/** One promise per slug, kept so `use()` sees a stable value across renders. */
function loadCase(slug) {
  if (!cache.has(slug)) {
    const load = modules[`../data/projects/${slug}.js`];
    cache.set(slug, load ? load().then((m) => m.default) : Promise.resolve(null));
  }
  return cache.get(slug);
}

function Placeholder() {
  return (
    <div className="container mt-12 min-h-[40vh]" aria-busy="true">
      <span className="visually-hidden">Loading the case study</span>
      <div className="h-5 max-w-[56ch] rounded-pill bg-paper-3" aria-hidden="true" />
      <div className="mt-3 h-5 max-w-[40ch] rounded-pill bg-paper-3" aria-hidden="true" />
    </div>
  );
}

function TagList({ heading, items }) {
  return (
    <div className="p-6 sm:p-8">
      <h3>{heading}</h3>
      <ul className="mt-5 flex flex-wrap gap-2" role="list">
        {items.map((item) => (
          <li key={item} className="rounded-pill border border-rule px-3 py-1 text-sm text-ink-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseIntro({ promise }) {
  const content = use(promise);
  if (!content) return null;
  return (
    <>
        <p className="lead mt-6 max-w-[46ch] text-ink-2">{content.intro}</p>
        {content.meta?.length ? (
          <dl className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,11rem),1fr))] gap-6 border-t border-rule pt-6">
            {content.meta.map((m) => (
              <div key={m.label} className="min-w-0">
                <dt className="text-sm text-muted">{m.label}</dt>
                <dd className={`mt-1 ${m.measured ? 'measured text-ink-2' : 'text-ink'}`}>{m.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
    </>
  );
}

function CaseBody({ promise }) {
  const content = use(promise);
  if (!content) return null;
  return (
    <>
      {content.sections.map((section, i) => (
        <SectionRenderer key={`${section.type}-${i}`} section={section} />
      ))}

      {content.stack?.length || content.skills?.length ? (
        <section aria-labelledby="stack-title" className="container mt-[var(--section-gap-s)]">
          <h2 id="stack-title" className="mb-8">
            Tools and skills
          </h2>
          <div className="panels md:grid-cols-2">
            {content.stack?.length ? <TagList heading="Stack" items={content.stack} /> : null}
            {content.skills?.length ? <TagList heading="Skills" items={content.skills} /> : null}
          </div>
        </section>
      ) : null}
    </>
  );
}

function Neighbours({ slug }) {
  const { prev, next } = getNeighbours(slug);
  return (
    <nav aria-label="More projects" className="container mt-[var(--section-gap)]">
      <ul className="panels sm:grid-cols-2" role="list">
        {[
          { p: prev, label: 'Previous project' },
          { p: next, label: 'Next project' },
        ].map(({ p, label }) => (
          <li key={label}>
            <Link to={`/projects/${p.slug}`} viewTransition className="row-link group block h-full p-6 sm:p-8">
              <span className="block text-sm text-muted">{label}</span>
              <span className="mt-2 block text-title font-medium leading-tight text-ink transition-colors duration-short ease-out group-hover:text-accent">
                {p.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  return (
    <article>
      <Seo title={project.title} description={project.summary} />
      <header className="container pt-16 sm:pt-24 lg:pt-[var(--section-gap-s)]">
        <Link to="/projects" viewTransition className="link inline-flex items-center gap-2 text-sm">
          <ArrowLeft size={16} aria-hidden="true" />
          All projects
        </Link>
        <Asterisk className={`mt-10 h-5 w-5 ${toneFor(project.category).text}`} />
        <h1 className="mt-6 max-w-[22ch]">{project.title}</h1>
        <p className={`mt-4 flex flex-wrap items-center gap-3 text-sm ${toneFor(project.category).text}`}>
          {project.area}
          <Chip tone={statusTone(project.status)}>{project.status}</Chip>
        </p>
        <Suspense key={slug} fallback={<p className="lead mt-6 max-w-[46ch] text-ink-2">{project.summary}</p>}>
          <CaseIntro promise={loadCase(slug)} />
        </Suspense>
      </header>

      <Suspense key={slug} fallback={<Placeholder />}>
        <CaseBody promise={loadCase(slug)} />
      </Suspense>

      <Neighbours slug={slug} />
    </article>
  );
}
