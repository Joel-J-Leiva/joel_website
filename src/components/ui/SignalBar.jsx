/** The site's colour mark: three solid segments (blue, green, violet). Decorative. */
export default function SignalBar({ className = '' }) {
  return (
    <span aria-hidden="true" className={`flex gap-1 ${className}`}>
      <span className="h-1 w-10 rounded-[2px] bg-accent" />
      <span className="h-1 w-6 rounded-[2px] bg-cool" />
      <span className="h-1 w-3 rounded-[2px] bg-violet" />
    </span>
  );
}
