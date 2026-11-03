# Joel Leiva: security operations portfolio

Personal portfolio for Joel Leiva: projects, experience, certifications, about, photography and contact. A static React single-page app.

## Tech stack

- React 19 with React Router 7 (data router, lazy-loaded routes)
- Vite 8
- Tailwind CSS 3.4.19 (pinned) with the Console design system: tokens in `src/styles/`, component classes in `src/index.css`, shared UI in `src/components/ui/`
- Data-driven content: all copy and facts live in `src/data/`; pages are layout over data
- Vitest, Testing Library and jsdom for tests
- Lucide React icons

## Routes

| Page | Route |
|------|-------|
| Home | `/` |
| Work (project index) | `/projects` |
| Project case study | `/projects/:slug` (one per entry in `src/data/projects/index.js`) |
| NCyTE Career Challenge | `/projects/ncyte-career-challenge` |
| Wazuh SIEM/XDR lab | `/projects/wazuh-siem-lab` |
| DFIR triage station | `/projects/dfir-triage-station` |
| Home lab networking | `/projects/home-lab-networking` |
| Pi-hole DNS filtering | `/projects/pi-hole-dns-filtering` |
| Physical server and NVR | `/projects/physical-server-nvr` |
| NPCIR threat intelligence | `/projects/ngo-threat-intel` |
| C.Y.B.E.R. radio | `/projects/cyber-radio` |
| Experience | `/experience` |
| Certifications | `/achievements` |
| About | `/about` |
| Photography | `/photography` |
| Contact | `/contact` |
| Not found (404, `noindex`) | any other path |

## Editing content

| File | Holds |
|------|-------|
| `src/data/site.js` | `SITE_URL`, site name, default meta description |
| `src/data/profile.js` | Name, role, contact details, links (resume, LinkedIn, GitHub), bio, home readings, hero sentence |
| `src/data/nav.js` | Primary nav and footer link columns |
| `src/data/experience.js` | Roles and dates for the experience trail |
| `src/data/projects/index.js` | Project index: slug, title, category, status, summary, tags, cover, `featured` flag |
| `src/data/projects/<slug>.js` | Full case-study content for one project, loaded on demand |

Other pages read their own modules in `src/data/`.

To add a project: add an entry to `projects` in `src/data/projects/index.js`, create `src/data/projects/<slug>.js` with its case-study content, put images under `public/projects/<slug>/`, and add the URL to `public/sitemap.xml`. Set `featured: true` to show it on the home page.

## Scripts

```bash
npm install
npm run dev              # dev server at http://localhost:5173
npm run build            # production build to dist/
npm run preview          # serve the production build
npm run lint             # ESLint
npm test                 # Vitest (single run); npm run test:watch to watch
npm run optimize:images  # regenerate WebP images with sharp (manual; outputs are committed)
```

Node 18 or newer. No environment variables are needed; there is no backend (the contact form opens a `mailto:` draft).

## Deployment

Deployed on Vercel. `vercel.json` adds an SPA rewrite so deep links such as `/projects/wazuh-siem-lab` load `index.html` (static files in `public/` are served first, so PDFs and images still resolve), long-cache headers for hashed `/assets/*`, and security headers including a Content-Security-Policy. If you add a third-party script, font or image host, update the CSP there.

Production origin: `SITE_URL` in `src/data/site.js` (`https://joel-leiva-portfolio.vercel.app`) is repeated in `index.html`, `public/robots.txt` and `public/sitemap.xml`; change all four together.

## Credits

Designed and built by Joel Leiva. Research poster and project documentation by Joel Leiva and team contributors. Hosted through the [Kean University Center for Cybersecurity](https://www.kean.edu/academics/college-business-and-public-management/center-cybersecurity).
