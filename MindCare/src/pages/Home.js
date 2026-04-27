import React from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Feature from "../components/feature";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* DAILY TIPS SECTION */}
      <section className="tips-section" id="tips">
        <h2 className="tips-title">Daily Tips 🌿</h2>

        <div className="tips-container">
          <div className="tip-card">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
              alt=""
            />
            <h3>Meditation 🧘</h3>
            <p>Spend 10 minutes daily to relax your mind.</p>
          </div>

          <div className="tip-card">
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74"
              alt=""
            />
            <h3>Exercise 🏃</h3>
            <p>Boost your energy and reduce stress daily.</p>
          </div>

          <div className="tip-card">
            <img
              src="https://images.unsplash.com/photo-1493836512294-502baa1986e2"
              alt=""
            />
            <h3>Music 🎧</h3>
            <p>Listen to calm music to improve your mood.</p>
          </div>

          <div className="tip-card">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt=""
            />
            <h3>Sleep 😴</h3>
            <p>Maintain a healthy sleep schedule for better mental health.</p>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <Feature />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
