import React from "react";
import { Link } from "react-router-dom";
import "../styles/components.css"; // Ensure the path is correct

function Header() {
  return (
    <header className="header-container">
      <nav className="nav-box">
        <div className="nav-items-container">
          <div className="nav-item">
            <Link to="/about" className="nav-link">
              01. About
            </Link>
          </div>
          <div className="nav-item">
            <Link to="/projects" className="nav-link">
              02. Projects
            </Link>
          </div>
          {/* Add more nav-items here as needed */}
        </div>
        {/* Additional items can be added here */}
      </nav>
    </header>
  );
}

export default Header;
