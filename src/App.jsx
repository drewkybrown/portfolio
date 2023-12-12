// import components
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmailSidebar from "./components/EmailSidebar";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

// function for App
function App() {
  return (
    <div className="App">
      <Header />
      <EmailSidebar />
      <Routes>
        {" "}
        {/* Wrap your routes in a Routes component */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
