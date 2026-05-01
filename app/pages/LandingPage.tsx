import LeadForm from '../components/LeadForm';
import './LandingPage.css';

const STATS = [
  { value: '20+', label: 'Years Roasting' },
  { value: '140+', label: 'B2B Clients' },
  { value: '48hr', label: 'Sample Turnaround' },
  { value: '99%', label: 'On-Time Delivery' },
];

// const SERVICES = [
//   {
//     icon: '🔥',
//     title: 'Batch Roasting',
//     desc: 'Custom roast profiles dialed in for your volume — from intimate B&Bs to large hotel chains.',
//   },
//   {
//     icon: '📦',
//     title: 'Private Label',
//     desc: 'Your brand, our craft. We package under your label with full food-safety compliance.',
//   },
//   {
//     icon: '🌍',
//     title: 'Ethical Sourcing',
//     desc: 'Direct-trade relationships with farmers across Ethiopia, Colombia, and Guatemala.',
//   },
//   {
//     icon: '🚚',
//     title: 'Reliable Delivery',
//     desc: 'Scheduled deliveries with guaranteed freshness windows — never run out mid-service.',
//   },
//   {
//     icon: '🎓',
//     title: 'Barista Training',
//     desc: 'On-site training for your staff to get the most from every roast we supply.',
//   },
//   {
//     icon: '📊',
//     title: 'Account Dashboard',
//     desc: 'Track your orders, invoices, and roast schedules from one simple portal.',
//   },
// ];

const TESTIMONIALS = [
  {
    quote: "Since switching to Joe's Coffee, our morning service ratings jumped two points. The consistency across every batch is remarkable.",
    author: 'Maria Chen',
    role: 'F&B Director, The Portland Grand Hotel',
    avatar: 'testimonial-maria.jpg',
  },
  {
    quote: "As a small B&B, I was worried about minimum orders. Joe's team worked with us to find a volume that made sense — and the coffee is extraordinary.",
    author: 'Tom & Rachel Walsh',
    role: 'Owners, Willow Creek Bed & Breakfast',
    avatar: 'testimonial-tom.jpg',
  },
  {
    quote: "Our restaurant group sources from 3 locations. Joe's handles all three with one account contact. Simplified our entire supply chain.",
    author: 'David Park',
    role: 'Operations Manager, Ember Restaurant Group',
    avatar: 'testimonial-david.jpg',
  },
];

export default function LandingPage() {
  return (
    <main className="landing">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="/images/hero-roastery.jpg"
            alt="Joe's Coffee roastery interior with large drum roasters"
            className="hero__bg-img"
          />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content container">
          <div className="hero__left fade-up">
            <p className="hero__eyebrow">Commercial Coffee Roasting</p>
            <h1 className="hero__title">
              Exceptional Coffee,<br />
              <em>Built for Business.</em>
            </h1>
            <p className="hero__desc">
              Joe's Coffee supplies restaurants, hotels, cafés, and bed & breakfasts with
              freshly roasted, ethically sourced coffee — delivered on schedule, every time.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="hero__btn hero__btn--primary">Get a Free Quote</a>
              <a href="/about" className="hero__btn hero__btn--ghost">Our Story →</a>
            </div>
          </div>

          <div className="hero__form-wrap fade-up" style={{ animationDelay: '0.2s' }}>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      {/* <section className="services section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What We Offer</p>
            <h2 className="section-title">Everything a Commercial Buyer Needs</h2>
            <p className="section-sub">
              From single-origin samples to palletized monthly orders — we scale with you.
            </p>
          </div>

          <div className="services__grid">
            {SERVICES.map(s => (
              <div className="service-card" key={s.title}>
                <span className="service-card__icon">{s.icon}</span>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── FEATURE SPLIT ── */}
      <section className="feature-split section">
        <div className="container feature-split__inner">
          <div className="feature-split__img-wrap">
            <img
              src="/images/roasting-process.jpg"
              alt="Close-up of coffee beans during the roasting process"
              className="feature-split__img"
            />
            <div className="feature-split__img-badge">
              <span>Direct Trade</span>
              <em>Certified</em>
            </div>
          </div>

          <div className="feature-split__text">
            <p className="section-eyebrow">Why Joe's Coffee</p>
            <h2 className="section-title">Roasted Fresh.<br/>Delivered on Time.<br/>Every Single Order.</h2>
            <p>
              We know that a late coffee delivery can derail an entire morning service. That's why
              every Joe's Coffee client gets a dedicated account manager, a guaranteed roast schedule,
              and a direct line — not a ticket queue.
            </p>
            <ul className="feature-split__list">
              <li>✔ Custom roast profiles for your menu and equipment</li>
              <li>✔ Flexible minimum orders starting at 25 lbs/month</li>
              <li>✔ Free sample kit before you commit</li>
              <li>✔ Net-30 billing for established accounts</li>
            </ul>
            <a href="#contact" className="feature-split__cta">Request Your Sample Kit →</a>
          </div>
        </div>
        <div className="hero__stats container">
          {STATS.map(s => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="trust-bar">
        <div className="container">
          <p className="trust-bar__text">Trusted by hospitality businesses across South Africa</p>
          <div className="trust-bar__logos">
            <span>The Hilta Grand</span>
            <span className="trust-bar__dot" />
            <span>Diamond Restaurant Group</span>
            <span className="trust-bar__dot" />
            <span>Willow Creek B&B</span>
            <span className="trust-bar__dot" />
            <span>Morning Dew Café</span>
            <span className="trust-bar__dot" />
            <span>Cascade Hotels & Resorts</span>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Client Stories</p>
            <h2 className="section-title">Businesses That Chose Joe's</h2>
          </div>

          <div className="testimonials__grid">
            {TESTIMONIALS.map(t => (
              <blockquote className="testimonial-card" key={t.author}>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <footer className="testimonial-card__footer">
                  <img
                    src={`/images/${t.avatar}`}
                    alt={t.author}
                    className="testimonial-card__avatar"
                  />
                  <div>
                    <p className="testimonial-card__author">{t.author}</p>
                    <p className="testimonial-card__role">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bottom-cta section">
        <div className="container bottom-cta__inner">
          <div className="bottom-cta__text">
            <h2>Ready to Upgrade Your Coffee Program?</h2>
            <p>Fill out the form and we'll be in touch within 4 business hours.</p>
          </div>
          <a href="#contact" className="hero__btn hero__btn--primary">Get My Free Quote</a>
        </div>
      </section>

    </main>
  );
}
