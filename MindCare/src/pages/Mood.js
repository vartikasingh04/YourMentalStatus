import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";

const moods = ["😊", "😐", "😢", "😡"];

function Mood() {
  const [selectedMood, setSelectedMood] = useState("");
  const [history, setHistory] = useState([]);

  // Load saved moods
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("moods")) || [];
    setHistory(saved);
  }, []);

  // Save mood
  const handleMood = (mood) => {
    const newEntry = {
      mood,
      date: new Date().toLocaleDateString()
    };

    const updated = [newEntry, ...history];

    setHistory(updated);
    setSelectedMood(mood);

    localStorage.setItem("moods", JSON.stringify(updated));
  };

  return (
    <div>

      <Navbar />

      <section className="mood-section">
        <h2>How are you feeling today? 😊</h2>

        <div className="mood-options">
          {moods.map((m, i) => (
            <span key={i} onClick={() => handleMood(m)}>
              {m}
            </span>
          ))}
        </div>

        {selectedMood && (
          <h3 className="selected">You feel: {selectedMood}</h3>
        )}

        <h1>History 📊</h1><br/>

        <div className="history">
          {history.map((item, i) => (
            <div key={i} className="history-card">
              <span>{item.mood}</span>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Mood;