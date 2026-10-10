// src/components/Journey.jsx

import { Link } from "react-router-dom";

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

        {/* Education */}
        <Link
          to="/journey/education"
          className="timeline-item timeline-link"
        >
          <span className="timeline-year">NOW</span>

          <div>
            <h3>B.Tech Information Technology</h3>

            <p>
              EGS Pillay Engineering College, Nagapattinam
            </p>

            <span className="timeline-view">
              View details →
            </span>
          </div>
        </Link>

        {/* Full Stack */}
        <Link
          to="/journey/full-stack"
          className="timeline-item timeline-link"
        >
          <span className="timeline-year">TECH</span>

          <div>
            <h3>Full-Stack Development</h3>

            <p>
              Java, Spring Boot, React.js, Node.js, databases and
              application development.
            </p>

            <span className="timeline-view">
              View details →
            </span>
          </div>
        </Link>

        {/* Artificial Intelligence */}
        <Link
          to="/journey/artificial-intelligence"
          className="timeline-item timeline-link"
        >
          <span className="timeline-year">AI</span>

          <div>
            <h3>Artificial Intelligence</h3>

            <p>
              Exploring AI applications, computer vision and intelligent
              software experiences.
            </p>

            <span className="timeline-view">
              View details →
            </span>
          </div>
        </Link>

        {/* Japanese */}
        <Link
          to="/journey/japanese"
          className="timeline-item timeline-link"
        >
          <span className="timeline-year">JP</span>

          <div>
            <h3>Japanese Language</h3>

            <p>
              JLPT N5 passed and continuing the journey toward higher levels.
            </p>

            <span className="timeline-view">
              View details →
            </span>
          </div>
        </Link>

      </div>
    </section>
  );
}

export default Journey;