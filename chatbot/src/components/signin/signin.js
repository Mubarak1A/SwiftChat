import React from'react';
import './signin.css'

const Signin = () => {
    return(
        <div className='signin'>
            <form class="modal-content" action="#">
                <div class="container">
                    <h1>Sign In</h1>
                    <p>Please fill in this form to sign in.</p>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />
                    <br />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />
                    <br />

                    <button type="submit">Sign In</button>
                    <p>Don't have an account? <a href='#'>Sign Up</a></p>
                </div>
            </form>
        </div>
    );
}


export default Signin;