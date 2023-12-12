// src/pages/Home.jsx
import "../styles/pages.css";

// function to render the Home page
function Home(props) {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 border">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">
          Hi! I'm Drew, I code things for the web.
        </h1>
        <p className="col-md-8 fs-4">
          I’m a software developer with a knack for backend technologies and a
          comprehensive understanding of full-stack development. My coding
          journey, ignited at General Assembly's bootcamp and enriched with my
          past experience as a DJ, allows me to blend technical prowess with
          creative thinking. Currently, I’m dedicated to developing accessible,
          user-centric software solutions. Welcome to my world of innovative
          coding!
        </p>
      </div>
    </div>
  );
}

export default Home;
