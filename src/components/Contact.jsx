import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_fimt89f";
const TEMPLATE_ID = "template_x2fg7cl";
const PUBLIC_KEY = "12na4G51wzByexe4z";

function Contact() {
  const formRef = useRef(null);

  const [showForm, setShowForm] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const openForm = () => {
    setShowForm(true);
    setSent(false);
    setError("");
  };

  const closeForm = () => {
    if (isSending) return;

    setShowForm(false);
    setSent(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);
    setError("");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setSent(true);

      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-label">
        <span>05</span>
        GET IN TOUCH
      </div>

      <div className="contact-content">
        <p className="contact-small">HAVE AN IDEA?</p>

        <h2>
          Let’s create
          <br />
          something <em>great.</em>
        </h2>

        <p className="contact-description">
          I’m open to opportunities, collaborations and
          interesting technology projects.
        </p>

        <button
          className="contact-button"
          onClick={openForm}
          type="button"
        >
          Start a conversation
          <span>↗</span>
        </button>
      </div>

      {/* CONTACT MODAL */}
      {showForm && (
        <div
          className="contact-overlay"
          onClick={closeForm}
        >
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              className="close-button"
              onClick={closeForm}
              type="button"
              disabled={isSending}
            >
              ×
            </button>

            {!sent ? (
              <>
                <p className="modal-small">
                  LET'S TALK
                </p>

                <h3>
                  Start a <em>conversation.</em>
                </h3>

                <p className="modal-description">
                  Have a project, opportunity, or idea?
                  Feel free to reach out.
                </p>

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  {/* NAME */}
                  <div className="input-group">
                    <label htmlFor="name">
                      Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      disabled={isSending}
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="input-group">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      disabled={isSending}
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="input-group">
                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell me about your idea..."
                      required
                      disabled={isSending}
                    ></textarea>
                  </div>

                  {/* ERROR */}
                  {error && (
                    <p className="contact-error">
                      {error}
                    </p>
                  )}

                  {/* SEND */}
                  <button
                    type="submit"
                    className="send-button"
                    disabled={isSending}
                  >
                    {isSending
                      ? "Sending..."
                      : "Send Message"}

                    {!isSending && <span>↗</span>}
                  </button>
                </form>
              </>
            ) : (
              /* SUCCESS MESSAGE */
              <div className="contact-success">
                <div className="success-icon">
                  ✓
                </div>

                <p className="modal-small">
                  MESSAGE SENT
                </p>

                <h3>
                  Thanks for <em>reaching out.</em>
                </h3>

                <p className="modal-description">
                  Your message has been sent successfully.
                  I’ll get back to you soon.
                </p>

                <button
                  className="send-button"
                  type="button"
                  onClick={closeForm}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;