import { Link } from "react-router-dom";
import "../styles/components.css"; // Import the CSS file

function Header() {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <Link to="/" className="nav-link">
          <div>D</div>
        </Link>
        <Link to="/about" className="nav-link">
          <div>01. About</div>
        </Link>
        <Link to="/projects" className="nav-link">
          <div>02. Projects</div>
        </Link>

        {/* Update the href for Resume to use BrowserRouter */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          <div>Resume</div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
