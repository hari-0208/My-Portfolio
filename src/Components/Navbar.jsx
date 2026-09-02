import { useState } from "react";
import "../Styles/Navbar.css";

import Resume from "/Resume/HARIHARAN_S_RESUME.pdf";
const Navbar = ({ darkMode, setDarkMode }) => {
  // MENU

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* LOGO */}

      <div className="nav-container">
        <a href="#home" className="logo">
          <span className="logo-icon">&lt;H/&gt;</span>
          <span>CodeWithHari</span>
        </a>

        {/* NAV LINKS */}

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* NAV ACTIONS */}

        <div className="nav-actions">
          {/* DARK / LIGHT */}

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            <i className={darkMode ? "ri-sun-line" : "ri-moon-line"}></i>
          </button>

          {/* RESUME */}

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            Resume
          </a>

          {/* MOBILE TOGGLE */}

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
