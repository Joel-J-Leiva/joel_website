import { useState, useEffect } from 'react';

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState(null);

  const fileIds = [
    1, 2, 3, 5, 6, 7, 8, 9, 10, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
    27, 28, 29, 30, 32, 33, 34, 35, 37, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
  ];

  const photos = fileIds.map(id => ({
    id,
    src: `/images/joel-photography/photo-${id}.jpg`,
    alt: `Photography gallery image ${id}`
  })).reverse();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      <header className="mb-lg border-b border-outline-variant pb-md">
        <div className="flex items-center gap-sm mb-sm text-primary">
          <span className="w-3 h-3 rounded-full bg-error"></span>
          <span className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></span>
          <span className="w-3 h-3 rounded-full bg-primary-fixed-dim"></span>
        </div>
        <h1 className="font-terminal-heading text-terminal-heading text-primary">
          &gt; gallery --open
        </h1>
        <p className="font-code-sm text-code-sm text-on-surface-variant mt-sm">
          [ system.log ] Initializing visual archive database... Connection secure.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-md">
        {photos.map(photo => (
          <article 
            key={photo.id} 
            onClick={() => setSelectedImage(photo)}
            className="cursor-pointer bg-surface-container-high border border-outline-variant rounded flex flex-col group hover:border-primary-container transition-colors duration-300 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)] aspect-square overflow-hidden"
          >
            <img 
              alt={photo.alt} 
              className="object-cover w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              src={photo.src} 
            />
          </article>
        ))}
      </section>

      <div className="my-xl font-code-sm text-code-sm text-outline-variant text-center tracking-widest">
        --- [ EOF / PAGE 1 ] ---
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full flex flex-col items-center">
            <button 
              className="absolute -top-10 right-0 text-on-surface hover:text-primary transition-colors font-code-sm border border-outline-variant hover:border-primary bg-surface-container px-3 py-1 rounded glow-blue"
              onClick={() => setSelectedImage(null)}
            >
              [ CLOSE ]
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-[95vw] max-h-[85vh] object-contain border border-outline-variant rounded shadow-[0_0_20px_rgba(0,0,0,0.5)]" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
