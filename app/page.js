import './globals.css'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Ben Siran</h1>
            <p className="hero-subtitle">English Teacher • Artist • Singer</p>
            <p className="hero-description">
              Empowering students and audiences through language, art, and music
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">Get in Touch</a>
              <a href="#about" className="btn btn-secondary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="icon">📚</div>
              <h3>English Teaching Excellence</h3>
              <p>
                With over 13 years of professional teaching experience, I've helped countless students
                master the English language through innovative and engaging methodologies.
              </p>
            </div>
            <div className="about-card">
              <div className="icon">🎨</div>
              <h3>Master of All Art Fields</h3>
              <p>
                From visual arts to creative expression, I bring a comprehensive understanding
                and mastery across all artistic disciplines, creating inspiring works and experiences.
              </p>
            </div>
            <div className="about-card">
              <div className="icon">🎤</div>
              <h3>Accomplished Singer</h3>
              <p>
                My passion for music and vocal performance adds a unique dimension to my creative
                repertoire, connecting with audiences through the power of song.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <div className="container">
          <h2 className="section-title">Experience & Expertise</h2>
          <div className="experience-content">
            <div className="stat-box">
              <div className="stat-number">13+</div>
              <div className="stat-label">Years Teaching</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">∞</div>
              <div className="stat-label">Creative Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">What I Offer</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>English Language Instruction</h3>
              <ul>
                <li>Private tutoring for all levels</li>
                <li>Business English coaching</li>
                <li>Exam preparation (TOEFL, IELTS, etc.)</li>
                <li>Conversation practice</li>
                <li>Academic writing support</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Artistic Services</h3>
              <ul>
                <li>Art workshops and classes</li>
                <li>Creative consultation</li>
                <li>Custom artwork commissions</li>
                <li>Art therapy sessions</li>
                <li>Portfolio development guidance</li>
              </ul>
            </div>
            <div className="service-item">
              <h3>Musical Performances</h3>
              <ul>
                <li>Live performances for events</li>
                <li>Vocal coaching</li>
                <li>Recording sessions</li>
                <li>Music workshops</li>
                <li>Collaborative projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Ben's teaching method transformed my English skills. His patience and creativity
                made learning enjoyable and effective."
              </p>
              <p className="testimonial-author">- Former Student</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "As an artist, Ben brings a unique perspective that's both technically skilled
                and deeply inspiring. A true master of his craft."
              </p>
              <p className="testimonial-author">- Art Colleague</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Ben's vocal performance at our event was breathtaking. His talent and
                professionalism exceeded all expectations."
              </p>
              <p className="testimonial-author">- Event Organizer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            Whether you're looking for English lessons, artistic collaboration, or a memorable
            musical performance, I'd love to hear from you.
          </p>
          <div className="contact-info">
            <a href="mailto:contact@bensiran.com" className="contact-link">
              📧 contact@bensiran.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Ben Siran. All rights reserved.</p>
          <p className="footer-tagline">Teaching • Creating • Performing</p>
        </div>
      </footer>
    </main>
  )
}
