import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function dashboard() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      // If no user data is found, redirect to login
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear localStorage and redirect to login
    localStorage.removeItem("userData");
    navigate("/login");
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <h1>Welcome to the Dashboard</h1>
      <h2>User Information</h2>
      <p>First Name: {userData.fname || "N/A"}</p>
      <p>Last Name: {userData.lname || "N/A"}</p>
      <p>Email: {userData.email || "N/A"}</p>
      <p>Phone: {userData.phone || "N/A"}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default dashboard
