import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Chip from './ui/Chip';
import { statusTone } from './ui/status';
import { toneFor } from './ui/tones';

/** One row of the project index: area and status, title, summary, and a thumbnail where a picture exists. */
export default function ProjectRow({ project, thumb = true, className = '', style }) {
  const t = toneFor(project.category);
  return (
    <li className={className} style={style}>
      <Link
        to={`/projects/${project.slug}`}
        viewTransition
        className="row-link group relative grid grid-cols-[minmax(0,1fr)] gap-4 px-6 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-6 sm:px-8"
      >
        <span className="min-w-0">
          <span className={`flex flex-wrap items-center gap-3 text-sm ${t.text}`}>
            {project.area}
            <Chip tone={statusTone(project.status)}>{project.status}</Chip>
          </span>
          <span className={`mt-2 block text-title font-medium leading-tight text-ink transition-colors duration-short ease-out group-hover:text-accent`}>
            {project.title}
          </span>
          <span className="mt-2 block max-w-[68ch] text-muted">{project.summary}</span>
        </span>
        <span className="hidden items-center gap-4 sm:flex">
          {thumb && project.cover ? (
            <span className="block h-20 w-28 overflow-hidden rounded-pill border border-rule bg-paper-3">
              <img src={project.cover.src} alt="" loading="lazy" decoding="async" width="112" height="80" className="h-full w-full object-cover" />
            </span>
          ) : null}
          <ArrowUpRight
            size={20}
            aria-hidden="true"
            className="text-muted transition-transform duration-short ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </span>
      </Link>
    </li>
  );
}
