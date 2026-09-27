// src/components/Journey.jsx

function Journey() {
  return (
    <section className="journey-section" id="journey">
      <div className="section-label">
        <span>04</span>
        MY JOURNEY
      </div>

      <div className="journey-heading">
        <h2>
          Learning.
          <br />
          <em>Growing.</em>
        </h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-year">NOW</span>

          <div>
            <h3>B.Tech Information Technology</h3>
            <p>
              EGS Pillay Engineering College, Nagapattinam
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-year">TECH</span>

          <div>
            <h3>Full-Stack Development</h3>
            <p>
              Java, Spring Boot, React.js, Node.js, databases and
              application development.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-year">AI</span>

          <div>
            <h3>Artificial Intelligence</h3>
            <p>
              Exploring AI applications, computer vision and intelligent
              software experiences.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-year">JP</span>

          <div>
            <h3>Japanese Language</h3>
            <p>
              JLPT N5 passed and continuing the journey toward higher levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;