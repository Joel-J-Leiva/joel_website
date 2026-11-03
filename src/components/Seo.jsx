import { useLocation } from 'react-router-dom';
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION } from '../data/site';

/**
 * Per-route <title>, description, canonical and og tags. React 19 hoists these into <head>.
 * This is a client-rendered SPA: crawlers and link previews that do not run JS see index.html's defaults.
 */
/** Search results show about 160 characters; cut longer text at a word boundary. */
function clip(text, max = 160) {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(' ', max - 1))}…`;
}

export default function Seo({ title, description: raw = DEFAULT_DESCRIPTION, noindex = false }) {
  const description = clip(raw);
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Security operations portfolio`;
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  const canonical = `${SITE_URL}${path}`;
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
    </>
  );
}
