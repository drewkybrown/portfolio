import React from "react";
import "../styles/components.css"; // Import the CSS file

function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="custom-resume-button btn-outline-primary" // Add 'custom-resume-button'
    >
      <div>Resume</div>
    </a>
  );
}

export default ResumeButton;
