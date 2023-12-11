import { useState, useEffect } from "react";

function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("./about.json")
      .then((res) => res.json())
      .then((data) => setAbout(data));
  }, []);

  return about ? (
    <div>
      <h2>{about.name}</h2>
      <img src={about.headshot} alt="Headshot" />
      <p>{about.bio}</p>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

export default About;
