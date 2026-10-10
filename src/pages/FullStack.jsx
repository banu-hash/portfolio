import { Link } from "react-router-dom";

import rrCertificate from "../assets/certificates/rr.png";
import rr2Certificate from "../assets/certificates/rr2.png";
import rr3Certificate from "../assets/certificates/rr3.png";
import rr4Certificate from "../assets/certificates/rr4.png";
import rr5Certificate from "../assets/certificates/rr5.png";

function FullStack() {
  return (
    <div className="journey-detail-page">
      <div className="detail-container">

        {/* Back to Journey */}
        <Link to="/#journey" className="back-link">
          ← Back to Journey
        </Link>

        {/* Page Label */}
        <div className="detail-label">
          <span>02</span>
          FULL-STACK DEVELOPMENT
        </div>

        {/* Header */}
        <div className="detail-header">
          <p className="detail-category">
            TECH · WEB DEVELOPMENT · APPLICATION DEVELOPMENT
          </p>

          <h1>
            Full-Stack
            <br />
            <em>Development</em>
          </h1>

          <p className="detail-intro">
            My journey in full-stack development, working across frontend,
            backend, databases and application development to build complete
            software solutions.
          </p>
        </div>

        {/* Technologies */}
        <div className="detail-section">
          <h2>Technologies</h2>

          <div className="detail-grid">

            <div className="detail-card">
              <h3>Java</h3>
              <p>
                Building a strong foundation in Java, object-oriented
                programming, collections, exception handling and problem
                solving.
              </p>
            </div>

            <div className="detail-card">
              <h3>Spring Boot</h3>
              <p>
                Learning backend application development and REST API
                development using Spring Boot.
              </p>
            </div>

            <div className="detail-card">
              <h3>React.js</h3>
              <p>
                Creating interactive user interfaces using components,
                props, state and modern React development practices.
              </p>
            </div>

            <div className="detail-card">
              <h3>Node.js</h3>
              <p>
                Exploring server-side JavaScript and backend application
                development using Node.js.
              </p>
            </div>

            <div className="detail-card">
              <h3>MongoDB</h3>
              <p>
                Working with document-based data and understanding database
                operations for web applications.
              </p>
            </div>

            <div className="detail-card">
              <h3>SQLite</h3>
              <p>
                Using SQLite for lightweight application data storage,
                especially in application-based projects.
              </p>
            </div>

          </div>
        </div>

        {/* What I Build */}
        <div className="detail-section">
          <h2>What I Build</h2>

          <div className="detail-card">
            <ul className="achievement-list">
              <li>Responsive web applications</li>
              <li>Frontend interfaces using React</li>
              <li>Backend APIs and application logic</li>
              <li>Database-driven applications</li>
              <li>Full-stack academic and personal projects</li>
              <li>Deployment and real-world web applications</li>
            </ul>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="detail-section">
          <h2>Currently Learning</h2>

          <div className="detail-grid">

            <div className="detail-card">
              <h3>Advanced Java</h3>
              <p>
                Improving Java programming, data structures, collections and
                interview-oriented problem solving.
              </p>
            </div>

            <div className="detail-card">
              <h3>Spring Boot</h3>
              <p>
                Developing a deeper understanding of REST APIs, dependency
                injection and backend architecture.
              </p>
            </div>

          </div>
        </div>

        {/* Certifications */}
        <div className="detail-section">
          <h2>Certifications</h2>

          <div className="certificate-gallery">

            {/* Certificate 1 */}
            <div className="certificate-card">
              <img
                src={rrCertificate}
                alt="Full-Stack Development Certificate 1"
              />

              <div className="certificate-info">
                <h3>Full-Stack Development Certificate</h3>

                <p>
                  Certificate related to my learning and development in
                  software and web technologies.
                </p>
              </div>
            </div>

            {/* Certificate 2 */}
            <div className="certificate-card">
              <img
                src={rr2Certificate}
                alt="Full-Stack Development Certificate 2"
              />

              <div className="certificate-info">
                <h3>Web Development Certificate</h3>

                <p>
                  Certificate demonstrating additional technical learning
                  and development experience.
                </p>
              </div>
            </div>

            {/* Certificate 3 */}
            <div className="certificate-card">
              <img
                src={rr3Certificate}
                alt="Full-Stack Development Certificate 3"
              />

              <div className="certificate-info">
                <h3>Programming Certificate</h3>

                <p>
                  Certificate representing additional programming and
                  technical learning.
                </p>
              </div>
            </div>

            {/* Certificate 4 */}
            <div className="certificate-card">
              <img
                src={rr4Certificate}
                alt="Full-Stack Development Certificate 4"
              />

              <div className="certificate-info">
                <h3>Technical Certificate</h3>

                <p>
                  Additional certification from my technical learning
                  journey.
                </p>
              </div>
            </div>

            {/* Certificate 5 */}
            <div className="certificate-card">
              <img
                src={rr5Certificate}
                alt="Full-Stack Development Certificate 5"
              />

              <div className="certificate-info">
                <h3>Technical Learning Certificate</h3>

                <p>
                  Another certificate from my software development and
                  technical learning journey.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Back */}
        <div className="detail-footer">
          <Link to="/#journey" className="back-button">
            ← Back to Journey
          </Link>
        </div>

      </div>
    </div>
  );
}

export default FullStack;