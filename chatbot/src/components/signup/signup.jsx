import React, { useState } from 'react';
import './signup.css';

const Signup = ({ onRouteChange, loadUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitSignin = async () => {
    try {
      const response = await fetch('https://swiftchat-server.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Assuming a successful signup returns a status code of 200 or 201
        const user = await response.json();
        loadUser(user);
        onRouteChange('signIn');
      } else {
        // Handle errors, e.g., email already in use
        const errorResponse = await response.json();
        alert(errorResponse);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className='signup' id='sign-up'>
      <div className="container">
        <h1>Sign up</h1>

        <form method='POST' id="myForm">
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <button
            type="submit"
            className="submit-button"
            onClick={(e) => {
              e.preventDefault();
              onSubmitSignin();
            }}
          >
            Sign Up
          </button>
          <p>
            Already have an account?{' '}
            <a href='#sign-in' onClick={() => onRouteChange('signIn')}>
              Sign In
            </a>
          </p>
        </form>
      </div>

      <div className="footer">
        &copy; 2023 Swift<span style={{ color: "blue" }}>Chat</span>. All rights reserved.
      </div>
    </div>
  );
};

export default Signup;
