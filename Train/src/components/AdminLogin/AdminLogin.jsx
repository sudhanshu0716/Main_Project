import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [adminID, setAdminID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validID = '8979';
    const validPassword = '8979';

    if (adminID === validID && password === validPassword) {
      localStorage.setItem('adminAuthenticated', true); // Set admin session
      navigate('/adminmenu'); // Redirect to the admin panel
    } else {
      setError('Invalid Admin ID or Password');
    }
  };

  return (
    <div className="admin-login-container">
      <h1>Admin Login</h1>
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Admin ID"
          value={adminID}
          onChange={(e) => setAdminID(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
