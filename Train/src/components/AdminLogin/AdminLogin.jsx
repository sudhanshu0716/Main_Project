import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [adminID, setAdminID] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminID === "8979" && password === "8979") {
      // Redirect to Admin Menu page after successful login
      navigate("/adminmenu");
    } else {
      setErrorMessage("Invalid credentials!"); // Show error message
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        <h2 className="admin-login-title">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="admin-form-entry">
            <label htmlFor="adminID">Admin ID</label>
            <input
              type="text"
              id="adminID"
              placeholder="Enter Admin ID"
              value={adminID}
              onChange={(e) => setAdminID(e.target.value)}
              required
            />
          </div>
          <div className="admin-form-entry">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="admin-login-button" type="submit">
            Login
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
