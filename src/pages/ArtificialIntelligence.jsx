import { Link } from "react-router-dom";

import aiCertificate from "../assets/certificates/arti.jpg";

function ArtificialIntelligence() {
  return (
    <div className="journey-detail-page">
      <div className="detail-container">

        {/* Back to Journey */}
        <Link to="/#journey" className="back-link">
          ← Back to Journey
        </Link>

        {/* Page Label */}
        <div className="detail-label">
          <span>03</span>
          ARTIFICIAL INTELLIGENCE
        </div>

        {/* Header */}
        <div className="detail-header">
          <p className="detail-category">
            AI · COMPUTER VISION · INTELLIGENT APPLICATIONS
          </p>

          <h1>
            Artificial
            <br />
            <em>Intelligence</em>
          </h1>

          <p className="detail-intro">
            My journey into artificial intelligence, exploring computer
            vision, machine learning concepts and AI-powered applications
            that solve practical problems.
          </p>
        </div>

        {/* Areas I Explore */}
        <div className="detail-section">
          <h2>Areas I Explore</h2>

          <div className="detail-grid">

            <div className="detail-card">
              <h3>Computer Vision</h3>

              <p>
                Exploring image processing, facial expression analysis and
                computer vision applications.
              </p>
            </div>

            <div className="detail-card">
              <h3>Machine Learning</h3>

              <p>
                Learning how machine learning models can identify patterns
                and make useful predictions from data.
              </p>
            </div>

            <div className="detail-card">
              <h3>AI Applications</h3>

              <p>
                Building practical applications where artificial intelligence
                can improve user experiences and automate tasks.
              </p>
            </div>

            <div className="detail-card">
              <h3>AI Assistants</h3>

              <p>
                Exploring AI-powered assistants and integrating intelligent
                features into software applications.
              </p>
            </div>

          </div>
        </div>

        {/* Featured AI Project */}
        <div className="detail-section">
          <h2>Featured AI Project</h2>

          <div className="detail-card">

            <h3>
              Emotion Recognition Through Facial Expression Analysis
            </h3>

            <p>
              A webcam-based AI system designed to recognize facial
              expressions and provide an interactive experience for online
              learning environments.
            </p>

            <p>
              The system works with facial-expression categories such as
              happy, sad, fear, disgust, angry, surprise and neutral.
            </p>

            <span className="detail-tag">
              FINAL YEAR PROJECT
            </span>

          </div>
        </div>

        {/* Technologies */}
        <div className="detail-section">
          <h2>Technologies</h2>

          <div className="detail-grid">

            <div className="detail-card">
              <h3>Python</h3>

              <p>
                Used for AI development, model processing and application
                logic.
              </p>
            </div>

            <div className="detail-card">
              <h3>CNN</h3>

              <p>
                Exploring convolutional neural networks for image-based
                classification.
              </p>
            </div>

            <div className="detail-card">
              <h3>Flask</h3>

              <p>
                Used as the backend framework for connecting the AI system
                with the web application.
              </p>
            </div>

            <div className="detail-card">
              <h3>SQLite</h3>

              <p>
                Used for storing application and student-related data.
              </p>
            </div>

          </div>
        </div>

        {/* AI Certification */}
        <div className="detail-section">
          <h2>AI Certifications</h2>

          <div className="certificate-gallery">

            <div className="certificate-card">

              <img
                src={aiCertificate}
                alt="Artificial Intelligence Certificate"
              />

              <div className="certificate-info">

                <h3>
                  Artificial Intelligence Certificate
                </h3>

                <p>
                  Certificate related to artificial intelligence and
                  technology learning.
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

export default ArtificialIntelligence;