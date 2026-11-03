import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '../App';

function renderAt(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  return render(<RouterProvider router={router} />);
}

describe('every route through the router', () => {
  it.each([
    ['/contact', 'Get in touch'],
    ['/photography', 'Photography'],
    ['/projects', null],
    ['/experience', 'Experience'],
    ['/achievements', 'Certifications'],
  ])('%s renders a single h1', async (path, name) => {
    renderAt(path);
    const h1 = await screen.findByRole('heading', { level: 1 }, { timeout: 4000 });
    if (name) expect(h1).toHaveTextContent(name);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });

  it('an unknown project slug renders NotFound with noindex', async () => {
    renderAt('/projects/not-a-project');
    expect(await screen.findByText('This page does not exist.', {}, { timeout: 4000 })).toBeInTheDocument();
    await waitFor(() => expect(document.head.querySelector('meta[name="robots"][content="noindex"]')).not.toBeNull());
  });
});
