import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo / About */}
        <div className="footer-box">
          <h2>MindCare 🧠</h2>
          <p>Your partner in mental wellness. Track, improve & stay healthy.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
            <li><Link to="/mood">Mood</Link></li>
            <li><Link to="/suggestion">Suggestions</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div className="footer-box">
          <h3>Contact</h3>
          <p>Email: support@mindcare.com</p>

          <div className="socials">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2026 MindCare | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;