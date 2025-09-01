import React, { useState } from "react";
import axios from 'axios'
// import { useSearchParams } from "react-router-dom";

function sigIn() {

  const [email, setEmail] = useState('')
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/user/add", {
        fname,
        email,
        lname,
        password,
      });
      console.log("sigup Success:", response.data);
      alert("User Signed Up Successfully!");
    } catch (error) {
      console.error("Error siging up:", error);
      alert("Signup failed!");
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
        <div
          style={{
            marginTop: "10px",
            marging: "20px",
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <div>
            <span>Enter First Name</span>
            <br />
            <input type="text" 
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div>
            <span>Enter Last Name</span>
            <br />
            <input type="text" 
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
        </div>
        {/* email */}
        <div>
          <span>Email ID</span>
          <br />
          <input type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", display: "flex" }} 
          />
        </div>

        {/* password */}
        <div style={{display:'flex', gap:'30px'}}>
          <div>
            <span>Enter Password</span>
            <br />
            <input type="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <span>Re enter Password</span>
            <br />
            <input type="Password" />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "left", gap: "20px" }}>
          {/* <button>Log In</button> */}
          <button onClick={handleSubmit}>
            Sig In
          </button>
        </div>
      </main>
    </div>
  );
}

export default sigIn;
