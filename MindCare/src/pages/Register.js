import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("All fields are required ❗");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match ❗");
      return;
    }

    setError("");
    alert("Registration Successful 🎉");
  };

  return (
    <div>

      <Navbar />

      <section className="register-section">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Create Account 📝</h2>

          {error && <p className="error">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          <button type="submit">Register</button>
        </form>
      </section>

      <Footer />

    </div>
  );
}

export default Register;