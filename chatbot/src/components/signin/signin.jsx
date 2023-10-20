import React from 'react';
import './signin.css'


const Signin = ({ onRouteChange }) => {
    return(
        <div classname='signin'>
            <div class="container">
                <h1>Sign In</h1>

                <form>
                <div class="form-group">
                    <label for="username">Email</label>
                    <input type="email" id="username" name="email" placeholder="Enter your email" required></input>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required></input>
                    <p class="error-message">Incorrect username or password.</p>
                </div>

                <button type="submit" class="submit-button" 
                    onClick={() => onRouteChange('App')}>
                    Sign In
                </button>
                <p>Don't have an account? <a href='#' onClick={() => onRouteChange('signUp')}>Sign Up</a></p>
                </form>
            </div>

            <div class="footer">
                &copy; 2023 Swift<span style={{color:"blue"}}>Chat</span>. All rights reserved.
            </div>
        </div>
    );
}


export default Signin;