import CaseSection from './CaseSection';

/** Project photos in full colour, in slots sized to each image’s own aspect ratio, so nothing is cropped. */
export default function GallerySection({ heading, images = [] }) {
  const single = images.length === 1;
  return (
    <CaseSection heading={heading}>
      <div
        className={
          single
            ? 'grid grid-cols-[minmax(0,1fr)]'
            : 'grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-[repeat(2,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,1fr))]'
        }
      >
        {images.map((img) => {
          const portrait = img.height > img.width;
          const cap = single ? (portrait ? 'max-w-[26rem]' : 'max-w-4xl') : '';
          return (
            <figure key={img.src} className={`min-w-0 ${cap}`}>
              <div data-slot="photo" className="w-full rounded-card" style={{ aspectRatio: `${img.width} / ${img.height}` }}>
                <img src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" />
              </div>
              {img.caption ? <figcaption className="mt-3 text-sm text-muted">{img.caption}</figcaption> : null}
            </figure>
          );
        })}
      </div>
    </CaseSection>
  );
}
