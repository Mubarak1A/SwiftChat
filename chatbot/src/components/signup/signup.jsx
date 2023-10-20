import React from 'react';
import './signup.css'


const Signup = ({ onRouteChange }) => {
    return(
        <div classname='signup'>
            <div class="container">
                <h1>Sign up</h1>

                <form>
                <div class="form-group">
                    <label for="username">Name</label>
                    <input type="text" id="username" name="username" placeholder="Enter your Name" required></input>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required></input>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required></input>
                </div>

                <button type="submit" class="submit-button" 
                    onClick={() => onRouteChange('signIn')}>
                    Sign Up
                </button>
                <p>Already have an account? <a href='#' onClick={() => onRouteChange('signIn')}>Sign In</a></p>
                </form>
            </div>

            <div class="footer">
                &copy; 2023 Swift<span style={{color:"blue"}}>Chat</span>. All rights reserved.
            </div>
        </div>
    );
}


export default Signup;