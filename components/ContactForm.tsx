'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Lang, t } from '@/lib/i18n';

export default function ContactForm({ lang }: { lang: Lang }) {
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    city: '',
    email: '',
    subject: '',
    comments: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const subj = searchParams.get('subject');
    if (subj) setForm((f) => ({ ...f, subject: subj }));
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="notice" style={{ marginTop: 16 }}>
        {t(lang, 'contact.success')}
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} style={{ marginTop: 16 }}>
      <div className="row2">
        <div>
          <label>{t(lang, 'contact.first')}</label>
          <input name="first_name" value={form.first_name} onChange={handleChange} required />
        </div>
        <div>
          <label>{t(lang, 'contact.last')}</label>
          <input name="last_name" value={form.last_name} onChange={handleChange} required />
        </div>
      </div>
      <div className="row2">
        <div>
          <label>{t(lang, 'contact.city')}</label>
          <input name="city" value={form.city} onChange={handleChange} required />
        </div>
        <div>
          <label>{t(lang, 'contact.email')}</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
      </div>
      <div>
        <label>{t(lang, 'contact.subject')}</label>
        <input name="subject" value={form.subject} onChange={handleChange} required />
      </div>
      <div>
        <label>{t(lang, 'contact.comments')}</label>
        <textarea name="comments" value={form.comments} onChange={handleChange} required />
      </div>
      {status === 'error' && (
        <div className="notice">{t(lang, 'contact.error')}</div>
      )}
      <button className="btn primary" type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? '...' : t(lang, 'contact.submit')}
      </button>
    </form>
  );
}
