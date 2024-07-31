import React from 'react';
import './index.css';

const Home = () => {
  let user = {};

  try {
    user = JSON.parse(localStorage.getItem('user')) || {};
  } catch (error) {
    console.error('Error parsing user data from local storage:', error);
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user.user_firstname || 'Guest'}</h1>
      <p>Email: {user.user_email || 'N/A'}</p>
      <p>Phone: {user.user_phone || 'N/A'}</p>
      <p>City: {user.user_city || 'N/A'}</p>
      <p>Zipcode: {user.user_zipcode || 'N/A'}</p>
    </div>
  );
};

export default Home;
