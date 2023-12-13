// src/pages/About.jsx
import "../styles/pages.css";
import { useState, useEffect } from "react";

function About() {
  // state for storing about data
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  // function to fetch about data
  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
    setLoading(false); // Set loading to false after data is fetched
  };

  // fetch about data on initial render
  useEffect(() => {
    // Simulate a brief delay before fetching data
    const delay = setTimeout(() => {
      getAboutData();
    }, 1000); // Adjust the delay time as needed (in milliseconds)

    // Clean up the setTimeout when the component unmounts
    return () => clearTimeout(delay);
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

  return loading ? (
    <h1 className="loading-text text-center mt-5">Loading...</h1>
  ) : (
    loaded()
  ); // conditional rendering of loading or loaded()
}

export default About;
