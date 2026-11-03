import ProseSection from './ProseSection';
import ListSection from './ListSection';
import PairSection from './PairSection';
import ReadingsSection from './ReadingsSection';
import PipelineSection from './PipelineSection';
import GallerySection from './GallerySection';
import ReposSection from './ReposSection';
import LinksSection from './LinksSection';
import NoteSection from './NoteSection';
import LessonsSection from './LessonsSection';

const renderers = {
  prose: ProseSection,
  list: ListSection,
  pair: PairSection,
  readings: ReadingsSection,
  pipeline: PipelineSection,
  gallery: GallerySection,
  repos: ReposSection,
  links: LinksSection,
  note: NoteSection,
  lessons: LessonsSection,
};

/** Renders one case-study section by its `type`; unknown types render nothing. */
export default function SectionRenderer({ section }) {
  const { type, ...props } = section;
  const Renderer = renderers[type];
  return Renderer ? <Renderer {...props} /> : null;
}
