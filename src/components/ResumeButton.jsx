import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "../styles/components.css"; // Import the CSS file

function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-outline-primary resume-button" // Bootstrap button class
    >
      <div>Resume</div>
    </a>
  );
}

export default ResumeButton;
