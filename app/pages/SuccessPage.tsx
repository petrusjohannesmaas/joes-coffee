import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import './SuccessPage.css';

type Lead = {
  businessName: string;
  contactName: string;
  email: string;
  businessType: string;
  volume: string;
};

const NEXT_STEPS = [
  {
    step: '01',
    title: 'Quote Review',
    desc: 'Our team reviews your enquiry and prepares a custom pricing package.',
    time: 'Within 4 business hours',
  },
  {
    step: '02',
    title: 'Sample Kit',
    desc: 'We ship a complimentary sample kit matched to your volume and roast preferences.',
    time: 'Within 2–3 business days',
  },
  {
    step: '03',
    title: 'Discovery Call',
    desc: 'A 20-minute call with your account manager to finalise details.',
    time: 'At your convenience',
  },
  {
    step: '04',
    title: 'First Delivery',
    desc: 'Your first batch ships fresh — roasted to profile, packed, and on time.',
    time: 'Within your first week',
  },
];

export default function SuccessPage() {
  const [lead, setLead] = useState<Lead | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('jc_lead');
      if (raw) {
        setLead(JSON.parse(raw));
        // Clean up after reading
        localStorage.removeItem('jc_lead');
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <main className="success">
      <div className="success__hero">
        <div className="success__hero-bg" />
        <div className="container success__hero-content fade-up">
          <div className="success__icon">✓</div>
          <p className="success__eyebrow">You're in the queue</p>
          <h1 className="success__title">
            {lead?.contactName
              ? `Thanks, ${lead.contactName.split(' ')[0]}.`
              : 'Enquiry Received.'}
          </h1>
          <p className="success__sub">
            {lead?.email
              ? <>A confirmation has been sent to <strong>{lead.email}</strong>. Our team will be in touch within 4 business hours.</>
              : 'Our team will be in touch within 4 business hours.'}
          </p>

          {lead && (
            <div className="success__summary">
              <p className="success__summary-label">Your Enquiry Summary</p>
              <dl className="success__summary-dl">
                <div>
                  <dt>Business</dt>
                  <dd>{lead.businessName}</dd>
                </div>
                <div>
                  <dt>Type</dt>
                  <dd style={{ textTransform: 'capitalize' }}>{lead.businessType}</dd>
                </div>
                <div>
                  <dt>Est. Volume</dt>
                  <dd>{lead.volume} lbs/mo</dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </div>

      {/* ── NEXT STEPS ── */}
      <section className="next-steps section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What Happens Now</p>
            <h2 className="section-title">Your Path to Better Coffee</h2>
          </div>

          <div className="next-steps__grid">
            {NEXT_STEPS.map(s => (
              <div className="step-card" key={s.step}>
                <span className="step-card__number">{s.step}</span>
                <h3 className="step-card__title">{s.title}</h3>
                <p className="step-card__desc">{s.desc}</p>
                <p className="step-card__time">{s.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHILE YOU WAIT ── */}
      <section className="while-wait section">
        <div className="container while-wait__inner">
          <div className="while-wait__text">
            <p className="section-eyebrow">While You Wait</p>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Get to Know Us</h2>
            <p>
              Explore our sourcing story, meet the team, and learn what makes Joe's Coffee
              the preferred roaster for serious hospitality businesses across the Pacific Northwest.
            </p>
            <div className="while-wait__actions">
              <Link to="/about" className="while-wait__link">Read Our Story →</Link>
              <a href="/#contact" className="while-wait__link">Submit Another Enquiry →</a>
            </div>
          </div>

          <div className="while-wait__img-wrap">
            <img
              src="/images/success-roastery.jpg"
              alt="Freshly roasted coffee beans cooling on a tray"
              className="while-wait__img"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
