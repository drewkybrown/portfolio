import React from "react";
import { Link } from "react-router-dom";
import "../styles/components.css";

function EmailSidebar() {
  return (
    <div className="email-sidebar position-fixed top-0 end-0">
      <div className="email-container d-flex flex-column align-items-center justify-content-center h-100">
        <a
          href="mailto:andrew.brown.devs@gmail.com"
          className="email-text p-3 text-decoration-none email-text-custom"
        >
          andrew.brown.devs@gmail.com
        </a>
      </div>
    </div>
  );
}

export default EmailSidebar;
