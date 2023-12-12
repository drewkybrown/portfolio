// src/pages/About.jsx
import "../styles/pages.css";
import { useState, useEffect } from "react";

function About() {
  // State to hold the about data
  const [about, setAbout] = useState(null);

  // Function to fetch about data from JSON file
  const getAboutData = async () => {
    // Fetch data from the about.json file
    const response = await fetch("./about.json");
    // Convert response to JSON
    const data = await response.json();
    // Update state with fetched data
    setAbout(data);
  };

  // useEffect to call getAboutData on component mount
  useEffect(() => {
    getAboutData();
  }, []);

  // Function to render the content once data is loaded
  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      {/* Loop through the bio array and render each item */}
      {about.bio.map((text, index) => {
        // Check if the text is a list item (starts with '-')
        if (text.startsWith("-")) {
          // Render as list item
          return (
            <li key={index} className="bio-list-item">
              {text.substring(1).trim()}
            </li>
          );
        } else {
          // Render as paragraph
          return (
            <p key={index} className="bio-paragraph">
              {text}
            </p>
          );
        }
      })}
    </div>
  );

  // Render loaded content if data is available, otherwise show loading message
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
