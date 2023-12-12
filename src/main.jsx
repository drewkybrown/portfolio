// main.jsx
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles/components.css";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom"; // Import HashRouter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {" "}
    {/* Use HashRouter instead of BrowserRouter */}
    <App />
  </Router>
);
