import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("All fields are required ❗");
      return;
    }

    // dummy login check (later connect backend)
    if (form.email === "admin@gmail.com" && form.password === "123456") {
      setError("");
      alert("Login Successful 🎉");
    } else {
      setError("Invalid Email or Password ❌");
    }
  };

  return (
    <div>

      <Navbar />

      <section className="login-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome Back 👋</h2>

          {error && <p className="error">{error}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <div className="password-box">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <span onClick={() => setShowPass(!showPass)}>
              {showPass ? "🙈" : "👁"}
            </span>
          </div>

          <button type="submit">Login</button>

          <p className="link-text">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </section>

      <Footer />

    </div>
  );
}

export default Login;