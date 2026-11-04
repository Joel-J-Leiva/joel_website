import Asterisk from './Asterisk';

/**
 * Banner header for inner pages: a small lime asterisk, the h1 and one lead sentence.
 * Compact so content starts in the first screen; on wide screens the lead sits beside the h1.
 */
export default function PageHeader({ title, lead }) {
  return (
    <section className="container pt-12 pb-12 sm:pt-16 lg:pb-16 lg:pt-20">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-end lg:gap-16">
        <div className="min-w-0">
          <Asterisk className="mb-6 h-5 w-5 text-accent" />
          <h1>{title}</h1>
        </div>
        <p className="lead max-w-[44ch] text-ink-2 lg:pb-2">{lead}</p>
      </div>
    </section>
  );
}
