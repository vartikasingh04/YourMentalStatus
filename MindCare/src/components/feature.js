import { Brain, HeartPulse, ShieldCheck, Smile } from "lucide-react";

const features = [
  {
    icon: <Brain size={40} />,
    title: "AI Mental Analysis",
    desc: "Get instant insights about your mental health using smart AI-based analysis.",
  },
  {
    icon: <HeartPulse size={40} />,
    title: "Health Tracking",
    desc: "Track your mood, stress levels, and daily mental wellness easily.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Privacy First",
    desc: "Your data is secure and encrypted with top-level protection.",
  },
  {
    icon: <Smile size={40} />,
    title: "Daily Positivity",
    desc: "Receive motivational quotes and positivity boosters every day.",
  },
];

export default function Features() {
  return (
    <section class="features-section" id = "features">
  <div class="features-container">

    <h2 class="features-title">Why Choose MindCare?</h2>
    <p class="features-subtitle">
      Your personal companion for better mental health 💙
    </p>

    <div class="features-grid">

      <div class="feature-card">
        <div class="feature-icon">🧠</div>
        <h3 class="feature-title">AI Mental Analysis</h3>
        <p class="feature-desc">
          Get instant insights about your mental health using AI.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">❤️</div>
        <h3 class="feature-title">Health Tracking</h3>
        <p class="feature-desc">
          Track mood, stress, and wellness daily.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">🔒</div>
        <h3 class="feature-title">Privacy First</h3>
        <p class="feature-desc">
          Your data is safe and encrypted.
        </p>
      </div>

      <div class="feature-card">
        <div class="feature-icon">😊</div>
        <h3 class="feature-title">Daily Positivity</h3>
        <p class="feature-desc">
          Get daily motivation and positive vibes.
        </p>
      </div>

    </div>
  </div>
</section>
  );
}