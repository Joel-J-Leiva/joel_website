import { useState, useEffect } from 'react';
import { Camera, X, ZoomIn, Eye } from 'lucide-react';

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState(null);

  const fileIds = [
    1, 2, 3, 5, 6, 7, 8, 9, 10, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
    27, 28, 29, 30, 32, 33, 34, 35, 37, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
  ];

  const photos = fileIds.map(id => ({
    id,
    src: `/images/joel-photography/photo-${id}.jpg`,
    alt: `Photography portfolio frame ${id} by Joel Leiva`
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
    <div className="max-w-7xl mx-auto pb-16 px-4">
      {/* Header */}
      <header className="mb-12 border-l-4 border-cyber-cyan pl-6 py-2">
        <div className="flex items-center gap-2 text-cyber-cyan font-mono text-xs mb-3 uppercase tracking-wider">
          <span className="opacity-70">&gt;</span> creative.discipline // visual_archive
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight flex items-center gap-3">
          <Camera className="text-cyber-cyan" size={32} />
          Visual Archive & Photography
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          A curated collection of street, architectural, and landscape photography. Outside of cybersecurity and systems defense, photography cultivates spatial awareness, meticulous attention to detail, and patience—disciplines that directly enrich analytical problem-solving.
        </p>

        <div className="flex items-center gap-4 mt-6 text-xs font-mono text-slate-400">
          <span className="px-2.5 py-1 bg-dark-900 border border-dark-700 rounded text-cyber-cyan">
            {photos.length} Archived Frames
          </span>
          <span className="text-slate-500">•</span>
          <span>Click any image for expanded view</span>
        </div>
      </header>

      {/* Photo Gallery Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <article 
            key={photo.id} 
            onClick={() => setSelectedImage(photo)}
            className="cursor-pointer bg-dark-900 rounded-lg border border-dark-800 overflow-hidden group hover:border-cyber-cyan/50 hover:shadow-lg hover:shadow-cyber-cyan/10 transition-all duration-300 aspect-square relative"
          >
            <img 
              alt={photo.alt} 
              className="object-cover w-full h-full opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
              src={photo.src} 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 justify-between">
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1">
                <Eye size={12} className="text-cyber-cyan" /> Frame #{photo.id}
              </span>
              <ZoomIn size={16} className="text-cyber-cyan" />
            </div>
          </article>
        ))}
      </section>

      <div className="my-16 font-mono text-xs text-slate-500 text-center tracking-widest uppercase">
        --- End of Visual Archive ---
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full flex flex-col items-center">
            <button 
              className="absolute -top-12 right-0 text-slate-300 hover:text-white transition-colors font-mono text-xs flex items-center gap-1.5 bg-dark-900 border border-dark-700 hover:border-cyber-cyan px-3 py-1.5 rounded-lg shadow-lg"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
            >
              <X size={14} /> ESC / CLOSE
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-[92vw] max-h-[82vh] object-contain border border-dark-700 rounded-lg shadow-2xl shadow-black/80" 
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-3 text-xs font-mono text-slate-400">
              Frame #{selectedImage.id} — Joel Leiva Photography Archive
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
