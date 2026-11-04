import CaseSection from './CaseSection';

/** Ordered stages of a flow, left to right on wide screens. */
export default function PipelineSection({ heading, steps = [] }) {
  return (
    <CaseSection heading={heading}>
      <ol className="panels md:grid-cols-[repeat(auto-fit,minmax(min(100%,12rem),1fr))]" role="list">
        {steps.map((step, i) => (
          <li key={step.name} className="flex flex-col p-6">
            <span className="measured text-muted" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-lg">{step.name}</h3>
            <p className="mt-2 text-muted">{step.text}</p>
            {step.detail ? <p className="mt-auto pt-4 text-sm text-muted">{step.detail}</p> : null}
          </li>
        ))}
      </ol>
    </CaseSection>
  );
}
