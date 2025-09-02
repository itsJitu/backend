import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dashboard from "./dashboard";

function logIn() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/login",
        {
          email: userId, // backend expects "email"
          password: password,
        }
      );
      if (res.data.success) {
        alert("Login Successful ✅");
        navigate("/dashboard");
      } else {
        alert("Sign in first ❌");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Sign in first ❌");
    }
  };

  return (
    <div>
      <main
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: "10px",
        }}
      >
        <h1>Welcome to the free Chat Services</h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <h2>Log In</h2>
          <Link to="/sigIn" style={{ textDecoration: "none", color: "black" }}>
            <h2>Sig In</h2>
          </Link>
        </div>
        <div>
          <p>Enter email or phone Number</p>
          <div
            style={{
              border: "1px solid black",
              width: "300px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
              borderRadius: "5px",
            }}
          >
            <input
              type="email"
              placeholder="Email or Phone Number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={{ border: "none", outline: "none" }}
            />
          </div>
        </div>
        <div>
          <p>Enter Your Password</p>
          <div
            style={{
              border: "1px solid black",
              width: "300px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
              borderRadius: "5px",
            }}
          >
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ border: "none", outline: "none" }}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "left", gap: "20px" }}>
          <button onClick={handleSubmit}>Log In</button>
          <button>
            <Link to="/sigIn" style={{ textDecoration: "none" }}>
              Sig In
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default logIn;
