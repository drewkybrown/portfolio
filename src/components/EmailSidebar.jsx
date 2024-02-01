import React from "react";
import "../styles/components.css"; // Ensure this import path is correct

function EmailSidebar() {
  return (
    <div className="email-sidebar">
      {/* Directly place "Resume" button without separate container */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="custom-resume-button"
      >
        Resume
      </a>
      {/* Container for email remains the same */}
      <div className="email-container">
        <a href="mailto:andrew.brown.devs@gmail.com" className="email-text">
          andrew.brown.devs@gmail.com
        </a>
      </div>
    </div>
  );
}

export default EmailSidebar;
