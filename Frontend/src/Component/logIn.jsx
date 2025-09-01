import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"


function logIn() {


    const [userId, setUserId] = useState('');
    const [Password, setPassword] = useState("");

    // const handleLogin = async () => {
    //     try {
    //         const response = await axios.post("")
    //     }
    // }
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
          <Link to="/sigIn" style={{textDecoration:'none', color:'black'}}><h2>Sig In</h2></Link>
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
              type="text"
              placeholder="Email or Phone Number"
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
              style={{ border: "none", outline: "none" }}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "left", gap: "20px" }}>
          <button>Log In</button>
          <button>
            Sig In
          </button>
          
        </div>
      </main>
    </div>
  );
}

export default logIn;
