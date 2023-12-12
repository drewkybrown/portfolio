import { Link } from "react-router-dom";

function Header() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/">
          <div>D</div>
        </Link>
        <Link to="/about">
          <div>01. About</div>
        </Link>
        <Link to="/projects">
          <div>02. Projects</div>
        </Link>
        {/* Resume Link */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          <div>Resume</div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
