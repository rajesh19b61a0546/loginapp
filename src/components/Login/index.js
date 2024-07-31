import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Home = () => {
  const navigate = useNavigate();
  let user = {};

  try {
    user = JSON.parse(localStorage.getItem('user')) || {};
  } catch (error) {
    console.error('Error parsing user data from local storage:', error);
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.user_firstname || 'Guest'}</h1>
      <p>Email: {user.user_email || 'N/A'}</p>
      <p>Phone: {user.user_phone || 'N/A'}</p>
      <p>City: {user.user_city || 'N/A'}</p>
      <p>Zipcode: {user.user_zipcode || 'N/A'}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
