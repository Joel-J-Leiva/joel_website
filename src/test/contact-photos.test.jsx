import { existsSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../pages/Contact';
import Photography from '../pages/Photography';
import CopyEmail from '../components/CopyEmail';
import { photos } from '../data/photos';

const renderAt = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Contact', () => {
  it('has the four named fields', () => {
    const { container } = renderAt(<Contact />);
    for (const name of ['name', 'email', 'subject', 'message']) {
      expect(container.querySelector(`[name="${name}"]`)).toBeInTheDocument();
    }
    expect(screen.getByLabelText('Your name')).toHaveAttribute('name', 'name');
  });

  it('shows an alert and marks empty required fields invalid', () => {
    renderAt(<Contact />);
    fireEvent.click(screen.getByRole('button', { name: /open in email app/i }));
    expect(screen.getByRole('alert')).toHaveTextContent('Please fill in all required fields (Name, Email, Message).');
    expect(screen.getByLabelText('Your name')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Your email')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Message')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText(/subject/i)).not.toHaveAttribute('aria-invalid');
  });

  it('composes the same mailto link on a valid submit', () => {
    const original = window.location;
    const fakeLocation = { href: '' };
    Object.defineProperty(window, 'location', { configurable: true, value: fakeLocation });
    try {
      renderAt(<Contact />);
      fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Jane Doe' } });
      fireEvent.change(screen.getByLabelText('Your email'), { target: { value: 'jane@example.com' } });
      fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello' } });
      fireEvent.click(screen.getByRole('button', { name: /open in email app/i }));

      const subject = encodeURIComponent('[Portfolio Contact] General Inquiry - from Jane Doe');
      const body = encodeURIComponent('Sender Name: Jane Doe\nSender Email: jane@example.com\n\nMessage:\nHello');
      expect(fakeLocation.href).toBe(`mailto:leivajo@kean.edu?subject=${subject}&body=${body}`);
      expect(screen.getByText(/Your email app was opened/)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Write another' })).toBeInTheDocument();
    } finally {
      Object.defineProperty(window, 'location', { configurable: true, value: original });
    }
  });
});

describe('CopyEmail', () => {
  const stubClipboard = (writeText) => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });

  it('copies the address and says so', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    stubClipboard(writeText);
    render(<CopyEmail />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /copy email address/i }));
    });
    expect(writeText).toHaveBeenCalledWith('leivajo@kean.edu');
    expect(screen.getByText('Copied')).toBeInTheDocument();
  });

  it('reports a failed copy', async () => {
    stubClipboard(vi.fn().mockRejectedValue(new Error('denied')));
    render(<CopyEmail />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /copy email address/i }));
    });
    expect(screen.getByText('Copy failed')).toBeInTheDocument();
  });
});

describe('Photography', () => {
  beforeAll(() => {
    // jsdom has no modal dialog support.
    HTMLDialogElement.prototype.showModal ??= function showModal() {
      this.setAttribute('open', '');
    };
    HTMLDialogElement.prototype.close ??= function close() {
      this.removeAttribute('open');
      this.dispatchEvent(new Event('close'));
    };
  });

  it('renders one thumbnail button per photo', () => {
    renderAt(<Photography />);
    const list = screen.getByRole('list');
    expect(within(list).getAllByRole('button', { name: /open photograph/i })).toHaveLength(41);
    expect(photos).toHaveLength(41);
  });

  it('opens the lightbox, moves with arrow keys and returns focus on close', () => {
    renderAt(<Photography />);
    const thumbs = screen.getAllByRole('button', { name: /open photograph/i });
    fireEvent.click(thumbs[2]);
    const dialog = screen.getByRole('dialog', { hidden: true });
    expect(within(dialog).getByText('Photograph 3 of 41')).toBeInTheDocument();
    fireEvent.keyDown(dialog, { key: 'ArrowRight' });
    expect(within(dialog).getByText('Photograph 4 of 41')).toBeInTheDocument();
    fireEvent.click(within(dialog).getByRole('button', { name: 'Close', hidden: true }));
    expect(screen.queryByRole('dialog', { hidden: true })).not.toBeInTheDocument();
    expect(thumbs[2]).toHaveFocus();
  });

  it('points every thumb and large path at a file on disk', () => {
    const pub = path.resolve(process.cwd(), 'public');
    for (const p of photos) {
      expect(existsSync(path.join(pub, p.thumb))).toBe(true);
      expect(existsSync(path.join(pub, p.large))).toBe(true);
      expect(existsSync(path.join(pub, p.original))).toBe(true);
    }
  });
});
