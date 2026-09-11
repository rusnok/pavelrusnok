import { useState } from 'react'
import './App.css'

function IconUsers() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function IconCompass() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function IconCpu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </svg>
  )
}

function IconSpark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function IconBook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function IconFlask() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6M10 3v7.4L4.8 19a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 10.4V3" />
      <path d="M8.5 14h7" />
    </svg>
  )
}

function NetworkDecor() {
  return (
    <svg className="network-decor" viewBox="0 0 400 320" fill="none" aria-hidden="true">
      <circle cx="60" cy="80" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="140" cy="40" r="3" fill="currentColor" opacity="0.35" />
      <circle cx="220" cy="100" r="5" fill="currentColor" opacity="0.45" />
      <circle cx="300" cy="50" r="3.5" fill="currentColor" opacity="0.4" />
      <circle cx="340" cy="140" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="180" cy="180" r="3" fill="currentColor" opacity="0.3" />
      <circle cx="100" cy="200" r="4.5" fill="currentColor" opacity="0.4" />
      <circle cx="280" cy="220" r="3" fill="currentColor" opacity="0.35" />
      <circle cx="360" cy="260" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="40" cy="260" r="3" fill="currentColor" opacity="0.25" />
      <path d="M60 80 L140 40 L220 100 L300 50 L340 140" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <path d="M220 100 L180 180 L100 200 L40 260" stroke="currentColor" strokeWidth="1" opacity="0.18" />
      <path d="M180 180 L280 220 L360 260" stroke="currentColor" strokeWidth="1" opacity="0.18" />
      <path d="M100 200 L280 220" stroke="currentColor" strokeWidth="1" opacity="0.12" />
      <path d="M140 40 L100 200" stroke="currentColor" strokeWidth="1" opacity="0.12" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="logo">
            Pavel<span>Rusnok</span>
          </a>

          <nav className={menuOpen ? 'nav open' : 'nav'}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
              Let us talk
            </a>
          </nav>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <NetworkDecor />
          <div className="container hero-grid">
            <div>
              <div className="hero-badge">AI / ML · Coaching · Consulting</div>
              <h1>
                Turning data and AI into <em>measurable results</em>
              </h1>
              <p className="hero-lead">
                I help companies and ambitious professionals design, build and
                adopt practical AI/ML solutions — and develop the people who
                will run them.
              </p>
              <div className="hero-actions">
                <a href="#services" className="btn btn-primary">
                  Explore services
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Book a conversation
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <strong>15+</strong>
                  <span>years in data and AI</span>
                </div>
                <div className="stat">
                  <strong>PhD</strong>
                  <span>Applied Mathematics</span>
                </div>
                <div className="stat">
                  <strong>Marketing Research · Banking · Industry</strong>
                  <span>Production AI systems</span>
                </div>
              </div>
            </div>

            <div className="hero-side">
              <div className="hero-portrait-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}portrait.jpg`}
                  alt="Pavel Rusnok"
                  className="hero-portrait"
                  width={200}
                  height={200}
                />
              </div>
              <div className="process-diagram" aria-hidden="true">
                <div className="process-step">
                  <span className="process-num">1</span>
                  <span>Discover</span>
                </div>
                <div className="process-arrow">→</div>
                <div className="process-step">
                  <span className="process-num">2</span>
                  <span>Design</span>
                </div>
                <div className="process-arrow">→</div>
                <div className="process-step">
                  <span className="process-num">3</span>
                  <span>Deliver</span>
                </div>
              </div>
              <div className="hero-card">
                <h3>What clients typically engage me for</h3>
                <ul>
                  <li>Designing and delivering production AI/ML systems</li>
                  <li>Coaching data/AI teams and individual practitioners</li>
                  <li>Strategic consulting on AI adoption and roadmap</li>
                  <li>Hands-on implementation with Python, cloud and modern tooling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">About</span>
              <h2>Practical expertise, not slides</h2>
              <p>
                I combine deep technical background with real-world delivery
                experience in banking and industrial environments.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-text">
                <p>
                  I am <strong>Pavel Rusnok</strong> — senior AI/ML engineer,
                  data scientist and educator based in the Czech Republic.
                </p>
                <p>
                  I design and deliver production AI/ML systems — from multi-agent
                  GenAI solutions and rule engines to computer vision, signal
                  processing and operational analytics. My work focuses on systems
                  that replace manual effort and create measurable business value.
                </p>
                <p>
                  I hold a PhD in Applied Mathematics and Fuzzy Modeling and
                  regularly teach data science and machine learning courses. My
                  focus is always the same: solutions that actually ship and
                  create value.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight">
                  <div className="highlight-icon"><IconSpark /></div>
                  <div>
                    <h4>Production AI systems</h4>
                    <p>GenAI agents, rule engines, CV, forecasting — from prototype to Databricks / cloud deployment.</p>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon"><IconBook /></div>
                  <div>
                    <h4>Data science tutoring</h4>
                    <p>Years of teaching Python, ML, TensorFlow and statistics to working professionals.</p>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon"><IconFlask /></div>
                  <div>
                    <h4>Research foundation</h4>
                    <p>PhD thesis on fuzzy associational analysis in data mining. Strong mathematical grounding.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section" style={{ background: 'var(--bg-elevated)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-label">Services</span>
              <h2>How I can help you</h2>
              <p>
                Three focused offerings designed for companies and individuals
                who want real outcomes, not buzzwords.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <div className="service-icon"><IconUsers /></div>
                <h3>Coaching</h3>
                <p>
                  1:1 or small-group coaching for data scientists, ML engineers
                  and technical leads who want to level up faster.
                </p>
                <ul className="service-list">
                  <li>Career and skill roadmap design</li>
                  <li>Code and system design reviews</li>
                  <li>Interview and leadership preparation</li>
                  <li>Building production-ready habits</li>
                </ul>
                <a href="#contact" className="service-cta">
                  Discuss coaching
                </a>
              </article>

              <article className="service-card">
                <div className="service-icon"><IconCompass /></div>
                <h3>Consulting</h3>
                <p>
                  Strategic and technical guidance for organisations starting or
                  scaling their AI / data initiatives.
                </p>
                <ul className="service-list">
                  <li>AI readiness and opportunity assessment</li>
                  <li>Architecture and tooling recommendations</li>
                  <li>Team structure and hiring advice</li>
                  <li>Roadmap and prioritisation workshops</li>
                </ul>
                <a href="#contact" className="service-cta">
                  Discuss consulting
                </a>
              </article>

              <article className="service-card">
                <div className="service-icon"><IconCpu /></div>
                <h3>AI / ML Solutions</h3>
                <p>
                  Hands-on delivery of end-to-end AI and machine learning
                  systems that solve concrete business problems.
                </p>
                <ul className="service-list">
                  <li>Custom ML models and GenAI agents</li>
                  <li>Data pipelines and MLOps foundations</li>
                  <li>Computer vision and signal processing</li>
                  <li>Integration with existing systems</li>
                </ul>
                <a href="#contact" className="service-cta">
                  Discuss a project
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-band" id="contact">
          <div className="container">
            <div className="cta-graphic" aria-hidden="true">
              <span className="cta-dot" />
              <span className="cta-line" />
              <span className="cta-dot" />
              <span className="cta-line" />
              <span className="cta-dot cta-dot-accent" />
            </div>
            <h2>Ready to explore a collaboration?</h2>
            <p>
              Tell me about your challenge or goal. I will reply within two
              working days with honest feedback and next steps.
            </p>
            <a
              href="mailto:pavel.rusnok@gmail.com?subject=Inquiry%20from%20website"
              className="btn btn-primary"
            >
              Email me — pavel.rusnok@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#top" className="logo">
                Pavel<span>Rusnok</span>
              </a>
              <p>
                AI/ML engineer, coach and consultant helping organisations and
                professionals turn data into results.
              </p>
            </div>

            <div>
              <h4>Navigate</h4>
              <div className="footer-links">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            <div>
              <h4>Connect</h4>
              <div className="footer-links">
                <a href="https://www.linkedin.com/in/pavel-rusnok-1521211b" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://www.researchgate.net/profile/Pavel_Rusnok" target="_blank" rel="noopener noreferrer">
                  ResearchGate
                </a>
                <a href="mailto:pavel.rusnok@gmail.com">Email</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Pavel Rusnok. All rights reserved.</span>
            <span>Built with React · Hosted on GitHub Pages</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
