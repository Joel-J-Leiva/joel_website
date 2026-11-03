import { useState } from 'react';
import { AlertCircle, Check, MapPin, Send } from 'lucide-react';
import Seo from '../components/Seo';
import SignalBar from '../components/ui/SignalBar';
import Button from '../components/ui/Button';
import CopyEmail from '../components/CopyEmail';
import { LinkedinIcon, GithubIcon } from '../components/icons';
import { profile } from '../data/profile';

const empty = { name: '', email: '', subject: '', message: '' };
const REQUIRED = ['name', 'email', 'message'];
const ERROR_ID = 'contact-error';

/** Same composition as the original form: the message opens in the visitor's email app. */
function buildMailto({ name, email, subject, message }) {
  const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${subject || 'General Inquiry'} - from ${name}`);
  const mailtoBody = encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`);
  return `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
}

function Channels() {
  return (
    <ul className="panels" role="list">
      <li className="p-6">
        <p className="text-sm text-muted">Email</p>
        <CopyEmail className="mt-2" />
        <p className="mt-3 text-sm text-muted">Primary professional and academic address. Monitored daily.</p>
      </li>
      <li className="p-6">
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-3">
          <LinkedinIcon /> LinkedIn<span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        <p className="mt-2 text-sm text-muted">Employment history and recommendations.</p>
      </li>
      <li className="p-6">
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-3">
          <GithubIcon /> GitHub<span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        <p className="mt-2 text-sm text-muted">Public repositories, lab scripts and web projects.</p>
      </li>
      <li className="flex items-center gap-3 p-6 text-ink-2">
        <MapPin size={18} aria-hidden="true" className="shrink-0 text-muted" />
        {profile.school}, {profile.location}
      </li>
    </ul>
  );
}

function Field({ id, label, optional = false, invalid, children }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block text-sm text-ink-2">
        {label}
        {optional && <span className="text-muted"> (optional)</span>}
      </label>
      <div className="mt-2">{children({ id, 'aria-invalid': invalid || undefined, 'aria-describedby': invalid ? ERROR_ID : undefined })}</div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState(empty);
  const [attempted, setAttempted] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isMissing = (name) => attempted && !formData[name].trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);
    if (REQUIRED.some((name) => !formData[name].trim())) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setError(null);
    setSubmitted(true);
    window.location.href = buildMailto(formData);
  };

  const reset = () => {
    setFormData(empty);
    setAttempted(false);
    setError(null);
    setSubmitted(false);
  };

  return (
    <>
      <Seo title="Contact" description="Contact Joel Leiva about security operations roles, incident response, threat research or technical collaboration." />
      <section className="container pt-16 pb-[var(--section-gap-s)] sm:pt-24 lg:pt-[var(--section-gap-s)]">
        <SignalBar className="mb-8" />
        <h1>Get in touch</h1>
        <p className="lead mt-6 max-w-[56ch] text-ink-2">
          Open to security operations roles, incident response, threat research and technical collaboration.
        </p>
      </section>

      <section aria-labelledby="form-title" className="container grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="min-w-0">
          <Channels />
        </div>

        <div className="panel min-w-0 p-6 sm:p-8">
          <h2 id="form-title" className="text-title">Write a message</h2>

          {submitted ? (
            <div role="status" className="mt-6">
              <p className="flex items-center gap-2 text-ok">
                <Check size={18} aria-hidden="true" />
                Your email app was opened with the message filled in.
              </p>
              <p className="mt-3 max-w-[52ch] text-muted">
                Send it from there. If nothing opened, write to <a href={`mailto:${profile.email}`} className="link measured">{profile.email}</a> directly.
              </p>
              <Button className="mt-6" onClick={reset}>Write another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              {error && (
                <p id={ERROR_ID} role="alert" className="flex items-start gap-2 rounded-pill border border-bad bg-bad-soft px-4 py-3 text-sm text-ink">
                  <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-bad" />
                  {error}
                </p>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="contact-name" label="Your name" invalid={isMissing('name')}>
                  {(a11y) => <input {...a11y} type="text" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} placeholder="e.g. Jane Doe" className="field" />}
                </Field>
                <Field id="contact-email" label="Your email" invalid={isMissing('email')}>
                  {(a11y) => <input {...a11y} type="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} placeholder="jane@organization.com" className="field" />}
                </Field>
              </div>

              <Field id="contact-subject" label="Subject" optional>
                {(a11y) => <input {...a11y} type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g. Security operations role" className="field" />}
              </Field>

              <Field id="contact-message" label="Message" invalid={isMissing('message')}>
                {(a11y) => <textarea {...a11y} name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="The role, question or project you have in mind." className="field resize-y" />}
              </Field>

              <div>
                <Button type="submit" variant="primary">
                  <Send size={16} aria-hidden="true" />
                  Open in email app
                </Button>
                <p className="mt-3 text-sm text-muted">This opens your email app with the message filled in.</p>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
