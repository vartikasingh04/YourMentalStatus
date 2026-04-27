import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Home.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1>MindCare 🧠</h1>

      <ul>

        {/* Always visible */}
        <li><Link to="/">Home</Link></li>

        {/* Show scroll links ONLY on Home page */}
        {location.pathname === "/" && (
          <>
         <li><Link to="/about">About Us</Link></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#tips">Tips</a></li>
          </>
        )}

        {/* Page navigation */}
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/mood">Mood Tracker</Link></li>
        <li><Link to="/suggestion">Suggestion</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;