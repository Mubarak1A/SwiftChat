import React, { useState } from 'react';
import './signin.css';

const Signin = ({ onRouteChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitSignin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://swiftchat-server.onrender.com/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {

        const userData = await response.json();

        onRouteChange('App');
        loadUser(userData);
      } else {

        alert('Incorrect email or password');
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="signin" id="sign-in">
      <div className="container">
        <h1>Sign In</h1>

        <form onSubmit={onSubmitSignin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Sign In
          </button>
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={() => onRouteChange('signUp')}>
              Sign Up
            </a>
          </p>
        </form>
      </div>

      <div className="footer">
        &copy; 2023 Swift<span style={{ color: 'blue' }}>Chat</span>. All rights reserved.
      </div>
    </div>
  );
};

export default Signin;
