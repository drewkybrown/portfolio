// src/pages/Home.jsx
import React from "react";
import "../styles/pages.css"; // Import your external CSS file
import { useState, useEffect } from "react";

function Home(props) {
  return (
    <div className="home-container">
      <div className="custom-container">
        <div className="container-fluid py-5">
          <h3 className="custom-heading-1">Hi, my name is</h3>
          <h1 className="custom-heading-2">Drew Brown</h1>
          <h1 className="custom-heading-3">I build things for the web.</h1>
          <p className="custom-paragraph col-md-8">
            I’m a software developer with a knack for backend technologies and a
            comprehensive understanding of full-stack development. My coding
            journey, ignited at General Assembly's bootcamp and enriched with my
            past experience as a DJ, allows me to blend technical prowess with
            creative thinking. Currently, I’m dedicated to developing
            accessible, user-centric software solutions. Welcome to my world of
            innovative coding!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
