import { useState } from 'react'
import './App.css'

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
                  src="https://avatars.githubusercontent.com/u/8817877?v=4"
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
                  <div className="highlight-icon">AI</div>
                  <div>
                    <h4>Production AI systems</h4>
                    <p>GenAI agents, rule engines, CV, forecasting — from prototype to Databricks / cloud deployment.</p>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">DS</div>
                  <div>
                    <h4>Data science tutoring</h4>
                    <p>Years of teaching Python, ML, TensorFlow and statistics to working professionals.</p>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">PhD</div>
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
                <div className="service-icon">1</div>
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
                <div className="service-icon">2</div>
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
                <div className="service-icon">3</div>
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
