import { Link } from "react-router-dom";
import "../styles/components.css"; // Import the CSS file

function Header() {
  return (
    <header className="header-container mb-4">
      {" "}
      {/* Bootstrap margin bottom class */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {" "}
        {/* Bootstrap navbar classes */}
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <div>D</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <div>01. About</div>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  <div>02. Projects</div>
                </Link>
              </li>
            </ul>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary" // Bootstrap button class
            >
              <div>Resume</div>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
