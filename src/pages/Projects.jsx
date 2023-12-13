import "../styles/pages.css";
import { useState, useEffect } from "react";

function Projects(props) {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate an API request
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay

        // Replace this with your actual data fetching logic
        const response = await fetch("/projects.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Fetch error:", error);
        setProjects([]);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  const loaded = () => {
    return (
      <div className="container mt-5">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.git} className="github-btn btn btn-primary">
                    Github
                  </a>
                  <a href={project.live} className="live-btn btn btn-secondary">
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return loading ? (
    <h1 className="loading-text text-center mt-5">Loading...</h1>
  ) : (
    loaded()
  ); // conditional rendering of loading or loaded()
}

export default Projects;
