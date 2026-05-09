import React, { useState } from "react";

function Login() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "radial-gradient(circle at top, rgba(56,189,248,0.35), transparent 28%), linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    color: "#f8fafc",
    fontFamily: "Inter, system-ui, sans-serif",
    padding: "24px",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "420px",
    borderRadius: "28px",
    padding: "36px 32px",
    background: "rgba(15, 23, 42, 0.88)",
    boxShadow: "0 30px 80px rgba(15, 23, 42, 0.45)",
    position: "relative",
    overflow: "hidden",
  };

  const headerStyle = {
    margin: 0,
    fontSize: "2rem",
    letterSpacing: "0.02em",
    marginBottom: "10px",
  };

  const textStyle = {
    margin: "0 0 26px",
    color: "#cbd5e1",
    lineHeight: 1.6,
  };

  const toggleButtonStyle = (active) => ({
    border: "none",
    background: active ? "#38bdf8" : "transparent",
    color: active ? "#0f172a" : "#cbd5e1",
    padding: "10px 18px",
    borderRadius: "999px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    fontWeight: 600,
  });

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "16px",
    border: "1px solid rgba(148,163,184,0.2)",
    background: "rgba(15, 23, 42, 0.75)",
    color: "#e2e8f0",
    marginBottom: "14px",
    outline: "none",
    transition: "border-color 0.25s ease",
  };

  const buttonStyle = {
    width: "100%",
    marginTop: "10px",
    padding: "14px 18px",
    borderRadius: "16px",
    border: "none",
    background: "#38bdf8",
    color: "#0f172a",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 18px 36px rgba(56,189,248,0.24)",
    transition: "transform 0.2s ease",
  };

  const panelStyle = {
    transform: mode === "login" ? "translateX(0)" : "translateX(-10px)",
    opacity: 1,
    transition: "all 0.35s ease",
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      mode === "login"
        ? `Login with ${form.email}`
        : `Signup with ${form.name} (${form.email})`
    );
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
          <button
            type="button"
            style={toggleButtonStyle(mode === "login")}
            onClick={() => setMode("login")}
          >
            Login
          </button>
          <button
            type="button"
            style={toggleButtonStyle(mode === "signup")}
            onClick={() => setMode("signup")}
          >
            Signup
          </button>
        </div>

        <div style={panelStyle}>
          <h1 style={headerStyle}>
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p style={textStyle}>
            {mode === "login"
              ? "Sign in to access your dashboard and orders."
              : "Join us and start your order with a smooth experience."}
          </p>

          <form onSubmit={handleSubmit}>
            {mode === "signup" && (
              <input
                style={inputStyle}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
            )}
            <input
              style={inputStyle}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email address"
              required
            />
            <input
              style={inputStyle}
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <button type="submit" style={buttonStyle}>
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;