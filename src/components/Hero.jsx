// src/components/Hero.jsx

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-bg">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="glow glow-three"></div>

        <div className="floating-shape shape-one"></div>
        <div className="floating-shape shape-two"></div>
        <div className="floating-shape shape-three"></div>
      </div>


      {/* Main Content */}
      <div className="hero-content">

        <p className="hero-tag">
          <span></span>
          JAVA FULL-STACK DEVELOPER
        </p>

        <h1>
          I build ideas
          <br />
          <em>into digital</em>
          <br />
          experiences.
        </h1>

        <p className="hero-description">
          I'm Banu, a final-year Information Technology student passionate
          about building full-stack applications, AI-powered solutions,
          and creative digital experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work
            <span>↗</span>
          </a>

          <a href="#about" className="secondary-button">
            Explore Me
          </a>
        </div>

        <div className="hero-meta">

          <div>
            <strong>01</strong>
            <span>Full-Stack</span>
          </div>

          <div>
            <strong>02</strong>
            <span>AI Applications</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Creative Tech</span>
          </div>

        </div>

      </div>


      {/* PROFILE PHOTO */}
      <div className="hero-photo-container">

        <div className="photo-glow"></div>

        <div className="photo-ring ring-one"></div>
        <div className="photo-ring ring-two"></div>

        <div className="hero-photo">
          <img
            src="\anime.png"
            alt="Banu"
          />
        </div>

        {/* Floating decoration */}
        <div className="photo-orbit orbit-one"></div>
        <div className="photo-orbit orbit-two"></div>

        <div className="photo-dot dot-one"></div>
        <div className="photo-dot dot-two"></div>
        <div className="photo-dot dot-three"></div>

      </div>


      {/* B MARK */}
      <div className="hero-mark">
        <span>B</span>
      </div>


      {/* Scroll */}
      <div className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div></div>
      </div>

    </section>
  );
}

export default Hero;