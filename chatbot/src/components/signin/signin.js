import React from'react';
import './signin.css'

const Signin = ({ onRouteChange }) => {
    return(
        <div className='signin'>
            <form class="container" action="#">
                <h1>Sign In</h1>
                <p>Please fill in this form to sign in.</p>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />
                <br />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <br />

                <button type="submit" onClick={() => onRouteChange('App')}>Sign In</button>
                <p>Don't have an account? <a href='#' onClick={() => onRouteChange('signUp')}>Sign Up</a></p>
            </form>
        </div>
    );
}


export default Signin;