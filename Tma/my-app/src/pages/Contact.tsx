import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

const interests = [
  'Becoming a member',
  'Joining a programme',
  'Becoming a mentor',
  'Registering for an event',
  'Partnering with the Academy',
  'Something else',
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [searchParams] = useSearchParams();
  const [interest, setInterest] = useState(interests[0]);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const requestedInterest = searchParams.get('interest');
    if (requestedInterest && interests.includes(requestedInterest)) {
      setInterest(requestedInterest);
    }
  }, [searchParams]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          interest: formData.get('interest'),
          message: formData.get('message'),
          website: formData.get('website'),
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'We could not send your message. Please try again.');
      }

      setStatus('success');
      form.reset();
    } catch (submissionError) {
      setStatus('error');
      setError(submissionError instanceof Error ? submissionError.message : 'We could not send your message. Please try again.');
    }
  }

  return <>
    <section className="page-hero">
      <p className="eyebrow">Let’s connect</p>
      <h1>There is a seat<br /><em>for you here.</em></h1>
      <p>Whether you would like to join a programme, mentor a future leader or explore a partnership, we would love to hear from you.</p>
    </section>
    <section className="contact-layout">
      <div>
        <h2>Start a conversation.</h2>
        <p>Tell us a little about yourself and what brings you to The Mentorship Academy. We will be in touch shortly.</p>
        <p className="contact-note">Prefer email? Write to <a href="mailto:hello@mentorshipacademy.co.za">hello@mentorshipacademy.co.za</a></p>
      </div>
      <form onSubmit={submit} noValidate>
        <label>Name
          <input required name="name" autoComplete="name" placeholder="Your name" />
        </label>
        <label>Email
          <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" />
        </label>
        <label>I’m interested in
          <select name="interest" value={interest} onChange={(event) => setInterest(event.target.value)}>
            {interests.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label>Message
          <textarea required name="message" rows={5} placeholder="How can we help?" />
        </label>
        <label className="form-honeypot" aria-hidden="true">Leave this blank
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        {status === 'error' && <p className="form-error" role="alert">{error}</p>}
        <button className="button" type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send message →'}
        </button>
      </form>
      {status === 'success' && <div className="success-modal" role="presentation"><div className="success-dialog" role="dialog" aria-modal="true" aria-labelledby="success-title"><span aria-hidden="true">✓</span><h2 id="success-title">Message sent</h2><p>Thank you. Your message is on its way and we’ll be in touch soon.</p><button className="button" type="button" onClick={() => setStatus('idle')}>Done</button></div></div>}
    </section>
  </>;
}
