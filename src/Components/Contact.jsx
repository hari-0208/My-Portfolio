import "../Styles/Contact.css";

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section-heading">
        <p>Let's Connect</p>
        <h2>
          Contact <span>Me</span>
        </h2>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <h3>Let's build something together.</h3>

          <p>
            I'm currently looking for entry-level Frontend Developer
            Opportunities where I can learn, contribute and grow.
          </p>

          <div className="contact-details">
            <a href="mailto:hariharans6008@gmail.com">
              <i className="ri-mail-line"></i>
              <div>
                <span>Email</span>
                <strong>hariharans6008@gmail.com</strong>
              </div>
            </a>

            <a
              href="https://github.com/hari-0208"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-github-line"></i>

              <div>
                <span>GitHub</span>
                <strong>github.com/hari-0208</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/thehariharan02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-linkedin-line"></i>
              <div>
                <span>Linkedin</span>
                <strong>linkedin.com/in/thehariharan02</strong>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e)=> e.preventDefault()}>
          <div className="input-row">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" />
            </div>
          </div>

          <div className="input-group">
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea rows="6" placeholder="Your Message" />
          </div>

          <button type="submit" className="primary-btn">
            Send Message
            <i className="ri-send-plane-fill"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
