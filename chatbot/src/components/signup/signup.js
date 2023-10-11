import React from'react';
import './signup.css'

const Signup = () => {
    return(
        <div className='signup'>
            <form class="modal-content" action="#">
                <div class="container">
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

                    <button type="submit">Sign Up</button>
                    <p>Already have an account? <a href='#'>Sign In</a></p>
                </div>
            </form>
        </div>
    );
}


export default Signup;