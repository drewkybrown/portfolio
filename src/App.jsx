import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmailSidebar from "./components/EmailSidebar";
import HomeButton from "./components/HomeButton";
import ResumeButton from "./components/ResumeButton";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (or perform actual app initialization here)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false once the app is ready
    }, 1000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <h1 className="loading-text text-center mt-5">Loading...</h1>;
  }

  return (
    <div className="App">
      <ResumeButton />
      <HomeButton />
      <Header />
      <EmailSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
