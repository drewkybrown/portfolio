import React from "react";
import "../styles/components.css";

function EmailSidebar() {
  return (
    // Use Bootstrap classes along with other custom class
    <div className="email-sidebar position-fixed top-0 end-0 bg-light border-start">
      <div className="email-container d-flex flex-column align-items-center justify-content-center h-100">
        <a
          href="mailto:andrew.brown.devs@gmail.com"
          className="p-3 text-decoration-none text-dark"
        >
          andrew.brown.devs@gmail.com
        </a>
      </div>
    </div>
  );
}

export default EmailSidebar;
