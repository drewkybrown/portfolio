// src/pages/About.jsx
import "../styles/pages.css";
import { useState, useEffect } from "react";

function About() {
  // state for storing about data
  const [about, setAbout] = useState(null);

  // function to fetch about data
  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  // fetch about data on initial render
  useEffect(() => {
    getAboutData();
  }, []);

  // Function to render the About page
  const loaded = () => (
    <div className="about-container container mt-5 custom-about-container">
      <div className="row justify-content-center">
        <div className="main-about-container col-lg-8">
          <h2 className="mb-4 custom-heading">{about.name}</h2>
          {about.bio.map((text, index) => {
            if (text.startsWith("-")) {
              // Render technology items in separate boxes
              return (
                <div key={index} className="technology-box">
                  <i className="bi bi-check-circle-fill text-primary me-2 custom-icon"></i>
                  {text.substring(1).trim()}
                </div>
              );
            } else {
              // Render other bio text as paragraphs
              return (
                <p key={index} className="mb-3 custom-paragraph">
                  {text}
                </p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );

  return about ? (
    loaded()
  ) : (
    <h1 className="loading-text text-center mt-5">Loading...</h1>
  ); // conditional rendering of loaded() or loading...
}

export default About;
