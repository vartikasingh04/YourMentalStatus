import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";

const data = {
  stress: [
    "Take deep breaths for 5 minutes",
    "Go for a short walk 🚶",
    "Listen to calming music 🎧"
  ],
  sleep: [
    "Avoid screens before bed 📱",
    "Maintain a fixed sleep schedule ⏰",
    "Drink warm milk 🥛"
  ],
  focus: [
    "Use Pomodoro technique ⏳",
    "Remove distractions 🚫",
    "Take short breaks ☕"
  ]
};

function Suggestion() {
  const [type, setType] = useState("stress");

  return (
    <div>

      <Navbar />

      <section className="suggestion-section">
        <h2>Smart Suggestions 💡</h2>

        {/* CATEGORY BUTTONS */}
        <div className="suggestion-buttons">
          <button onClick={() => setType("stress")}>Stress</button>
          <button onClick={() => setType("sleep")}>Sleep</button>
          <button onClick={() => setType("focus")}>Focus</button>
        </div>

        {/* SUGGESTIONS */}
        <div className="suggestion-cards">
          {data[type].map((item, i) => (
            <div key={i} className="suggestion-card">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Suggestion;