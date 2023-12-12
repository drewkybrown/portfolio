// src/pages/Projects.jsx
import "../styles/pages.css";
import { useState, useEffect } from "react";

function Projects(props) {
  // Create state to hold projects
  const [projects, setProjects] = useState(null);

  // Make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    // Define an async function to make the API call
    const fetchData = async () => {
      try {
        // Make API call and get response
        const response = await fetch("/projects.json");
        // If the response is not okay, throw an error
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Turn response into a JavaScript object
        const data = await response.json();
        // Set the projects state to the data
        setProjects(data);
      } catch (error) {
        // If there's an error, log it to the console
        console.error("Fetch error:", error);
        // Optionally, you can set an empty array as a fallback value
        setProjects([]);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  // Define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project, index) => (
      <div key={index}>
        {/* Use a unique key for each item */}
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Live Site</button>
        </a>
      </div>
    ));
  };

  // Render the loaded projects or a loading message
  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
