import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";

const questions = [
  {
    question: "How often do you feel stressed?",
    options: ["Rarely", "Sometimes", "Often", "Always"]
  },
  {
    question: "How well do you sleep?",
    options: ["Very well", "Okay", "Poor", "Very poor"]
  },
  {
    question: "Do you feel motivated daily?",
    options: ["Always", "Sometimes", "Rarely", "Never"]
  },
  {
    question: "How often do you feel anxious?",
    options: ["Never", "Sometimes", "Often", "Always"]
  }
];

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    setScore(score + index); // simple scoring
    const next = currentQ + 1;

    if (next < questions.length) {
      setCurrentQ(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>

      <Navbar />

      <section className="quiz-section">
        <h2>Mental Health Quiz 🧠</h2>

        {showResult ? (
          <div className="result">
            <h3>Your Score: {score}</h3>
            <p>
              {score < 5 && "You are doing great 😊"}
              {score >= 5 && score < 10 && "Take care of your mental health 🙂"}
              {score >= 10 && "Consider relaxation & self-care 😌"}
            </p>
          </div>
        ) : (
          <div className="quiz-box">
            <h3>{questions[currentQ].question}</h3>

            {questions[currentQ].options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(i)}>
                {opt}
              </button>
            ))}
          </div>
        )}
      </section>

      <Footer />

    </div>
  );
}

export default Quiz;