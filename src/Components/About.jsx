import "../Styles/About.css";

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <p>Get To Know Me</p>

        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-img">
          <div className="about-box">
            <i className="ri-code-box-line"></i>
            <h3>Frontend</h3>
            <p>Developer</p>
          </div>
        </div>

        <div className="about-content">
          <h3>Passionate about building mordern web experiences.</h3>

          <p>
            I'm a 2025 batch B.Sc Computer Science student and an aspiring
            Frontend Developer focused on creating clean, responsive and
            user-friendly websites and web applications.
          </p>

          <p>
            I have hands-on experience with HTML, CSS, JavaScript, and React.js.
            I enjoy turning ideas into functional and visually appealing
            interfaces while continously improving my development skills.
          </p>

          <div className="about-info">
            <div>
              <span>Name</span>
              <strong>Hariharan S</strong>
            </div>

            <div>
              <span>Degree</span>
              <strong>B.Sc Computer Science</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Frontend Development</strong>
            </div>

            <div>
              <span>Experience level</span>
              <strong>Entry Level</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
