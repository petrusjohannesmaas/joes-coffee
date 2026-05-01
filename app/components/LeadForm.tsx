import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import './LeadForm.css';

type FormData = {
  businessName: string;
  businessType: string;
  contactName: string;
  email: string;
  phone: string;
  volume: string;
  message: string;
};

const INITIAL: FormData = {
  businessName: '',
  businessType: '',
  contactName: '',
  email: '',
  phone: '',
  volume: '',
  message: '',
};

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      // ── Replace this block with your actual API/email integration ──
      // Example: POST to a webhook, Formspree, or your own backend.
      // const res = await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error('Submission failed');

      // Simulate async submission for now
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Store lead in localStorage so Success page can read it
      localStorage.setItem('jc_lead', JSON.stringify({ ...form, submittedAt: new Date().toISOString() }));

      navigate('/success');
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate id="contact">
      <p className="lead-form__eyebrow">Start the Conversation</p>
      <h2 className="lead-form__title">Request a Commercial Roasting Quote</h2>
      <p className="lead-form__sub">
        We respond to all qualified leads within 4 business hours.
      </p>

      <div className="lead-form__grid">
        <div className="lead-form__field">
          <label htmlFor="businessName">Business Name *</label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            placeholder="The Grand Hotel"
            value={form.businessName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="lead-form__field">
          <label htmlFor="businessType">Business Type *</label>
          <select
            id="businessType"
            name="businessType"
            value={form.businessType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select type…</option>
            <option value="restaurant">Restaurant</option>
            <option value="cafe">Café / Coffee Shop</option>
            <option value="hotel">Hotel</option>
            <option value="bnb">Bed & Breakfast</option>
            <option value="catering">Catering Company</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="lead-form__field">
          <label htmlFor="contactName">Contact Name *</label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            placeholder="Jane Smith"
            value={form.contactName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="lead-form__field">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jane@grandhotel.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="lead-form__field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (503) 555-0100"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="lead-form__field">
          <label htmlFor="volume">Estimated Monthly Volume *</label>
          <select
            id="volume"
            name="volume"
            value={form.volume}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select volume…</option>
            <option value="under25">Under 25 lbs</option>
            <option value="25-100">25 – 100 lbs</option>
            <option value="100-500">100 – 500 lbs</option>
            <option value="500+">500+ lbs</option>
          </select>
        </div>

        <div className="lead-form__field lead-form__field--full">
          <label htmlFor="message">Additional Notes</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your roast preferences, current supplier, or any specific requirements…"
            value={form.message}
            onChange={handleChange}
          />
        </div>
      </div>

      {error && <p className="lead-form__error">{error}</p>}

      <button
        type="submit"
        className="lead-form__submit"
        disabled={submitting}
      >
        {submitting ? 'Sending…' : 'Send My Quote Request →'}
      </button>

      <p className="lead-form__disclaimer">
        No spam. No sales pressure. Just great coffee, reliably delivered.
      </p>
    </form>
  );
}
