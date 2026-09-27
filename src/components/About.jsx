// src/components/About.jsx

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-label">
        <span>01</span>
        ABOUT ME
      </div>

      <div className="about-grid">
        <div className="about-heading">
          <p>Curious mind.</p>
          <p className="accent-text">Creative builder.</p>
        </div>

        <div className="about-content">
          <p className="about-large">
            I’m Banu, a final-year Information Technology student who enjoys
            turning ideas into useful and meaningful digital experiences.
          </p>

          <p>
            My main focus is Java full-stack development, while I also explore
            artificial intelligence, interactive web experiences, and creative
            technologies.
          </p>

          <p>
            I enjoy learning by building — from full-stack applications and AI
            projects to experimental interfaces that combine technology with
            creativity.
          </p>

          <div className="about-stats">
            <div>
              <strong>01</strong>
              <span>Developer</span>
            </div>

            <div>
              <strong>02</strong>
              <span>AI Explorer</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Creative Thinker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;