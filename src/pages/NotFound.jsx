import Seo from '../components/Seo';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <section className="container flex min-h-[60svh] flex-col justify-center py-24">
      <Seo title="Page not found" description="This page does not exist." noindex />
      <p className="measured text-ink-2">404</p>
      <h1 className="mt-4">This page does not exist.</h1>
      <p className="lead mt-6 text-ink-2">The link may be old, or the address mistyped.</p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button to="/" variant="primary">Go home</Button>
        <Button to="/projects">See projects</Button>
      </div>
    </section>
  );
}
