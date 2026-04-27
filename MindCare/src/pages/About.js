import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";

function About() {
  const [current, setCurrent] = useState(0);

  // 🔢 Counters
  const [users, setUsers] = useState(0);
  const [research, setResearch] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      title: "Mental Peace",
      desc: "Relax your mind with guided techniques.",
    },
    {
      img: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88",
      title: "AI Support",
      desc: "Smart mental health insights powered by AI.",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Stress Relief",
      desc: "Reduce anxiety with daily exercises.",
    },
    {
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
      title: "Healthy Mind",
      desc: "Build strong mental habits.",
    },
    {
      img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2",
      title: "Daily Positivity",
      desc: "Stay motivated and happy every day.",
    },
  ];

  // 🔄 Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 🔢 Counter Animation
  useEffect(() => {
    let u = 0;
    let r = 0;

    const interval = setInterval(() => {
      if (u < 1000) u += 20;
      if (r < 1) r += 0.02;

      setUsers(Math.floor(u));
      setResearch(r.toFixed(1));

      if (u >= 1000 && r >= 1) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // 👉 Next / Prev
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div>
      <Navbar />

      {/* 🌈 SLIDER */}
      <section className="premium-slider">
        <h2>About MindCare</h2>

        <div className="slider-container">
          <div className="slide active">
            <img src={slides[current].img} alt="" />
            <div className="overlay">
              <h3>{slides[current].title}</h3>
              <p>{slides[current].desc}</p>
            </div>
          </div>

          <button className="prev" onClick={prevSlide}>
            &#10094;
          </button>

          <button className="next" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </section>
      {/* 🧠 ABOUT */}
      <section className="about-section glass">
        <h2>Who We Are</h2>
        <p>
          MindCare is a smart mental health platform designed to help people
          understand emotions, reduce stress, and build a positive mindset.
        </p>

        <h2>Our Mission</h2>
        <p>
          We aim to make mental health support simple, accessible, and
          stigma-free.
        </p>
      </section>
      {/* 📊 EXPERIENCE */}
      <section className="experience-section">
        <h2>Our Impact</h2>

        <div className="cards">
          <div className="card glass">
            <h1>{users}+</h1>
            <p>Active Users</p>
          </div>

          <div className="card glass">
            <h1>{research}+</h1>
            <p>Years Research</p>
          </div>

          <div className="card glass">
            <h1>24/7</h1>
            <p>Support</p>
          </div>

          <div className="card glass">
            <h1>AI</h1>
            <p>Smart Insights</p>
          </div>
        </div>
      </section>

      {/* ⭐ FEATURES */}
      <section className="features">
        
          <div className="feature glass">
            <div className="icon">🧠</div>
            <h3>Smart AI Guidance</h3>
            <p>
              Get personalized suggestions based on your mood, habits, and daily
              activity using intelligent AI technology.
            </p>
          </div>

          <div className="feature glass">
            <div className="icon">📊</div>
            <h3>Advanced Mood Tracking</h3>
            <p>
              Track your emotions with visual insights and understand patterns
              to improve your mental health.
            </p>
          </div>

          <div className="feature glass">
            <div className="icon">🧘</div>
            <h3>Guided Relaxation</h3>
            <p>
              Practice meditation, breathing, and stress relief exercises
              designed by experts.
            </p>
          </div>

          <div className="feature glass">
            <div className="icon">🔒</div>
            <h3>100% Privacy</h3>
            <p>
              Your personal data is fully encrypted and सुरक्षित. We prioritize
              your safety and confidentiality.
            </p>
          </div>

          <div className="feature glass">
            <div className="icon">⚡</div>
            <h3>Instant Access</h3>
            <p>
              Use MindCare anytime, anywhere with fast performance and a smooth
              user experience.
            </p>
          </div>
          <div className="feature glass">
            <div className="icon">💬</div>
            <h3>Interactive Experience</h3>
            <p>
              Engage with quizzes, feedback, and smart insights that make mental
              wellness simple and engaging.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
