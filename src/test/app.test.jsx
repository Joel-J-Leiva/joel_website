import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '../App';
import { primaryNav } from '../data/nav';
import { projects } from '../data/projects/index.js';
import { profile } from '../data/profile';
import { categoryTone } from '../components/ui/tones';
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
      await screen.findByRole('heading', { level: 1, name: 'Joel Leiva, Security operations analyst, SIEM & threat intel.' }, LOAD),
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

const mockReducedMotion = (matches) =>
  vi.fn().mockImplementation((query) => ({
    matches: matches && query.includes('reduce'),
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

describe('shell: rail and motion pause', () => {
  const originalMatchMedia = window.matchMedia;
  afterEach(() => {
    window.matchMedia = originalMatchMedia;
  });

  const rail = () => screen.findByRole('complementary', { name: 'Status and profiles' }, LOAD);
  const pauseIn = async () => within(await rail()).getByRole('button', { name: 'Pause motion' });

  it('lists LinkedIn, GitHub and Resume in the rail', async () => {
    renderAt('/');
    const r = within(await rail());
    expect(r.getByRole('link', { name: /^LinkedIn/ })).toHaveAttribute('href', profile.links.linkedin);
    expect(r.getByRole('link', { name: /^GitHub/ })).toHaveAttribute('href', profile.links.github);
    expect(r.getByRole('link', { name: /^Resume/ })).toHaveAttribute('href', profile.links.resume);
  });

  it('maps every project category to a tone', () => {
    expect(categoryTone).toEqual({ secops: 'lime', infrastructure: 'sage', homelab: 'dusk', intel: 'stone' });
    for (const category of new Set(projects.map((p) => p.category))) {
      expect(Object.keys(categoryTone)).toContain(category);
    }
  });

  it('pauses and resumes motion, persisting the choice', async () => {
    renderAt('/');
    const button = await pauseIn();
    expect(button).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(document.documentElement.dataset.motion).toBe('paused');
    expect(localStorage.getItem('motion-paused')).toBe('1');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(document.documentElement.dataset.motion).toBeUndefined();
    expect(localStorage.getItem('motion-paused')).toBeNull();
  });

  it('restores a stored pause', async () => {
    localStorage.setItem('motion-paused', '1');
    renderAt('/');
    expect(await pauseIn()).toHaveAttribute('aria-pressed', 'true');
  });

  it('still toggles when storage throws', async () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('blocked');
    });
    renderAt('/');
    const button = await pauseIn();
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });

  it('hides the pause control under reduced motion', async () => {
    window.matchMedia = mockReducedMotion(true);
    renderAt('/');
    await rail();
    expect(screen.queryByRole('button', { name: 'Pause motion' })).toBeNull();
  });
});

describe('route change', () => {
  it('moves focus to main and announces the new page heading', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router} />);
    await screen.findByRole('heading', { level: 1, name: /Security operations/ }, LOAD);
    router.navigate('/contact');
    await waitFor(() => expect(document.activeElement).toHaveAttribute('id', 'main'), LOAD);
    const live = document.querySelector('[aria-live="polite"]');
    await waitFor(() => expect(live).toHaveTextContent('Get in touch'), LOAD);
  });
});
