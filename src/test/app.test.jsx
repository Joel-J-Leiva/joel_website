import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '../App';
import { primaryNav } from '../data/nav';
import { projects } from '../data/projects/index.js';
import useCountUp from '../hooks/useCountUp';
import sitemap from '../../public/sitemap.xml?raw';

const LOAD = { timeout: 5000 };

function renderAt(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  return render(<RouterProvider router={router} />);
}

describe('routes', () => {
  it('renders the home hero and resume link', async () => {
    renderAt('/');
    expect(
      await screen.findByRole('heading', { level: 1, name: 'Joel Leiva, security operations analyst.' }, LOAD),
    ).toBeInTheDocument();
    const resumeLinks = screen.getAllByRole('link', { name: /resume/i });
    expect(resumeLinks.some((a) => a.getAttribute('href') === '/documents/joel-leiva-resume.pdf')).toBe(true);
  });

  it('renders the 404 page with a noindex robots meta', async () => {
    renderAt('/does-not-exist');
    expect(await screen.findByRole('heading', { level: 1, name: 'This page does not exist.' }, LOAD)).toBeInTheDocument();
    await waitFor(() => {
      expect(document.head.querySelector('meta[name="robots"][content="noindex"]')).not.toBeNull();
    });
  });

  it('links every primary nav entry', async () => {
    renderAt('/');
    const nav = await screen.findByRole('navigation', { name: 'Primary' }, LOAD);
    for (const item of primaryNav) {
      expect(within(nav).getByRole('link', { name: item.label })).toHaveAttribute('href', item.to);
    }
  });
});

describe('useCountUp', () => {
  const originalMatchMedia = window.matchMedia;
  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  function Counter() {
    return <span data-testid="count">{useCountUp(395, { start: true })}</span>;
  }

  it('returns the final value immediately under reduced motion', () => {
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    render(<Counter />);
    expect(screen.getByTestId('count')).toHaveTextContent('395');
  });
});

describe('sitemap.xml', () => {
  it('lists every project slug', () => {
    for (const { slug } of projects) {
      expect(sitemap).toContain(`/projects/${slug}</loc>`);
    }
  });
});
