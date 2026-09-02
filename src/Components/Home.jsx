import "../Styles/Home.css";
const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container">
        {/* PROFILE IMG */}

        <div className="profile-picture">
          <span className="html-symbol">&lt;/&gt;</span>

          <span className="css-symbol">{`{}`}</span>

          <span className="js-symbol">JS</span>

          <img src="/Images/HARI.jpeg" alt="Hariharan S - Frontend Developer" />
        </div>

        {/* PROFILE TEXT */}

        <div className="section-text">
          <p className="introduction">Hello, I'm</p>

          <h1 className="name">Hariharan S</h1>

          <p className="role">Frontend Developer</p>

          <p className="home-description">
            I build clean, responsive and user-friendly web applications using
            HTML, CSS, JavaScript and React.js.
          </p>

          {/* CONTACT BTN */}

          <div className="btn-container">
            <a href="#projects" className="button btn-color-2">
              View Projects
            </a>

            <a href="#contact" className="button btn-color-1">
              Contact Me
            </a>
          </div>

          {/* SOCIAL LINKS */}

          <div className="social-container">
            <a
              href="https://www.linkedin.com/in/thehariharan02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <img src="/Images/linkedin.png" alt="LinkedIn" className="icon" />
            </a>

            <a
              href="https://github.com/hari-0208"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <img src="/Images/github.png" alt="GitHub" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
