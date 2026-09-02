import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <a href="#home" className="footer-logo">
            <span>&lt;H/&gt;</span>
            CodeWithHari
          </a>

          <p>
            Frontend Developer building responsive and user-friendly web
            applications.
          </p>
        </div>

        <div className="footer-social">
          <a
            href="https://githb.com/hari-0208"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill"></i>
          </a>

          <a
            href="https://www.linkedin.com/thehariharan02"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-fill"></i>
          </a>

          <a href="mailto:hariharans6008@gmail.com">
            <i className="ri-mail-fill"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Hariharan S. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
