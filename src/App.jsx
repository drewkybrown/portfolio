// import components
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EmailSidebar from "./components/EmailSidebar";
import HomeButton from "./components/HomeButton";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

// function for App
function App() {
  return (
    <div className="App">
      <HomeButton />
      <Header />
      <EmailSidebar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
