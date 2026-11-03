import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '../App';
import { experience } from '../data/experience';
import { profile } from '../data/profile';

function renderAt(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  return render(<RouterProvider router={router} />);
}

describe('content pages', () => {
  it('renders /experience with all three roles', async () => {
    renderAt('/experience');
    expect(await screen.findByRole('heading', { level: 1, name: 'Experience' })).toBeInTheDocument();
    for (const job of experience) {
      expect(screen.getByRole('heading', { level: 3, name: job.role })).toBeInTheDocument();
    }
  });

  it('renders /achievements with earned and in-progress certifications', async () => {
    renderAt('/achievements');
    expect(await screen.findByRole('heading', { level: 1, name: 'Certifications' })).toBeInTheDocument();
    expect(screen.getByText('CompTIA Security+ (SY0-701)')).toBeInTheDocument();
    expect(screen.getByText('Cisco Certified Network Associate (CCNA 200-301)')).toBeInTheDocument();
  });

  it('renders /about with resume and cover letter links', async () => {
    renderAt('/about');
    expect(await screen.findByRole('heading', { level: 1, name: 'About Joel Leiva' })).toBeInTheDocument();
    const docs = within(screen.getByRole('region', { name: 'Documents' }));
    expect(docs.getByRole('link', { name: /^Resume/ })).toHaveAttribute('href', profile.links.resume);
    expect(docs.getByRole('link', { name: /^Cover letter/ })).toHaveAttribute('href', profile.links.coverLetter);
  });
});
