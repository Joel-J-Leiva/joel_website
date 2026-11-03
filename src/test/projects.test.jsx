import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '../App';
import { projects } from '../data/projects';

const contentModules = import.meta.glob(['../data/projects/*.js', '!../data/projects/index.js'], { eager: true });
const contentFor = (slug) => contentModules[`../data/projects/${slug}.js`]?.default;
const publicDir = path.resolve(process.cwd(), 'public');

/** Every string under `src`/`href` keys that points at a site-root file. */
function localAssets(value, found = []) {
  if (Array.isArray(value)) value.forEach((v) => localAssets(v, found));
  else if (value && typeof value === 'object') {
    for (const [key, v] of Object.entries(value)) {
      if ((key === 'src' || key === 'href') && typeof v === 'string' && v.startsWith('/')) found.push(v);
      else localAssets(v, found);
    }
  }
  return found;
}

function renderAt(url) {
  const router = createMemoryRouter(routes, { initialEntries: [url] });
  return render(<RouterProvider router={router} />);
}

describe('project data', () => {
  it('has unique slugs', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('has a content module for every index slug', () => {
    for (const p of projects) {
      const content = contentFor(p.slug);
      expect(content, p.slug).toBeTruthy();
      expect(content.slug).toBe(p.slug);
      expect(Array.isArray(content.sections)).toBe(true);
    }
  });

  it('points every local image and PDF at a file in public/', () => {
    const assets = localAssets([projects, ...projects.map((p) => contentFor(p.slug))]);
    expect(assets.length).toBeGreaterThan(0);
    for (const a of assets) {
      const file = path.join(publicDir, decodeURIComponent(a));
      expect(fs.existsSync(file), a).toBe(true);
    }
  });
});

describe('case study pages', () => {
  it.each(projects.map((p) => [p.slug, p.title]))('renders %s', async (slug, title) => {
    renderAt(`/projects/${slug}`);
    expect(await screen.findByRole('heading', { level: 1, name: title })).toBeInTheDocument();
  });

  it('renders the not-found page for an unknown slug', async () => {
    renderAt('/projects/not-a-project');
    expect(await screen.findByRole('heading', { level: 1, name: 'This page does not exist.' })).toBeInTheDocument();
  });

  it('renders case content once the module loads', async () => {
    renderAt('/projects/wazuh-siem-lab');
    expect(await screen.findByRole('heading', { level: 2, name: 'The CIS benchmark baseline' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /258 failing on first scan/ })).toBeInTheDocument();
  });
});

describe('projects index', () => {
  const rowCount = async () => {
    await screen.findByRole('heading', { level: 1, name: 'Projects' });
    return screen.getAllByRole('link').filter((a) => /^\/projects\/[^/]+$/.test(a.getAttribute('href'))).length;
  };

  it('falls back to all projects for an unknown filter', async () => {
    renderAt('/projects?filter=bogus');
    expect(await rowCount()).toBe(8);
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('filters to threat intel', async () => {
    renderAt('/projects?filter=intel');
    expect(await rowCount()).toBe(2);
  });
});
