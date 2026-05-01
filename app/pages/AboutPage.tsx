import './AboutPage.css';

const TIMELINE = [
  {
    year: '1998',
    title: 'The First Roast',
    desc: 'Joe Brennan purchases a 5kg sample roaster and starts experimenting in his garage in Silverton, Pretoria.',
  },
  {
    year: '2003',
    title: 'First Commercial Account',
    desc: 'Morning Dew Café becomes Joe\'s first wholesale client. A handshake deal that still holds today.',
  },
  {
    year: '2010',
    title: 'Direct Trade Begins',
    desc: 'Joe flies to Huila, Colombia to meet the Gomez family farm — beginning a decade of direct-trade sourcing.',
  },
  {
    year: '2016',
    title: 'Commercial Roastery Opens',
    desc: 'A 10,000 sq ft facility with three Loring roasters goes live, enabling batch roasting at true commercial scale.',
  },
  {
    year: '2022',
    title: 'B2B Platform Launches',
    desc: 'Client ordering, roast scheduling, and account management move to a proprietary online dashboard.',
  },
  {
    year: 'Today',
    title: '140+ Active B2B Clients',
    desc: 'Supplying restaurants, hotels, cafés, and B&Bs across Johannesburg, Pretoria, and Cape Town.',
  },
];

const VALUES = [
  {
    icon: '🌱',
    title: 'Sourcing Ethics',
    desc: 'We pay above Fair Trade minimums for every lot. Our farmers are partners, not suppliers.',
  },
  {
    icon: '⚗️',
    title: 'Roast Precision',
    desc: 'Each batch is profiled and logged. Consistency isn\'t luck — it\'s process.',
  },
  {
    icon: '🤝',
    title: 'Commercial Reliability',
    desc: 'Your kitchen can\'t wait. We guarantee on-time delivery or we make it right — immediately.',
  },
  {
    icon: '📖',
    title: 'Radical Transparency',
    desc: 'You\'ll always know where your coffee comes from, how it was roasted, and what you\'re paying for.',
  },
];

export default function AboutPage() {
  return (
    <main className="about">

      {/* ── ABOUT HERO ── */}
      {/* <section className="about-hero">
        <div className="about-hero__bg">
          <img
            src="/images/about-hero-joe.jpg"
            alt="Joe Brennan inspecting green coffee beans at origin"
            className="about-hero__img"
          />
          <div className="about-hero__overlay" />
        </div>
        <div className="container about-hero__content fade-up">
          <p className="about-hero__eyebrow">Our Story</p>
          <h1 className="about-hero__title">
            Roasted with Purpose.<br />
            <em>Delivered with Pride.</em>
          </h1>
          <p className="about-hero__sub">
            Joe's Coffee began with one man, a second-hand roaster, and an obsession with
            getting every cup right. Twenty-six years later, the obsession hasn't changed —
            only the scale.
          </p>
        </div>
      </section> */}

      {/* ── FOUNDER STORY ── */}
      <section className="founder section">
        <div className="container founder__inner">
          <div className="founder__img-wrap">
            <img
              src="/images/founder-joe.jpg"
              alt="Joe Brennan, founder of Joe's Coffee, standing in front of the roastery"
              className="founder__img"
            />
            <div className="founder__caption">
              <p>Joe Brennan</p>
              <em>Founder & Head Roaster</em>
            </div>
          </div>

          <div className="founder__text">
            <p className="section-eyebrow">The Founder</p>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Garage Project to<br />Commercial Institution
            </h2>
            <p>
              Joe Collins didn't set out to build a company. He set out to understand coffee.
              After years working in specialty cafés across South Africa, he became
              convinced that the gap between "good" and "great" coffee came down entirely
              to the roast — and that most commercial buyers were being underserved by
              roasters who prioritized volume over quality.
            </p>
            <p>
              He started small. One roaster. One client. One obsession. The rest followed
              naturally — not because Joe was chasing growth, but because great coffee
              speaks for itself.
            </p>
            <p>
              Today, Joe still oversees every roast profile and personally visits origin
              farms twice a year. The company has grown; his standards haven't.
            </p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="timeline-section section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Our Heritage</p>
            <h2 className="section-title">26 Years in the Making</h2>
          </div>

          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <div className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`} key={item.year}>
                <div className="timeline__connector">
                  <span className="timeline__dot" />
                </div>
                <div className="timeline__card">
                  <p className="timeline__year">{item.year}</p>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__desc">{item.desc}</p>
                </div>
              </div>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      {/* <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">What We Stand For</p>
            <h2 className="section-title">Four Things We'll Never Compromise</h2>
          </div>

          <div className="values-grid">
            {VALUES.map(v => (
              <div className="value-card" key={v.title}>
                <span className="value-card__icon">{v.icon}</span>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── ROASTERY IMAGES ── */}
      <section className="gallery section">
        <div className="container">
          <div className="section-header">
            <p className="section-eyebrow">Gallery</p>
            <h2 className="section-title">Inside The Roastery</h2>
          </div>
          <div className="gallery__grid">
            <img src="/images/gallery-roaster-drums.jpg" alt="Large commercial drum roasters in operation" className="gallery__img gallery__img--tall" />
            <img src="/images/gallery-green-beans.jpg" alt="Green coffee beans being sorted by hand" className="gallery__img" />
            <img src="/images/gallery-cupping.jpg" alt="The Joe's Coffee team at a cupping session" className="gallery__img" />
            <img src="/images/gallery-bags.jpg" alt="Finished coffee bags ready for commercial delivery" className="gallery__img gallery__img--wide" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta section">
        <div className="container about-cta__inner">
          <h2>Let's Work Together</h2>
          <p>Whether you're a single-location café or a multi-property hotel group, we have a program built for you.</p>
          <a href="/#contact" className="hero__btn hero__btn--primary">Request a Quote →</a>
        </div>
      </section>

    </main>
  );
}
