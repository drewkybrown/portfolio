// main.jsx
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles/components.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
