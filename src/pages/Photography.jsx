import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Seo from '../components/Seo';
import SignalBar from '../components/ui/SignalBar';
import { photos } from '../data/photos';

const total = photos.length;

/** Native modal dialog: showModal() gives the focus trap, Escape and the top layer. */
function Lightbox({ index, onNavigate, onClose }) {
  const ref = useRef(null);
  const photo = photos[index];

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    }
  }, []);

  const close = () => {
    const dialog = ref.current;
    if (dialog?.open && typeof dialog.close === 'function') dialog.close();
    else onClose();
  };

  const step = (delta) => onNavigate((index + delta + total) % total);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      step(-1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      step(1);
    }
  };

  // A click whose target is the dialog itself landed on the backdrop (the content fills the box).
  const onClick = (e) => {
    if (e.target === ref.current) close();
  };

  return (
    <dialog
      ref={ref}
      aria-label={`Photograph ${index + 1} of ${total}`}
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={onClick}
      className="m-auto max-h-[96svh] max-w-[min(96vw,1600px)] overflow-hidden rounded-card border border-rule bg-paper-3 p-0 text-ink backdrop:bg-paper-3 backdrop:opacity-95"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-rule px-4 py-3">
          <p className="measured text-ink-2" aria-live="polite">
            Photograph {index + 1} of {total}
          </p>
          <button type="button" className="btn min-h-0 px-3 py-1.5 text-sm" onClick={close}>
            <X size={16} aria-hidden="true" />
            Close
          </button>
        </div>
        <img
          key={photo.id}
          src={photo.large}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          decoding="async"
          className="mx-auto block h-auto max-h-[calc(96svh-8rem)] w-auto max-w-full object-contain"
        />
        <div className="flex items-center justify-between gap-4 border-t border-rule px-4 py-3">
          <button type="button" className="btn min-h-0 px-3 py-1.5 text-sm" onClick={() => step(-1)}>
            <ChevronLeft size={16} aria-hidden="true" />
            Previous
          </button>
          <p className="hidden text-sm text-muted sm:block">Arrow keys move between photos.</p>
          <button type="button" className="btn min-h-0 px-3 py-1.5 text-sm" onClick={() => step(1)}>
            Next
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default function Photography() {
  const [open, setOpen] = useState(null);
  const opener = useRef(null);
  const thumbs = useRef([]);

  const openAt = (i) => {
    opener.current = i;
    setOpen(i);
  };

  const onClose = () => {
    setOpen(null);
    // Return focus to the thumbnail that opened the lightbox.
    const button = thumbs.current[opener.current];
    if (button) button.focus();
  };

  return (
    <>
      <Seo title="Photography" description="Street, architectural and landscape photography by Joel Leiva." />
      <section className="container pt-16 pb-[var(--section-gap-s)] sm:pt-24 lg:pt-[var(--section-gap-s)]">
        <SignalBar className="mb-8" />
        <h1>Photography</h1>
        <p className="lead mt-6 max-w-[56ch] text-ink-2">
          Street, architectural and landscape photography. It trains the attention to detail and patience I bring to security work.
        </p>
      </section>

      <section aria-label="Photo archive" className="container">
        <p className="text-sm text-muted">
          <span className="measured text-ink-2">{total}</span> photographs, newest first. Select one to open it full size.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" role="list">
          {photos.map((photo, i) => (
            <li key={photo.id} className="min-w-0">
              <button
                type="button"
                ref={(el) => {
                  thumbs.current[i] = el;
                }}
                onClick={() => openAt(i)}
                aria-label={`Open photograph ${i + 1} of ${total}`}
                className="block aspect-square w-full overflow-hidden rounded-card border border-rule bg-paper-2 transition-colors duration-short ease-out hover:border-accent focus-visible:border-accent motion-reduce:transition-none"
              >
                <img src={photo.thumb} srcSet={`${photo.thumbSm} 320w, ${photo.thumb} 640w`} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" alt="" width="640" height="640" loading={i < 4 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : undefined} decoding="async" className="h-full w-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {open !== null && <Lightbox index={open} onNavigate={setOpen} onClose={onClose} />}
    </>
  );
}
