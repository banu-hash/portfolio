import { Link } from "react-router-dom";

import oracleCertificate from "../assets/certificates/oracle.png";
import hackCertificate from "../assets/certificates/hack.jpg";

function Education() {
  return (
    <div className="journey-detail-page">
      <div className="detail-container">

        {/* Back to Journey */}
        <Link to="/#journey" className="back-link">
          ← Back to Journey
        </Link>

        {/* Page Label */}
        <div className="detail-label">
          <span>01</span>
          EDUCATION
        </div>

        {/* Header */}
        <div className="detail-header">
          <p className="detail-category">
            NOW · B.TECH INFORMATION TECHNOLOGY
          </p>

          <h1>
            B.Tech
            <br />
            <em>Information Technology</em>
          </h1>

          <p className="detail-intro">
            My academic journey in Information Technology, where I built my
            foundation in programming, software development, databases and
            modern technologies.
          </p>
        </div>

        {/* Education */}
        <div className="detail-section">
          <h2>Education</h2>

          <div className="detail-card">
            <h3>EGS Pillay Engineering College</h3>

            <p>
              Nagapattinam, Tamil Nadu
            </p>

            <p>
              Bachelor of Technology in Information Technology
            </p>

            <span className="detail-tag">
              FINAL YEAR
            </span>
          </div>
        </div>

        {/* What I Learned */}
        <div className="detail-section">
          <h2>What I Learned</h2>

          <div className="detail-grid">

            <div className="detail-card">
              <h3>Programming</h3>

              <p>
                Java, C and JavaScript with a focus on programming logic,
                object-oriented programming and problem solving.
              </p>
            </div>

            <div className="detail-card">
              <h3>Web Development</h3>

              <p>
                Frontend and backend development using technologies such as
                React, Node.js and Spring Boot.
              </p>
            </div>

            <div className="detail-card">
              <h3>Databases</h3>

              <p>
                Working with relational and application databases including
                SQLite and MongoDB.
              </p>
            </div>

            <div className="detail-card">
              <h3>Artificial Intelligence</h3>

              <p>
                Exploring artificial intelligence, computer vision and
                AI-powered applications through academic and personal
                projects.
              </p>
            </div>

          </div>
        </div>

        {/* Achievements */}
        <div className="detail-section">
          <h2>Achievements</h2>

          <div className="detail-card">
            <ul className="achievement-list">

              <li>
                Departmental Topper Award – 3rd Semester
              </li>

              <li>
                Best Performer in Japanese Language – 5th Semester
              </li>

              <li>
                Participated in technical workshops and competitions
              </li>

              <li>
                Participated in ISRO successful launch volunteer activity
              </li>

            </ul>
          </div>
        </div>

        {/* Certificates */}
        <div className="detail-section">
          <h2>Certificates & Documents</h2>

          <div className="certificate-gallery">

            {/* Oracle Certificate */}
            <div className="certificate-card">

              <img
                src={oracleCertificate}
                alt="Oracle Java Programming Certificate"
              />

              <div className="certificate-info">

                <h3>
                  Oracle Java Programming
                </h3>

                <p>
                  Certificate demonstrating knowledge of Java programming
                  fundamentals and core programming concepts.
                </p>

              </div>
            </div>

            {/* Hackathon Certificate */}
            <div className="certificate-card">

              <img
                src={hackCertificate}
                alt="Hackathon Certificate"
              />

              <div className="certificate-info">

                <h3>
                  Technical / Hackathon Certificate
                </h3>

                <p>
                  Certificate from a technical event showcasing participation
                  and practical technology experience.
                </p>

              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="detail-footer">
          <Link to="/#journey" className="back-button">
            ← Back to Journey
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Education;