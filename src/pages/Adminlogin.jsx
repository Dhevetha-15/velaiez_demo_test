import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Adminlogin.css';

const AdminLogin = () => {
  const [adminUser, setAdminUser] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdminUser({ ...adminUser, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

 const handleLogin = () => {
  const { username, password } = adminUser;

  if (username === 'Velaiez' && password === 'Velaiez@123') {
    // Save login flag to sessionStorage
    sessionStorage.setItem('adminLoggedIn', 'true');

    setError('');
    navigate('/admin'); // Redirect
  } else {
    setError('Invalid username or password');
  }
};

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <h2>Admin Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={adminUser.username}
          onChange={handleChange}
          autoComplete="off"
        />
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={adminUser.password}
            onChange={handleChange}
            autoComplete="off"
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setShowPassword(!showPassword);
            }}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaEye />: <FaEyeSlash /> }
          </span>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLogin;
