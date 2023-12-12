import React from "react";
import { Link } from "react-router-dom";
import "../styles/components.css"; // Import  CSS file for styling

function HomeButton() {
  return (
    <Link to="/" className="home-button">
      Home
    </Link>
  );
}

export default HomeButton;
