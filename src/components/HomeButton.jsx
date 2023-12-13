import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../styles/components.css"; // Import the CSS file for additional styling

function HomeButton() {
  return (
    <Link to="/" className="home-button btn-outline-primary home-button">
      D
    </Link>
  );
}

export default HomeButton;
