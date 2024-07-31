import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_password: '',
    user_phone: '',
    user_lastname: '',
    user_city: '',
    user_zipcode: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const signupResponse = await fetch('https://syoft.dev/Api/user_registeration/api/user_registeration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const signupResult = await signupResponse.json();
      console.log('Sign-up Response:', signupResult);

      if (signupResult.success) {
        console.log('Sign-up successful, navigating to login');
        localStorage.setItem('user', JSON.stringify(formData));
        navigate('/login');
      } else {
        console.error('Sign-up failed:', signupResult.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2>Welcome to our community</h2>
        <p>Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today.</p>
        <div className="signup-people">
          <img src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-1-img.png" alt="Person 1" />
          <img src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-4-img.png" alt="Person 2" />
          <img src="https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-5-img.png" alt="Person 3" />
          <p>More than 17k people joined us, it’s your turn</p>
        </div>
      </div>
      <div className="signup-right">
        <form onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <p>Already have an account? <a href="/login">Sign in</a></p>
          <input type="text" name="user_firstname" placeholder="First name" value={formData.user_firstname} onChange={handleChange} required />
          <input type="text" name="user_lastname" placeholder="Last name" value={formData.user_lastname} onChange={handleChange} required />
          <input type="email" name="user_email" placeholder="Email address" value={formData.user_email} onChange={handleChange} required />
          <input type="password" name="user_password" placeholder="Password" value={formData.user_password} onChange={handleChange} required />
          <input type="text" name="user_phone" placeholder="Phone" value={formData.user_phone} onChange={handleChange} required />
          <input type="text" name="user_city" placeholder="City" value={formData.user_city} onChange={handleChange} required />
          <input type="text" name="user_zipcode" placeholder="Zipcode" value={formData.user_zipcode} onChange={handleChange} required />
          <div className="checkbox-container">
            <input type="checkbox" name="agreed" onChange={handleChange} required />
            <label>I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a></label>
          </div>
          <button type="submit">Create your free account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
