import React from'react';
import './signup.css'

const Signup = ({ onRouteChange }) => {
    return(
        <div className='signup'>
            <form class="container" action="#">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <label for="name"><b>Name</b></label>
                <input type="text" placeholder="Enter your Name" name="name" required />
                <br />

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />
                <br />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <br />

                <button type="submit" onClick={() => onRouteChange('signIn')}>Sign Up</button>
                <p>Already have an account? <a href='#' onClick={() => onRouteChange('signIn')}>Sign In</a></p>
            </form>
        </div>
    );
}


export default Signup;