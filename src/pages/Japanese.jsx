import { Link } from "react-router-dom";

import jpCertificate from "../assets/certificates/jp.jpg";
import jppCertificate from "../assets/certificates/jpp.jpeg";

function Japanese() {
  return (
    <div className="journey-detail-page">
      <div className="detail-container">

        {/* Back to Journey */}
        <Link to="/#journey" className="back-link">
          ← Back to Journey
        </Link>

        {/* Page Label */}
        <div className="detail-label">
          <span>04</span>
          JAPANESE LANGUAGE
        </div>

        {/* Header */}
        <div className="detail-header">
          <p className="detail-category">
            JAPANESE · JLPT · LANGUAGE LEARNING
          </p>

          <h1>
            Japanese
            <br />
            <em>Language</em>
          </h1>

          <p className="detail-intro">
            My Japanese language learning journey, beginning with JLPT N5
            and continuing toward higher levels through grammar, vocabulary,
            kanji and reading practice.
          </p>
        </div>

        {/* JLPT Journey */}
        <div className="detail-section">
          <h2>My JLPT Journey</h2>

          <div className="detail-grid">

            <div className="detail-card">
              <h3>JLPT N5</h3>

              <p>
                Successfully passed the Japanese Language Proficiency Test
                N5 level and built a foundation in basic Japanese grammar,
                vocabulary, kanji and reading.
              </p>

              <span className="detail-tag">
                PASSED
              </span>
            </div>

            <div className="detail-card">
              <h3>JLPT N3</h3>

              <p>
                Continuing my Japanese learning journey with a focus on
                stronger kanji knowledge, grammar, reading comprehension
                and practical vocabulary.
              </p>

              <span className="detail-tag">
                CURRENT GOAL
              </span>
            </div>

          </div>
        </div>

        {/* What I Learn */}
        <div className="detail-section">
          <h2>What I Learn</h2>

          <div className="detail-grid">

            <div className="detail-card">
              <h3>Kanji</h3>

              <p>
                Learning kanji meanings, readings and vocabulary through
                regular reading and practice.
              </p>
            </div>

            <div className="detail-card">
              <h3>Grammar</h3>

              <p>
                Practicing Japanese grammar patterns and understanding
                how they are used naturally in sentences.
              </p>
            </div>

            <div className="detail-card">
              <h3>Vocabulary</h3>

              <p>
                Building vocabulary through everyday expressions,
                JLPT-focused words and reading practice.
              </p>
            </div>

            <div className="detail-card">
              <h3>Reading</h3>

              <p>
                Improving reading comprehension using Japanese passages
                and progressively more challenging texts.
              </p>
            </div>

          </div>
        </div>

        {/* Learning Approach */}
        <div className="detail-section">
          <h2>My Learning Approach</h2>

          <div className="detail-card">
            <ul className="achievement-list">

              <li>
                Regular kanji reading and vocabulary practice
              </li>

              <li>
                Learning grammar through example sentences
              </li>

              <li>
                Practicing Japanese reading passages
              </li>

              <li>
                Reviewing previously learned grammar and vocabulary
              </li>

              <li>
                Gradually working toward JLPT N3-level Japanese
              </li>

            </ul>
          </div>
        </div>

        {/* Certificates */}
        <div className="detail-section">
          <h2>Japanese Certificates</h2>

          <div className="certificate-gallery">

            {/* Certificate 1 */}
            <div className="certificate-card">

              <img
                src={jpCertificate}
                alt="Japanese Language Certificate"
              />

              <div className="certificate-info">

                <h3>
                  Japanese Language Certificate
                </h3>

                <p>
                  Certificate from my Japanese language learning journey.
                </p>

              </div>

            </div>

            {/* Certificate 2 */}
            <div className="certificate-card">

              <img
                src={jppCertificate}
                alt="Japanese Language Certificate"
              />

              <div className="certificate-info">

                <h3>
                  Japanese Language Achievement
                </h3>

                <p>
                  Additional certificate from my Japanese language
                  learning journey.
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

export default Japanese;