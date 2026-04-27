import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
function Hero() {
  const texts = ["Track Mood 💙", "Reduce Stress 🌿", "Improve Life 🚀"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  // typing effect
  useEffect(() => {
    const typing = setInterval(() => {
      if (char < texts[index].length) {
        setText((prev) => prev + texts[index][char]);
        setChar(char + 1);
      } else {
        setTimeout(() => {
          setText("");
          setChar(0);
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [char, index]);

  return (
    <section className="hero">

      {/* Floating Shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      {/* Glass Content */}
      <div className="hero-glass">
        <h1>Your Mental Health Matters 💙</h1>

        <h2 className="typing">{text}|</h2>

        <p>Track, analyze and improve your mental wellness easily.</p>

        <div className="hero-buttons">
          <Link to="register">
            <button className="primary-btn">Get Started</button>
          </Link>
          <Link to="/about">
            <button className="secondary-btn">Explore</button>
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Hero;